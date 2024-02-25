'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
    const [copied, setCopied] = useState('');
    const { data: session } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setCopied(''), 5000);
    };

    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex cursor-pointer gap-3 items-center">
                    <Image
                        src={post.author.image}
                        alt="author_image"
                        width={40}
                        height={40}
                        className="object-contain rounded-md"
                    />
                    <div className="flex flex-col">
                        <h4 className="font-satoshi font-semibold text-gray-900">
                            {post.author.username}
                        </h4>
                        <p className="font-inter font-sm text-gray-500">
                            {post.author.email}
                        </p>
                    </div>
                </div>
                <div className="copy_btn" onClick={handleCopy}>
                    <Image
                        src={
                            copied === post.prompt
                                ? '/assets/icons/tick.svg'
                                : '/assets/icons/copy.svg'
                        }
                        width={12}
                        height={12}
                    />
                </div>
            </div>
            <p className="font-mons italic text-sm my-5">{post.prompt}</p>
            <p>
                <span
                    className="font-inter text-sm rounded-full py-1 px-2 bg-blue-200"
                    onClick={() => handleTagClick && handleTagClick(post.tag)}
                >
                    #{post.tag}
                </span>
            </p>
            {session?.user.id === post.author._id &&
                pathname === '/profile' && (
                    <div className="mt-10 flex-center gap-4">
                        <Image
                            src="/assets/icons/edit.png"
                            alt="edit"
                            width={20}
                            height={20}
                            onClick={handleEdit}
                            className="cursor-pointer"
                        />
                        <Image
                            src="/assets/icons/delete.png"
                            alt="delete"
                            width={20}
                            height={20}
                            onClick={handleDelete}
                            className="cursor-pointer"
                        />
                    </div>
                )}
        </div>
    );
};

export default PromptCard;
