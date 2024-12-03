import { UserModel } from "../models/users";
import { Response, Request } from "express";

export class UserController {
    static async getAll(req: Request, res: Response) {
        const user = await UserModel.getAll()
        res.json(user)
    }

    static async create(req: Request, res: Response) {
        const newUser = await UserModel.create({ input: req.body })
        res.status(201).json(newUser)
    }


}