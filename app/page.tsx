import type { Metadata, Viewport } from "next"
import ClientPage from "./ClientPage"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "RP Piscinas | Piscinas com Deck de Madeira em Todo o Brasil",
  description:
    "Instalação rápida e personalizada de piscinas com deck de madeira em todo o Brasil. Solicite seu orçamento agora e transforme seu espaço com elegância e conforto!",
}

export default function Home() {
  return <ClientPage />
}

