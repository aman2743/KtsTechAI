import { useState } from "react";
import { ArrowRight, Menu, PackageCheck, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Solutions", href: "#solution" },
    { label: "Features", href: "#benefits" },
    { label: "How It Works", href: "#company" },
    { label: "About Us", href: "#company" },
    { label: "Our Work", href: "#solution" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="relative z-10 mx-auto flex w-[min(1160px,calc(100%-64px))] items-center justify-between pt-7 max-[780px]:w-[min(calc(100%-40px),560px)] max-[780px]:pt-5 max-[420px]:w-[calc(100%-32px)]">

      {/* Brand */}
      <a
        href="/"
        onClick={closeMenu}
        aria-label="LogicForge home"
        className="inline-flex items-center gap-2.5 text-[21px] font-[750] tracking-[-0.8px] text-white"
      >
        <span className="grid size-[34px] place-items-center rounded-[10px] bg-[#b5d548] text-[#1a2a21]">
          <PackageCheck size={22} strokeWidth={2.5} />
        </span>

        <span>
          Kts<span className="text-[#b5d548]">TechAi</span>
        </span>
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        className="hidden border-0 bg-transparent p-1.5 text-white max-[780px]:relative max-[780px]:z-[3] max-[780px]:block"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation */}
      <div
        className={`flex items-center gap-[30px] text-[13px] font-[650] tracking-[0.02em]
          max-[780px]:absolute max-[780px]:left-0 max-[780px]:right-0 max-[780px]:top-[72px]
          max-[780px]:flex-col max-[780px]:items-stretch max-[780px]:gap-[18px]
          max-[780px]:rounded-[5px] max-[780px]:border max-[780px]:border-white/10
          max-[780px]:bg-[#172725] max-[780px]:p-[22px]
          ${menuOpen ? "flex" : "max-[780px]:hidden"}`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={closeMenu}
            className="opacity-90 transition-all duration-200 hover:text-[#b5d548] hover:opacity-100"
          >
            {item.label}
          </a>
        ))}

        {/* CTA */}
        <a
          href="#contact"
          onClick={closeMenu}
          className="inline-flex items-center justify-center gap-2.5 rounded-[5px] bg-white px-[19px] py-[13px] text-[#152323] transition-transform duration-200 hover:-translate-y-0.5 max-[780px]:text-center"
        >
          Start a project
          <ArrowRight size={16} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;