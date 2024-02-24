'use client';

import { useState, useEffect } from 'react';
import PromptCardList from './PromptCardList';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPrompts = async (req, res) => {
            try {
                const res = await fetch('/api/prompt');
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchPrompts();
    }, []);

    const handleSearchChange = (e) => {};

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    className="search_input peer"
                    type="text"
                    placeholder="Search for a tag/username"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    required
                />
            </form>
            <PromptCardList posts={posts} handleTagClick={() => {}} />
        </section>
    );
};

export default Feed;
