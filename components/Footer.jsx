import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="flex items-center justify-center w-full bg-black text-sky-50 absolute bottom-0 left-0">
            <div>
                <Link Link href="/" className="flex gap-2 flex-center">
                    <Image
                        src="/assets/images/logo.png"
                        alt="logo"
                        width={80}
                        height={80}
                        className="invert mt-5"
                    />
                </Link>
                <p className="m-5">
                    &#169; 2023 prompt.io | All Rights Recerved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
