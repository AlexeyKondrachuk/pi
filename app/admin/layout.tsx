import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../../Components/admin/Header";
import { Providers } from "../Providers"; // Импортируем обёртку
import PrivateRoute from "../../Components/admin/PrivateRouter"; // Клиентский компонент для проверки

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin panel with private routing",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <PrivateRoute>{children}</PrivateRoute>
        </Providers>
      </body>
    </html>
  );
}