"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Instagram, Facebook, CheckCircle, MessageCircle, X, Search, Menu, ChevronRight } from "lucide-react"
import { CalculatorIcon, PencilRulerIcon, HardHatIcon, ShieldCheckIcon, ArrowRightIcon } from "lucide-react"

export default function ClientPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(true);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if cookies have been accepted
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setCookiesAccepted(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };

  const openPrivacyPolicy = (e: React.MouseEvent) => {
    e.preventDefault();
    setPrivacyPolicyOpen(true);
  };

  const closePrivacyPolicy = () => {
    setPrivacyPolicyOpen(false);
  };

  const openImageModal = (imageSrc: string, imageAlt: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#beneficios", label: "Benefícios" },
    { href: "#processo", label: "Processo" },
    { href: "#galeria", label: "Galeria" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Modal para exibir imagem ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-white/20 rounded-full p-2 hover:bg-white/40 transition-colors z-10"
                onClick={closeImageModal}
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
                <Image
                  src={selectedImage}
                  alt="Imagem ampliada de piscina com deck de madeira"
                  fill
                  quality={90}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal para Política de Privacidade */}
      <AnimatePresence>
        {privacyPolicyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closePrivacyPolicy}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-xl max-w-3xl max-h-[80vh] w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-[#01294C] text-white p-4 flex justify-between items-center shadow-md">
                <h2 className="text-xl font-bold">Política de Privacidade</h2>
                <button 
                  className="bg-white/20 rounded-full p-2 hover:bg-white/40 transition-colors"
                  onClick={closePrivacyPolicy}
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[calc(80vh-70px)]">
                <div className="prose prose-sm md:prose-base max-w-none">
                  <h3 className="text-[#01294C] font-bold text-lg">Introdução</h3>
                  <p>
                    A RP Piscinas valoriza a privacidade dos usuários de nosso site e está comprometida em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as informações fornecidas por você.
                  </p>

                  <h3 className="text-[#01294C] font-bold text-lg mt-6">Informações Coletadas</h3>
                  <p>
                    Coletamos informações pessoais como nome, endereço de e-mail, número de telefone e cidade quando você preenche nosso formulário de contato para solicitação de orçamento.
                  </p>
                  <p>
                    Também coletamos informações não pessoais, como dados de navegação, endereço IP, tipo de navegador e dispositivo utilizado, por meio de cookies e tecnologias similares.
                  </p>

                  <h3 className="text-[#01294C] font-bold text-lg mt-6">Uso das Informações</h3>
                  <p>
                    Utilizamos suas informações pessoais para:
                  </p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Responder às suas solicitações de orçamento e contato</li>
                    <li>Fornecer informações sobre nossos produtos e serviços</li>
                    <li>Melhorar nosso site e a experiência do usuário</li>
                    <li>Enviar comunicações de marketing, caso você tenha consentido</li>
                  </ul>

                  <h3 className="text-[#01294C] font-bold text-lg mt-6">Cookies</h3>
                  <p>
                    Nosso site utiliza cookies e tecnologias similares para melhorar sua experiência de navegação. Os cookies são pequenos arquivos armazenados no seu dispositivo que nos ajudam a:
                  </p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Lembrar suas preferências e configurações</li>
                    <li>Entender como você utiliza nosso site</li>
                    <li>Melhorar e personalizar sua experiência</li>
                  </ul>
                  <p>
                    Você pode gerenciar ou desativar os cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site.
                  </p>

                  <h3 className="text-[#01294C] font-bold text-lg mt-6">Compartilhamento de Informações</h3>
                  <p>
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing sem o seu consentimento explícito. Podemos compartilhar informações com prestadores de serviços confiáveis que nos auxiliam em nossas operações comerciais.
                  </p>

                  <h3 className="text-[#01294C] font-bold text-lg mt-6">Segurança</h3>
                  <p>
                    Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, perda ou alteração.
                  </p>

                  <h3 className="text-[#01294C] font-bold text-lg mt-6">Seus Direitos</h3>
                  <p>
                    Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais. Para exercer esses direitos, entre em contato conosco através dos canais informados ao final desta política.
                  </p>

                  <h3 className="text-[#01294C] font-bold text-lg mt-6">Alterações nesta Política</h3>
                  <p>
                    Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações.
                  </p>

                  <h3 className="text-[#01294C] font-bold text-lg mt-6">Contato</h3>
                  <p>
                    Se você tiver dúvidas ou preocupações sobre nossa Política de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco pelo e-mail contato@rppiscinasrv.com.br ou pelo telefone (64) 99225-9747.
                  </p>

                  <p className="text-sm text-gray-500 mt-8">
                    Última atualização: {new Date().toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
              
              <div className="sticky bottom-0 bg-gray-50 p-4 border-t border-gray-200 text-center">
                <Button onClick={closePrivacyPolicy} className="bg-amber-500 hover:bg-amber-600 text-[#01294C] font-medium">
                  Entendi
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://api.whatsapp.com/send/?phone=5564992259747&text&type=phone_number&app_absent=0"
        className="fixed bottom-10 right-8 z-[9999] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-105 group animate-pulse-slow"
        style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar via WhatsApp"
      >
        <span className="absolute -inset-2 bg-green-500 rounded-full opacity-20 animate-ping-slow group-hover:opacity-40"></span>
        <MessageCircle className="h-7 w-7" strokeWidth={2.5} />
      </Link>

      {/* Header */}
      <header className={`sticky top-0 left-0 right-0 z-30 bg-gradient-to-r from-[#01294C] to-[#01294C]/90 text-white transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-4 md:py-6'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="RP Piscinas Logo"
                width={180}
                height={60}
                className="w-auto h-12 sm:h-14"
                priority
                quality={100}
                unoptimized
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                size="sm"
                className="bg-amber-500 hover:bg-amber-600 text-[#01294C] font-medium"
                asChild
              >
                <Link href="#contato">Solicitar orçamento</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#01294C] text-white py-16 md:py-24 overflow-hidden">
        {/* Ondas decorativas - posicionada mais abaixo */}
        <div className="absolute bottom-[-300px] left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Transforme seu Espaço com Piscinas e Decks de Madeira
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 animate-slide-up delay-200">
              Instalação rápida e personalizada em todo o Brasil. Garantia de 3 meses e atendimento profissional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
              <Button
                asChild
                className="bg-amber-500 hover:bg-amber-600 text-[#01294C] font-medium text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-normal text-center min-w-[200px]"
              >
                <Link href="https://api.whatsapp.com/send/?phone=5564992259747&text&type=phone_number&app_absent=0" target="_blank">
                  <span className="flex items-center gap-2">
                    Solicite seu orçamento agora
                    <ArrowRightIcon className="w-5 h-5" />
                  </span>
                </Link>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center animate-slide-up delay-400 relative z-20">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-2" />
                <p className="font-medium">Garantia de 3 meses</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-2" />
                <p className="font-medium">Atendimento em todo Brasil</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-2" />
                <p className="font-medium">Instalação rápida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#01294C]"
          >
            <div className="px-4 py-4 space-y-3 flex flex-col">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="py-2 px-4 hover:bg-[#023e73]/30 rounded-md transition-colors text-white/90 hover:text-white"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  size="sm"
                  className="bg-amber-500 hover:bg-amber-600 text-[#01294C] font-medium w-full whitespace-normal"
                  asChild
                  onClick={closeMobileMenu}
                >
                  <Link href="#contato">Solicitar orçamento</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Designs exclusivos para seu espaço */}
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
                    alt="Piscina compacta com deck de madeira premium, acabamento envernizado de alto padrão" 
                    width={600} 
                    height={800}
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUG/8QAIRAAAgIBAwUBAAAAAAAAAAAAAQIDBBEABRIGEyExQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EABsRAAICAwEAAAAAAAAAAAAAAAECAAQFEQMh/9oADAMBAAIRAxEAPwBvt9bqLXy9kR1m74jkgkHGQCcZb3gk+PTppKjRa7XMVJWNSSJGqCWORgS3Ej0xPojWU9o7dDXUh6zO3EggMScn9ONJLs21v1DJLGiS9x3JMagkZyOXr76Ar+hcEE7Pk9Fa8o/UUdUTEYj/2Q=="
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
                    alt="Piscina moderna com deck de madeira e cascata integrada, design contemporâneo com iluminação natural" 
                    width={600} 
                    height={800}
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABBEhBRITFDFBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADEQT/2gAMAwEAAhEDEQA/ALGhQpXIw3BS76vJAcHvU4SQkpJAHkePGCfPjOio1d1W9tPcVsXRXVWEJLaiMp8H9450aKaFRcnbM2wqOSSX/9k="
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
                    alt="Piscina externa ecológica com deck de madeira elevado, perfeita para espaços ao ar livre com escada integrada" 
                    width={600} 
                    height={800}
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQMCBAURAAYSExQhQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECEQMSQQT/2gAMAwEAAhEDEQA/ALGhQpXIw3BS76vJAcHvU4SQkpJAHkePGCfPjOio1d1W9tPcVsXRXVWEJLaiMp8H9450aKaFRcnbM2wqOSSX/9k="
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
                    Todas as nossas piscinas são instaladas com material de primeira qualidade e garantia de 3 meses. 
                    Visite nossa galeria para conhecer mais projetos personalizados.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section id="beneficios" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#01294C] tracking-tight">
                Benefícios das Piscinas com Deck
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Descubra por que as piscinas com deck de madeira são a escolha perfeita para seu espaço
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  title: "Ambiente Moderno",
                  description: "Valorização imobiliária com um design contemporâneo que se destaca em qualquer espaço.",
                  icon: <CheckCircle className="h-8 w-8 text-[#01294C]" />,
                  delay: 0.1,
                },
                {
                  title: "Conforto Térmico",
                  description: "Decks de madeira oferecem conforto térmico superior, mesmo nos dias mais quentes do ano.",
                  icon: <CheckCircle className="h-8 w-8 text-[#01294C]" />,
                  delay: 0.2,
                },
                {
                  title: "Segurança Garantida",
                  description: "Materiais antiderrapantes e sistema de drenagem eficiente para maior segurança de todos.",
                  icon: <CheckCircle className="h-8 w-8 text-[#01294C]" />,
                  delay: 0.3,
                },
                {
                  title: "Instalação Rápida",
                  description: "Processo simples e limpo, sem grandes obras ou transtornos em sua residência.",
                  icon: <CheckCircle className="h-8 w-8 text-[#01294C]" />,
                  delay: 0.4,
                },
                {
                  title: "Personalização Total",
                  description: "Projetos sob medida que se adaptam perfeitamente ao seu espaço disponível.",
                  icon: <CheckCircle className="h-8 w-8 text-[#01294C]" />,
                  delay: 0.5,
                },
                {
                  title: "Durabilidade Superior",
                  description: "Materiais de alta qualidade tratados para resistir a diferentes condições climáticas.",
                  icon: <CheckCircle className="h-8 w-8 text-[#01294C]" />,
                  delay: 0.6,
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: benefit.delay }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#01294C]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#01294C] mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="processo" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#01294C] tracking-tight">
                Como Trabalhamos
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Da concepção à entrega, nosso processo é simples e transparente
              </p>
            </motion.div>

            <div className="relative">
              {[
                {
                  title: "Orçamento Personalizado",
                  description: "Apresentamos um orçamento detalhado com base nas suas necessidades específicas e espaço disponível.",
                  icon: <CalculatorIcon className="h-12 w-12" />,
                  imageUrl: "/piscina1.jpg",
                  delay: 0.1
                },
                {
                  title: "Projeto Exclusivo",
                  description: "Desenvolvemos um projeto sob medida para seu espaço, considerando suas preferências e estilo.",
                  icon: <PencilRulerIcon className="h-12 w-12" />,
                  imageUrl: "/piscina2.jpg",
                  delay: 0.3
                },
                {
                  title: "Instalação Profissional",
                  description: "Nossa equipe de especialistas realiza a instalação com precisão e atenção aos detalhes.",
                  icon: <HardHatIcon className="h-12 w-12" />,
                  imageUrl: "/piscina3.jpg",
                  delay: 0.5
                },
                {
                  title: "Entrega e Garantia",
                  description: "Entregamos seu projeto finalizado com garantia de 3 meses e suporte contínuo em todo o Brasil.",
                  icon: <ShieldCheckIcon className="h-12 w-12" />,
                  imageUrl: "/projeto6.jpg",
                  delay: 0.7
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center mb-16 md:mb-24 ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: step.delay }}
                >
                  {/* Image */}
                  <div className="w-full md:w-5/12">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#01294C] to-amber-500 opacity-50 blur-lg transform scale-105"></div>
                      <div className="bg-white p-2 rounded-xl shadow-lg relative">
                        <div className="overflow-hidden rounded-lg">
                          <Image
                            src={step.imageUrl}
                            alt={step.title}
                            width={600}
                            height={400}
                            className="h-64 md:h-80 w-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                  </div>
                      </div>
                      
                      {/* Number badge */}
                      <div className="absolute -top-5 -left-5 w-16 h-16 flex items-center justify-center bg-[#01294C] text-white rounded-full text-2xl font-bold shadow-md border-4 border-white">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-5/12 mt-8 md:mt-0 md:mx-8">
                    <div className={`bg-white p-8 rounded-xl shadow-lg border-l-4 ${
                      index % 2 === 0 ? 'border-[#01294C]' : 'border-amber-500'
                    }`}>
                      <div className="mb-4 bg-gray-100 p-4 inline-block rounded-full">
                        <div className={`text-${index % 2 === 0 ? '[#01294C]' : 'amber-500'}`}>
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#01294C] mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                      
                      {index === 0 && (
                        <div className="mt-6">
                          <Button
                            className="bg-[#01294C] hover:bg-[#01294C]/90 text-white flex items-center gap-2"
                            asChild
                          >
                            <Link href="#contato">
                              Solicitar orçamento
                              <ArrowRightIcon className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="galeria" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Galeria de Projetos</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Inspire-se com nossos projetos de piscinas com deck de madeira realizados em todo o Brasil
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "/projeto1.jpg",
                  alt: "Piscina com deck de madeira premium em área residencial com paisagismo integrado"
                },
                {
                  src: "/projeto2.jpg",
                  alt: "Piscina com deck em formato personalizado para chácara, ideal para espaços amplos"
                },
                {
                  src: "/projeto3.jpg",
                  alt: "Projeto de piscina com deck para área de lazer em condomínio, com espaço gourmet integrado"
                },
                {
                  src: "/projeto4.jpg",
                  alt: "Piscina com deck de madeira tratada em área externa, resistente a diferentes condições climáticas"
                },
                {
                  src: "/projeto5.jpg",
                  alt: "Deck de madeira ao redor de piscina em residência, com acabamento premium e iluminação integrada"
                },
                {
                  src: "/projeto6.jpg",
                  alt: "Projeto personalizado de piscina com deck para espaço compacto, maximizando o uso da área disponível"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg h-64 group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openImageModal(item.src, item.alt)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/30 rounded-full p-2 backdrop-blur-sm">
                      <Search className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium">{item.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#01294C] tracking-tight">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                A satisfação dos nossos clientes é a nossa maior recompensa
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "João Silva",
                  location: "São Paulo, SP",
                  quote: "A piscina com deck superou todas as minhas expectativas. A equipe da RP Piscinas foi extremamente profissional e atenciosa durante todo o processo.",
                  rating: 5,
                },
                {
                  name: "Maria Oliveira",
                  location: "Rio de Janeiro, RJ",
                  quote: "Transformou completamente a área externa da minha casa. O deck de madeira deu um charme especial à piscina. Recomendo a todos!",
                  rating: 5,
                },
                {
                  name: "Carlos Mendes",
                  location: "Salvador, BA",
                  quote: "Desde a primeira consulta até a instalação final, a equipe foi extremamente competente. O resultado ficou ainda melhor do que imaginamos.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <svg
                    className="w-12 h-12 text-amber-400 mb-6"
                            xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                            viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.483v10h-9.983z" />
                  </svg>
                  
                  <blockquote className="text-gray-700 mb-6 italic">"{testimonial.quote}"</blockquote>
                  
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-400 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                  
                  <div className="flex items-center border-t pt-6 border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#01294C] to-[#01294C]/70 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#01294C]">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                className="space-y-6"
                >
                <h2 className="text-3xl md:text-4xl font-bold text-[#01294C]">Entre em contato</h2>
                  <p className="text-lg text-gray-600 mb-8">
                  Estamos prontos para criar a piscina com deck perfeita para o seu espaço. Preencha o formulário 
                  e nossa equipe entrará em contato em até 24 horas para discutir seu projeto.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-[#01294C]/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-[#01294C]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#01294C]">Telefone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+5564992259747" className="hover:text-[#01294C] transition-colors">
                          (64) 99225-9747
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-[#01294C]/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-[#01294C]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#01294C]">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contato@rppiscinasrv.com.br" className="hover:text-[#01294C] transition-colors">
                          contato@rppiscinasrv.com.br
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-[#01294C]/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-[#01294C]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#01294C]">Atendemos em</h3>
                      <p className="text-gray-600">
                        Todo Brasil
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center space-x-5">
                    <a
                      href="https://www.instagram.com/rppiscinasrv/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#01294C]/10 p-3 rounded-full hover:bg-[#01294C]/20 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-[#01294C]" />
                    </a>
                    <a
                      href="https://www.facebook.com/people/RP-Piscinas/61573730635765/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#01294C]/10 p-3 rounded-full hover:bg-[#01294C]/20 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5 text-[#01294C]" />
                    </a>
                  </div>
                  </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8"
                >
                <h3 className="text-2xl font-bold text-[#01294C] mb-6">Solicite um orçamento</h3>
                  <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nome completo
                      </label>
                      <Input id="name" placeholder="Seu nome" className="w-full" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Telefone
                        </label>
                      <Input id="phone" placeholder="(00) 0000-0000" pattern="\([0-9]{2}\) [0-9]{4}-[0-9]{4}" className="w-full" />
                    </div>
                      </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                        </label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="w-full" />
                    </div>

                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium text-gray-700">
                      Cidade
                      </label>
                    <Input id="city" placeholder="Sua cidade" className="w-full" />
                    </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Mensagem (opcional)
                      </label>
                    <Textarea
                      id="message"
                      placeholder="Compartilhe detalhes sobre seu projeto, como tamanho desejado, preferências de cor, etc."
                      className="w-full h-32"
                    />
                    </div>

                    <Button
                      type="submit"
                    className="w-full py-6 bg-amber-500 hover:bg-amber-600 text-white transition-colors"
                    >
                    Enviar solicitação
                    </Button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    Ao enviar, você concorda em receber comunicações sobre seu orçamento.
                  </p>
                  </form>
                </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#01294C] text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu espaço?</h2>
              <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto">
                Entre em contato agora mesmo e tenha a piscina com deck dos seus sonhos em poucos dias!
              </p>
              <Button
                size="lg"
                className="bg-white text-[#01294C] hover:bg-blue-50 font-bold px-4 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full whitespace-normal sm:whitespace-nowrap"
                asChild
              >
                <Link href="#contato">Solicitar orçamento agora</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#01294C] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ativo%202-9k7xdDvyE7oktzUM2FxB6Bytg92aEm.png"
                  alt="RP Piscinas Logo"
                width={160}
                height={60}
                className="mb-6"
              />
              <p className="text-white/70 mb-6">
                Transformando espaços com piscinas de qualidade e deck de madeira em todo o Brasil.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/rppiscinasrv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/people/RP-Piscinas/61573730635765/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Links rápidos</h3>
              <nav className="flex flex-col space-y-3">
                <Link href="#beneficios" className="text-white/70 hover:text-white transition-colors">
                  Benefícios
                </Link>
                <Link href="#processo" className="text-white/70 hover:text-white transition-colors">
                  Processo
                </Link>
                <Link href="#galeria" className="text-white/70 hover:text-white transition-colors">
                  Galeria
                </Link>
                <Link href="#contato" className="text-white/70 hover:text-white transition-colors">
                  Contato
                </Link>
              </nav>
                </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <span className="text-white/70">
                    <a href="tel:+5564992259747" className="hover:text-white transition-colors">
                      (64) 99225-9747
                    </a>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <span className="text-white/70">
                    <a href="mailto:contato@rppiscinasrv.com.br" className="hover:text-white transition-colors">
                      contato@rppiscinasrv.com.br
                    </a>
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-amber-400 mt-1" />
                  <span className="text-white/70">Atendemos em todo o Brasil</span>
              </div>
            </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/50 text-sm">
            <p> {new Date().getFullYear()} RP Piscinas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Cookie consent banner */}
      {!cookiesAccepted && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white z-[40] shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm md:text-base">
                <p>Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda em receber comunicações sobre seu orçamento. <a href="#" onClick={openPrivacyPolicy} className="underline text-amber-400 hover:text-amber-300">Política de Privacidade</a>.</p>
              </div>
              <div className="flex-shrink-0">
                <Button 
                  onClick={acceptCookies} 
                  className="bg-amber-500 hover:bg-amber-600 text-[#01294C] font-medium whitespace-nowrap"
                >
                  Aceitar Cookies
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
