import Image from "next/image";

const FeaturedNews = () => {
  return (
    <section className=" bg-zinc-900 min-h-screen p-12 text-accent">
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold ">Featured Property</h2>
        <p className="text-2xl font-light mt-2">
          Grid or Carousel for high-traffic or most useful content.
        </p>

        <article className="grid grid-cols-2 gap-4 mt-12">
          <Image
            src="/background/skyline.jpg"
            width={800}
            height={800}
            alt="Featured property image"
          />

          <div className="space-y-4 px-12">
            <h3 className="text-4xl font-bold tracking-wide leading-relaxed">
              2051 Riverfork Dr, Huntington, IN 46750
            </h3>
            <h4 className="text-2xl tracking-wider font-light">
              Riverfork Industrial
            </h4>
            <p className="leading-loose text-sm">
              Riverfork Industrial is a 63,000 SF industrial facility with 3,000
              SF of office space and 60,000 SF of manufacturing/warehouse space
              with the ability for expansion of 56,000 SF on the front and
              33,000 SF at the rear of the building. The office includes private
              offices, an open cubicle area, and conference rooms. The warehouse
              is for manufacturing and is equipped with two electrical services
              in the building, one at 3,000 amps and the other at 1,200 amps,
              supplying 480/277 volts of three-phase power. The eave height is
              11’ 6”, and the center of the building is 21’ 1”.
            </p>

            <p className="leading-loose text-sm">
              The warehouse features six 8’ x 10’ dock doors and one 10’ x 12’
              overhead door. Four docks have a rolling load capacity of 12,500
              pounds, and the other two have a rolling load capacity of 20,000
              pounds.
            </p>

            <p className="leading-loose text-sm">
              The building is on a 10-acre lot with 76 paved parking spaces.
              Trailer parking is available at the north end of the property,
              which is gravel. The entire building is equipped with a sprinkler
              system and is fully air-conditioned. The roof, which was installed
              in 2017, comes with a 20-year warranty.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedNews;
