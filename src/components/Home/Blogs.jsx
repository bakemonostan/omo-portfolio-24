import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";

async function getBlogs() {
  const query = `
  *[_type == 'blogs'] | order(_createdAt desc){
    title,
      body,
      description,
      main_image{
      asset{
        _ref
      }
      }
  }
  `
  const data = await client.fetch(query)

  return data
  ;
}

export default async function Blogs() {
  const blogs = await getBlogs();
  console.log(blogs)
  return (
    <section>
      <div className="container mx-auto ">
        <div className="flex justify-center pt-8 ">
          <div className="w-full grid-cols-6 grid-rows-3 mx-auto xl:grid">
            <div className="col-span-5 col-start-1 row-span-2 row-start-1 py-8 xl:bg-dark xl:p-14">
              <div className="flex items-center gap-5 xl:pb-16 ">
                <div className="w-1/4 h-1 bg-black xl:bg-white"></div>
                <h2 className="text-3xl xl:text-white lg:text-7xl font-playfair">
                  Latest Blogs
                </h2>
              </div>
            </div>

            <div className="col-span-5 col-start-1 row-span-2 row-start-2 2xl:translate-x-24 ">
              <div className="flex flex-col items-center w-full gap-5 lg:gap-24 xl:flex-row ">
                {/* <figure className=" w-[20rem] lg:min-w-[370px] grid-rows-6 grid h-[448px]  relative">
                  <img
                    src="/chair2.svg"
                    alt=""
                    className="object-cover h-full row-span-5 row-start-1 "
                  />
                  <figcaption className="absolute p-3.5 text-2xl text-center text-white bg-dark font-playfair bottom-5 w-[90%] right-5 ">
                    <p>Emu facilisi posuere ut at cras non ipsum proin</p>
                  </figcaption>
                </figure>
                <figure className=" w-[20rem] lg:min-w-[370px] grid-rows-6 grid h-[448px]  relative">
                  <img
                    src="/chair2.svg"
                    alt=""
                    className="object-cover h-full row-span-5 row-start-1 "
                  />
                  <figcaption className="absolute p-3.5 text-2xl text-center text-white bg-dark font-playfair bottom-5 w-[90%] right-5 ">
                    <p>Emu facilisi posuere ut at cras non ipsum proin</p>
                  </figcaption>
                </figure>
                <figure className=" w-[20rem] lg:min-w-[370px] grid-rows-6 grid h-[448px]  relative">
                  <img
                    src="/chair2.svg"
                    alt=""
                    className="object-cover h-full row-span-5 row-start-1 "
                  />
                  <figcaption className="absolute p-3.5 text-2xl text-center text-white bg-dark font-playfair bottom-5 w-[90%] right-5 ">
                    <p>Emu facilisi posuere ut at cras non ipsum proin</p>
                  </figcaption>
                </figure> */}

                {
                  blogs.map((blog) => (
            <>

            <figure className=" w-[20rem] lg:min-w-[370px] grid-rows-6 grid h-[448px]  relative"> 
                      <Image 
                        src={urlFor(blog.main_image.asset._ref).url()}
                        fill='true'
                        alt=""
                        className="object-cover h-full row-span-5 row-start-1 "
                      />
                      <figcaption className="absolute p-3.5 text-2xl text-center text-white bg-dark font-playfair bottom-5 w-[90%] right-5 ">
                        <p>{blog.title}</p>
                      </figcaption>
                    </figure>
            </>

                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
