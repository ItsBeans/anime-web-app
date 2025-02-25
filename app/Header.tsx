"use client";

import { useSession, signOut } from "next-auth/react";
import Link from 'next/link';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Anibeans</Link>
      </div>
      <nav className="nav">
      <Link href="/search"> search</Link>
      </nav>
    </header>
  );
}
