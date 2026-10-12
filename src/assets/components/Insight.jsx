
const insights = [
  {
    id: 1,
    date: "Aug 9, 2026",
    category: "PRODUCT & UPDATES",
    title:
      "Five signs your business is ready to scale and how to prepare",
    image:
      "./Images/girlwithglasses.avif",
    link:
      "#",
  },
  {
    id: 2,
    date: "Aug 9, 2026",
    category: "OPS & STRATEGY",
    title:
      "How to build a growth strategy that survives market uncertainty",
    image:
      "./Images/aesthtic background.avif",
    link:
      "#",
  },
  {
    id: 3,
    date: "Aug 9, 2026",
    category: "New Product Launches",
    title:
      "Top 10 Business strategy books every consultant should read",
    image:
      "./Images/books.avif",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="bg-[#F7F6F2] py-16 md:py-24">
      <div className="mx-auto max-w-382.5 px-5 -mt-20 md:px-10 lg:px-16">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-7 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#17201C]"></span>

            <span className="text-sm font-medium text-[#17201C]">
              INSIGHTS
            </span>
          </div>

          <h2 className="font-serif text-[clamp(2.8rem,3.5vw,3rem)] font-normal leading-[1.08] tracking-[-0.04em] text-[#17201C]">
            Insights from the Nexor
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 mx-20 md:grid-cols-2 lg:grid-cols-3">

          {insights.map((insight) => (
            <article
              key={insight.id}
              className="group flex flex-col"
            >
              <a
                href={insight.link}
                className="block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#17201C] focus-visible:ring-offset-4"
              >
                <div className="overflow-hidden rounded-2xl">

                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="
                      aspect-[1.3/1] w-full rounded-2xl object-cover transition-transform duration-500 ease-out
                      group-hover:-rotate-2 group-hover:scale-[1.05] group-active:-rotate-3 group-active:scale-[1.03]
                      motion-reduce:transform-none
                    " />

                </div>
              </a>

              <div className="mt-5 flex flex-wrap items-center gap-4">

                <span className="text-base text-[#5A6260]">
                  {insight.date}
                </span>

                <span className="rounded-lg bg-[#F0EEE6] px-3 py-2 text-sm font-medium text-[#17201C]">
                  {insight.category}
                </span>

              </div>

              <a
                href={insight.link}
                className="mt-4 block"
              >
                <h3 className="max-w-115 text-lg font-medium leading-normal text-[#17201C] transition-colors duration-300 hover:text-[#60764B] md:text-md">
                  {insight.title}
                </h3>
              </a>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
