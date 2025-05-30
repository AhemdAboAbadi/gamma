const express = require("express")
const cors = require("cors")
const walletRoutes = require("./routes/wallet")

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

app.use("/api", walletRoutes)

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
