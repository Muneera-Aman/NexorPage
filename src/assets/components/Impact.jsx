
import { Lightbulb, Zap } from "lucide-react";

export default function Impact() {
  const impactImage = "/Images/our impact.avif";

  const impactFeatures = [
    {
      title: "Creative Synergy",
      description:
        "Blending diverse perspectives to spark breakthrough solutions",
      icon: Lightbulb,
      bgColor: "bg-[#DDD6FE]",
    },
    {
      title: "Resilient Systems",
      description:
        "Building frameworks that pressure adapt to shifting conditions",
      icon: Zap,
      bgColor: "bg-[#A7F3D0]",
    },
  ];

  return (
    <section id="impact" className="bg-[#141D19] py-12 md:py-16">
      <div className="m-20 mx-20 max-w-382.5 px-5 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-20">

          <div className="relative min-h-120 overflow-hidden rounded-2xl md:min-h-160">

            <img
              src={impactImage}
              alt="Business consultants collaborating"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            
            <div className="absolute bottom-3 left-3 flex h-50 w-51.25 flex-col justify-between rounded-2xl bg-white p-4 md:bottom-3 md:left-3">

              <h3 className="font-serif text-[42px] font-normal leading-none text-[#17201C]">
                300 +
              </h3>

              <p className="text-sm leading-relaxed text-[#5A6260]">
                Campaigns shipped
                <br />
                with strategy
              </p>

            </div>
          </div>

          
          <div className="flex flex-col justify-between gap-12">

            <div className="flex flex-col items-start">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#40504A] bg-[#263730] px-3 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>

                <span className="text-xs font-semibold text-white">
                  OUR IMPACT
                </span>
              </div>

              <h2 className="max-w-150 font-serif text-[clamp(2.5rem,3.5vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.035em] text-white">
                Expert consulting tailored to your business success
              </h2>

              <p className="mt-5 max-w-137.5 text-sm font-medium leading-relaxed text-[#E0E3E0] md:text-base">
                We bring clarity to complexity—offering hands-on
                strategic guidance, actionable frameworks, and
                measurable results that drive real business growth.
              </p>

              <a
                href="https://nexor.framer.wiki/contact"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#F0FF80] px-3 py-3 text-sm font-medium text-[#17201C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E3F56C]"
              >
                Book Free Meeting
              </a>

            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {impactFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex min-h-52.5 flex-col justify-between rounded-xl bg-[#273832] p-5"
                  >

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor}`}
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                        className="text-[#17201C]"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-[#E0E3E0]">
                        {feature.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
