import { Suspense } from "react";

import { searchProperties } from "@/actions/searchProperties";

import PropertySearch from "@/components/search/propertySearch";
import PropertiesResult from "@/components/search/PropertiesResult";
import PropertiesResultSkeleton from "@/components/search/PropertyResultSkeleton";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = (await searchParams).query as string;

  return (
    <section className="p-4">
      <div className="container mx-auto">
        <PropertySearch />
        <Suspense fallback={<PropertiesResultSkeleton />}>
          <PropertiesResult query={query} />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
