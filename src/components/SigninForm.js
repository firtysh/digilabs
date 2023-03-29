import { GoChevronDown } from 'react-icons/go'
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'
import { FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import Link from 'next/link'



export default function SigninForm({ setOtp }) {
    const [visible, setVisible] = useState(false);
    function handleSubmit(e) {
        e.preventDefault()
        console.log('submitted')
        setOtp(true)
    }
    const toggleVisibility = () => {
        setVisible(!visible);
    };
    return (
        <>
            <h1 className="text-[28px] leading-8 font-bold text-black mb-8 md:mb-10">
                Welcome to Systempackage
            </h1>
            <form className="" onSubmit={handleSubmit}>
                <div className="flex justify-between mb-6 bg-black bg-opacity-5 rounded-xl p-1 border border-transparent hover:border-primary hover:border hover:bg-white overflow-hidden md:mb-8">
                    <input required type="text" className="rounded-xl bg-transparent px-4 py-2 outline-none text-base text-black flex-1 w-1/2" />
                    <div className="flex  bg-white text-gray items-center text-center px-4 py-3 rounded-lg hover:bg-primary hover:bg-opacity-5 hover:text-primary">
                        @heads.design
                        <GoChevronDown className="ml-1" />
                    </div>
                </div>
                <div className="flex items-center justify-between  bg-black bg-opacity-5 rounded-xl p-1 border border-transparent hover:border-primary hover:border hover:bg-white overflow-hidden">
                    <input required type={visible ? 'text' : 'password'} className="flex-1 rounded-xl bg-transparent px-4 py-2 outline-none text-base text-black" />
                    {visible ? <RxEyeOpen className="text-gray my-4 mx-5" onClick={toggleVisibility} /> : <RxEyeClosed className="text-gray my-4 mx-5" onClick={toggleVisibility} />}
                </div>
                <button className='w-full flex items-center justify-center bg-primary rounded-xl group text-white mt-8 mb-4 hover:bg-primary-dark p-4 text-base font-bold duration-300 md:mt-10 md:mb-6' >
                    <span className='group-hover:-translate-x-2 translate-x-2 ease-in-out transition-all duration-300'> Next </span>
                    <FaArrowRight className="opacity-0 inline-block group-hover:opacity-100 ease-in-out duration-300 transition-all" />
                </button>
                <div className='text-center'>
                    <Link href={''} className="text-primary hover:text-primary-dark text-base font-bold" >Forgot your password?</Link>
                </div>
            </form>
        </>
    )
}