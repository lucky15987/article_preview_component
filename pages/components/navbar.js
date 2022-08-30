import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

export default function Navbar() {
    return (
        <>
            {/* <div className="sideBar-container h-screen w-60 bg-slate-400 rounded-tr-md">
                <ul className="options-container flex-auto justify-between">
                    <li><a href="./" className="flex px-24 py-5 my-2 text-lg bg-yellow-300 rounded-md h-16 hover:bg-yellow-400">Home</a></li>
                    <li><a href="./profile/" className="flex px-24 py-5 my-2 text-lg bg-yellow-300 rounded-md h-16 hover:bg-yellow-400">Profile</a></li>
                    <li><a href="./support" className="flex px-24 py-5 my-2 text-lg bg-yellow-300 rounded-md h-16 hover:bg-yellow-400">Support</a></li>
                </ul>
            </div> */}
            <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg scale-0">
                <SideBarIcon icon={<FaFire size={"28"}/> } />                
                <SideBarIcon icon={<BsPlus size={"32"}/> } />                
                <SideBarIcon icon={<BsFillLightningFill size={"20"}/> } />                
                <SideBarIcon icon={<FaPoo size={"20"}/> } />      
            </div>

        </>
    );
}

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
      {icon}

      <span class="sidebar-tooltip group-hover:scale-100">{text}</span>

    </div>
  );