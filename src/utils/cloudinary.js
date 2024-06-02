import { v2 as cloudinary} from "cloudinary";
import fs from "fs"; //file system given by node js

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if (!localFilePath) return null;
        //to upload the file
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto" //detect the type of file
        })
        console.log("file upload success on cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove file from local server
        return null;
    }
}

export {uploadOnCloudinary}