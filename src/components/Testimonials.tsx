import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

type testimony = {
  title: string;
  body: string;
  rating: string;
  reviewerName: string;
  date: string;
  img: string;
};

const items: testimony[] = [
  {
    title: "Excellent Service",
    body: "The team was professional and exceeded my expectations. Highly recommended!",
    rating: "5",
    reviewerName: "Alice Johnson",
    date: "2024-01-15",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    title: "Great Experience",
    body: "I loved working with this company. Everything was smooth and efficient.",
    rating: "5",
    reviewerName: "Bob Smith",
    date: "2024-02-10",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    title: "Very Satisfied",
    body: "Prompt responses and quality work. Will use their services again.",
    rating: "4",
    reviewerName: "Catherine Lee",
    date: "2024-03-05",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    title: "Outstanding Support",
    body: "Customer support was always available and helpful throughout the process.",
    rating: "5",
    reviewerName: "David Kim",
    date: "2024-03-22",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    title: "Highly Recommend",
    body: "Their attention to detail is unmatched. I am very happy with the results.",
    rating: "5",
    reviewerName: "Emily Clark",
    date: "2024-04-01",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    title: "Professional Team",
    body: "The staff was knowledgeable and friendly. Great experience overall.",
    rating: "4",
    reviewerName: "Frank Miller",
    date: "2024-04-18",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    title: "Exceeded Expectations",
    body: "They went above and beyond to deliver what I needed.",
    rating: "5",
    reviewerName: "Grace Turner",
    date: "2024-05-02",
    img: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    title: "Quick and Reliable",
    body: "Fast turnaround and reliable service. Will recommend to others.",
    rating: "4",
    reviewerName: "Henry Adams",
    date: "2024-05-15",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    title: "Impressive Results",
    body: "The results were better than I expected. Thank you for your hard work!",
    rating: "5",
    reviewerName: "Isabella Martinez",
    date: "2024-05-28",
    img: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    title: "Fantastic Collaboration",
    body: "Working together was a pleasure. Communication was clear and effective.",
    rating: "5",
    reviewerName: "Jack Wilson",
    date: "2024-06-10",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="p-4 text-accent-foreground text-center space-y-6 md:py-16">
      <h3 className="text-2xl md:text-5xl pb-6  py-12 font-semibold">
        Don't just take our word for it.
      </h3>
      <div className="container mx-auto p-2 mb-12">
        <Carousel className="  ">
          <CarouselContent>
            {items.map((item: testimony) => (
              <CarouselItem
                className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                key={item.body}
              >
                <TestimonialItem {...item} key={item.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export const TestimonialItem = ({
  title,
  body,
  rating,
  reviewerName,
  date,
  img,
}: testimony) => {
  return (
    <Card className="gap-2 h-full">
      <CardHeader className="">
        <p className="md:text-2xl">{rating} / 5</p>
        <CardTitle className="text-lg md:text-2xl font-bold text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <p className="font-semibold">{reviewerName}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
        <CardDescription className="text-center">{body}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
