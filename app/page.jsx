import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col mt-40">
            <h1 className="head_text text-center">prompt.io</h1>
            <br className="max-md:hidden" />
            <span className="head_text purple_gradient text-right mb-5 font-mons italic">
                AI-Inspired Prompts
            </span>
            <p className="descr text-right">
                Prompts.io is a community-driven platform for creators and users
                of artificial intelligence (AI) to share, discover, and
                collaborate on high-quality prompts for text generation. Our
                mission is to democratize AI and make it accessible to everyone,
                regardless of technical expertise.
            </p>
            <Feed />
        </section>
    );
};

export default Home;
