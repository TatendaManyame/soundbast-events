import './globals.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}