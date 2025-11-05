import BasicInformation from "@/components/properties/property/basicInformation";
import Form from "@/components/properties/property/form";
import GoogleMapProperty from "@/components/properties/property/GoogleMapProperty";
import Hero from "@/components/properties/property/hero";
import SimilarProperties from "@/components/properties/property/SimilarProperties";

import { apiInstance } from "@/utils/axiosInstance";

type pageParams = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: pageParams) {
  const { id } = await params;

  // Todo add api endpoint to fetch the property by id
  // Change to property endpoint when available
  // const getProperty = await apiInstance.get(`/properties/${id}`);

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
      <div className="grid grid-cols-5 max-w-3/5 mx-auto p-4 pt-6">
        <BasicInformation
          address={address}
          rating={rating}
          name={name}
          description={description}
          price={price}
        />
        <Form />
      </div>
      <div className="max-w-3/5 mx-auto p-4 pt-6 min-h-[50vh] relative">
        <GoogleMapProperty name={name} />
      </div>
      <div className="max-w-3/5 mx-auto p-4 pt-6 ">
        <SimilarProperties name={name} />
      </div>
    </>
  );
}
