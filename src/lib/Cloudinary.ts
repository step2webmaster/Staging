import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name:process.env.NEXT_PUBLIC_CLOUNDINARY_CLOUD_NAME ||'',
    api_key:process.env.NEXT_PUBLIC_CLOUNDINARY_API_KEY || '',
    api_secret:process.env.NEXT_PUBLIC_CLOUNDINARY_API_SECRET || ''
})


export default cloudinary