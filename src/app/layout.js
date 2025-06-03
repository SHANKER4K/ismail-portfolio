import { ThemeProvider } from "@/app/components/theme-provider";
import "./globals.css";

export const metadata = {
  title: "Ismail Medjahdi | Front-end Developer",
  description:
    "Portfolio of Ismail Medjahdi, a passionate Front-end Developer specializing in React and Next.js",
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "web development",
    "portfolio",
    "Ismail",
    "ismail portfolio",
    "portfolio ismail",
  ],
  openGraph: {
    title: "Ismail Medjahdi | Front-end Developer Portfolio",
    description: "View my projects and skills as a Front-end Developer",
    url: "https://ismailshk.vercel.app",
    siteName: "Ismail Medjahdi Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
