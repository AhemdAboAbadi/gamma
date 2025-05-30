type WalletCardProps = {
  walletAddress: string
  balance: string
  onDisconnect: () => void
}

export default function WalletCard({
  walletAddress,
  balance,
  onDisconnect,
}: WalletCardProps) {
  return (
    <div className="bg-black/50 p-4 rounded-lg text-sm mb-4 break-words">
      <p className="mb-1">Wallet: {walletAddress}</p>
      <p>Balance: {balance} ETH</p>
      <button
        onClick={onDisconnect}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg">
        Disconnect
      </button>
    </div>
  )
}
