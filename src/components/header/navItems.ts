export type PublicNavItems = { label: string; href: string };
export type PrivateNavItems = { label: string; href: string };

export const publicNavItems: PublicNavItems[] = [
  { label: "Properties", href: "/properties" },
  { label: "Newsfeed", href: "/newsfeed" },
  { label: "Vendor Directory", href: "/vendor" },
  { label: "Advertise", href: "/advertise" },
  { label: "Contact Us", href: "/contact" },
];


export const privateNavItems: PrivateNavItems[] = [
 ...publicNavItems,
  { label: "My Properties", href: "/myproperties" }
];