const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello, Express!")
})

router.post("/log-wallet", (req, res) => {
  const {address} = req.body
  if (address) {
    console.log("New wallet: -==->>>", address)
    res.json({message: "Wallet registered."})
  } else {
    res.status(400).json({message: "No address provided."})
  }
})

module.exports = router
