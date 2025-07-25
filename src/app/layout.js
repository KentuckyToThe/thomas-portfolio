import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thomas - Health Informatics & AI Developer",
  description: "Portfolio of Thomas - Health Informatics student at UCF, specializing in AI solutions for healthcare and military applications",
  keywords: "health informatics, AI developer, healthcare technology, UCF, HIIM, medical software, HIPAA compliance",
  openGraph: {
    title: "Thomas - Health Informatics & AI Developer",
    description: "Building innovative AI solutions for healthcare and military applications",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}