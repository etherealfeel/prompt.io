'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
    const isLoggedIn = true;
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const res = await getProviders();
            setProviders(res);
        };

        setUpProviders();
    }, []);
    return (
        <nav className="flex-between w-full mb-15 p-5 absolute top-0 left-0">
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/logo.png"
                    alt="logo"
                    width={80}
                    height={80}
                />
                <p className="logo_text">prompt.io</p>
            </Link>
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">
                            Create prompt
                        </Link>
                        <button
                            className="outline_btn"
                            type="button"
                            onClick={signOut}
                        >
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src={session?.user.image}
                                className="rounded-full"
                                alt="profile"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((prov) => (
                                <button
                                    type="button"
                                    key={prov.name}
                                    className="black_btn"
                                    onClick={() => signIn(prov.id)}
                                >
                                    Sign In
                                </button>
                            ))}
                    </>
                )}
            </div>
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex cursor-pointer">
                        <Image
                            src={session?.user.image}
                            className="rounded-full"
                            alt="profile"
                            width={40}
                            height={40}
                            onClick={() => {
                                setToggleDropdown((prev) => !prev);
                            }}
                        />
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href="/create-prompt"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type="button"
                                    className="black_btn mt-5 w-full"
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((prov) => (
                                <button
                                    type="button"
                                    key={prov.name}
                                    className="black_btn"
                                    onClick={() => signIn(prov.id)}
                                >
                                    Sign In
                                </button>
                            ))}
                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;
