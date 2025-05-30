"use client"

import {useState} from "react"
import WalletCard from "@/components/shared/WalletCard"
import {connectWallet, disconnectWallet} from "./wallet.service"

export default function Connection() {
  const [walletAddress, setWalletAddress] = useState("")
  const [balance, setBalance] = useState("")

  const handleConnect = async () => {
    const data = await connectWallet()
    if (data) {
      setWalletAddress(data.address)
      setBalance(data.balance)
    }
  }

  const handleDisconnect = () => {
    disconnectWallet()
    setWalletAddress("")
    setBalance("")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 w-full max-w-3xl text-center text-white shadow-2xl">
        <h1 className="text-3xl font-bold mb-6">Connect your Wallet</h1>

        {!walletAddress ? (
          <button
            onClick={handleConnect}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 transition text-white font-semibold py-2 px-6 rounded-lg mb-4">
            Connect Wallet
          </button>
        ) : (
          <WalletCard
            walletAddress={walletAddress}
            balance={balance}
            onDisconnect={handleDisconnect}
          />
        )}
      </div>
    </main>
  )
}
