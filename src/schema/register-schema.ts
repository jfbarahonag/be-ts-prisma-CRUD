import { body } from "express-validator"

const schema = [
  body('username').isEmail(),
  body('firstName').exists({checkFalsy: true})
                    .isLength({min: 1}),
  body('password').isLength({ min: 5 })
]

export  { schema as registerSchema }
