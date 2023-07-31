'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  if (session?.user) {
    return (
      <>
        <p className="authStatus">Logado como: {session.user.email}</p> 
        <button className="botao" onClick={() => signOut()}>Sair</button>
      </>
    )
  }
  return (
    <>
      <button className="botao" onClick={() => signIn()}>Iniciar Sessão</button>
    </>
  )
}