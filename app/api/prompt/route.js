import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const dynamic = 'force-dynamic';
export const GET = async (req) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find().populate('author');

        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response('Failed fetching prompts', { status: 500 });
    }
};
