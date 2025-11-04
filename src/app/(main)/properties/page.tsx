import PropertySearch from "@/components/search/propertySearch";
import PropertiesResult from "@/components/search/PropertiesResult";
import { Suspense } from "react";
import PropertiesResultSkeleton from "@/components/search/PropertyResultSkeleton";

type searchParams = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Page = async ({ searchParams }: searchParams) => {
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
