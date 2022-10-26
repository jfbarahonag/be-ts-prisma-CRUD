import express from "express";
import rootRouter from "./routes";

const app = express()

// middlewares
app.use(express.json())

// routes
app.use("/api", rootRouter)

// setup
const PORT = process.env.PORT || 3000
app.listen(PORT,  () => {
  console.log(`Server running on port ${PORT}`)
  
})
