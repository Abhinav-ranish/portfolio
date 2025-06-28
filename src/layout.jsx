
// app/layout.jsx
import './globals.css';
import NavBar from './components/NavBar';
import MusicBar from './components/MusicBar';

export const metadata = {
  title: 'Abhinav Ranish Portfolio',
  description: 'Software Engineer & Cybersecurity Enthusiast',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 font-sans min-h-screen">
        <NavBar />
        <main className="pt-24">{children}</main>
        <MusicBar />
      </body>
    </html>
  );
}