import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-sky-50 absolute bottom-0 left-0 font-inter">
            <div className="m-5 sm:gap-10 flex-center flex-col sm:flex-row">
                <div className="flex-center ">
                    <Link href="/" className="flex-center">
                        <Image
                            src="/assets/images/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className="invert"
                        />
                        <p className="m-5 ">
                            &#169; 2023{' '}
                            <span className="font-mons">prompt.io</span> | All
                            Rights Recerved
                        </p>
                    </Link>
                </div>
                <div className="py-4 px-10 rounded-md bg-fuchsia-950">
                    <div className="flex-center gap-5 ">
                        <Link
                            href="https://www.facebook.com/"
                            className="social_icon"
                        >
                            <Image
                                src="/assets/icons/facebook.png"
                                alt="facebook"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link href="https://www.x.com/" className="social_icon">
                            <Image
                                src="/assets/icons/twitter.png"
                                alt="twitter"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            className="social_icon"
                        >
                            <Image
                                src="/assets/icons/instagram.png"
                                alt="instagram"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
