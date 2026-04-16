import React, {useEffect} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function HubSpotForm() {
  useEffect(() => {
    const formContainer = document.getElementById('hubspot-form-container');

    if (!formContainer) {
      return undefined;
    }

    formContainer.innerHTML = '';

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
      });
    };

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
