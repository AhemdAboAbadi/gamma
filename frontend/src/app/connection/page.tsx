"use client"

import {useState} from "react"
import WalletCard from "@/components/shared/WalletCard"
import {connectWallet, disconnectWallet} from "./wallet.service"
import Button from "@/components/shared/Button"
import {Wallet} from "lucide-react"

export default function Connection() {
  const [walletAddress, setWalletAddress] = useState("")
  const [balance, setBalance] = useState("")
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)
    try {
      const data = await connectWallet()
      if (data) {
        setWalletAddress(data.address)
        setBalance(data.balance)
      }
    } finally {
      setIsConnecting(false)
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
          <Button
            onClick={handleConnect}
            disabled={isConnecting}
            className={`flex gap-10 items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-600 hover:to-purple-600 transition text-white font-semibold py-2 px-6 rounded-lg m-8 mx-auto ${
              isConnecting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            title={isConnecting ? "Connecting..." : "Connect Wallet"}
            icon={<Wallet />}
          />
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
