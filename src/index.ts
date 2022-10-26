import express, {Request, Response} from "express";

const app = express()

// middlewares
app.use(express.json())

// routes
app.post('/user',
  (req: Request, res: Response) => {
    console.log(req.body);
    return res.json({status: "ok"})
})

// setup
const PORT = process.env.PORT || 3000
app.listen(PORT,  () => {
  console.log(`Server running on port ${PORT}`)
  
})
