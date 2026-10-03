import { ArrowRight, Check } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f5f4ef] py-[130px] max-[780px]:py-[82px]"
    >
      <div className="mx-auto grid w-[min(1160px,calc(100%-64px))] grid-cols-[1fr_.9fr] gap-20 bg-[#dce5d1] px-[92px] py-20 max-[780px]:w-[min(calc(100%-40px),560px)] max-[780px]:grid-cols-1 max-[780px]:gap-[30px] max-[780px]:px-8 max-[780px]:py-12 max-[420px]:w-[calc(100%-32px)] max-[420px]:px-6 max-[420px]:py-10">

        <div>
          <p className="mb-[22px] flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#72934a]">
            <span className="inline-block h-0.5 w-[29px] bg-current" />
            Let's build something
          </p>

          <h2 className="m-0 text-[clamp(43px,5.3vw,70px)] font-[680] leading-[0.96] tracking-[-0.065em] text-[#1d302d]">
            Turn ideas
            <br />
            <em className="not-italic text-[#b5d548]">into reality.</em>
          </h2>
        </div>

        <div className="max-w-[380px] self-end">
          <p className="mb-[25px] text-[17px] leading-[1.65] text-[#67736d]">
            Have a product idea, a business challenge, or an existing system
            that needs improvement? Let's talk about what we can build
            together.
          </p>

          <a
            href="mailto:hello@logicforge.dev"
            className="inline-flex items-center justify-center gap-2.5 rounded-[4px] bg-[#263c34] px-5 py-3.5 text-[13px] font-extrabold tracking-[0.01em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3c5b4b]"
          >
            Start a conversation
            <ArrowRight size={17} />
          </a>

          <span className="mt-[15px] flex items-center gap-[7px] text-[11px] text-[#69776d]">
            <Check size={15} />
            No pressure. Just a conversation about your idea.
          </span>
        </div>

      </div>
    </section>
  );
}

export default Contact;