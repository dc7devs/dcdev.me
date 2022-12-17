import Link from "next/link";
import { useState } from "react";
import Modal from "./modal";
import NavBar from "./navbar";

export default function Header() {
    const [isOpenedModal, setIsOpenedModal] = useState(false);

    return(
        <header className={"h-auto w-full pt-4 flex justify-between items-center px-8 md:px-0 md:justify-around md:h-16 absolute top-0"}>
            <Link href="/">
                <div className={"w-10 h-10 md:w-12 md:h-12 rounded-full ring-4 ring-violet-700/5 shadow-sm shadow-violet-700/10 bakcdrop-blur relative select-none"}>
                    <img
                        className={"object-cove rounded-full"}
                        src="/images/My.png"
                        alt="Althor image"
                    />
                </div>
            </Link>

            <NavBar 
                isOpenedModal={isOpenedModal}
                setIsOpenedModal={setIsOpenedModal}
            />

            {isOpenedModal && <Modal />}
        </header>
    )
}