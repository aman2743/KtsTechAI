import { ArrowRight } from "lucide-react";

function Intro() {
  return (
    <section
      id="solution"
      className="bg-[#f5f4ef] py-[130px] max-[780px]:py-[82px]"
    >
      <div className="mx-auto grid w-[min(1160px,calc(100%-64px))] grid-cols-[1.1fr_.9fr] items-end gap-20 max-[780px]:w-[min(calc(100%-40px),560px)] max-[780px]:grid-cols-1 max-[780px]:gap-10 max-[420px]:w-[calc(100%-32px)]">
        
        <div>
          <p className="mb-[22px] flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#72934a]">
            <span className="inline-block h-0.5 w-[29px] bg-current" />
            The new front door
          </p>

          <h2 className="m-0 text-[clamp(43px,5.3vw,70px)] font-[680] leading-[0.96] tracking-[-0.065em] text-[#1d302d]">
            Every solution.
            <br />
            <em className="not-italic text-[#b5d548]">Built better.</em>
          </h2>
        </div>

        <div className="max-w-[380px] pb-2 max-[780px]:p-0">
          <p className="mb-[25px] text-[17px] leading-[1.65] text-[#67736d]">
            Great software should make complex things feel simple. We build
            digital products and systems that help businesses work smarter,
            scale faster, and create better experiences.
          </p>

          <a
            href="#benefits"
            className="inline-flex items-center gap-2.5 text-[13px] font-extrabold text-[#3f672f]"
          >
            Explore our approach
            <ArrowRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Intro;