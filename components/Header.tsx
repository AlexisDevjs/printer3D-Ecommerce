"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > window.innerHeight - 80);
      } else {
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const getHeaderStyle = () => {
    if (isHomePage) {
      return isScrolled
        ? "text-[#1a5e9d] bg-white/50 shadow-sm backdrop-blur-[10px]"
        : "bg-transparent text-white backdrop-blur-[10px]";
    } else {
      return isScrolled
        ? "text-[#1a5e9d] shadow-sm backdrop-blur-[10px]"
        : "bg-white text-[#1a5e9d] shadow-sm backdrop-blur-[10px]";
    }
  };

  const getLinkStyle = (isActive: boolean) => {
    if (isHomePage) {
      return isScrolled
        ? isActive
          ? "text-[#53cde2]"
          : "text-[#1a5e9d] hover:text-[#53cde2]"
        : "text-white hover:text-[#53cde2]/80";
    } else {
      return isActive
        ? "text-[#53cde2]"
        : "text-[#1a5e9d] hover:text-[#53cde2]";
    }
  };

  const getButtonStyle = () => {
    if (isHomePage) {
      return isScrolled
        ? "bg-primary/80 text-white hover:bg-primary"
        : "bg-white/10 text-white hover:bg-white/20";
    } else {
      return "bg-primary/80 text-white hover:bg-primary";
    }
  };

  const menuItems = ["Servicios", "Productos", "Contacto"];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${getHeaderStyle()}`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 py-4 font-medium">
        <Link
          href="/"
          className={`text-2xl font-bold ${
            isScrolled || !isHomePage
              ? "bg-gradient-to-r from-[#1a5e9d] via-[#2ca58d] to-[#53cde2] bg-clip-text text-transparent"
              : "text-white"
          }`}
        >
          Printer3D Sto
        </Link>
        <div className="hidden md:flex items-center justify-center space-x-6">
          {["Servicios", "Productos", "Contacto"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`relative transition-colors ${getLinkStyle(
                pathname === `/${item.toLowerCase()}`
              )} group text-[17px] font-semibold`}
            >
              {item}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#1a5e9d] via-[#2ca58d] to-[#53cde2] transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <Button
            variant={isScrolled || !isHomePage ? "default" : "secondary"}
            className={`hidden md:inline-flex transition-all duration-300 ${getButtonStyle()}`}
          >
            Cotizar
          </Button>
          <motion.button
            className={`md:hidden ${
              isScrolled || !isHomePage ? "text-[#1a5e9d]" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={false}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence initial={false} mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`py-2 md:hidden col-span-3 ${
              isScrolled || !isHomePage ? "bg-white" : "bg-gray-900"
            }`}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto flex flex-col space-y-2 px-4">
              {menuItems.map((item) => (
                <motion.div key={item} variants={itemVariants}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className={`relative transition-colors ${getLinkStyle(
                      pathname === `/${item.toLowerCase()}`
                    )} group`}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#1a5e9d] via-[#2ca58d] to-[#53cde2] transition-all duration-300 ease-out group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              <div>
                <Button
                  variant={isScrolled || !isHomePage ? "default" : "secondary"}
                  className={`w-full transition-all duration-300 ${getButtonStyle()}`}
                >
                  Cotizar
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
