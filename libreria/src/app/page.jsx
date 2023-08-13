'use client'
import '../styles/globals.css'

/*HOOKS */
import React, {useState, useEffect} from 'react'
import { useHasMounted } from '../hooks/useHasMounted'

/*Componentes */

import Image from '../components/Image'
import Titulo from "@/src/components/Titulo"

/*ICONOS */
import {FcManager} from 'react-icons/fc'
import { AiFillLinkedin} from "react-icons/ai" ;
import { BsBook, BsFacebook } from "react-icons/bs";
import { GiArcheryTarget } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { BiWinkTongue, BiMessageRounded, BiMailSend } from "react-icons/bi";










const Home = () => {
    const hasMounted = useHasMounted();
    if(!hasMounted) {
        return  <div className="loade">
        <div className="spinne"></div>
      </div>;

      }
    return (
<>
    <section>
        <div className='text-center '>
            <Image className="bg-white" imageUrl='https://entrecolores.com/wp-content/uploads/2015/09/Librer%C3%ADa-a-medida-con-baldas-y-cubos-2.jpg'>
               <div className='text-center sm:m-56'>
                    <h1 className="sm:text-5xl sm:m-18 text-center justify-center ">¡Bienvenidos Club de libros Choco Chapín</h1>
                    <h2  className='text-center sm:m-14 sm:text-2xl'>Este es el club de lectores cultos. las reseñas y peticiones de libros se pueden hacer por correo para eso ve al apartado de Contactame. </h2>
                </div>
            </Image>
        </div>
    </section> 
    
    <section className="container mx-auto py-10 px-4">
            <Titulo title="Acerca del Club"/> 
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[60px] ">

                <div>
                    <img className="w-[400px] " src="https://media.timeout.com/images/105766643/image.jpg" alt="Foto Cv"/>
                </div>
            
            <div className="">
                <div  className="flex items-center justify-between w-[500px] ">
                    <div className="flex flex-col gap-6 desktop-only">
                        <div className="flex fap-4 items-center font-medium ">
                           <FcManager className="m-2 text-[22px] text-[#0034efdd]" /> Nombre
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <BiWinkTongue className="m-2 text-[22px] text-[#0034efdd]" /> Año fundacion 
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <GiArcheryTarget className="m-2 text-[22px] text-[#0034efdd]" /> Horarios
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <BsBook className="m-2 text-[22px] text-[#0034efdd]" /> Dias
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <TfiWorld className="m-2 text-[22px] text-[#0034efdd]" /> ubicación 
                        </div>
                        <div className="flex fap-4 items-center font-medium">
                           <BiMailSend className="m-2 text-[22px] text-[#0034efdd]" /> Correo de ubicación
                        </div>
                        </div>

                        <div className="">
                            <div className="flex flex-col gap-6 text-gray-600  ">
                                <div className="flex fap-4 items-center font-medium m-2">Club Choco Chapín</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">2000</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">8 am a 6 pm </div>
                                <div className="flex fap-4 items-center font-medium m-2 ">Lunes a Viernes</div>
                                <div className="flex fap-4 items-center font-medium m-2 ">Guatemala, Zona 1</div>
                                <div className="flex fap-4 items-center font-medium m-2">clublibroGuate@gmail.com</div>
                            
                            </div>
                        </div>

                        </div>
                        <div className="max-w-[800]"></div>
                        <h3 className="font-bold mt-16 mb-10">Club de libro de Guatemala </h3>
                        <p>Para nosotros es un placer poder atenderle en Horarios habiles y que pueda disfrutar de nustros planes gratis y de membresia para prestamos de libros asi
                            como reuniones de lectura y reseñas de libros.
                        
                        </p>
                    <div className='mb-8'>
                        <div className='grid grid-cols-2'>
                           <button className="flex border bg-blue-500 border-blue-600 text-center items-center rounded m-4 px-4 py-1 
                            hover:bg-blue-600 hover:text-white gap-2" >
                                
                                <a href="https://www.facebook.com/profile.php?id=100040407080122" className='text-center'>
                                    Facebook
                                    <BsFacebook/>
                                </a>
                            </button>
                            <button className="flex border bg-cyan-500 border-blue-600 text-center items-center rounded m-4 px-4 py-1 
                            hover:bg-cyan-600 hover:text-white gap-2" >
                                
                                <a href="https://www.linkedin.com/in/miguel-enrique-alvarez-merlos-9b6703248/" className='text-center'>
                                    Linkedin
                                    <AiFillLinkedin/>
                                </a>
                            </button>

                        </div>   
                    </div>
                </div> 
            </div>
        </section>
</>
    )
}

export default Home
