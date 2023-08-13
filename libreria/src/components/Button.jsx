
import { AiFillLinkedin} from "react-icons/ai" ;

const Button =(text, children)=>{
return (
    <button >
         <a href="https://www.linkedin.com/in/miguel-enrique-alvarez-merlos-9b6703248/" 
         class="flex border border-[#a9afbc] px-4 py-4 h-10 w-32 text-while rounded-full items-center gap-2 hover:bg-[#3d37e2dd] hover:underline hover:text-white transition ">Leer Mas
         <AiFillLinkedin className="items-center "/>
          
         </a>
    </button>
 )

}

export default Button