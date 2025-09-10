import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const TrendSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  gap-2 md:gap-4 mt-12 md:p-4 container mx-auto grid-rows-3">
      {[...Array(9)]?.map((idx) => (
        <Card
          key={idx}
          className="bg-transparent flex flex-col col-span-1 border-transparent rounded-xl py-2 gap-2 shadow-none grow aspect-square"
        >
          <CardHeader className="relative w-full grow  rouned-xl mb-0 min-h-44">
            <Skeleton className="absolute inset-0" />
          </CardHeader>

          <CardContent className="px-2">
            <h3 className="text-sm">
              <Skeleton className="h-4 max-w-3/4 w-full mb-2" />
            </h3>
            <p className="text-xs text-accent-foreground">
              <Skeleton className="h-3 max-w-1/2 w-full" />
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TrendSkeleton;
