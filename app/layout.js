import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/themeProvider";
import { Inter } from "next/font/google";

const poppins = Inter({
  subsets: ["latin"],
  weight: ["400","500","700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Simplify",
  description: "Project management app , inspired by Jira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={`${poppins.className}`}
      >
        <ThemeProvider  
        attribute="class"
        defaultTheme="dark">
        {children}
        </ThemeProvider>
    
      </body>
    </html>
  );
}
