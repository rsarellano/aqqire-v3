import Image from "next/image";

const GoogleMapProperty = ({ name }: { name: string }) => {
  return (
    <section className="p-4 pt-0 space-y-2">
      <Image
        fill
        src="/googlemap.jpg"
        alt={name + " Google Map Coordinates"}
        className="rounded-sm"
      />
    </section>
  );
};

export default GoogleMapProperty;
