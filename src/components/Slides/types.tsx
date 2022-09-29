export interface Slide {
  name: string;
  description: string;
  slug: string;
  type: string;
  title: string;
  icon: string;
  background: string;
  cards: ProductCard[];
}

export type ProductCard = {
  id: number;
  title: string;
  destination: string;
  images: {
    desktop: "https://d24l7zeiclq6su.cloudfront.net/img/p/9461/c248986.jpg";
    tablet: "https://d24l7zeiclq6su.cloudfront.net/img/p/9461/c248986.jpg";
    mobile: "https://d24l7zeiclq6su.cloudfront.net/img/p/9461/c248986.jpg";
  }[];
  days: number;
  priceDetail: {
    fromPrice: number;
    fromPriceBeautify: string;
    discountSaved: number;
    oldPriceBeautify: string;
    pricingPercentage: number;
    pricePerNight: string;
  };
};
