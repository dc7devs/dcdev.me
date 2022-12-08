import { ReactNode } from "react"
import NavBar from "./navbar"

type PropsChildren = {
    children: ReactNode
}

export default function Layout({ children }: PropsChildren) {
    return (
        <div className="h-screen w-full font-pontserrat">
            <NavBar />
            <main className="">
                {children}
            </main>
        </div>
    )
}