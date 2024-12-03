import { Router } from "express"

import { UserController } from "../controllers/users"

export const userRouter = Router()

userRouter.get('/', UserController.getAll)
userRouter.post('/', UserController.create)


