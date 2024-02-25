'use client';
import { useState, useEffect } from 'react';
import Profile from '@components/Profile';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '../loading';

const UserProfile = ({ params }) => {
    const [posts, setPosts] = useState([]);
    const searchParams = useSearchParams();
    const username = searchParams.get('name');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`/api/users/${params?.id}/posts`);
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (params?.id) fetchPosts();
    }, params?.id);

    return (
        <Suspense fallback={<Loading />}>
            <Profile
                name={username}
                desc={`Welcome to ${username}'s profile page! It's great to have you here. Feel free to explore, share, and connect with others who share your interests. Enjoy your time here!`}
                posts={posts}
            />
        </Suspense>
    );
};

export default UserProfile;
