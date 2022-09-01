import { BsTwitter, BsFacebook } from "react-icons/bs";

const SideBar = () => {
    return (
        <div>
            <div className="share-menu h-20 w-36 bg-gray-400 absolute right-28 inset-y-96 flex flex-col rounded-md 
            transition-all duration-100 origin-left">
                <h1 className=" text-md text-black mx-auto font-bold">Share</h1>
                <div className="flex flex-row mx-auto my-auto  justify-between">
                    <ShareIcon icon={<BsTwitter size={"36"} color={"#1DA1F2"} />} />
                    <ShareIcon icon={<BsFacebook size={"36"} color={"#4267B2"} />} />
                </div>
            </div>
        </div>
    );
}

export default SideBar;

const ShareIcon = ({ icon }) => (
    <div className="m-1">
        {icon}
    </div>
)

