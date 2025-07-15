'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';


export default function NavBar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   let lastY = window.scrollY;
  //   const onScroll = () => {
  //     setIsVisible(window.scrollY <= lastY);
  //     lastY = window.scrollY;
  //   };
  //   window.addEventListener('scroll', onScroll);
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const getHeading = () => {
    switch (pathname) {
      case '/projects': return 'Personal Projects';
      case '/contact': return "Send Fan Mail";
      case '/experience': return 'Experience';
      default: return 'Abhinav Ranish';
    }
  };

  return (
    <motion.nav
      // animate both Y *and* borderRadius
      initial={{ y: 0, borderRadius: 999 }}
      animate={{
        y: isVisible ? 0 : -100,
        borderRadius: menuOpen ? 30 : 900,        // 12px when open, pill when closed
      }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        md:w-[60%] w-[80%] max-w-7xl
        backdrop-blur-sm
        px-6 py-3 z-50 overflow-hidden
        bg-white/70
      "
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image src="/favicon.ico" alt="logo" width={32} height={32} className="rounded-full" />
          </Link>
          <h1 className="font-semibold font-medium text-gray-900">
            {getHeading()}
          </h1>
        </div>
        <div className="flex space-x-6">
          <Link href="/projects" className="font-medium text-gray-900 hover:text-pink-400">Projects</Link>
          <Link href="/experience" className="font-medium text-gray-900 hover:text-pink-400">Work Experience</Link>
          <Link href="/contact" className="font-medium text-gray-900 hover:text-pink-400">Connect</Link>
          <Link href="/qa" className="font-medium text-gray-900 hover:text-pink-400">Mr Robot</Link>

        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between">
        <Link href="/">
          <Image src="/favicon.ico" alt="logo" width={28} height={28} />
        </Link>
        <h1 className="text-gray-900 font-semibold">{getHeading()}</h1>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="text-black p-2"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden mt-4 overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-4 py-4 text-gray-900">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
              <Link href="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Connect</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
