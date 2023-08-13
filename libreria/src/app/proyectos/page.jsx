'use client'

/*HOOKS */
import React, {useState, useEffect} from 'react'
import { useHasMounted } from '@/src/hooks/useHasMounted'

import Image from '../../components/Image'
import Cards from "@/src/components/Cards"

import Titulo from '@/src/components/Titulo'

const Proyectos=()=>{
    const hasMounted = useHasMounted();
    if(!hasMounted) {
        return  <div className="loader">
        <div className="spinner"></div>
      </div>;

      }
    return(
        <div>
            <Image  className="bg-white" imageUrl='https://previews.123rf.com/images/artinspiring/artinspiring1909/artinspiring190900998/130370493-frontend-development-web-banner-concept-website-interface.jpg'>
                
             <h1 className="sm:text-5xl sm:m-32">Explora algunos de mis proyectos de desarrollo web,
                    creados con las últimas tecnologías y herramientas. 
             </h1>

            <h1 className="text-center sm:m-32 sm:text-2xl  font-medium leading-tight text-[#ffffff]">
                    Si tienes preguntas o buscas colaborar en un nuevo proyecto, ¡no dudes en contactarme!
            </h1>

                </Image>
        <Titulo title="Enlace Github"/>
        <div className='flex justify-center'>
            <h2 className='sm:text-2xl sm:m-20 text-center '>Descubre mis proyectos más recientes 
                y las tecnologías que utilizó para desarrollarlos. Encontrarás enlaces a los repositorios
                de cada proyecto para explorarlos en detalle.
            </h2>
        </div>
        <div className=' flex justify-center m-14  '>
            
                <Cards 
                imageUrl='https://www.freecodecamp.org/news/content/images/2022/07/git-github.png'
                imageAlt='Github'
                title='Github'
                description='Este es el enlace a mi perfil de Github donde donde podras examinar los repositorios de los proyectos mas a detalle.' 
                linkUrl='https://github.com/Foxy20122012'
                />
            </div>    
        

            <Titulo title="Proyectos Reales"/>
  
        <div className='flex justify-center'>
            <h2 className='sm:text-2xl m-10'>
                Descubre mis proyectos más recientes en colaboración con la comunidad,
                donde utilizó mis habilidades en desarrollo web para crear soluciones 
                innovadoras. Explora en detalle cada proyecto y conoce las tecnologías 
                y herramientas que utilizó para su desarrollo.
            </h2>
        </div>
          <div className='flex justify-center m-14 '>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
                <Cards 
                imageUrl='https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075067/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/Logo_Observatorio_Joven_Extended-07_vfotme.png'
                imageAlt='Observatorio Peru'
                title ='Observatorio Peru'
                description='La construcción de un observatorio joven resulta relevante
                 porque permite visibilizar las necesidades y demandas que enfrenta la 
                 población joven dentro de cada región de cada región del país, lo cual 
                 permitía la construcción de proyectos y politicas locales en favor de 
                 las juventudes' 
                linkUrl='https://observatoriojovenperu.com.pe/peru/'
                />



        <Cards 
         imageUrl='https://restaurante-sp.netlify.app/img/pollo.jpg'
         imageAlt='Pagina Restaurante'
         title='Pagina Restaurante'
         description='Manejo de pedidos y de reservar por parte del cliente y gestion de personal y conocimientos de los platillos del restaurante.' 
          linkUrl='https://github.com/CONOVATEC/Pagina_Restaurante-SP'
         />
        </div>
    </div> 
    <Titulo title="Proyectos Personales"/>
    <div className='flex justify-center'>
            <h2 className='text-2xl m-10'>
            Explora cada proyecto y descubre las tecnologías y herramientas utilizadas en su desarrollo
            </h2>
        </div>
          <div className='flex justify-center m-14 '>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
                <Cards 
                imageUrl='https://encriptador-oracle.vercel.app/img/Mu%C3%B1eco%20(1).png'
                imageAlt='Encriptador de palabras'
                title ='Encriptador '
                description='Encripta tus datos con mi herramienta de cifrado de alta seguridad,
                 desarrollada con las últimas tecnologías y algoritmos avanzados. Mantén tus archivos 
                 protegidos con una solución confiable y eficiente' 
                linkUrl='https://github.com/Foxy20122012/Encriptador-Oracle'
               />



        <Cards 
         imageUrl='data:image/jpeg;base64,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'
         imageAlt='Barberia'
         title='Barberia'
         description='Pagina de servicio completo de Barberia y manejo de precios y ofertas al usuario.' 
          linkUrl='https://github.com/Foxy20122012/Barberia-Alura'
         />
        </div>
    </div> 

    <Titulo title="Proyectos En Construcción"/>

      <div className="flex justify-center text-center py-8 sm::py-16 px-4 mx-auto max-w-screen-md">
  <h1 className="sm:text-2xl sm:font-medium text-center hover:underline">Proximamente Nuevos Proyectos...</h1>
  
</div>
    <p className="sm:mb-text-base leading-relaxed text-center text-gray-900 hover:underline ">Actualmente se estan desarrollando nuevos proyectos para este apartado. Sigue esperando nuevas sorpresas...</p>
        
    <div className='flex justify-center m-14 '>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
                
                <Cards 
                imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ23t0BAQ2PY1C9H9as7Va0aMqtzpJgT8dn0tdM3zvOO8Jp6_thFAMO4-2X1bwh900dot0&usqp=CAU'
                imageAlt='Api Node.js'
                title ='Api comercio'
                description='Api para el manejo de los datos de un Comercio usando Node.js para mostrar los datos desde
                    la base de datos de Oracle.' 
                linkUrl='https://github.com/Foxy20122012/Crud-Comercio-Oracle-Mern/tree/main/BACKEND'
               />

                <Cards 
                imageUrl='https://thumbs.dreamstime.com/b/texto-de-la-versi%C3%B3n-parcial-programa-con-el-hombre-negocios-108609906.jpg'
                imageAlt='Demo ecommerce visual'
                title ='Ecommerce Demo '
                description='Demo de ecommerce frontend de vista e interacción del usuario desdes la parte del Frontend' 
                linkUrl=''
               />

               <Cards 
                imageUrl='https://static.vecteezy.com/system/resources/previews/003/609/444/non_2x/archery-shooting-target-simple-flat-graphic-vector.jpg'
                imageAlt='Tiro Al Blanco'
                title ='Tiro Al Blanco '
                description='Juego interativo con el Usuario de tiro al Blanco usando Canvas y JavaScript' 
                linkUrl='https://github.com/Foxy20122012/Juego-tiro-blanco'
               />

               <Cards 
                imageUrl='https://static.platzi.com/media/blog/mern-stack-284eedb6-ee6b-4441-b181-5064a453a15a.png'
                imageAlt='Stack Mern'
                title ='Stack Mern '
                description='Proyecto de Crud usando Node.js y React.js. Usando la metodologia del Stack Mern.' 
                linkUrl='https://github.com/Foxy20122012/stack-mern-crud'
               />

                <Cards 
                imageUrl='https://raw.githubusercontent.com/EduardoUT/CRUD-Alura-Hotel-ONE-Alura_Challenge/master/src/mx/com/alurahotel/imagenes/menuPrincipal.PNG'
                imageAlt='Sistema Hotel'
                title ='Sistema Hotel '
                description='Codificado usando Java. Sistema de Gestión de registro de clientes y consultas usando un crud y usando 
                    base de datos sql manteniendo relación entre los datos.' 
                linkUrl='https://github.com/Foxy20122012/Sistema-Hotel-Java'
               />

               <Cards 
                imageUrl='data:image/jpeg;base64,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'
                imageAlt='Lista de tareas'
                title ='Lista de Tareas '
                description='Se Generará una lista de tareas a la cual se le podrán añadir tareas pendientes y cambiar el estado de las mismas tareas
                   a ya completadas o pendientes de completar. ' 
                linkUrl='https://github.com/Foxy20122012/Lista-de-tareas.'
               />
        </div>
    </div>
 </div>
    )
}


export default Proyectos