import { v2 as cloudinary } from "cloudinary";

// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// upload file on cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
    console.log("file uploaded successfully", response.url);
    return response;
  } catch (error) {
    FileSystem.unlink(localFilePath)
    console.log(error.message);
    return null;
  }
};

export default uploadOnCloudinary;

