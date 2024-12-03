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


    static async createPills(req: Request, res: Response) {
        const newPill = await UserModel.createPill({ input: {
            ...req.body,
            date: `${new Date().toISOString().split('T')[0]}`

        } })
        res.status(201).json(newPill)
    }


}