import React, {useEffect} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function buildIframeStyles(isDarkTheme) {
  if (!isDarkTheme) {
    return `
      body {
        background: #ffffff;
        color: #1f2937;
      }
    `;
  }

  return `
    body {
      background: #1f1f1f;
      color: #f3f4f6;
    }

    .hs-form,
    .hs-form div,
    .hs-form span,
    .hs-form p,
    .hs-form label,
    .hs-form legend,
    .hs-form li,
    .hs-form ul {
      color: #f3f4f6 !important;
    }

    .hs-richtext,
    .hs-richtext p,
    .hs-form-field .hs-field-desc,
    .hs-error-msgs label,
    .hs-richtext a {
      color: #cbd5e1 !important;
    }

    input[type='text'],
    input[type='email'],
    input[type='file'],
    input[type='number'],
    input[type='tel'],
    select,
    textarea {
      background: #111827 !important;
      border: 1px solid #475569 !important;
      color: #f9fafb !important;
      border-radius: 0.75rem !important;
    }

    input::placeholder,
    textarea::placeholder {
      color: #94a3b8 !important;
    }

    select option {
      background: #111827;
      color: #f9fafb;
    }

    input:focus,
    select:focus,
    textarea:focus {
      border-color: #25c2a0 !important;
      box-shadow: 0 0 0 1px #25c2a0 !important;
      outline: none;
    }
  `;
}

function HubSpotForm() {
  useEffect(() => {
    const formContainer = document.getElementById('hubspot-form-container');

    if (!formContainer) {
      return undefined;
    }

    formContainer.innerHTML = '';

    const syncIframeTheme = () => {
      const iframe = formContainer.querySelector('iframe');
      const isDarkTheme =
        document.documentElement.getAttribute('data-theme') === 'dark';

      if (!iframe?.contentDocument?.head) {
        return;
      }

      let styleTag = iframe.contentDocument.getElementById(
        'hubspot-form-theme-overrides',
      );

      if (!styleTag) {
        styleTag = iframe.contentDocument.createElement('style');
        styleTag.id = 'hubspot-form-theme-overrides';
        iframe.contentDocument.head.appendChild(styleTag);
      }

      styleTag.textContent = buildIframeStyles(isDarkTheme);
    };

    const createForm = () => {
      if (!window.hbspt?.forms?.create) {
        return;
      }

      formContainer.innerHTML = '';
      window.hbspt.forms.create({
        portalId: '5613826',
        formId: 'b44ee7d0-89f6-4887-b4de-1a939a31f436',
        region: 'na1',
        target: '#hubspot-form-container',
        onFormReady: () => {
          window.requestAnimationFrame(syncIframeTheme);
        },
      });
    };

    const observer = new MutationObserver(() => {
      syncIframeTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    const existingScript = document.querySelector(
      'script[src="https://js.hsforms.net/forms/embed/v2.js"]',
    );

    if (existingScript) {
      createForm();
      return undefined;
    }

    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = createForm;
    document.body.appendChild(script);

    return () => {
      observer.disconnect();
      formContainer.innerHTML = '';
    };
  }, []);

  return <div id="hubspot-form-container" className="support-form__embed" />;
}

export default function SupportForm() {
  return (
    <BrowserOnly fallback={<p>Loading support form...</p>}>
      {() => <HubSpotForm />}
    </BrowserOnly>
  );
}
