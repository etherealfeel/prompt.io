import PromptCard from './PromptCard';

const Profile = ({ name, desc, posts, handleEdit, handleDelete }) => {
    return (
        <section className="w-full mt-40">
            <h1 className="head_text text-left">
                <span className="purple_gradient">{name} Profile</span>
            </h1>
            <p className="desc text-left">{desc}</p>
            <div className="mt-16 prompt_layout">
                {posts.map((post) => (
                    <PromptCard
                        post={post}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                        key={post._id}
                    />
                ))}
            </div>
        </section>
    );
};

export default Profile;
