const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

let walletAddresses = []

app.get("/", (req, res) => {
  res.send("Hello, Express!")
})

app.post("/api/log-wallet", (req, res) => {
  const {address} = req.body
  if (address) {
    walletAddresses.push(address)
    console.log("New wallet:", address)
    res.json({message: "Wallet registered."})
  } else {
    res.status(400).json({message: "No address provided."})
  }
})

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
