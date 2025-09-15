import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const GoogleMapProperty = ({ name }: { name: string }) => {
  return (
    <section className="p-4 pt-0 space-y-2">
      <Image
        width={650}
        height={650}
        src="/googlemap.jpg"
        alt={name + " Google Map Coordinates"}
        className="rounded-sm"
      />
    </section>
  );
};

export default GoogleMapProperty;
