import Link from "next/link";
import { Button } from "../ui/button";

const NewsHero = () => {
  return (
    <section
      className="min-h-[90vh] flex flex-col items-center justify-center gap-4 text-white p-4"
      style={{
        background: `linear-gradient(90deg,rgba(0, 86, 150, 0.79) 0%, rgba(0, 86, 150, 0.26) 50%, rgba(0, 86, 150, 0.6) 100%), url('/background/skyline.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-5xl lg:text-6xl lg:text-center font-bold ">
        The CRE Market Watch
      </h1>
      <p className="lg:text-xl font-light">
        Insights, updates, and expert takes on what is moving the commercial real
        estate industry
      </p>

      <div className="mt-8 flex gap-2">
        <Link href="/contact">
          <Button
            variant={"outline"}
            className="text-accent-foreground cursor-pointer "
            size={"lg"}
          >
            Contact Us
          </Button>
        </Link>
        <Link href="advertise">
          <Button className="cursor-pointer text-accent" size={"lg"}>
            Get Featured
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NewsHero;
