
const caseStudies = [
  {
    id: 1,
    company: "Meridian",
    logo: "/Images/meridien.png",
    image: "/Images/greencouch.avif",
    description:
      "How we increased meridian revenue by $1.2M in 6 months",
    buttonColor: "bg-[#F0FF80]",
    size: "lg:col-span-2",
  },
  {
    id: 2,
    company: "Horizon",
    logo: "/Images/horizon.png",
    image: "/Images/biegechair.avif",
    description:
      "“They didn’t just consult — they co-created. Every meeting left us lighter.”",
    buttonColor: "bg-[#F0FF80]",
    size: "lg:col-span-3",
  },
  {
    id: 3,
    company: "Summit",
    logo: "/Images/summit.png",
    image: "/Images/womenwithcoffee.avif",
    description:
      "Every step felt understood, supported, and confidently directed.",
    buttonColor: "bg-[#F7F6F2]",
    size: "lg:col-span-3",
  },
  {
    id: 4,
    company: "Vista",
    logo: "/Images/vista.png",
    image: "/Images/mensitting.avif",
    description:
      "“Working with them felt like being heard, then gently guided toward clarity”",
    buttonColor: "bg-[#F0FF80]",
    size: "lg:col-span-2",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-[#F7F6F2] py-16 md:py-24"
    >
      <div className="mx-20 max-w-382.5 px-5 md:px-10 lg:px-16">
        <div className="mb-16 flex flex-col items-center text-center">

          <div className="mb-8 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#17201C]"></span>

            <span className="text-sm font-medium text-[#17201C]">
              CASE STUDIES
            </span>
          </div>

          <h2 className="max-w-180 font-serif text-[3rem] font-normal leading-[1.05] tracking-[-0.045em] text-[#17201C]">
            We help companies
            <br />
            just outcomes
          </h2>
        </div>

        <div className="grid grid-cols-1 -mt-5 gap-4 md:grid-cols-2 lg:grid-cols-5">

          {caseStudies.map((study) => (
            <article
              key={study.id}
              className={`group relative h-107.5 overflow-hidden rounded-2xl md:h-100 lg:h-120 ${study.size}`}
            >

              <img
                src={study.image}
                alt={`${study.company} case study`}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-black/10"></div>

              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">

                <div className="flex items-center">
                  <img
                    src={study.logo}
                    alt={`${study.company} logo`}
                    className="max-h-10 max-w-45 object-contain object-left"
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">

                  <h3 className="max-w-130 font-serif text-[1.5rem] font-normal leading-[1.3] tracking-[-0.03em] text-white">
                    {study.description}
                  </h3>

                  <a
                    href={study.link}
                    className={`inline-flex shrink-0 items-center justify-center rounded-xl px-3 py-2 text-sm font-sm text-[#17201C] transition-all duration-300 hover:-translate-y-1 ${study.buttonColor}`}
                  >
                    Read Full Story
                  </a>

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
