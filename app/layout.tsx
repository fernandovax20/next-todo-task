import { ReactNode } from 'react';
import './globals.css';
import Navbar from './components/Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
