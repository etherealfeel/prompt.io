import React from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ posts, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {posts.map((post) => (
                <PromptCard
                    post={post}
                    handleTagClick={handleTagClick}
                    key={post._id}
                />
            ))}
        </div>
    );
};

export default PromptCardList;
