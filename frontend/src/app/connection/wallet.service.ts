import {ethers} from "ethers"
import {toast} from "react-toastify"
import axiosInstance from "../../utilities/axiosInstance"

export async function connectWallet(): Promise<{
  address: string
  balance: string
} | null> {
  try {
    if (!window.ethereum) {
      toast.error("MetaMask not detected")
      return null
    }

    const provider = new ethers.BrowserProvider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", [])
    const address = accounts[0]

    await axiosInstance.post("/api/log-wallet", {address})
    const balanceBigInt = await provider.getBalance(address)
    const balance = ethers.formatEther(balanceBigInt)

    toast.success("Wallet connected successfully!")
    return {address, balance}
  } catch (err) {
    console.error(err)
    toast.error("Failed to connect wallet")
    return null
  }
}

export async function disconnectWallet(): Promise<void> {
  try {
    if (!window.ethereum) {
      toast.error("MetaMask not detected")
      return
    }

    toast.info("Wallet disconnected successfully!")
  } catch (err) {
    console.error(err)
    toast.error("Failed to disconnect wallet")
  }
}
