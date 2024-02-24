import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Prompt</span>
            </h1>
            <p className="desc text-left max-w-md">
                Your prompt, our world. Inspire, connect, create.
            </p>
            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex-col gap-7 glassmorphism"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your AI Prompt
                    </span>
                    <textarea
                        name="prompt"
                        value={post.prompt}
                        id="prompt"
                        placeholder="Write a prompt that ignites creativity and imagination."
                        required
                        className="form_textarea mb-10 resize-none"
                        onChange={(e) => {
                            setPost({ ...post, prompt: e.target.value });
                        }}
                    ></textarea>
                </label>
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Tag{` `}
                        <span className="font-normal">
                            (#inspiration, #food, #development, etc.)
                        </span>
                    </span>
                    <input
                        name="tag"
                        value={post.tag}
                        id="tag"
                        placeholder="Type tags here..."
                        required
                        className="form_input mb-5"
                        onChange={(e) => {
                            setPost({ ...post, tag: e.target.value });
                        }}
                    />
                </label>

                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link
                        className="text-sm px-5 py-1 rounded-full text-white bg-primary-orange"
                        href="/"
                    >
                        Cancel
                    </Link>

                    <button
                        className="text-sm px-5 py-1 rounded-full text-white bg-green-400"
                        type="submit"
                        disabled={submitting}
                    >
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;
