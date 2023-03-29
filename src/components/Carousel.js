import Link from "next/link"
import Image from "next/image";
import { RxDotFilled } from 'react-icons/rx';
import { RiShareCircleLine } from 'react-icons/ri';
export default function Carousel() {
    return (
        <>
            <div className="bg-primary p-4 text-white rounded-2xl mb-8 md:mx-8 md:mb-10 lg:max-w-md">
                <div className="md:flex items-center justify-between lg:flex-col">
                    <Image src={`./banner.svg`} width={288} height={288}  className="hidden md:block" alt="Banner.svg"/>

                    <div>
                        <h2 className="text-base font-bold mb-2 md:text-2xl">Developer handoff improvements</h2>
                        <p className="font-medium leading-4 text-[13px] mb-2 md:text-xl md:mb-4">
                            You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
                        </p>
                        <div className="flex items-center justify-between">
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
            </div>
        </>
    )
}