import { RiHome6Fill, RiLogoutBoxLine,RiPieChart2Fill } from "react-icons/ri";
import { TiMessages} from "react-icons/ti";
import { BsBook} from "react-icons/bs";
import { HiOutlineUsers, HiCog6Tooth} from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Sidebar =(props)=>{

    const {dropdownMenu}= props;

    return(
        <div className="sidebar ">
        <div className={`side border border-black  bg-[#ffffff] fixed lg:left-0 top-0 w-28 h-full container flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50  ${dropdownMenu ? "left-0": "-left-full"}`}>
            
       <div>
        <ul className=" pl-4">
                <li>
                <a href="https://www.linkedin.com/in/miguel-enrique-alvarez-merlos-9b6703248" class="flex items-center">
                    <img  src="https://avatars.githubusercontent.com/u/115357922?v=4" class=" mr-6 h-24 rounded flex justify-center" alt="Flowbite Logo" />   
                </a>
                    
                </li>
                
                <li className="p-4 rounded-tl-lg rounded-bl-lg hover:bg-white group">
                    <a href ="/perfil" className=" p-4 box-content  rounded-lg text-center text-black flex justify-center group-hover:text-black group-hover:bg-cyan-300 ">
                        <HiOutlineUsers className=" text-2xl text-center "/>
                    </a>
                </li>
                <li className="p-4 rounded-tl-lg rounded-bl-lg hover:bg-white group">
                    <a href ="/herramientas" className=" p-4 box-content  rounded-lg text-center text-[#000000] flex justify-center group-hover:text-white group-hover:bg-cyan-300 ">
                        <BsBook className=" text-2xl text-center "/>
                    </a>
                </li>
                <li className="p-4 rounded-tl-lg rounded-bl-lg hover:bg-white group">
                    <a href ="/proyectos" className=" p-4 box-content  rounded-lg text-center text-black flex justify-center group-hover:text-white group-hover:bg-cyan-300 ">
                        <AiOutlineFundProjectionScreen className=" text-2xl text-center "/>
                    </a>
                </li>
                <li className="p-4 rounded-tl-lg rounded-bl-lg hover:bg-white group">
                    <a href ="/contactame" className=" p-4 box-content  rounded-lg text-center text-black flex justify-center group-hover:text-white group-hover:bg-cyan-300 ">
                        <TiMessages className=" text-2xl text-center "/>
                    </a>
                </li>
                
                
                <div>
                
                </div>
            </ul>
        </div> 
           
         </div>
         </div>
    )
}

export default Sidebar