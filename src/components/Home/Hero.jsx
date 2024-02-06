import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-[747px] pt-10 bg-dark">
      <div className="container relative h-full mx-auto ">
        <div className="absolute  h-1/2 z-[1000] translate-y-36">
          <h1 className="text-white text-[calc(1.5rem+4.5vw)] 3xl:text-8xl font-playfair leading-none">
            Architecture <br />
            Studio
          </h1>
        </div>
        <div className="w-full h-full xl:absolute right-0 lg:h-[48rem] lg:w-[85%]  translate-y-2">
          <Image src="/hero.svg" fill alt="" priority objectFit="cover" />
        </div>
      </div>
    </section>
  );
}
