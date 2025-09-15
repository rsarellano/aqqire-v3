import { FaStar } from "react-icons/fa6";

const BasicInformation = ({
  name,
  rating,
  address,
  description,
}: {
  name: string;
  rating: number;
  address: string;
  description: string;
}) => {
  return (
    <section className="space-y-2">
      <h1 className="text-4xl font-semibold text-accent-foreground">{name}</h1>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center">
          <FaStar className="text-primary" size={24} />
          <p className="text-lg font-semibold text-accent-foreground">
            {rating}
          </p>
        </div>
        <p className="text-accent-foreground/60 text-lg">{address}</p>
      </div>
      <p className="text-accent-foreground text-md tracking-wider font-light leading-relaxed p-4 pl-0 ">
        {description}
      </p>
    </section>
  );
};

export default BasicInformation;
