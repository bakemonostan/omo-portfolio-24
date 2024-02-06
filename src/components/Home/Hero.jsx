import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[747px] pt-10 bg-dark">
      <div className="container relative flex justify-between mx-auto border">
        <div>
          <h1 className="text-3xl font-playfair">Louis Vuitton</h1>
          <p className="font-openSans">This is my portfolio</p>
        </div>
        <div className="absolute right-0 h-[48rem] w-[73rem] border translate-y-5">
          <Image
            src="/hero.svg"
            fill="true"
            alt=""
            priority
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
