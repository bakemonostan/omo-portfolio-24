/* eslint-disable @next/next/no-img-element */
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Works() {

  return (
    <section className="px-5 py-10 sm:py-24">
      <div className="container mx-auto ">
        <div className="flex items-center gap-5 ">
          <div className="w-1/4 h-1 bg-dark"></div>
          <h2 className="text-3xl xl:text-7xl font-playfair">Selected works</h2>
        </div>
        <p className="pt-5 mx-auto max-w-7xl">
          Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus
          ultricies velit elementum ut dui sed augue ultrices phasellus
          ullamcorper condimentum ut suspendisse viverra ornare sit venenatis
        </p>

        <div className="justify-center pt-8 lg:flex">
          {/* grid container */}
          <div className="grid h-full grid-cols-7 grid-rows-6 lg:w-3/5 ">
            <div className="flex items-center justify-center col-span-2 row-span-2 text-gray-400 text-9xl ">
              01
            </div>
            <div className="col-span-5 col-start-3 row-span-5 row-start-1 ">
              <img
                src="/chair2.svg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-3 col-start-1 row-span-4 row-start-3 bg-blue-500">
              <img
                src="/chair1.svg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex items-end col-span-4 row-span-1 px-12 ">
              <Button className="underline rounded-sm py-2.5 lg:text-2xl font-playfair text-dark bg-primary w-36 ">
                View Project
              </Button>
            </div>
          </div>
          <div className="pt-32 space-y-10 lg:w-2/5 ">
            <h2 className="text-6xl text-center font-playfair">
              Louis Vuitton
            </h2>
            <p className="px-12 text-left">
              Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
              tellus ultricies velit elementum ut dui sed augue ultrices
              phasellus ullamcorper condimentum ut suspendisse viverra ornare
              sit venenatis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
