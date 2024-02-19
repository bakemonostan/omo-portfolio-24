export default function OurClients() {
  return (
    <section className="container mx-auto ">
      <div className="flex flex-col-reverse items-center justify-center gap-5 py-16 xl:justify-between xl:flex-row">
        <div className="flex-1">
          <p>Client logos go here </p>
        </div>
        <div className="flex items-center flex-1 w-full gap-5 ">
          <h2 className="text-3xl xl:text-7xl font-playfair">Our Clients</h2>
          <div className="w-1/4 h-1 bg-dark"></div>
        </div>
      </div>
    </section>
  );
}