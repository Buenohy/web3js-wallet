'use client';
import { getProvider } from '@/contexts/Web3Provider';
import { useState } from 'react';

export default function Home() {
  const [address, setAddress] = useState(null);
  const [message, setMessage] = useState('');

  const handleConnect = async () => {
    try {
      const { account } = await getProvider();
      setAddress(account);
      setMessage(`Carteira conectada: ${account}`);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center">Web3 Js Wallet</h1>
      <div className="flex flex-col gap-4">
        <div>
          <h3>Wallet</h3>
          <input
            type="text"
            value={address}
            onChange={(evt) => setAddress(evt.target.value)}
          />
        </div>
        <h3>From</h3>
        <h3>To</h3>
        <h3>Block</h3>
      </div>
    </div>
  );
}
