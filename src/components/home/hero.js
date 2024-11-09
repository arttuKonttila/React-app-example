import { Image } from "react-bootstrap";
import hero from "../../assets/images/Fashion-Sale2000 x 2000.svg";
export default function Hero() {
  return (
    <div className="hero-container w-100 overflow-hidden">
      <Image src={hero} className="w-100 heroImg" fluid />
    </div>
  );
}
