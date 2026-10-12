
import {
  Sparkles,
  TrendingUp,
  BadgeCheck,
  Star,
} from "lucide-react";

export default function AboutUs() {
  const aboutBackground =
    "https://framerusercontent.com/images/O9LHp6cU4wplScbtNQRbOpJgCfU.png";

  const aboutImage =
    "https://framerusercontent.com/images/Pf8hRhIi67b2lk55dDn5RwnIJI.png";

  const features = [
    {
      title: "Strategic Clarity",
      description:
        "Turning complex challenges into actionable roadmaps",
      Icon: Sparkles,
      bg: "bg-[#F0EEE6]",
    },
    {
      title: "Adaptive Growth",
      description:
        "Embracing change as a catalyst for progress, unlocking new opportunities",
      Icon: TrendingUp,
      bg: "bg-[#E1DBFF]",
    },
    {
      title: "Unified Purpose",
      description:
        "Bringing diverse perspectives together to build solutions",
      Icon: BadgeCheck,
      bg: "bg-[#F0EEE6]",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#F7F6F2] py-16 md:py-24"
    >
      <div className="mx-auto max-w-382.5 px-5 md:px-10">
        <div className="mx-auto flex max-w-250 flex-col items-center text-center">

          <div className="mb-8 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#17201C]" />

            <span className="text-sm font-medium text-[#17201C]">
              ABOUT US
            </span>
          </div>

          <h2 className="max-w-165 font-serif text-[clamp(2rem,2.25vw,3rem)] font-normal leading-[1.16] tracking-[-0.035em] text-[#17201C]">
            A global consulting partner dedicated to
            building smarter solutions. We help startups
            make smarter decisions and grow with clarity.
          </h2>

          <p className="mt-3 max-w-120 text-md leading-relaxed text-[#5A6260] md:text-md">
            We are a trusted business consulting firm
            dedicated to helping organizations unlock their
            full potential.
          </p>

          <a
            href="https://nexor.framer.wiki/about-us"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-[#17201C] px-4 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#34463D]"
          >
            Learn More
          </a>
        </div>

       <div className="mx-0 mt-15 grid grid-cols-1 gap-4 lg:mx-28 lg:grid-cols-2">
          <div
            className="flex h-120 flex-col justify-between overflow-hidden rounded-2xl bg-cover bg-center p-8  text-white md:p-10"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.34)), url(${aboutBackground})`,
            }}
          >
            
            <div className="flex h-23 w-23 items-center justify-center rounded-full bg-[radial-gradient(circle_at_70%_20%,#6DB600,#005A13_65%,#002B0C)]">
              <div className="flex h-13 w-13 items-center justify-center rounded-full border-2 border-white">
                <Star
                  size={29}
                  strokeWidth={2}
                  fill="white"
                  className="text-white"
                />
              </div>
            </div>

            <div className="max-w-125">
              <h3 className="font-serif text-[45px] leading-none tracking-tight">
                96%
              </h3>

              <h4 className="mt-4 text-lg font-semibold md:text-xl">
                Positive rating on TrustPilot
              </h4>

              <p className="mt-3 max-w-122.5 text-base leading-relaxed md:text-lg">
                A clear view of how structured execution
                translates into sustainable, measurable growth
                across revenue, teams, and markets.
              </p>
            </div>
          </div>

          
          <div className="relative min-h-120 overflow-hidden  md:min-h-153.75">
            <img
              src={aboutImage}
              alt="Two consultants working on laptops"
              className="absolute inset-0 h-120 rounded-2xl object-cover object-center"
            />

            <div className="absolute bottom-4 right-4 flex h-40 w-52.5 flex-col justify-between rounded-2xl bg-white p-5 md:bottom-37 md:right-4 md:h-50 md:w-55">

              <span className="font-serif -mt-3 text-5xl font-normal text-[#17201C] md:text-[56px]">
                12 +
              </span>

              <p className="text-base text-[#5A6260] md:text-md">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 px-28 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 md:-mt-20">

          {features.map(({ title, description, Icon, bg }) => (
            <div
              key={title}
              className="flex items-start gap-6"
            >
              <div
                className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl ${bg}`}
              >
                <Icon
                  size={25}
                  strokeWidth={1.7}
                  className="text-[#17201C]"
                />
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#17201C]">
                  {title}
                </h3>

                <p className="mt-3 max-w-70 text-base leading-relaxed text-[#5A6260] md:text-sm">
                  {description}
                </p>

              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-36 w-full border-t border-gray-300"></div>
      </div>
    </section>
  );
}
