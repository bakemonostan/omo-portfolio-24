import EmailIcon from "../icons/EmailIcon";
import MapPinIcon from "../icons/MapPinIcon";
import PhoneIcon from "../icons/PhoneIcon";

export default function Footer() {
  return (
    <footer className="w-full py-5 text-white xl:py-14 bg-dark">
      <div className="container flex flex-col items-center justify-between mx-auto lg:flex-row">
        <div className="xl:-rotate-90 ">
          <p className="text-sm">Copyrigth 2024</p>
        </div>
        <div>
          <h2>Logo</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-5 pt-5 lg:pt-0 lg:justify-between lg:flex-row lg:w-2/3 ">
          <p className="flex gap-4 text-sm">
            <span>
              <EmailIcon
                height={20}
                width={20}
                classname="duration-300 cursor-pointer hover:scale-125"
              />
            </span>
            omojiadeomo@gmail.com
          </p>
          <p className="flex gap-4 text-sm">
            <span>
              <PhoneIcon
                height={20}
                width={20}
                classname="duration-300 cursor-pointer hover:scale-125"
              />
            </span>
            +234 123456789
          </p>
          <p className="flex gap-4 text-sm">
            <span>
              <MapPinIcon
                height={20}
                width={20}
                classname="duration-300 cursor-pointer hover:scale-125"
              />
            </span>
            8502 Preston Rd. Inglewood, Maine 98380
          </p>
        </div>
      </div>
    </footer>
  );
}
