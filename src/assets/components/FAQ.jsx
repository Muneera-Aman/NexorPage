
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What does a typical business consultation involve?",
    answer:
      "Every engagement begins with a thorough assessment of your current operations, market position, and growth objectives. From there, we develop a tailored strategy that addresses your most pressing challenges whether that's streamlining workflows, entering new markets, or improving profitability. You'll receive a milestones.",
  },
  {
    question: "How long does an engagement usually last?",
    answer:
      "Every engagement starts with a detailed assessment of your operations, market position, and growth goals. We create a customized strategy to solve key challenges, optimize performance, and deliver results.",
  },
  {
    question: "What is the average duration of a consulting project?",
    answer:
      "We evaluate your business, identify opportunities, and design a strategy tailored to your goals. Whether improving efficiency, expanding into new markets, or increasing profitability, every step is backed  milestones.",
  },
  {
    question: "What are some popular engagement ring styles?",
    answer:
      "Our process begins with understanding your business inside and out. We develop practical solutions to streamline workflows, drive growth, and improve profitability through a structured action plan.",
  },
  {
    question: "How much should I budget for an engagement ring?",
    answer:
      "We start with a thorough business review, then craft a strategy that aligns with your objectives. You'll receive a clear, actionable plan with defined milestones to improve efficiency, expand opportunities, and maximize itability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#F7F6F2] py-16 md:py-24"
    >
      <div className="mx-auto max-w-200 px-5">

        <div className="mb-14 -mt-20 flex flex-col items-center text-center">

          <div className="mb-6 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#17201C]"></span>

            <span className="text-xs font-medium text-[#17201C]">
              FAQ'S
            </span>
          </div>

          <h2 className="font-serif text-[clamp(2.8rem,3vw,4rem)] font-normal leading-tight tracking-[-0.04em] text-[#17201C]">
            Questions? Answer
          </h2>
        </div>

        <div className="flex flex-col gap-3">

          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-white bg-white"
                    : "border-[#E6E5E0] bg-transparent"
                }`}
              >

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left"
                >
                  <span className="text-base font-medium text-[#17201C]">
                    {faq.question}
                  </span>

                  <span className="shrink-0 text-[#17201C]">
                    {isOpen ? (
                      <Minus size={22} strokeWidth={2} />
                    ) : (
                      <Plus size={22} strokeWidth={2} />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-sm leading-relaxed text-[#5A6260] md:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-xl bg-[#F0EEE6] px-5 py-5 sm:flex-row sm:items-center">

          <p className="text-base text-[#17201C]">
            Still have questions? Contact us directly.
          </p>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#17201C] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#34463D]"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}
