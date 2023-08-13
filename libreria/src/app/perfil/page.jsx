'use client'

/*HOOKS */
import React, {useState, useEffect} from 'react'
import { useHasMounted } from '@/src/hooks/useHasMounted'

import Card2 from "@/src/components/Card2"
import Image from "@/src/components/Image"
import Titulo from "@/src/components/Titulo"
import Calendar from '@/src/components/Calendario'

const Perfil=()=>{
    const hasMounted = useHasMounted();
    if(!hasMounted) {
        return  <div className="loader">
        <div className="spinner"></div>
      </div>;

      }
return (
    
    <div className="text-center">
            <Image  className="bg-white" imageUrl='https://lago-cdn.thron.com/delivery/public/image/lago/fb7ffe38-688e-453e-87fa-501a3575f06f/sqVrcnw/std/1200x902/libreria-para-salon-de-pared-or-libreria-lagolinea-or-lago.webp?cropx=11.75&cropy=5.601750547046&cropw=62.5&croph=65.82056892779&quality=70'>
                <h1 className="sm:text-5xl sm:m-20">Este es el horario del Club.</h1>
                <h1 className="text-center sm:m-20 sm:text-2xl  font-medium leading-tight text-[#ffffff] "> 
                Asiste a las proximas reuniones de nuestro club
                </h1>
                </Image>

             <Titulo  title="Agenda cita a la reunion  Ventajas"/>

            <div className="flex justify-center m-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
            
               

            <Card2
             imageUrl="https://concepto.de/wp-content/uploads/2013/05/tiempo-2-1-e1590450602954-800x416.jpg "
             imageAlt=""
             Descripcion="Ahorra Tiempo."
             DescripcionMobile="Ahorras tiempo en registros"
             />
            
            <Card2
             imageUrl="https://lago-cdn.thron.com/delivery/public/image/lago/fb7ffe38-688e-453e-87fa-501a3575f06f/sqVrcnw/std/1200x902/libreria-para-salon-de-pared-or-libreria-lagolinea-or-lago.webp?cropx=11.75&cropy=5.601750547046&cropw=62.5&croph=65.82056892779&quality=70"
             imageAlt="Frontend Developer"
             Descripcion="Cliente Vip"
             DescripcionMobile="Cliente vip"
             />          
            </div>   
            </div>

        <Calendar/>

 </div>

   
)

}

export default Perfil;