import Head from 'next/head'
import Image from 'next/image'
export default function Success() {
    return (
        <>
            <Head>
                <title>Sign In</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <div className="flex flex-col items-center text-center justify-center min-h-screen bg-white text-primary font-bold text-base">
                    <Image src="/logo.svg" alt="logo" width={24} height={24} />
                    Success!
            </div>
        </>
    )
}