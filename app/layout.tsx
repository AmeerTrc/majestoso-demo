import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title:"Majestoso — Demo Conceitual | Centro de São Paulo",
  description:"Uma proposta visual não oficial para o Majestoso, no Largo do Paissandú, criada por Ameer Mustafa.",
  robots:{index:false,follow:true},
  openGraph:{title:"Majestoso — Sabor no coração de São Paulo",description:"Demonstração conceitual não oficial.",locale:"pt_BR",type:"website",images:["/images/majestoso-neon.jpg"]},
  twitter:{card:"summary_large_image",title:"Majestoso — Demo Conceitual",description:"Sabor no coração de São Paulo.",images:["/images/majestoso-neon.jpg"]},
  icons:{icon:"/images/majestoso-neon.jpg"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
