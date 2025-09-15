import Image from "next/image";

const Hero = ({ img, name }: { img: string; name?: string }) => {
  return (
    <section className=" p-4 pb-0 pt-6">
      <div className="relative max-h-[80vh] min-h-[80vh] max-w-3/5 mx-auto">
        <Image
          fill
          src={img}
          alt={`${name} banner image`}
          className="w-full rounded-sm"
        />
      </div>
    </section>
  );
};

export default Hero;
