'use client'
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();
  const imagem: string = session?.user?.image;
  
  return (
    <main>
      <div>
        logado com<br></br> 
        email: {session?.user?.email} <br></br>
        nome: {session?.user?.name} <br></br>
        {imagem && <img src={imagem} alt="imagem do usuário" width="50" height="50" />}
      </div>
    </main>
  );
}
