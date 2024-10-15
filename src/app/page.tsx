import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ul className="list-style:none flex flex-row border-2 rounded-lg">
        <li className="m-3 p-3">Home</li>
        <li className="m-3 p-3"><Link href="/signup">Signup</Link></li>
        <li className="m-3 p-3"><Link href="/login">Login</Link></li>
      </ul>
    </div>
  );
}
