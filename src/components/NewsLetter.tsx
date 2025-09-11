import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsLetter = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-accent text-accent-foreground p-12 lg:p-24 gap-12">
      <div className="space-y-2">
        <h3 className="text-4xl font-semibold">
          Stay ahead in commercial real estate
        </h3>
        <p className="text-2xl font-thin">
          Weekly property updates and news from around the country
        </p>
      </div>

      <div className="flex gap-4 max-w-xl w-full ">
        <Input />
        <Button className="cursor-pointer bg-primary">Submit</Button>
      </div>
    </section>
  );
};

export default NewsLetter;
