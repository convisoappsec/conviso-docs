import React, { useState } from 'react';
import styles from './styles.module.css';

const urls = [
  {
    label: 'API hostname',
    value: 'https://api.convisoappsec.com',
  },
  {
    label: 'GraphQL endpoint',
    value: 'https://api.convisoappsec.com/graphql',
  },
];

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
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
}

export default function ApiUrls() {
  const [copiedValue, setCopiedValue] = useState(null);

  const handleCopy = async value => {
    try {
      await copyText(value);
      setCopiedValue(value);
      window.setTimeout(() => setCopiedValue(null), 1800);
    } catch {
      setCopiedValue(null);
    }
  };

  return (
    <section className={styles.card} aria-labelledby="api-urls-title">
      <header className={styles.header}>
        <h2 id="api-urls-title">API URLs</h2>
        <p>Use these production URLs when connecting to the Conviso API.</p>
      </header>
      <div className={styles.rows}>
        {urls.map(({ label, value }) => (
          <div className={styles.row} key={label}>
            <span className={styles.label}>{label}</span>
            <div className={styles.valueGroup}>
              <code>{value}</code>
              <button
                className={styles.copyButton}
                type="button"
                onClick={() => handleCopy(value)}
                aria-label={`Copy ${label}`}
                title={copiedValue === value ? 'Copied' : `Copy ${label}`}
              >
                {copiedValue === value ? '✓' : '⧉'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
