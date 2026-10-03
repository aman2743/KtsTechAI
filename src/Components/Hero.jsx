import { ArrowRight, ChevronDown } from "lucide-react";
import Navbar from "./Navbar";
import HeroImg from "../assets/Image1.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[720px] h-[91vh] flex-col overflow-hidden text-white max-[780px]:min-h-[680px] max-[780px]:h-auto"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 scale-[1.04] bg-cover [background-position:center_45%]"
        style={{ backgroundImage: `url(${HeroImg})` }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,22,24,.84) 0%, rgba(12,25,27,.56) 43%, rgba(9,19,20,.18) 100%), linear-gradient(0deg, rgba(8,22,23,.66), transparent 42%)",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto mt-auto mb-28 w-[min(1160px,calc(100%-64px))] max-[780px]:mt-[155px] max-[780px]:mb-[110px] max-[780px]:w-[min(calc(100%-40px),560px)] max-[420px]:w-[calc(100%-32px)]">
        <p className="mb-[22px] flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#dce5d4]">
          <span className="inline-block h-0.5 w-[29px] bg-current" />
          Software that moves business forward
        </p>

        <h1 className="m-0 text-[clamp(48px,6.8vw,84px)] font-[680] leading-[0.96] tracking-[-0.065em] max-[420px]:text-[48px]">
          Build smarter.
          <br />
          <em className="not-italic text-[#b5d548]">Move faster.</em>
        </h1>

        <p className="my-[25px] mb-[30px] max-w-[520px] text-[16px] leading-[1.65] text-white/85 max-[780px]:text-[15px]">
          We build modern software that turns complex workflows into simple,
          scalable experiences. From powerful web applications to custom
          business solutions, we help ideas become products.
        </p>

        <div className="flex flex-wrap gap-3 max-[420px]:flex-col">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-[4px] bg-[#b5d548] px-5 py-3.5 text-[13px] font-extrabold tracking-[0.01em] text-[#182620] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c5e45b] max-[420px]:w-full"
          >
            Start a project
            <ArrowRight size={17} />
          </a>

          <a
            href="#solution"
            className="inline-flex items-center justify-center gap-2.5 rounded-[4px] border border-white/55 px-5 py-3.5 text-[13px] font-extrabold tracking-[0.01em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#1a2928] max-[420px]:w-full"
          >
            Explore our work
          </a>
        </div>
      </div>

      {/* Scroll Cue */}
      <a
        href="#solution"
        className="absolute bottom-[26px] right-[4%] z-10 flex items-center gap-2.5 text-[10px] uppercase tracking-[0.16em] text-white/75 [writing-mode:vertical-rl] max-[780px]:hidden"
      >
        <span>Scroll to discover</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}

export default Hero;