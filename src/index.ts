import express, {Request, Response} from "express";
import { validateRequestSchema } from "./middlewares/validate-request-schema";
import { registerSchema } from "./schema/register-schema";

const app = express()

// middlewares
app.use(express.json())

// routes
app.post('/user',
registerSchema,
validateRequestSchema,
  (req: Request, res: Response) => {
    console.log(req.body);
    return res.json({status: "ok"})
})

// setup
const PORT = process.env.PORT || 3000
app.listen(PORT,  () => {
  console.log(`Server running on port ${PORT}`)
  
})
