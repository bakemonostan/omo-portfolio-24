import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `
  *[_type == 'hero'] {
    heroImage{
      asset {
        _ref
      }
    }
  }
  `;
  const data = await client.fetch(query);

  return data
}


export default async function Hero() {
  const hero = await getData();
  console.log()
  return (
    <section className="h-[30rem] lg:h-[46.6rem] pt-10 bg-dark">
      <div className="container relative h-full mx-auto ">
        <div className="absolute  h-1/2 z-[1000] translate-y-36">
          <h1 className="text-white text-[calc(1.5rem+4.5vw)] 3xl:text-8xl font-playfair leading-none">
            Architecture <br />
            Studio
          </h1>
        </div>
        <div className="w-full h-full lg:absolute right-0 lg:h-[48rem] lg:w-[85%]  lg:translate-y-2">
        {hero.map((i) => {
        return (
          <div key={i.heroImage.asset._ref}>
            <Image src={urlFor(i.heroImage.asset._ref).url()} alt="" fill priority objectFit="cover" />
          </div>
        )
      })}
        </div>
      </div>

    </section>
  );
}
