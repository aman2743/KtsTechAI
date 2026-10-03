function Stats() {
  return (
    <section
      id="company"
      className="bg-[#2a423a] py-[105px] text-white"
    >
      <div className="mx-auto grid w-[min(1160px,calc(100%-64px))] grid-cols-[1.35fr_repeat(3,1fr)] items-end gap-8 max-[780px]:w-[min(calc(100%-40px),560px)] max-[780px]:grid-cols-2 max-[780px]:gap-x-5 max-[780px]:gap-y-[34px] max-[420px]:w-[calc(100%-32px)]">

        <div className="max-[780px]:col-span-full max-[780px]:mb-[15px]">
          <p className="mb-[22px] flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#dce5d4]">
            <span className="inline-block h-0.5 w-[29px] bg-current" />
            A better standard
          </p>

          <h2 className="m-0 text-[clamp(38px,4.3vw,57px)] font-[680] leading-[0.96] tracking-[-0.065em] text-white">
            Ready for the
            <br />
            <em className="not-italic text-[#b5d548]">next challenge.</em>
          </h2>
        </div>

        <div className="border-l border-white/20 pl-[25px] max-[780px]:pl-[15px]">
          <strong className="block text-[clamp(42px,4vw,58px)] leading-none tracking-[-0.06em] text-[#b5d548]">
            10<span className="text-[0.58em] text-[#e3ecd8]">+</span>
          </strong>

          <p className="mt-3 max-w-[120px] text-[12px] leading-[1.45] text-[#c8d1ca]">
            Ideas transformed into digital solutions
          </p>
        </div>

        <div className="border-l border-white/20 pl-[25px] max-[780px]:pl-[15px]">
          <strong className="block text-[clamp(42px,4vw,58px)] leading-none tracking-[-0.06em] text-[#b5d548]">
            1<span className="text-[0.58em] text-[#e3ecd8]">×</span>
          </strong>

          <p className="mt-3 max-w-[120px] text-[12px] leading-[1.45] text-[#c8d1ca]">
            Clear process from idea to product
          </p>
        </div>

        <div className="border-l border-white/20 pl-[25px] max-[780px]:pl-[15px]">
          <strong className="block text-[clamp(42px,4vw,58px)] leading-none tracking-[-0.06em] text-[#b5d548]">
            100<span className="text-[0.58em] text-[#e3ecd8]">%</span>
          </strong>

          <p className="mt-3 max-w-[120px] text-[12px] leading-[1.45] text-[#c8d1ca]">
            Focus on quality and user experience
          </p>
        </div>

      </div>
    </section>
  );
}

export default Stats;