import Carousel from "@/components/Carousel/Carousel";
import EditorsPickSection from "@/components/EditorsPick/EditorsPickSection";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

function CardSection() {
  const cardItems = [
    {
      id: 1,
      type: "ADVENTURE",
      imageUrl: "/paris.jpg",
      date: "08.08.2021",
      title: "Dream destinations to visit this year in Paris",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    },
    {
      id: 2,
      type: "TRAVEL",
      imageUrl: "/europe.jpg",
      date: "08.08.2021",
      title: "Breathtaking first-person photos around Europe",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    },
    {
      id: 3,
      type: "TECHNOLOGY",
      imageUrl: "/authenticity.jpg",
      date: "08.08.2021",
      title: "What collectors need to know about authenticity",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    },
    {
      id: 4,
      type: "FASHION",
      imageUrl: "/insta.jpg",
      date: "08.08.2021",
      title: "Instagram artists with great photography skills",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    },
    {
      id: 5,
      type: "ADVENTURE",
      imageUrl: "/cave.jpg",
      date: "08.08.2021",
      title: "Thins to know before visiting Cave in Germany",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    },
    {
      id: 6,
      type: "FASHION",
      imageUrl: "/nina.jpg",
      date: "08.08.2021",
      title: "Nina Smith vibrant work collab with Nike Dunk",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    },
    {
      id: 7,
      type: "TECHNOLOGY",
      imageUrl: "/render.jpg",
      date: "08.08.2021",
      title: "Richard Norton photorealistic rendering as real photos",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    },
    {
      id: 8,
      type: "FASHION",
      imageUrl: "/films.jpg",
      date: "08.08.2021",
      title: "25 quality collectors toys inspired by famous films",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    },
  ];

  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12.5">
      {cardItems.map((item) => (
        <div key={item.id} className="w-77.5 h-112.5 flex flex-col mx-auto">
          {/* Image Container */}
          <div className="w-77.5 h-70 overflow-hidden relative">
            <Image
              src={item.imageUrl}
              alt={item.title}
              height={280}
              width={310}
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute top-3 right-3 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
              {item.type}
            </div>
          </div>

          {/* Content Container */}
          <div className="flex flex-col flex-1">
            <p className="text-xs text-gray-400 my-3.75">{item.date}</p>
            <h2 className="text-lg font-bold text-[#495057FF]">{item.title}</h2>
            <p className="text-xs font-normal text-[#6c757dFF] mt-3.5">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PopularSection() {
  return (
    <div className="mt-10 md:mt-28 max-w-7xl mx-auto text-[#495057FF]">
      <h2 className="text-2xl md:text-5xl font-bold mb-8">Popular Topics</h2>
      <div className=" flex justify-between text-sm font-bold">
        <div className="flex flex-col md:flex-row gap-2 md:gap-5">
          <p>All</p>
          <p>Adventure</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p className="text">Branding</p>
        </div>
        <div className="">
          <p>View All</p>
        </div>
      </div>
      <CardSection />
    </div>
  );
}

function BannerSection() {
  return (
    <div className="mt-10 md:mt-12 lg:mt-16 xl:mt-37.5 relative h-150 w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner.png"
        alt="banner-image"
        fill
        priority
        className="object-cover"
      />

      {/* Centered Overlay Content */}
      <div className="max-w-2xl mx-auto px-8 absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <span className="bg-white/20 text-white text-sm font-semibold px-2.5 py-1.5 rounded-lg mb-6">
          FASHION
        </span>
        <h1 className="text-2xl md:text-4xl font-bold">
          Richird Norton photorealistic rendering as real photos
        </h1>
        <p className="text-xs mt-4.5 max-w-105">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <PopularSection />
      <BannerSection />
      <EditorsPickSection />
      <Footer />
    </div>
  );
}
