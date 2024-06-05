import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js";

const registerUser = asyncHandler( async (req, res)=>{
    const {fullname, email, username, password} =req.body
    console.log(`Email: ${email}`);

    if (fullname === "" && email === "" && username === "" && password==="") {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = User.findOne({
        $or: [{username},{email}]
    })

    if (existedUser) {
        throw new ApiError(409, "User already exist")
    }

    
})

export {registerUser}

/*
steps
get user details
validate
check if user already exist : email unique
check for files (avatar)
upload files
create user object- create entry in database
remove password and refresh token from response
check for user creation
return res
*/