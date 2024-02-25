import Blogs from "@/components/Home/Blogs";
import Hero from "@/components/Home/Hero";
import OurClients from "@/components/Home/OurClients";
import OurDNA from "@/components/Home/OurDNA";
import Whyus from "@/components/Home/Whyus";
import Works from "@/components/Home/Works";

export const revalidate = 20;

export default function Home() {
  return (
    <main>
      <Hero />
      <OurDNA />
      <Works />
      <Whyus />
      <Blogs />
      <OurClients />
    </main>
  );
}
