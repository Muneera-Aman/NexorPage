
import { useId } from "react";

const clientPhotos = [
  "photo-1560250097-0b93528c311a",
  "photo-1500648767791-00dcc994a43e",
  "photo-1506794778202-cad84cf45f1d",
  "photo-1566492031773-4f4e44671857",
  "photo-1519085360753-af0119f7cbe7",
];

function GrowthChart() {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 350 160"
      preserveAspectRatio="none"
      className="h-full w-full"
      role="img"
      aria-label="Illustrative upward growth trend"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#C7EF81" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#C7EF81" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M0 137 C35 122 42 162 75 150 S90 70 140 80 S170 144 210 126 S238 33 278 62 S320 90 335 40 S345 36 350 30 V160 H0 Z"
        fill={`url(#${gradientId})`}
      />

      <path
        d="M0 137 C35 122 42 162 75 150 S90 70 140 80 S170 144 210 126 S238 33 278 62 S320 90 335 40 S345 36 350 30"
        fill="none"
        stroke="#C7EA82"
        strokeWidth="2"
      />

      <circle
        cx="140"
        cy="80"
        r="4"
        fill="#FFFFFF"
        stroke="#C7EA82"
        strokeWidth="2"
      />

      <text
        x="144"
        y="62"
        fill="#5A6260"
        fontSize="12"
      >
        Yearly
      </text>
    </svg>
  );
}

export default function Results() {
  const cardBackground =
    "https://framerusercontent.com/images/kbDbKuAG2zzC47fb54QIbzSuc4.jpg";

  return (
    <section id="results"
      className="bg-[#F7F6F2] py-16 md:py-24"
    >
      <div className="mx-auto -mt-20 max-w-382.5-5 md:px-10 lg:px-16">
        <div className="max-w-275 mx-20">

          <div className="mb-4  inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#17201C]" />

            <span className="text-xs font-medium text-[#17201C] ">
              RESULT
            </span>
          </div>

          <h2 className="max-w-250 font-serif text-[3rem] font-normal leading-[1.12] tracking-[-0.035em] text-[#17201C]">
            Measurable product impact driven by better
            decision-making and streamlined workflows
          </h2>

          <p className="mt-9 max-w-180 text-[16px] leading-relaxed text-[#5A6260]">
            We embed with your team to diagnose what's slowing you down,
            build the systems that unlock momentum, and stay until
            the work is done. From strategy sprints to operational
            redesigns, we bring clarity to complex problems and
            deliver outcomes you can measure.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">

            <div className="flex items-center -space-x-3">
              {clientPhotos.map((photo, index) => (
                <img
                  key={photo}
                  src={`https://images.unsplash.com/${photo}?w=100&h=100&fit=crop`}
                  alt={`Client ${index + 1}`}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <span className="h-px w-4 bg-[#17201C]" />

            <p className="text-sm text-[#17201C]">
              Rated 4.8/5
            </p>
          </div>
        </div>

        <div className="mt-16 mx-20 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {/* CARD 1 - AVERAGE IMPROVEMENTS */}
          <div className="flex min-h-106.25 flex-col justify-between rounded-2xl bg-white p-7">

            <div>
              <p className="text-sm text-[#17201C]">
                Average Improvements
              </p>

              <h3 className="mt-4 font-serif text-[48px] font-normal leading-none text-[#17201C]">
                121%
              </h3>
            </div>

            <div className="flex h-11.5 w-full items-center gap-1.25 overflow-hidden">
              {Array.from({ length: 24 }, (_, index) => (
                <div
                  key={index}
                  className={`h-full w-1.75 shrink-0 ${
                    index === 0
                      ? "bg-[#C4B5FD]"
                      : "bg-[#EEE9FF]"
                  }`}
                />
              ))}
            </div>

            <p className="max-w-75 text-[15px] leading-relaxed text-[#5A6260]">
              Users can evaluate campaign results more quickly
              thanks to clearer analytics and structured reporting
            </p>

          </div>


          {/* CARD 2 - GROWTH INCREASE */}
          <div className="flex min-h-106.25 flex-col overflow-hidden rounded-2xl bg-white">

            <div className="px-7 pt-7">
              <p className="text-sm text-[#17201C]">
                Growth Increase
              </p>

              <div className="mt-4 flex items-center gap-3">
                <h3 className="font-serif text-[48px] leading-none text-[#17201C]">
                  99%
                </h3>

                <span className="rounded-full bg-[#17201C] px-3 py-1 text-sm font-semibold text-[#F0FF80]">
                  +42%
                </span>
              </div>
            </div>


            <div className="mt-auto h-45 w-full">
              <GrowthChart />
            </div>

            <p className="max-w-82.5 px-7 pb-8 pt-5 text-[15px] leading-relaxed text-[#5A6260]">
              A unified workspace consolidates analytics,
              offers, and performance tasks
            </p>
          </div>

          {/* CARD 3 - TESTIMONIAL */}
          <div
            className="flex min-h-106.25 items-center justify-center rounded-2xl bg-cover bg-center p-8"
            style={{
              backgroundImage: `url(${cardBackground})`,
            }}
          >
            <div className="flex h-78.75 w-full max-w-71.25 flex-col justify-between rounded-xl bg-[#F7F6F2] p-6">

              <div>
                <div className="text-base tracking-[3px] text-[#17201C]">
                  ★★★★★
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-[#17201C]">
                  “Nexor replaced three tools and finally
                  gave our teams a shared understanding
                  of what's happening.”
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-[#17201C]">
                  Emma Clark
                </h4>

                <p className="mt-2 text-sm text-[#5A6260]">
                  Head of Operations, Klea
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
