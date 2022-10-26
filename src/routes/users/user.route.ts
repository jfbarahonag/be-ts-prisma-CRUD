import {Request, Response, Router} from "express";

import { validateRequestSchema } from "../../middlewares/validate-request-schema";
import { registerSchema } from "../../schema/register-schema";

const userRoute = Router()

userRoute.post('/signup',
registerSchema,
validateRequestSchema,
  (req: Request, res: Response) => {
    console.log(req.body);
    return res.json({status: "ok"})
})

export default userRoute
