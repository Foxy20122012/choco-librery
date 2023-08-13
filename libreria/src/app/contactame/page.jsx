'use client'
/*HOOKS*/
import React, {useState, useEffect} from 'react'
import { useHasMounted } from '@/src/hooks/useHasMounted'

import Image from "@/src/components/Image";

import { SiWebmoney } from "react-icons/si";
import { BsFillCursorFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { BiAlignMiddle } from "react-icons/bi";

const Contactame = () => {
  const hasMounted = useHasMounted();
    if(!hasMounted) {
        return  <div className="loader">
        <div className="spinner">
          
        </div>
      </div>;

      }
  return (
    <>
      <Image
        className="bg-white"
        imageUrl="https://img.freepik.com/foto-gratis/dos-hombres-negocios-confia-estrechar-mano-reunion-oficina-exito-trato-saludo-concepto-socio_1423-185.jpg"
      >
        <h1 className="sm:text-5xl sm:m-40">Bienvenido querido Usuario </h1>
        <h1 className="Text-center sm:m-40 sm:text-5xl">
          Gracias por tomarse el tiempo para comunicarse. ¿Cómo puedo ayudarte
          hoy?
        </h1>
      </Image>

      <section className="m-10 bg-white ">
        <div className="text-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contactame
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            ¿Tienes un problema técnico o necesitas ayuda con algún asunto en
            particular? ¡Hazlo saber! Estoy aquí para ayudarte.
          </p>
          <form action="https://formsubmit.co/umbrellamaximus43@gmail.com" method="POST" className="space-y-8 ">
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Nombre
                <BsFillFileEarmarkPersonFill className="flex mx-auto text-[#3fccebfa]" />
              </label>
              <input
                type="text"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 textt-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Tu nombre"
                required
              ></input>
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Tu correo
                <SiWebmoney className="flex mx-auto text-[#3fccebfa]" />
              </label>
              <input
                type="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 textt-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Usuario@gmail.com"
                required
              ></input>
            </div>
            <div>
              <label
                for="asunto"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Asunto
                <BiAlignMiddle className="flex mx-auto text-[#3fccebfa]" />
              </label>
              <input 
                type="text"
                name="text"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Permítenos saber en qué te podemos ayudar"
                required
              ></input>
            </div>
            <div class="sm:col-span-2">
              <label
                for="endaje"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Tu mensaje
                <BsFillEnvelopeFill className="flex mx-auto text-[#3fccebfa]" />
              </label>
              <textarea
                name="text"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Deja un comentario..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              value="Enviar"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[#3fccebfa] hover:bg-[#67c8e6fa]"
            >
              Enviar
              <BsFillCursorFill className="flex mx-auto text-[#fffffffa]" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contactame;
