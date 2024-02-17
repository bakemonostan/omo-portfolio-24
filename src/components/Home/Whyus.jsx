export default function Whyus() {
  return (
    <section>
      <div className="container mx-auto ">
        <div className="flex justify-center pt-8 ">
          <div className="grid w-full grid-cols-6 grid-rows-3 mx-auto">
            <div className="col-span-5 col-start-2 row-span-2 row-start-1 bg-dark p-14">
              <div className="flex items-center gap-5 pb-16 ">
                <div className="w-1/4 h-1 bg-white"></div>
                <h2 className="text-white text-7xl font-playfair">Why Us</h2>
              </div>
              <div className="text-xl font-light text-white w-[calc(100%-30%)] pr-20 translate-x-48">
                <p>
                  Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
                  tellus ultricies velit elementum ut dui sed augue ultrices
                  phasellus ullamcorper condimentum ut suspendisse viverra
                  ornare sit venenatis
                </p>
              </div>
            </div>

            <div className="col-span-5 col-start-1 row-span-2 row-start-2 p-14">
              <div className="flex items-center w-full gap-24 ">
                <div>
                  <div className="w-[23rem] h-[23rem] bg-primary flex justify-center items-center px-5">
                    <p className="text-center">
                      Amet eu facilisi posuere ut at cras non ipsum proin nunc
                      purus tellus ultricies velit elementum ut dui sed augue
                      ultrices phasellus ullamcorper condimentum ut suspendisse
                      viverra ornare sit venenatis
                    </p>
                  </div>
                </div>
                <div className="flex w-full gap-5 ">
                  <div className="shadow-lg w-[11rem] h-[11rem] bg-white flex flex-col justify-center items-center px-5">
                    <img src="/leaf.svg" alt="" />
                    <p>Eco friendly</p>
                  </div>
                  <div className="shadow-lg w-[11rem] h-[11rem] bg-white flex flex-col justify-center items-center px-5">
                    <img src="/leaf.svg" alt="" />
                    <p>Eco friendly</p>
                  </div>
                  <div className="shadow-lg w-[11rem] h-[11rem] bg-white flex flex-col justify-center items-center px-5">
                    <img src="/leaf.svg" alt="" />
                    <p>Eco friendly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-span-5 col-start-1 mr-auto bg-primary">
        Lorem, ipsum dolor.
      </div> */}
      </div>
    </section>
  );
}
