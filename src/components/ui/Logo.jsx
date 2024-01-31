import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src={"/omion.png"} alt="logo" width={100} height={100} />
    </div>
  );
}
