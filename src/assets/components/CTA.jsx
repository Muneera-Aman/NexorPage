
export default function CTA() {
 const ctaImage = "/Images/CTAbackground.png";

  return (
    <section
      id="cta"
      className="bg-[#F7F6F2] pt-6 pb-0"
    >
      <div
        className="relative flex min-h-110 w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-140.25"
        style={{
          backgroundImage: `url(${ctaImage})`,
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 mx-auto flex max-w-190 flex-col items-center px-5 text-center">

          <p className="mb-4 mt-10 text-sm font-medium text-white md:text-sm">
            NEXOR® IS A BEST AGENCY BASED IN UK
          </p>

          <h2 className="max-w-140 font-serif text-[clamp(3rem,3vw,4rem)] font-normal leading-[1.12] tracking-[-0.035em] text-white">
            Ready to take a 
            <br />
            consultancy with us!
          </h2>
          <a
            href="https://nexor.framer.wiki/contact"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#F0FF80] px-4 py-3 text-base font-medium text-[#17201C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5F36F]"
          >
            Book Free Meeting

            <span className="text-xl font-normal">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
