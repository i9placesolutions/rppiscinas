import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

<<<<<<< HEAD
=======
export const metadata = {
  generator: 'v0.dev',
  title: 'RP Piscinas | Piscinas com Deck de Madeira em Todo o Brasil',
  description: 'Instalação rápida e personalizada de piscinas com deck de madeira em todo o Brasil. Solicite seu orçamento agora e transforme seu espaço com elegância e conforto!'
};

>>>>>>> 4afdb30e2b52cbfb63c93a4cba8e3046a321f62a
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Instalação rápida e personalizada de piscinas com deck de madeira em todo o Brasil. Solicite seu orçamento agora e transforme seu espaço com elegância e conforto!"
        />
        <meta
          name="keywords"
          content="piscina, piscina com deck, deck de madeira para piscinas, instalação de piscinas, piscinas sob medida, piscinas em todo Brasil"
        />
        <link rel="icon" href="/rp.gif" />
<<<<<<< HEAD
        <title>RP Piscinas | Piscinas com Deck de Madeira em Todo o Brasil</title>
=======
>>>>>>> 4afdb30e2b52cbfb63c93a4cba8e3046a321f62a
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rppiscinasrv.com.br/" />
        <meta property="og:title" content="RP Piscinas | Piscinas com Deck de Madeira em Todo o Brasil" />
        <meta property="og:description" content="Transforme seu espaço com piscinas e decks de madeira de qualidade. Atendemos em todo o Brasil com garantia de 3 meses." />
        <meta property="og:image" content="/piscina1.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rppiscinasrv.com.br/" />
        <meta property="twitter:title" content="RP Piscinas | Piscinas com Deck de Madeira em Todo o Brasil" />
        <meta property="twitter:description" content="Transforme seu espaço com piscinas e decks de madeira de qualidade. Atendemos em todo o Brasil com garantia de 3 meses." />
        <meta property="twitter:image" content="/piscina1.jpg" />

        {/* Preload de recursos críticos */}
        <link rel="preload" href="/piscina1.jpg" as="image" />
        <link rel="preload" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ativo%202-9k7xdDvyE7oktzUM2FxB6Bytg92aEm.png" as="image" />
        
        {/* Folha de estilo para animações */}
        <link rel="stylesheet" href="/animations.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* Dados estruturados Schema.org */}
        <Script
          id="schema-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "RP Piscinas",
              "description": "Instalação de piscinas com deck de madeira em todo o Brasil",
              "telephone": "(64) 99225-9747",
              "email": "contato@rppiscinasrv.com.br",
              "areaServed": "Brasil",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "priceRange": "$$",
              "image": "/piscina1.jpg"
            })
          }}
        />

        <Script
          id="schema-product"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Piscina com Deck de Madeira",
              "description": "Piscinas personalizadas com deck de madeira, instalação rápida e garantia de 3 meses.",
              "image": "/piscina1.jpg",
              "brand": {
                "@type": "Brand",
                "name": "RP Piscinas"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "BRL",
                "price": "0",
                "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "3"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
<<<<<<< HEAD



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
=======
>>>>>>> 4afdb30e2b52cbfb63c93a4cba8e3046a321f62a
