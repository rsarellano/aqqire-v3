import BasicInformation from "@/components/properties/property/basicInformation";
import GoogleMapProperty from "@/components/properties/property/GoogleMapProperty";
import Hero from "@/components/properties/property/hero";

type pageParams = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: pageParams) {
  // const { id } = await params;
  const { name, src, rating, address, price, description } = {
    name: "Sydney Opera House",
    src: "/background/skyline.jpg",
    rating: 4.8,
    address: "Performing arts centre in Sydney, Australia",
    price: 8000000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit nihil mollitia esse necessitatibus ad odit est vero quam possimus eveniet dolore quo, unde optio aspernatur cumque doloremque earum et? Pariatur, dolorem eos. Iste nam molestias officia doloribus? Temporibus officia impedit aspernatur distinctio fugiat rem quis reprehenderit? Nostrum, blanditiis ea.",
  };
  return (
    <>
      <Hero img={src} name={name} />

      <div className="grid grid-cols-2 max-w-3/5 mx-auto p-4 pt-6">
        <BasicInformation
          address={address}
          rating={rating}
          name={name}
          description={description}
        />
        <GoogleMapProperty name={name} />
      </div>
    </>
  );
}
