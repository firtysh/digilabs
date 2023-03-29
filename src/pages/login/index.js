import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from "@/components/Header";
import Carousel from '@/components/Carousel';
import SigninForm from '@/components/SigninForm';
import OtpForm from '@/components/OtpForm';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Carousel2 from '@/components/Carousel2';

export default function Login() {
    const [otp, setOtp] = useState(false);
    return (
        <>
            <Head>
                <title>Sign In</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className="p-6 lg:flex justify-between  h-screen lg:p-[51px]">
                <div className="lg:hidden">
                    <Header />
                    <Carousel />
                </div>
                <div className='lg:flex flex-col justify-between xl:flex-1'>
                    <div className="hidden lg:block">
                        <Image src={`./logo.svg`} width={24} height={24} alt="logo" />
                    </div>
                    <div className='relative md:w-[344px] mx-auto h-fit'>
                        <AnimatePresence>
                            {!otp ? (<motion.div
                                className='absolute w-full lg:top-1/2 lg:-translate-y-1/2 '
                                key={1}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: .3, ease: "easeInOut" }}
                                exit={{ opacity: 0 }}
                            >
                                <SigninForm setOtp={setOtp} />
                            </motion.div>) : (
                                <motion.div
                                    className='absolute w-full lg:top-1/2 lg:-translate-y-1/2'
                                    key={2}
                                    initial={{ opacity: 0,  }}
                                    animate={{ opacity: 1, }}
                                    transition={{ duration: .3, ease: "easeInOut" }}
                                    exit={{ opacity: 0,  }}
                                >
                                    <OtpForm setOtp={setOtp} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className='text-black hidden lg:block'>
                        Not a member? <Link href="/register" className='text-primary'>Create Account</Link>
                    </div>
                </div>
                <Carousel2 />
            </div>
        </>
    );
}