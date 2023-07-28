'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  if (session?.user) {
    return (
      <>
        <h1 className="AuthStatus">Logado como: {session.user.email} </h1>
        <button className="botao" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <h1 className="AuthStatus">Não autenticado </h1>    
      <button className="botao" onClick={() => signIn()}>Sign in</button>
    </>
  )
}