import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-100 w-full px-4 py-5 transition-all duration-300 lg:px-40",
        scrolled
          ? "bg-white/80 shadow-sm backdrop-blur-md"
          : "bg-transparent shadow-none",
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {scrolled ? (
            <img
              src="/images/tahu-kocek-horizontal-terang.png"
              alt="Tahu Kocek Merona"
              className="w-40"
            />
          ) : (
            <img
              src="/images/tahu-kocek-horizontal-gelap.png"
              alt="Tahu Kocek Merona"
              className="w-40"
            />
          )}
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors",
              scrolled
                ? "text-gray-700 hover:text-primary"
                : "text-white hover:text-white/80",
            )}
          >
            Beranda
          </Link>

          <Link
            to="/tentang"
            className={cn(
              "text-sm font-medium transition-colors",
              scrolled
                ? "text-gray-700 hover:text-primary"
                : "text-white hover:text-white/80",
            )}
          >
            Tentang
          </Link>

          <Link
            to="/gallery"
            className={cn(
              "text-sm font-medium transition-colors",
              scrolled
                ? "text-gray-700 hover:text-primary"
                : "text-white hover:text-white/80",
            )}
          >
            Gallery
          </Link>

          <Button>
            <Link to="/menu">Lihat Menu</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
