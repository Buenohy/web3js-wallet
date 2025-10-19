import Web3 from 'web3';

export async function getProvider() {
  if (!window.ethereum) throw new Error(`No Wallet found!`);

  const web3 = new Web3(window.ethereum);

  const accounts = await web3.eth.requestAccounts();
  console.log(accounts);
  if (!accounts || !accounts.length) throw new Error(`Permission required!`);

  return { web3, account: accounts[0] };
}
