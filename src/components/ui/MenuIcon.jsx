export default function MenuIcon() {
  return (
    <div className="relative flex items-center justify-center gap-2 py-1 cursor-pointer w-14 h-14 bg-primary aspect-square group">
      <div className="w-[.17rem] h-[60%] bg-dark group-hover:rotate-45 transition-transform duration-300  group-hover:translate-x-1"></div>
      <div className="w-[.17rem] h-[60%] bg-dark relative top-1 group-hover:-rotate-45 transition-transform duration-300 group-hover:top-0 group-hover:-translate-x-1"></div>
    </div>
  );
}
