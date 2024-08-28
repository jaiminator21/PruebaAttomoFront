'use client';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../assets/logo.jpg'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuOpen = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href={"/"}>
                    <Image
                        src={logo}
                        height={100}
                        width={100}
                        className="cursor-pointer"
                        alt="Vegetta777 youtube logo"
                        priority
                    />
                </Link>
                <div className="hidden md:flex">
                    <ul className="hidden md:flex">
                        <Link href={"/games"}>
                            <li className="ml-10 uppercase hover:border-b text-xl">Ver juegos</li>
                        </Link>
                        <Link href={"/login"}>
                            <li className="ml-10 uppercase hover:border-b text-xl">Iniciar sesión</li>
                        </Link>
                        <Link href={"/edit"}>
                            <li className="ml-10 uppercase hover:border-b text-xl">Editar juegos</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={menuOpen} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                openMenu
                    ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] p-10 transition-all duration-500 ease-in-out"
                    : "fixed left-[-100%] top-0 p-10 transition-all duration-500 ease-in-out"}>
                <div className='flex w-full items-center justify-end'>
                    <div onClick={menuOpen} className="">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className='flex-col py-4'>
                    <ul>
                        <Link href={"/games"}>
                            <li className="py-4 uppercase hover:border-b text-x cursor-pointerl" onClick={menuOpen}>Ver juegos</li>
                        </Link>
                        <Link href={"/login"}>
                            <li className="py-4 uppercase hover:border-b text-x cursor-pointer" onClick={menuOpen}>Iniciar sesión</li>
                        </Link>
                        <Link href={"/edit"}>
                            <li className="py-4 uppercase hover:border-b text-x cursor-pointer" onClick={menuOpen}>Editar juegos</li>
                        </Link>
                    </ul>
                </div>
            </div>


        </nav>
    );
};

export default navbar;