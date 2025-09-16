"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Form = () => {
  return (
    <section className=" border border-accent dark:border-accent-foreground p-4 rounded-sm col-span-2">
      <h2 className="text-xl py-4 text-center font-semibold text-accent-foreground">
        Contact Broker
      </h2>
      <form className="space-y-4">
        <div className="text-accent-foreground space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input placeholder="Enter your name" />
        </div>

        <div className="text-accent-foreground space-y-2">
          <Label htmlFor="surname">Surname</Label>
          <Input placeholder="Enter your Surname" />
        </div>

        <div className="text-accent-foreground space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input placeholder="Enter your email address" type="email" />
        </div>

        <div className="text-accent-foreground space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea placeholder="Let us know your requests" />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default Form;
