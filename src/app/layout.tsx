import { ThemeProvider } from "@/app/components/theme-provider";
import StructuredData from "@/app/components/StructuredData";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "500"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://ismailshk.vercel.app"),
  title: {
    default: "Ismail Medjahdi | AI Engineer",
    template: "%s | Ismail Medjahdi",
  },
  description:
    "Portfolio of Ismail Medjahdi, an AI Engineer specializing in NLP, LLMs, and computer vision \u2014 with hands-on experience fine-tuning Arabic language models and building face recognition systems.",
  keywords: [
    "Ismail Medjahdi",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Arabic NLP",
    "Computer Vision",
    "PyTorch",
    "AraBERT",
    "Hugging Face",
    "Transformer",
    "LLM",
    "OpenCV",
    "Python",
    "SHANKER4K",
    "Algeria AI",
    "Attention Is All You Need",
  ],
  openGraph: {
    title: "Ismail Medjahdi | AI Engineer",
    description: "Specializing in NLP, LLMs, and computer vision \u2014 fine-tuning Arabic language models and building face recognition systems.",
    url: "https://ismailshk.vercel.app",
    siteName: "Ismail Medjahdi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ismailshk.vercel.app/Logo Monochrome SHK003.png",
        width: 1200,
        height: 630,
        alt: "Ismail Medjahdi \u2014 AI Engineer",
      },
    ],
    audio: null,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Medjahdi | AI Engineer",
    description:
      "AI Engineer specializing in NLP, LLMs, and computer vision \u2014 fine-tuning Arabic language models and building face recognition systems.",
    creator: "@SHANKER4K",
  },
  icons: {
    icon: "/Logo-Monochrome-SHK003.ico",
    apple: "/Logo Monochrome SHK003.png",
    shortcut: "/Logo Monochrome SHK003.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://ismailshk.vercel.app",
    languages: {
      "en-US": "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    nosnippet: false,
  },
  verification: {
    google: "fgXIud_IWt2XmIdXE9hXYw7ThvGhOPvJu5LkIkoNGOM",
    // yandex: "your-actual-yandex-verification-code",
  },
  appleWebApp: {
    capable: true,
    title: "Ismail Medjahdi Portfolio",
    statusBarStyle: "black-translucent",
    startupImage: "/Logo Monochrome SHK003.png",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`antialiased`}>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
