import express, {Request, Response} from "express";
import { body } from "express-validator";
import { validateRequestSchema } from "./middlewares/validate-request-schema";

const app = express()

// middlewares
app.use(express.json())

// routes
app.post('/user',
body('username').isEmail(),
body('firstName').exists({checkFalsy: true})
                  .isLength({min: 1}),
body('password').isLength({ min: 5 }),
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
