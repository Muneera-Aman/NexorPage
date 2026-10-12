
const companies = [
  { name: "current", logo: "/Images/current.png" },
  { name: "BOLT", logo: "/Images/bolt.png" },
  { name: "lightspark", logo: "/Images/lightspark.png" },
  { name: "Ramp", logo: "/Images/ramp.png" },
  { name: "EXTRADE", logo: "/Images/exotrade.png" },
  { name: "nuvei", logo: "/Images/nuvei.png" },
];

export default function Marquee() {
  return (
    <section className="overflow-hidden bg-[#F7F6F2] py-12 md:py-16">
      <h2 className="mb-16 text-center text-lg font-bold text-[#17201C] md:text-xl">
        Trusted by 500+ Business Industries
      </h2>

      <div className="group relative mx-auto w-full max-w-290 overflow-hidden">
        <div className="animate-marquee flex w-max items-center group-hover:[animation-play-state:paused]">

          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex items-center gap-10 "
            >
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="flex shrink-0 items-center justify-center md:w-48"
                >
                  <img
                    src={company.logo}
                    alt={copy === 0 ? company.name : ""}
                    className="max-h-18 w-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
