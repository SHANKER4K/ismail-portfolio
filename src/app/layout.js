import { ThemeProvider } from "@/app/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "500"],
});
export const metadata = {
  title: "Ismail Medjahdi | Full-Stack Developer",
  description:
    "Portfolio of Ismail Medjahdi, a passionate Full-Stack Developer specializing in React and Next.js",
  keywords: [
    "Full-Stack developer",
    "React",
    "Next.js",
    "web development",
    "portfolio",
    "SHANKER4K",
    "shkfolio",
    "shanker portfolio",
    "shkportfolio",
    "Ismail",
    "ismail portfolio",
    "portfolio ismail",
  ],
  openGraph: {
    title: "Ismail Medjahdi | Full-Stack Developer Portfolio",
    description: "View my projects and skills as a Full-Stack Developer",
    url: "https://ismailshk.vercel.app",
    siteName: "Ismail Medjahdi Portfolio",
    locale: "ar_DZ",
    type: "website",
    provider: "vercel",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`antialiased`}>
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
