'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

const MyProfile = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPrompts = async (req, res) => {
            try {
                const res = await fetch(`/api/users/${session?.user.id}/posts`);
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.log(error);
            }
        };
        if (session?.user.id) fetchPrompts();
    }, [session?.user.id]);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };
    const handleDelete = async (post) => {};

    return (
        <Profile
            name="My"
            desc="Here is your detailed profile page."
            posts={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
};

export default MyProfile;
