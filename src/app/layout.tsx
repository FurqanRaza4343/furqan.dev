import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import SmoothScroll from "@/components/SmoothScroll";
import ChatWidget from "@/components/ChatWidget";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://furqan.dev"),
  title: {
    default: "Furqan.dev | AI Engineer & GenAI Developer",
    template: "%s | Furqan.dev",
  },
  description:
    "AI Engineer specializing in Generative AI, Conversational AI, AI Agents, and Intelligent Automation. Building AI-powered solutions for the future.",
  keywords: [
    "AI Engineer",
    "GenAI",
    "LLM",
    "Chatbot Developer",
    "AI Agent",
    "RAG",
    "Conversational AI",
    "Python",
    "FastAPI",
    "Furqan Raza",
    "furqan.dev",
    "Karachi AI Developer",
    "Pakistan AI Engineer",
  ],
  authors: [{ name: "Furqan Raza", url: "https://furqan.dev" }],
  creator: "Furqan Raza",
  publisher: "Furqan Raza",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://furqan.dev",
    siteName: "Furqan.dev",
    title: "Furqan.dev | AI Engineer & GenAI Developer",
    description:
      "AI Engineer specializing in Generative AI, Conversational AI, AI Agents, and Intelligent Automation.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Furqan Raza - AI Engineer & GenAI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furqan.dev | AI Engineer & GenAI Developer",
    description:
      "AI Engineer specializing in Generative AI, Conversational AI, AI Agents, and Intelligent Automation.",
    images: ["/og"],
    creator: "@furqandraza",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-100">
        <JsonLd />
        <ThemeProvider>
          <ScrollProgressBar />
          <SmoothScroll>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatWidget />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
