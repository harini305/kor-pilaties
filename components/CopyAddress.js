'use client';

import { useState } from 'react';

// Used where no verified map link exists yet: lets visitors paste the address into their own map app.
export default function CopyAddress({ text }) {
  const [status, setStatus] = useState('');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('Address copied');
    } catch {
      setStatus('Copy failed. Select the address above instead.');
    }
  };

  return (
    <div className="row-actions">
      <button type="button" className="btn btn--outline" onClick={copy}>
        Copy address
      </button>
      <span className="copy-status" role="status">
        {status}
      </span>
    </div>
  );
}
