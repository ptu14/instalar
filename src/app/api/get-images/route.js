import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export async function GET() {
    try {
        // Search for images in the 'realizacje' folder (or all if you prefer, but folder is safer)
        // You can remove .expression('folder:realizacje') to fetch all images
        const results = await cloudinary.search
            .expression('folder:realizacje AND resource_type:image')
            .sort_by('created_at', 'desc')
            .max_results(30) // Adjust limit as needed
            .execute();

        const publicIds = results.resources.map(resource => resource.public_id);

        return NextResponse.json(publicIds);
    } catch (error) {
        console.error("Cloudinary Search Error:", error);
        return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}
