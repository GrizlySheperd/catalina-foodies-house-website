import koloMee from "@/assets/kolo-mee.jpg";
import sarawakLaksa from "@/assets/sarawak-laksa.jpg";
import midinBelacan from "@/assets/midin-belacan.jpg";
import ayamPansuh from "@/assets/ayam-pansuh.jpg";
import kekLapis from "@/assets/kek-lapis.jpg";
import tehCPeng from "@/assets/teh-c-peng.jpg";

export type Dish = {
  id: string;
  name: string;
  shortName?: string;
  price: number;
  description: string;
  image: string;
  alt: string;
  tag?: string;
};

export const dishes: Dish[] = [
  {
    id: "kolo-mee",
    name: "Kolo Mee",
    price: 7.5,
    description:
      "Springy egg noodles tossed in shallot oil with minced pork and char siu.",
    image: koloMee,
    alt: "A bowl of kolo mee with char siu slices and springy noodles",
    tag: "House favourite",
  },
  {
    id: "sarawak-laksa",
    name: "Sarawak Laksa",
    price: 9.0,
    description:
      "A sambal-and-coconut broth with prawns, shredded omelette and beehoon.",
    image: sarawakLaksa,
    alt: "A bowl of Sarawak laksa with prawns and beehoon",
    tag: "Simmered slow",
  },
  {
    id: "midin-belacan",
    name: "Midin Belacan",
    price: 8.0,
    description:
      "Wild jungle fern stir-fried with shrimp paste, garlic and bird's-eye chilli.",
    image: midinBelacan,
    alt: "Midin fern stir-fried with sambal in a wok",
  },
  {
    id: "ayam-pansuh",
    name: "Ayam Pansuh",
    price: 12.0,
    description:
      "Chicken slow-cooked in bamboo with lemongrass, tapioca leaves and ginger.",
    image: ayamPansuh,
    alt: "Chicken cooked in a bamboo tube with lemongrass",
  },
  {
    id: "kek-lapis",
    name: "Kek Lapis Sarawak (slice)",
    shortName: "Kek Lapis (slice)",
    price: 4.5,
    description:
      "Hand-layered spiced butter cake, cut fresh from this morning's bake.",
    image: kekLapis,
    alt: "Colourful layered Sarawak kek lapis cake slices",
    tag: "Baked today",
  },
  {
    id: "teh-c-peng",
    name: "Teh C Peng Special",
    price: 3.5,
    description:
      "Iced tea with evaporated milk and a swirl of homemade gula apong syrup.",
    image: tehCPeng,
    alt: "Layered iced teh C peng in a glass",
  },
];

export const formatRM = (n: number) => `RM ${n.toFixed(2)}`;
