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
    default: "Ismail Medjahdi | Full-Stack Developer",
    template: "%s | Ismail Medjahdi Portfolio",
  },
  description:
    "Portfolio of Ismail Medjahdi, a passionate Full-Stack Developer specializing in React and Next.js",
  keywords: [
    "Ismail Medjahdi",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Expert",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Algeria",
    "Portfolio Developer",
    "Node.js Developer",
    "PostgreSQL",
    "Tailwind CSS",
    "Responsive Web Design",
    "SHANKER4K",
    "Freelance Developer",
    "React.js Specialist",
    "Modern Web Development",
    "API Development",
    "Database Design",
  ],
  openGraph: {
    title: "Ismail Medjahdi | Full-Stack Developer Portfolio",
    description: "View my projects and skills as a Full-Stack Developer",
    url: "https://ismailshk.vercel.app",
    siteName: "Ismail Medjahdi Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ismailshk.vercel.app/Logo Monochrome SHK003.png",
        width: 1200,
        height: 630,
        alt: "Ismail Medjahdi Portfolio",
      },
    ],
    audio: null,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Medjahdi | Full-Stack Developer Portfolio",
    description:
      "View my projects and skills as a Full-Stack Developer specializing in React and Next.js",
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
