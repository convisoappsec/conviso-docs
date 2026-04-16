import React, {useEffect} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';

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

export default function SupportPage() {
  return (
    <Layout
      title="Support"
      description="Contact Conviso support through the embedded form.">
      <main className="container margin-vert--xl">
        <section className="support-form">
          <h1>Support</h1>
          <p>
            Send your request to the Conviso support team using the form below.
          </p>
          <BrowserOnly fallback={<p>Loading support form...</p>}>
            {() => <HubSpotForm />}
          </BrowserOnly>
        </section>
      </main>
    </Layout>
  );
}
