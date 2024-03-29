import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function OurDNA() {
  return (
    <section className=" xl:container 3xl:mx-auto xl:pb-24">
      <div className="relative w-full 3xl:w-[calc(100%-8%)] lg:min-h-[656px] md:flex items-center py-10 bg-secondary">
        {/* image */}
        <div className=" h-[23rem] md:h-[39rem] sm:w-[35rem]  relative translate-y-10 md:translate-y-24">
          <Image
            className="xl:absolute"
            src="/dna.svg"
            fill="true"
            alt=""
            priority
            objectFit="cover"
          />
        </div>
        <div className="relative z-50 h-full md:w-1/2  xl:w-[calc(100%-35rem)] md:translate-y-16">
          <div className="text-white md:-translate-x-28">
            <h2 className="text-white text-[calc(1.5rem+4.5vw)] 3xl:text-6xl font-playfair leading-none pb-5">
              Our DNA
            </h2>
            <div></div>
          </div>
          <div className="px-8 space-y-10 text-white">
            <p className="text-[calc(1rem+.5vw)]  text-[#C4C4C4]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              ad exercitationem reprehenderit hic dolor quaerat, qui id soluta
              aliquam, ipsa omnis rerum molestias iure commodi!
            </p>
            <p className="text-[calc(1rem+.5vw)]  text-[#6B6B6B] font-playfair">
              Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
              tellus ultricies velit{" "}
            </p>
            <div>
              <Button className="underline rounded-sm py-2.5 text-2xl font-playfair text-dark bg-primary w-36 ">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
