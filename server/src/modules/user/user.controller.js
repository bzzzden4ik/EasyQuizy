import { UserService } from "./user.service.js"
import { catchAsync } from "../../utils/catchAsync.js"
import { ApiError } from "../../utils/ApiError.js"

export class UserController {
    static register = catchAsync(async (req, res) => {
        const {email, password} = req.body
        if (!email || !password) throw new ApiError(400, 'No data recieved')
        await UserService.createUser({email, password})
        res.status(201).json({msg: 'Created'})
    })
    static login = catchAsync(async (req, res) => {
        const { username, password } = req.body
        if (!username || !password) throw new ApiError(400, 'No data recieved')
        const result = await UserService.loginUser({username, password})
        res.cookie("access", result.access_token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 1000 * 60 * 15
        })
        res.cookie("refresh", result.refresh_token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24 * 30
        })
        res.status(200).json({msg: 'logged in'})
    })
    static profile = catchAsync(async (req, res) => {
        const { user_id } = req.user
        
    })
}