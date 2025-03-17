"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ImageSlider() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Elementos decorativos */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#01294C]/10 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block mb-3"
            >
              <span className="text-sm font-medium tracking-wider text-amber-500 bg-amber-50 px-4 py-1.5 rounded-full uppercase">
                Galeria Inspiradora
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-center mb-6 text-[#01294C] tracking-tight leading-tight"
            >
              Designs Exclusivos <br className="hidden md:block" />
              <span className="relative inline-block">
                para seu Espaço
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8.5C65 -2.5 179 -2.5 297 8.5" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Inspirações que transformam seu ambiente em um espaço único de lazer e sofisticação
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Primeiro Card - Piscina com Deck Compacto */}
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-xl h-[350px] md:h-[400px] group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <Image 
                src="/piscina1.jpg" 
                alt="Piscina compacta com deck de madeira e parede azul" 
                width={600} 
                height={800}
                unoptimized={true}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold py-1 px-3 rounded-full z-20">
                PREMIUM
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs py-1 px-2 rounded mb-3">
                  Design Clássico
                </span>
                <h3 className="text-white text-2xl font-bold mb-3">Design Envernizado</h3>
                <p className="text-white/90">Acabamento premium com vaso decorativo e deck de madeira envernizada.</p>
                <div className="mt-4 flex items-center">
                  <ChevronRight className="h-5 w-5 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium ml-1 group-hover:underline">Ver detalhes</span>
                </div>
              </div>
            </motion.div>

            {/* Segundo Card - Piscina com Cascata */}
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-xl h-[350px] md:h-[450px] md:mt-[-25px] group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <Image 
                src="/piscina2.jpg" 
                alt="Piscina com deck de madeira e cascata moderna" 
                width={600} 
                height={800}
                unoptimized={true}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-[#01294C] text-white text-xs font-bold py-1 px-3 rounded-full z-20">
                DESTAQUE
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs py-1 px-2 rounded mb-3">
                  Design Contemporâneo
                </span>
                <h3 className="text-white text-2xl font-bold mb-3">Cascata Integrada</h3>
                <p className="text-white/90">Cascata embutida na parede com iluminação natural e design minimalista.</p>
                <div className="mt-4 flex items-center">
                  <ChevronRight className="h-5 w-5 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium ml-1 group-hover:underline">Ver detalhes</span>
                </div>
              </div>
            </motion.div>

            {/* Terceiro Card - Piscina ao ar livre */}
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-xl h-[350px] md:h-[400px] group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <Image 
                src="/piscina3.jpg" 
                alt="Piscina externa com deck de madeira e céu aberto" 
                width={600} 
                height={800}
                unoptimized={true}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-full z-20">
                ECOLÓGICO
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs py-1 px-2 rounded mb-3">
                  Design Outdoor
                </span>
                <h3 className="text-white text-2xl font-bold mb-3">Área Externa</h3>
                <p className="text-white/90">Perfeita para espaços ao ar livre, com deck elevado e escada integrada.</p>
                <div className="mt-4 flex items-center">
                  <ChevronRight className="h-5 w-5 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium ml-1 group-hover:underline">Ver detalhes</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gradient-to-r from-[#01294C]/5 via-[#01294C]/10 to-[#01294C]/5 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
                    className="w-5 h-5 text-amber-400 mx-0.5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-[#01294C]/80 font-medium">
                Todas as nossas piscinas são instaladas com material de primeira qualidade e garantia de 5 anos. 
                Visite nossa galeria para conhecer mais projetos personalizados.
              </p>
              <div className="mt-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#01294C] hover:bg-[#01294C]/90 text-white py-3 px-8 rounded-full inline-flex items-center font-medium"
                >
                  Ver Galeria Completa
                  <ChevronRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
