import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Casa da Cultura César Oliveira", description: "Programação cultural, espetáculos e encontros." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-PT"><body>{children}</body></html>; }