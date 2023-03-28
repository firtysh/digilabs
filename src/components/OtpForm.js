import Link from "next/link";
import { useEffect, useState } from "react";
export default function OtpForm({ setOtp }) {
    const [timer, setTimer] = useState(10);
    useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }, [timer]);
    function handleSubmit(e) {
        e.preventDefault();
    }
    function handleBack(e) {
        e.preventDefault();
        setOtp(false);
    }
    return (
        <>
            <h1 className="text-[28px] leading-8 font-bold text-black mb-4">
                Enter the verification code to continue
            </h1>
            <p className="text-gray text-base font-medium mb-8">
                We sent to <Link href={'mailto:hellouser@heads.design'} className="text-primary">hellouser@heads.design</Link>. If you don’t see it, check your spam.
            </p>
            <form className="" onSubmit={handleSubmit}>
                <div className="flex items-center justify-evenly mb-8">
                    {[1, 2, 3, 4, 5, 6].map((i, index) => {
                        return (
                            <input key={index} type="text" className="border-primary border outline-none h-14 w-12 m-1 focus:shadow-[0_0px_0px_4px_rgba(0,85,255,0.2)]  text-center rounded-xl" />
                        )
                    })}
                </div>
                <div className="flex justify-between items-center font-bold text-primary">
                    <Link href={''} onClick={handleBack} className="text-primary">Back</Link>
                    <Link href={''} className={!timer ? 'text-primary' : 'text-gray-light pointer-events-none'}>Resend {!timer ? 'Code' : '00:' + timer.toString().padStart(2, '0')}</Link>
                </div>
            </form>
        </>
    );
}