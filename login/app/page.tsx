'use client'
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Login from "./login/page";

export default function Home() {
  const { data: session } = useSession();
  const imagem: string = session?.user?.image;
  return (
    <div>
    </div>
  )
}
