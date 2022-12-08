import NavBar from "./navbar"

export default function Layout({children}: any) {
    return (
        <>
            <NavBar />
            <main className="">
                {children}
            </main>
        </>
    )
}