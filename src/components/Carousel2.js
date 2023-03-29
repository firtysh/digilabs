import Image from "next/image";
import Link from "next/link";
import { RxDotFilled } from 'react-icons/rx';
import { RiShareCircleLine } from 'react-icons/ri';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronLeft } from "react-icons/fi";
export default function Carousel2() {
    return (
        <>
            <div className="hidden lg:block relative w-[480px]">
                <div className="peer z-30 bg-primary rounded-3xl flex flex-col max-w-[480px] text-white absolute top-1/2 -translate-y-1/2 transition-all lg:-translate-x-16  xl:-translate-x-28 lg:hover:-translate-x-4 xl:hover:-translate-x-24">
                    <div id="overlay-left" className="w-[240px] h-full absolute left-0 group">
                        <div className="bg-white group-hover:opacity-100 transition-all opacity-0 flex rounded-full w-16 h-16 absolute top-1/2 -translate-y-1/2 group-hover:-translate-x-8 text-white z-40  items-center justify-center">
                            <div className="rounded-full w-8 h-8 bg-primary-dark">
                                <FiChevronLeft size={30} className="mx-auto" />
                            </div>
                        </div>
                    </div>
                    <div id="overlay-right" className="w-[240px] h-full absolute right-0 group">
                        <div className="bg-white group-hover:opacity-100 transition-all opacity-0 flex rounded-full w-16 h-16 absolute top-1/2 -translate-y-1/2 right-0 group-hover:translate-x-8 text-white z-40 items-center justify-center">
                            <div className="rounded-full w-8 h-8 bg-primary-dark">
                                <FiChevronRight size={30} className="mx-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Image src={`./banner.svg`} height={329} width={480} alt="Banner.svg" className="mx-auto" />
                    </div>
                    <div className="px-16 mb-9">
                        <div className="mb-4">
                            <span className="bg-black text-white rounded-full px-2 py-1 text-xs font-bold">New</span>
                        </div>
                        <h2 className="font-bold mb-4 text-2xl">Developer handoff improvements</h2>
                        <p className="text-base">
                            You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
                        </p>
                    </div>
                    <div className="flex items-center justify-between px-16 mb-11">
                        <div className="flex items-center justify-start">
                            <RxDotFilled size={35} className="" />
                            <RxDotFilled size={30} className="opacity-20 hover:opacity-100" />
                            <RxDotFilled size={30} className="opacity-20 hover:opacity-100" />
                            <RxDotFilled size={30} className="opacity-20 hover:opacity-100" />
                        </div>
                        <Link href={""} className="text-base font-bold flex items-center md:text-xl">Share <RiShareCircleLine className="ml-1" /></Link>
                    </div>
                </div>
                <div className="z-20 bg-primary-dark rotate-[5deg] scale-90 rounded-3xl flex flex-col max-w-[480px] text-white absolute top-1/2 transition-all -translate-y-1/2 lg:-translate-x-8 xl:-translate-x-20 peer-hover:rotate-0">
                    <div id="overlay-left" className="w-[240px] h-full absolute left-0 group">
                        <div className="bg-white group-hover:opacity-100 transition-all opacity-0 flex rounded-full w-16 h-16 absolute top-1/2 -translate-y-1/2 group-hover:-translate-x-8 text-white z-40  items-center justify-center">
                            <div className="rounded-full w-8 h-8 bg-primary-dark">
                                <FiChevronLeft size={30} className="mx-auto" />
                            </div>
                        </div>
                    </div>
                    <div id="overlay-right" className="w-[240px] h-full absolute right-0 group">
                        <div className="bg-white group-hover:opacity-100 transition-all opacity-0 flex rounded-full w-16 h-16 absolute top-1/2 -translate-y-1/2 right-0 group-hover:translate-x-8 text-white z-40 items-center justify-center">
                            <div className="rounded-full w-8 h-8 bg-primary-dark">
                                <FiChevronRight size={30} className="mx-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Image src={`./banner.svg`} height={329} width={480} alt="Banner.svg" className="mx-auto" />
                    </div>
                    <div className="px-16 mb-9">
                        <div className="mb-4">
                            <span className="bg-black text-white rounded-full px-2 py-1 text-xs font-bold">New</span>
                        </div>
                        <h2 className="font-bold mb-4 text-2xl">Developer handoff improvements</h2>
                        <p className="text-base">
                            You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
                        </p>
                    </div>
                    <div className="flex items-center justify-between px-16 mb-11">
                        <div className="flex items-center justify-start">
                            <RxDotFilled size={35} className="" />
                            <RxDotFilled size={30} className="opacity-20 hover:opacity-100" />
                            <RxDotFilled size={30} className="opacity-20 hover:opacity-100" />
                            <RxDotFilled size={30} className="opacity-20 hover:opacity-100" />
                        </div>
                        <Link href={""} className="text-base font-bold flex items-center md:text-xl">Share <RiShareCircleLine className="ml-1" /></Link>
                    </div>
                </div>
                <div className="z-10 bg-primary-darker rotate-[10deg] scale-[.80] rounded-3xl flex flex-col max-w-[480px] text-white absolute transition-all top-1/2 -translate-y-1/2 lg:-translate-x-0 xl:-translate-x-12 peer-hover:rotate-0">
                    <div id="overlay-left" className="w-[240px] h-full absolute left-0 group">
                        <div className="bg-white group-hover:opacity-100 transition-all opacity-0 flex rounded-full w-16 h-16 absolute top-1/2 -translate-y-1/2 group-hover:-translate-x-8 text-white z-40  items-center justify-center">
                            <div className="rounded-full w-8 h-8 bg-primary-dark">
                                <FiChevronLeft size={30} className="mx-auto" />
                            </div>
                        </div>
                    </div>
                    <div id="overlay-right" className="w-[240px] h-full absolute right-0 group">
                        <div className="bg-white group-hover:opacity-100 transition-all opacity-0 flex rounded-full w-16 h-16 absolute top-1/2 -translate-y-1/2 right-0 group-hover:translate-x-8 text-white z-40 items-center justify-center">
                            <div className="rounded-full w-8 h-8 bg-primary-dark">
                                <FiChevronRight size={30} className="mx-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Image src={`./banner.svg`} height={329} width={480} alt="Banner.svg" className="mx-auto" />
                    </div>
                    <div className="px-16 mb-9">
                        <div className="mb-4">
                            <span className="bg-black text-white rounded-full px-2 py-1 text-xs font-bold">New</span>
                        </div>
                        <h2 className="font-bold mb-4 text-2xl">Developer handoff improvements</h2>
                        <p className="text-base">
                            You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
                        </p>
                    </div>
                    <div className="flex items-center justify-between px-16 mb-11">
                        <div className="flex items-center justify-start">
                            <RxDotFilled size={35} className="" />
                            <RxDotFilled size={30} className="opacity-20 hover:opacity-100" />
                            <RxDotFilled size={30} className="opacity-20 hover:opacity-100" />
                            <RxDotFilled size={30} className="opacity-20 hover:opacity-100" />
                        </div>
                        <Link href={""} className="text-base font-bold flex items-center md:text-xl">Share <RiShareCircleLine className="ml-1" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}