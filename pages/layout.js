import Navbar from "./components/navbar"

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col ">
                {/* <Navbar className="mr-2" /> */}
                {children}
            </div>



        </>
    )
}

const Header = () => {
    return <h3 className="text-black text-lg">This is a Header</h3>
}

const Footer = () => {
    return <h3 className="text-black text-lg">This is a Footer</h3>
}