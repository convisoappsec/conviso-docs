import React, { useEffect, useRef, useState } from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const mcpServerConfig = {
  command: 'npx',
  args: ['-y', '@convisoappsec/mcp'],
  env: {
    CONVISO_API_KEY: '<your_api_key>',
  },
};

const mcpConfig = JSON.stringify(
  {
    mcpServers: {
      'conviso-mcp': mcpServerConfig,
    },
  },
  null,
  2,
);

const vscodeMcpConfig = JSON.stringify(
  {
    servers: {
      'conviso-mcp': {
        type: 'stdio',
        ...mcpServerConfig,
      },
    },
  },
  null,
  2,
);

const icons = {
  actions: '✦',
  copy: '⧉',
  mcp: '⌘',
  cursor: '◈',
  vscode: '⌁',
  chatgpt: '◌',
  claude: '✺',
};

function copyText(value) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  return Promise.resolve();
}

function toLlmMarkdown(markdown) {
  let isInsideCodeFence = false;

  return markdown
    .split('\n')
    .filter(line => {
      if (line.trimStart().startsWith('```')) {
        isInsideCodeFence = !isInsideCodeFence;
        return true;
      }

      if (isInsideCodeFence) return true;

      return !/^import\s.+from\s+['"].+['"];?\s*$/.test(line)
        && !/^<\/?div(?:\s[^>]*)?>\s*$/.test(line.trim());
    })
    .join('\n');
}

function getCursorInstallUrl() {
  const config = window.btoa(JSON.stringify({ 'conviso-mcp': mcpServerConfig }));
  return `cursor://anysphere.cursor-deeplink/mcp/install?name=conviso-mcp&config=${encodeURIComponent(config)}`;
}

function MenuItem({ icon, label, description, onClick, external = false }) {
  return (
    <button className={styles.menuItem} type="button" onClick={onClick}>
      <span className={styles.icon} aria-hidden="true">
        {icons[icon]}
      </span>
      <span className={styles.itemContent}>
        <span className={styles.itemLabel}>
          {label}
          {external && <span className={styles.external} aria-hidden="true">↗</span>}
        </span>
        <span className={styles.itemDescription}>{description}</span>
      </span>
    </button>
  );
}

export default function DocActions() {
  const { metadata } = useDoc();
  const { siteConfig } = useDocusaurusContext();
  const sourcePath = useBaseUrl(`/llms/${metadata.source.replace('@site/', '')}`);
  const pageUrl = `${siteConfig.url.replace(/\/$/, '')}${metadata.permalink}`;
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnOutsideClick = event => {
      if (!menuRef.current?.contains(event.target) && !buttonRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = event => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  const confirmCopy = async (text, message) => {
    try {
      await copyText(text);
      setFeedback(message);
    } catch (error) {
      setFeedback('Unable to copy. Please try again.');
    }
  };

  const copyPage = async () => {
    try {
      const response = await fetch(sourcePath);
      if (!response.ok) throw new Error('Markdown source is unavailable');
      await confirmCopy(toLlmMarkdown(await response.text()), 'Page copied as Markdown.');
    } catch (error) {
      setFeedback('Unable to load this page as Markdown.');
    }
  };

  const askAssistant = service => {
    const prompt = `Read from ${pageUrl} so I can ask questions about it.`;
    const assistantUrl = service === 'ChatGPT'
      ? `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`
      : `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;

    window.open(assistantUrl, '_blank', 'noopener,noreferrer');
    setFeedback(`Opening ${service} with this page's Markdown source.`);
  };

  return (
    <div className={styles.container}>
      <button
        ref={buttonRef}
        className={styles.trigger}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls="doc-actions-menu"
        onClick={() => setIsOpen(open => !open)}>
        <span aria-hidden="true">{icons.actions}</span>
        Actions
        <span className={styles.chevron} aria-hidden="true">⌃</span>
      </button>
      {isOpen && (
        <div ref={menuRef} id="doc-actions-menu" className={styles.menu} role="menu">
          <MenuItem icon="copy" label="Copy page" description="Copy this page as Markdown for an LLM" onClick={copyPage} />
          <MenuItem icon="mcp" label="Copy MCP config" description="Copy the Conviso MCP setup without your API key" onClick={() => confirmCopy(mcpConfig, 'MCP configuration copied.')} />
          <MenuItem icon="cursor" label="Add to Cursor" description="Install the MCP config in Cursor, then add your API key" external onClick={() => { window.location.assign(getCursorInstallUrl()); setFeedback('Opening Cursor installation.'); }} />
          <MenuItem icon="vscode" label="Copy VS Code config" description="Copy the VS Code-specific MCP configuration" onClick={() => confirmCopy(vscodeMcpConfig, 'VS Code configuration copied.')} />
          <MenuItem icon="chatgpt" label="Ask ChatGPT" description="Open ChatGPT to search this page" external onClick={() => askAssistant('ChatGPT')} />
          <MenuItem icon="claude" label="Ask Claude" description="Open Claude with this page's Markdown source" external onClick={() => askAssistant('Claude')} />
          {feedback && <p className={styles.feedback} role="status">{feedback}</p>}
        </div>
      )}
    </div>
  );
}
