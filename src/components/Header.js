import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <div className='flex bg-red-300 justify-between font-medium leading-4 items-center text-[13px] mb-6'>
                <Image src={`./logo.svg`} width={24} height={24} alt="logo"  />
                <div className='text-black'>
                    Not a member? <Link href="/register" className='text-primary'>Create Account</Link>
                </div>
            </div>
        </>
    )
}