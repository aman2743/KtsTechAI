import {
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import LogoImg from "../assets/logo.png";


const Footer = () => {
  const productLinks = [
  "Web Applications",
  "UI/UX Development",
  "API & Integrations",
  "Digital Solutions",
];

  const companyLinks = [
    "About KtsTechAi",
    "Our Work",
    "How It Works",
    "Contact",
  ];

  const resourceLinks = [
    "Documentation",
    "Support",
    "Privacy Policy",
    "Terms of Service",
  ];

  return (
    <footer className="bg-[#172725] text-white">

      {/* ================= CTA ================= */}
      {/* <div className="mx-auto w-[min(1160px,calc(100%-64px))] pt-[100px] max-[780px]:w-[min(560px,calc(100%-40px))] max-[780px]:pt-[75px] max-[420px]:w-[calc(100%-32px)]">

        
      </div> */}

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto w-[min(1160px,calc(100%-64px))] py-20 max-[780px]:w-[min(560px,calc(100%-40px))] max-[780px]:py-16 max-[420px]:w-[calc(100%-32px)]">

        <div className="grid grid-cols-[1.6fr_1fr_1fr_1.25fr] gap-12 max-[780px]:grid-cols-2 max-[520px]:grid-cols-1">

          {/* Brand */}
          <div className="max-w-sm">

            <a
              href="#home"
              className="mb-6 inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#9fc70f] text-[#172725]">
                <img src={LogoImg} size={23} strokeWidth={2.4} />
              </div>

              <div>
                <div className="text-xl font-bold tracking-[-0.03em]">
                  KtsTechAi
                </div>

                <div className="text-xs font-medium text-white/45">
                  Software &amp; Digital Solutions
                </div>
              </div>
            </a>

            <p className="text-[15px] leading-7 text-white/55">
              We build modern software that turns complex workflows into
              simple, scalable and useful digital experiences.
            </p>

            {/* Small trust statement */}
            <div className="mt-7 flex items-center gap-3 text-sm text-white/60">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/7">
                <ShieldCheck size={18} className="text-[#b5d548]" />
              </div>

              <span>
                Built with reliability in mind
              </span>
            </div>

          </div>

          {/* Product */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#b5d548]">
              Product
            </h3>

            <ul className="space-y-3.5">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#solution"
                    className="group inline-flex items-center text-[15px] text-white/55 transition-colors hover:text-white"
                  >
                    <span>{link}</span>

                    <ArrowUpRight
                      size={13}
                      className="ml-1 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#b5d548]">
              Company
            </h3>

            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#company"
                    className="group inline-flex items-center text-[15px] text-white/55 transition-colors hover:text-white"
                  >
                    <span>{link}</span>

                    <ArrowUpRight
                      size={13}
                      className="ml-1 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#b5d548]">
              Get in touch
            </h3>

            <ul className="space-y-5">

              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#b5d548]"
                />

                <span className="text-[15px] leading-6 text-white/55">
                  SHOP NO-2 SHAHMAL PHALWAN COMPLEX 
                    OLD HAIBATPUR, NEAR BRAHMA  MANDIR, 
                  <br />
                  
                    GAUTAM BUDDHA NAGAR - 201301
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-[#b5d548]"
                />

                <a
                  href="mailto:info@ktstechai.com"
                  className="text-[15px] text-white/55 transition-colors hover:text-white"
                >
                  info@ktstechai.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-[#b5d548]"
                />

                <span className="text-[15px] text-white/55">
                  +91 7048993705
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 border-t border-white/10 pt-7">

          <div className="flex items-center justify-between gap-6 max-[780px]:flex-col max-[780px]:items-start">

            <p className="text-sm text-white/35">
              © 2026 KtsTechAi. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-white/35">

              <a
                href=""
                className="transition-colors hover:text-white"
              >
                Privacy
              </a>

              <a
                href=""
                className="transition-colors hover:text-white"
              >
                Terms
              </a>

              <a
                href=""
                className="transition-colors hover:text-white"
              >
                Support
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;