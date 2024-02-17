import EmailIcon from "../icons/EmailIcon";
import MapPinIcon from "../icons/MapPinIcon";
import PhoneIcon from "../icons/PhoneIcon";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-white py-14 bg-dark mt-14">
      <div className="container flex items-center justify-between mx-auto">
        <div className="-rotate-90 ">
          <p className="text-sm">Copyrigth 2024</p>
        </div>
        <div>
          <h2>Logo</h2>
        </div>
        <div className="flex justify-between w-2/3 ">
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
