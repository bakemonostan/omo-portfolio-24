import LinkedinIcon from "../icons/LinkedinIcon";
import TwitterIcon from "../icons/TwitterIcon";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

export default function Navbar() {
  return (
    <header className=" bg-dark">
      <nav className="container flex items-center justify-between p-4 mx-auto">
        <div className="flex gap-4">
          <TwitterIcon
            height={30}
            width={30}
            classname="duration-300 cursor-pointer hover:scale-125"
          />
          <LinkedinIcon
            height={30}
            width={30}
            s
            classname="duration-300 cursor-pointer hover:scale-125"
          />
        </div>
        <Logo />
        <MenuIcon />
      </nav>
    </header>
  );
}
