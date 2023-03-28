import Link from "next/link"
import { RxDotFilled } from 'react-icons/rx';
import { RiShareCircleLine } from 'react-icons/ri';
export default function Carousel() {
    return (
        <>
            <div className="bg-primary p-4 text-white rounded-xl mb-8">
                <h2 className="text-base font-bold mb-2">Developer handoff improvements</h2>
                <p className="font-medium leading-4 text-[13px] mb-2">
                You’ll now see a highlight around Symbols on the Canvas and in the Inspector.
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <RxDotFilled size={35} className="" />
                        <RxDotFilled size={30} className="opacity-20 hover:opacity-100"/> 
                        <RxDotFilled size={30} className="opacity-20 hover:opacity-100"/>
                        <RxDotFilled size={30} className="opacity-20 hover:opacity-100"/>
                    </div>
                    <Link href={""} className="text-base font-bold flex items-center">Share <RiShareCircleLine className="ml-1"/></Link>
                </div>
            </div>
        </>
    )
}