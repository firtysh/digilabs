import Head from 'next/head'
import Header from "@/components/Header";
import Carousel from '@/components/Carousel';
import SigninForm from '@/components/SigninForm';
import OtpForm from '@/components/OtpForm';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Login() {
    const [otp, setOtp] = useState(false);
    return (
        <>
            <Head>
                <title>Sign In</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className="p-6">
                <Header />
                <Carousel />
                <div className='relative'>
                    <AnimatePresence>
                        {!otp ? (<motion.div
                            className='absolute w-full'
                            key={1}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .3, ease: "easeInOut" }}
                            exit={{ opacity: 0 }}
                        >
                            <SigninForm setOtp={setOtp} />
                        </motion.div>) : (
                            <motion.div
                                className='absolute w-full'
                                key={2}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: .3, ease: "easeInOut" }}
                                exit={{ opacity: 0, y: 10 }}
                            >
                                <OtpForm setOtp={setOtp} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}