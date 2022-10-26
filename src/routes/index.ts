import { Router } from "express";
import userRoute from "./users/user.route";

const rootRouter = Router()

rootRouter.use('/user', userRoute)



export default rootRouter