import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({ author: params.id }).populate(
            'author'
        );
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response('Failed fetching prompts', { status: 500 });
    }
};
