import Link from 'next/link'
import { useRouter } from 'next/router'

import { SquaresFour, X } from 'phosphor-react'
import { useState } from 'react';
import Modal from './modal';

export default function NavBar() {
    const [isOpenedModal, setIsOpenedModal] = useState(false);
    const router = useRouter();

    function changeCurrentStateModal() {
        setIsOpenedModal(!isOpenedModal);
    }

    return (
        <nav className="h-12 w-full text-base text-black-70 flex justify-between items-center px-8 border-b border-dashed border-black-50 md:px-0 md:justify-around md:border-0 md:h-16">
            <div className="text-xl font-medium hover:text-black-90">
                <Link href="/">
                    DS-DEVS
                </Link>
            </div>

            <div className="flex justify-center items-center sm:">
                <ul className="hidden sm:flex justify-stretch items-cente gap-x-3">
                    <li className={`${router.pathname == "/" ?  "text-black-90 font-semibold" : "text-base" } font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-black-80 sm:hover:medium transition duration-75 ease-in-out md:text-lg md:w-20 focus:`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`${router.pathname == "/about" ?  "text-black-90 font-semibold" : "text-base"} font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-black-80 sm:hover:medium transition duration-75 ease-in-out md:text-lg md:w-20`}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={`${router.pathname == "/contact" ?  "text-black-90 font-semibold" : "text-base"} font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-black-80 sm:hover:medium transition duration-75 ease-in-out md:text-lg md:w-20`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className={`${router.pathname == "/projects" ?  "text-black-90 font-semibold" : "text-base"} font-medium sm:min-w-max sm:w-16 sm:flex sm:justify-center sm:hover:text-black-80 sm:hover:medium transition duration-75 ease-in-out md:text-lg md:w-20`}>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>

                <hr className="hidden sm:block w-px h-4 bg-separator/80 mx-5 shadow-md md:mx-7" />

                <button
                    onClick={() => changeCurrentStateModal()}
                    className="relative z-10 text-3xl hover:text-black-90 transition duration-75 ease-in-out"
                >
                    {isOpenedModal ? <X size={32} /> : <SquaresFour />}
                </button>
            </div>

            {isOpenedModal && <Modal />}
        </nav>
    )
}