
import { useState } from "react";

const stories = [
  {
    id: "meridian",
    company: "Meridian",
    symbol: "✣",
    image: "/Images/meriden men speaking.avif",
    quote:
      "Working with them felt like being understood, then thoughtfully guided toward clarity.",
    author: "Emma Clark",
    position: "Head of Operations, Klea",
    stats: [
      {
        value: "$2.4M",
        description: "Research budgets tracked in real time",
      },
      {
        value: "45%",
        description: "Research budgets tracked in real time",
      },
    ],
  },
  {
    id: "summit",
    company: "Summit",
    symbol: "✱",
    image: "/Images/womenwithcoffee.avif",
    quote:
      "Every step felt understood, supported, and confidently directed.",
    author: "Grace Wilson",
    position: "Operations Lead, Klea",
    stats: [
      {
        value: "72%",
        description: "Longer average session duration",
      },
      {
        value: "1.8M",
        description:
          "Faster reporting cycle from data collection to review",
      },
    ],
  },
  {
    id: "horizon",
    company: "Horizon",
    symbol: "◩",
    image: "/Images/biegechair.avif",
    quote:
      "They didn’t just consult — they co-created. Every meeting left us lighter.",
    author: "Olivia Bennett",
    position: "Operations Director, Klea",
    stats: [
      {
        value: "$2.4M",
        description: "Revenue in just 6 months",
      },
      {
        value: "1.8M",
        description:
          "Faster reporting cycle from data collection to review",
      },
    ],
  },
  {
    id: "vista",
    company: "Vista",
    symbol: "◭",
    image: "/Images/mensitting.avif",
    quote:
      "Working with them felt like being heard, then gently guided toward clarity",
    author: "Emily Morgan",
    position: "VP of Operations, Klea",
    stats: [
      {
        value: "8x",
        description: "Increase in demo requests",
      },
      {
        value: "1.8M",
        description:
          "Faster reporting cycle from data collection to review",
      },
    ],
  },
];

export default function CustomerStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStory = stories[activeIndex];

  return (
    <section
      id="customer-stories"
      className="bg-[#F7F6F2] py-16 md:py-24"
    >
      <div className="mx-auto max-w-325 px-5 md:px-10">

        <div className="mb-14 flex flex-col items-center text-center">

          <div className="mb-6 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#17201C]" />

            <span className="text-xs font-medium text-[#17201C]">
              CUSTOMERS STORIES
            </span>
          </div>

          <h2 className="max-w-162.5 font-serif text-[3.5rem] font-normal leading-[1.08] tracking-[-0.04em] text-[#17201C]">
            Trusted by brands
            <br />
            across industries
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-2xl bg-[#141D19] p-5 md:gap-20 lg:grid-cols-[40%_1fr] lg:p-5">

          <div className="h-95 overflow-hidden rounded-xl sm:h-120 lg:h-130">
            <img
              key={activeStory.id}
              src={activeStory.image}
              alt={`${activeStory.company} customer story`}
              className="h-full w-full animate-[fadeIn_0.4s_ease-in-out] object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-between px-2 py-5 text-white sm:px-5 lg:px-12 lg:py-7">

            <div>
              <span className="font-serif text-5xl font-bold leading-none text-[#F0FF80]">
                ”
              </span>

              <p
                key={activeStory.id + "-quote"}
                className="mt-4 max-w-132.5 text-lg font-medium leading-relaxed md:text-xl"
              >
                “{activeStory.quote}”
              </p>

              <div className="mt-7">
                <h3 className="text-sm font-semibold md:text-base">
                  {activeStory.author}
                </h3>

                <p className="mt-1 text-sm text-[#E0E3E0]">
                  {activeStory.position}
                </p>
              </div>
            </div>

            <div className="mt-12">

              <div className="grid max-w-111.25 grid-cols-2 gap-3">
                {activeStory.stats.map((stat, index) => (
                  <div
                    key={`${activeStory.id}-${index}`}
                    className="flex min-h-35 flex-col justify-between rounded-xl bg-[#273832] p-4"
                  >
                    <div className="flex items-baseline">
                      <span className="font-serif text-3xl text-[#F0FF80]">
                        +
                      </span>

                      <span className="font-serif text-[clamp(1.7rem,2.5vw,2.3rem)] leading-none text-white">
                        {stat.value}
                      </span>
                    </div>

                    <p className="mt-5 text-xs leading-relaxed text-[#E0E3E0] sm:text-sm">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={activeStory.link}
                className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#F0FF80] px-5 py-4 text-sm font-medium text-[#17201C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E3F56C]"
              >
                Read Full Story
              </a>
            </div>

          </div>
        </div>

        <div
          className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          role="tablist"
          aria-label="Customer stories"
        >
          {stories.map((story, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={story.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(index)}
                className={`flex cursor-pointer items-center justify-center gap-2 border-b pb-4 text-base font-medium transition-all duration-300 md:text-lg ${
                  isActive
                    ? "border-[#17201C] text-[#17201C]"
                    : "border-[#C9CBC8] text-[#A1A5A2] hover:text-[#17201C]"
                }`}
              >
                <span className="text-xl">
                  {story.symbol}
                </span>

                <span>{story.company}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
