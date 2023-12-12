// Built-in components from next.js
// Self-referencial links us the Link component
import Link from 'next/link';

export default function Navbar(){
    return (
        <>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </>
    )
}