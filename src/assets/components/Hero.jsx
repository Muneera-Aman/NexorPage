
export default function Hero() {
  const heroImage =
    "/Images/boy with the classes hero.avif";

  const cardBackground =
    "https://framerusercontent.com/images/kbDbKuAG2zzC47fb54QIbzSuc4.jpg";

  const clientPhotos = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
  ];

  return (
    <section className="bg-[#F7F6F2] py-9 md:py-12">
      <div className="mx-auto max-w-[1620px] px-5 md:px-10 lg:px-16 xl:px-20">
        <div className="mx-0 grid grid-cols-1 items-stretch gap-12 lg:mx-15 lg:grid-cols-2 lg:gap-16">

          <div className="flex min-w-0 flex-col items-start justify-between">
            <div className="flex flex-col items-start">
              <div className="mb-9 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#16201C]"></span>
                <span className="text-sm font-medium text-[#16201C]">
                  WE ARE NEXOR
                </span>
              </div>

              <h1 className="max-w-190 font-serif text-[clamp(2.5rem,8vw,4rem)] lg:text-[4rem] font-normal leading-none tracking-[-0.045em] text-[#17201C]">
                Your trusted — partner in growing business success
              </h1>

              <p className="mt-7 max-w-120 text-md leading-relaxed text-[#5A6260] md:text-md">
                Nexor is a consultancy built for teams that need
                direction, structure, and execution—not vague
                advice or long decks.
              </p>

              <a
                href="https://nexor.framer.wiki/contact"
                className="mt-10 inline-flex items-center justify-center gap-3 rounded-lg bg-[#16201C] px-4 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#34463D]"
              >
                Book Free Meeting
                <span className="text-sm font-light">→</span>
              </a>
            </div>

            <div className="mt-10 flex flex-col items-start pb-1 lg:mt-auto">
              <div className="flex items-center -space-x-3">
                {clientPhotos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Client ${index + 1}`}
                    className="h-13 w-13 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <p className="mt-3 text-md font-normal text-[#17201C]">
                Trusted by 500+ clients (4.9/5)
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-4">
            <div className="h-85 overflow-hidden rounded-2xl sm:h-125 lg:h-150.5">
              <img
                src={heroImage}
                alt="Nexor business consultant"
                className="h-full w-full rounded-2xl object-cover object-center lg:h-auto lg:w-170"
              />
            </div>

            <div
              className="relative -mt-12 min-h-60 rounded-2xl bg-cover bg-center p-3 sm:-mt-16 sm:p-4 md:p-7 lg:-mt-20 lg:h-60"
              style={{
                backgroundImage: `url(${cardBackground})`,
              }}
            >
              <div className="grid min-h-45 grid-cols-1 gap-4 rounded-2xl bg-[#F7F6F2] p-4 sm:grid-cols-2 sm:gap-3 sm:p-5 lg:h-45">
                <div className="flex items-center justify-between">
                  <div className="-mt-1">
                    <span className="font-serif text-5xl font-bold">
                      ”
                    </span>

                    <h3 className="mt-5 font-semibold text-[#17201C] sm:mt-13">
                      Emma Clark
                    </h3>

                    <p className="text-sm text-gray-500">
                      Head of Operations, Klea
                    </p>
                  </div>
                </div>

                <div>
                  <span className="text-md font-bold tracking-widest text-[#17201C]">
                    ★★★★★
                  </span>

                  <p className="mt-2 font-serif text-md leading-relaxed text-[#17201C]">
                    “Nexor replaced three tools and finally gave our
                    teams a shared understanding of what's happening.”
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
