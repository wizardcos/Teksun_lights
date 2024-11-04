import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";

export const logo = [
  {
    name: "Website logo",
    img: "./logo.png",
  }
];
export const heroImages = [
  { img: './showCase1.jpg' },
  { img: './showCase2.jpg' },
  { img: './1.jpg' },
];
//for hero slider
export const sliderSetting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
};

export const cardData = [
  {
    title: 'Plan',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
  {
    title: 'Play',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
  {
    title: 'Connect',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
  {
    title: 'Support',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
  {
    title: 'Plan',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
  {
    title: 'Play',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
  {
    title: 'Connect',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
  {
    title: 'Support',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
  {
    title: 'Plan',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
  {
    title: 'Play',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
  {
    title: 'Connect',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
  {
    title: 'Support',
    description: 'Lorem ipsum dolor sit amet.',
    imgSrc: './showCase1.jpg',
  },
];
export const comments = [
  {
    name: "Faisal Hills",
    post: "Residential Society",
    comment:
      "Delivered high-quality lighting solutions to enhance residential areas and public spaces within the society.",
    img: "./FH.jpeg",
  },
  {
    name: "AHL Oil Refinery",
    post: "Company",
    comment:
      "Successfully installed customized lighting systems across the AHL Oil Refinery, ensuring well-lit, safe, and efficient operational areas.",
    img: "./AHL.jpeg",
  },
  {
    name: "Osis",
    post: "Residential Society",
    comment:
      "Provided a range of solar and conventional lights to brighten key areas, improving the aesthetic and safety of Osis residential zones.",
    img: "./osis.png",
  },
  {
    name: "CDA",
    post: "Government Organization",
    comment:
      "Partnered with CDA to deliver efficient lighting installations in government-maintained public areas, enhancing visibility and safety for all.",
    img: "./CDA.png",
  },
  {
    name: "Abdullah Garden",
    post: "Residential Society",
    comment:
      "Delivered advanced lighting systems to illuminate Abdullah Garden, making it safer and more welcoming for residents.",
    img: "./AG.jpeg",
  },
  {
    name: "DHA Islamabad",
    post: "Residential Society",
    comment:
      "Installed high-quality poles and lighting solutions across DHA Islamabad, elevating both the functionality and appearance of community spaces.",
    img: "./DHA.png",
  },
  {
    name: "Bahria Town",
    post: "Residential Society",
    comment:
      "Implemented a comprehensive range of poles and lights throughout Bahria Town, enhancing public areas and creating a modern, well-lit environment.",
    img: "./BT.png",
  },
];

export const products = [
  {
    id: 1,
    name: "Solar Panel",
    image: "./Street Light2-01.jpg",
    description: "High-efficiency solar panel.",
  },
  {
    id: 2,
    name: "LED Light",
    image: "./Street Light3-01.jpg",
    description: "Energy-saving LED light.",
  },
  {
    id: 3,
    name: "Inverter",
    image: "./Street Light4-01.jpg",
    description: "Advanced power inverter.",
  },
  {
    id: 4,
    name: "Battery Storage",
    image: "./Street Light5-01.jpg",
    description: "Long-lasting battery storage.",
  },
  {
    id: 5,
    name: "Solar Charger",
    image: "./Street Light6-01.jpg",
    description: "Efficient solar charger.",
  },
  {
    id: 6,
    name: "LED Light",
    image: "./Street Light6-01.jpg",
    description: "Efficient solar charger.",
  },
  {
    id: 7,
    name: "Solar Panel",
    image: "./Street Light6-01.jpg",
    description: "Efficient solar charger.",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
