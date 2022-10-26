import express, {Request, Response} from "express";
import { body, validationResult } from "express-validator";

const app = express()

// middlewares
app.use(express.json())

// routes
app.post('/user',
body('username').isEmail(),
body('firstName').exists({checkFalsy: true})
                  .isLength({min: 1}),
body('password').isLength({ min: 5 }),
  (req: Request, res: Response) => {
    console.log(req.body);
    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    return res.json({status: "ok"})
})

// setup
const PORT = process.env.PORT || 3000
app.listen(PORT,  () => {
  console.log(`Server running on port ${PORT}`)
  
})
