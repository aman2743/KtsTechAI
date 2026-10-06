import {
  Clock3,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import HeroImg from "../assets/Image1.png";

function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-[#e8ebe3] py-[130px] max-[780px]:py-[82px]"
    >
      <div className="mx-auto grid w-[min(1160px,calc(100%-64px))] grid-cols-2 items-center gap-24 max-[780px]:w-[min(calc(100%-40px),560px)] max-[780px]:grid-cols-1 max-[780px]:gap-10 max-[420px]:w-[calc(100%-32px)]">

        {/* IMAGE */}
        <div className="relative">
          <img
            src={HeroImg}
            alt="Modern software development workspace"
            className="block h-[540px] w-full object-cover [filter:saturate(.74)] max-[780px]:h-[380px] max-[420px]:h-[300px]"
          />

          <div className="absolute right-[-28px] bottom-7 flex items-center gap-3 bg-[#b5d548] px-5 py-4 text-[11px] uppercase leading-[1.35] tracking-[0.09em] text-[#243126] max-[780px]:right-[14px]">
            <Sparkles size={17} />

            <span>
              Built for
              <br />
              <strong className="text-[15px] normal-case tracking-normal">
                real world
              </strong>
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <p className="mb-[22px] flex items-center gap-2.5 text-[15px] font-extrabold tracking-[0.16em] text-[#72934a]">
            <span className="inline-block h-0.5 w-[29px] bg-current" />
            Why KtsTechAi
          </p>

          <h2 className="m-0 mb-[23px] text-[clamp(43px,5.3vw,70px)] font-[680] leading-[0.96] tracking-[-0.065em] text-[#1d302d]">
            Less complexity.
            <br />
            <em className="not-italic text-[#b5d548]">More impact.</em>
          </h2>

          <p className="mb-[34px] max-w-[470px] text-[16px] leading-[1.65] text-[#67736d]">
            We combine thoughtful design, modern technologies, and reliable
            engineering to create software that is easy to use today and ready
            to scale tomorrow.
          </p>

          <div className="grid gap-[22px]">

            {/* Benefit 1 */}
            <div className="flex items-start gap-[15px]">
              <div className="grid min-w-[42px] size-[42px] place-items-center rounded-full bg-[#f7f8f2] text-[#55793f]">
                <ShieldCheck size={21} />
              </div>

              <div>
                <h3 className="m-[2px_0_5px] text-[15px] text-[#20322e]">
                  Reliable by design
                </h3>

                <p className="m-0 text-[13px] leading-[1.45] text-[#77817b]">
                  Clean architecture and dependable systems built for real
                  business needs.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-[15px]">
              <div className="grid min-w-[42px] size-[42px] place-items-center rounded-full bg-[#f7f8f2] text-[#55793f]">
                <Clock3 size={21} />
              </div>

              <div>
                <h3 className="m-[2px_0_5px] text-[15px] text-[#20322e]">
                  Built to move fast
                </h3>

                <p className="m-0 text-[13px] leading-[1.45] text-[#77817b]">
                  Modern development practices that turn ideas into working
                  products faster.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start gap-[15px]">
              <div className="grid min-w-[42px] size-[42px] place-items-center rounded-full bg-[#f7f8f2] text-[#55793f]">
                <PackageCheck size={21} />
              </div>

              <div>
                <h3 className="m-[2px_0_5px] text-[15px] text-[#20322e]">
                  Ready to scale
                </h3>

                <p className="m-0 text-[13px] leading-[1.45] text-[#77817b]">
                  Flexible solutions designed to grow alongside your product
                  and business.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Benefits;