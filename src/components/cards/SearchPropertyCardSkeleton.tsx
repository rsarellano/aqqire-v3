import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
const SearchPropertyCardSkeleton = () => {
  return (
    <Card className="col-span-1 py-0 pb-2 overflow-hidden gap-3 min-h-84">
      <Skeleton className="min-h-60" />

      <CardContent className="p-6 py-0">
        <div className="flex gap-2">
          <Skeleton className="size-8" />
          <Skeleton className="h-8 w-48" />
        </div>
        <Skeleton className="h-4 w-48 my-2" />
      </CardContent>
    </Card>
  );
};

export default SearchPropertyCardSkeleton;
