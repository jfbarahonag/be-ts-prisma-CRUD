import { body } from "express-validator"

const schema = [
  body('username').isEmail().withMessage('username must contain a valid email'),
  body('firstName').exists({checkFalsy: true})
                    .isLength({min: 2}).withMessage('first nane must be at least 2 characters long'),
  body('password').isLength({ min: 12 }).withMessage('password must be at least 12 characters long')
]

export  { schema as registerSchema }
