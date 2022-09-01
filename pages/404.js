import Navbar from "./components/navbar";

export default function Custom404() {
    return (
        <>
            <div className="bg-black h-screen w-full flex flex-row">
                <div className="flex flex-col justify-start ml-20">
                    <p>Error 404!</p>
                    <p>This page does not exist!</p>
                </div>
                <Navbar />
            </div>

        </>

    );
}

