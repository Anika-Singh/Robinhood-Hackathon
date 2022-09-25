import NavBar from "../components/NavBar";

const Layout = ({children}) => {
    return (
        <>
            <div><NavBar/></div>
            <main style={{
                marginTop: "6em"
            }}>
                {children}
            </main>
        </>
    )
}

export default Layout;