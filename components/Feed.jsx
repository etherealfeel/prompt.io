'use client';

import { useState, useEffect } from 'react';
import PromptCardList from './PromptCardList';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [filteredPosts, setFiltereddPosts] = useState([]);

    const fetchPrompts = async (req, res) => {
        try {
            const res = await fetch('/api/prompt');
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    const filterPrompts = (searchterm) => {
        const regex = new RegExp(searchterm, 'i');
        return posts.filter(
            (item) =>
                regex.test(item.author.username) ||
                regex.test(item.tag) ||
                regex.test(item.prompt)
        );
    };

    useEffect(() => {
        fetchPrompts();
    }, []);

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchTerm(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const res = filterPrompts(e.target.value);
                setFiltereddPosts(res);
            }, 500)
        );
    };

    const handleTagClick = (tag) => {
        setSearchTerm(tag);

        const res = filterPrompts(tag);
        setFiltereddPosts(res);
    };

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    className="search_input peer placeholder:italic"
                    type="text"
                    placeholder="Explore tags or usernames..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    required
                />
            </form>
            {searchTerm ? (
                <PromptCardList
                    posts={filteredPosts}
                    handleTagClick={() => {}}
                />
            ) : (
                <PromptCardList posts={posts} handleTagClick={handleTagClick} />
            )}
        </section>
    );
};

export default Feed;
