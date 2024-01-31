import LinkedinIcon from "../icons/LinkedinIcon";
import TwitterIcon from "../icons/TwitterIcon";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-dark">
      <nav className="container flex items-center justify-between p-4 mx-auto">
        <div className="flex gap-4">
          <TwitterIcon height={28} width={28} />
          <LinkedinIcon height={28} width={28} />
        </div>
        <Logo />
        <MenuIcon />
      </nav>
    </header>
  );
}
