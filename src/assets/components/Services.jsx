
const services = [
  {
    id: "01",
    category: "STRATEGY",
    title: "Financial Consulting",
    description:
      "Personalized strategies to grow, protect, and transfer your wealth across generations.",
    image: "/Images/financial consulting.avif",
    buttonColor: "bg-[#F0FF80]",
  },
  {
    id: "02",
    category: "SOLUTIONS",
    title: "Advanced Tech Advisory",
    description:
      "We assess, streamline, and guide your technology choices—ensuring your systems scale as fast as your ambition.",
    image: "/Images/advance tech advisory.avif",
    buttonColor: "bg-[#F0EEE6]",
  },
  {
    id: "03",
    category: "DEVELOPMENT",
    title: "Retirement Planning",
    description:
      "Build a secure future with tailored retirement roadmaps designed around your lifestyle.",
    image: "/Images/retirement planning.avif",
    buttonColor: "bg-[#F0FF80]",
  },
  {
    id: "04",
    category: "TESTING",
    title: "Investment Strategy",
    description:
      "Data-driven portfolio allocation and market insights to help you capitalize on opportunities.",
    image: "/Images/investment strategy.avif",
    buttonColor: "bg-[#F0EEE6]",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F7F6F2] mx-18 -mt-15 py-16 md:py-24"
    >
      <div className="mx-auto max-w-382.5 -px-10 md:px-10 lg:px-16">

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#17201C]"></span>

          <span className="text-sm font-medium text-[#17201C]">
            SERVICES
          </span>
        </div>

        <h2 className="mb-12 w-full lg:w-200 font-serif text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-normal leading-[1.12] tracking-[-0.035em] text-[#17201C]">
            Expert consultation to help your business grow and achieve goals.
        </h2>

        <div className="grid grid-cols-1 gap-5 -mt-5 md:grid-cols-2">

          {services.map((service) => (
            <article
              key={service.id}
              className="flex h-full flex-col rounded-2xl bg-white p-3 transition-shadow duration-300 hover:shadow-lg"
            >

              <div className="relative h-70 overflow-hidden rounded-xl sm:h-87.5 lg:h-105">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#F0FF80] px-4 py-2.5">
                  <span className="text-sm font-medium text-[#17201C]">
                    {service.id} / {service.category}
                  </span>
                </div>

              </div>

              <div className="flex flex-1 flex-col px-3 pb-2 pt-8">

                <h3 className="max-w-65 font-serif text-[35px] font-normal leading-[1.3] tracking-tight text-[#17201C]">
                  {service.title}
                </h3>

                <div className="mt-4 flex flex-1 flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">

                  <p className="max-w-95 text-sm leading-relaxed text-[#5A6260] md:text-[15px]">
                    {service.description}
                  </p>

                  <a
                    href={service.link}
                    className={`inline-flex shrink-0 items-center justify-center rounded-xl px-5 py-3.5 text-sm font-medium text-[#17201C] transition-all duration-300 hover:-translate-y-1 ${service.buttonColor}`}
                  >
                    View Details
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
