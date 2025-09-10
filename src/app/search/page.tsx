import { searchProperties } from "@/actions/searchProperties";

import PropertySearch from "@/components/search/propertySearch";
import PropertiesResult from "@/components/search/PropertiesResult";
import { Property } from "@/types/property";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = (await searchParams).query as string;
  const properties: Property[] = await searchProperties(query);
  return (
    <section className="p-4">
      <div className="container mx-auto">
        <PropertySearch />
        <PropertiesResult results={properties} />
      </div>
    </section>
  );
};

export default Page;
