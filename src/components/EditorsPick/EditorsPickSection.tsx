import Image from "next/image";

const EditorsPickSection = () => {
  return (
    <div
      className="my-10
     lg:my-37.25 max-w-7xl mx-auto text-[#495057FF]"
    >
      <h1 className="text-2xl md:text-5xl font-bold mb-8">Editor's Pick</h1>
      <EditorCardSection />
    </div>
  );
};

export default EditorsPickSection;

function EditorCardSection() {
  const EditorCardData = [
    {
      id: 1,
      type: "FASHION",
      imageUrl: "/card-1.png",
      date: "08.08.2021",
      title: "Richard Norton photorealistic rendering as real photos",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    },
    {
      id: 2,
      type: "FASHION",
      imageUrl: "/card-2.png",
      date: "08.08.2021",
      title: "Richard Norton photorealistic rendering as real photos",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    },
    {
      id: 3,
      type: "FASHION",
      imageUrl: "/card-3.png",
      date: "08.08.2021",
      title: "Richard Norton photorealistic rendering as real photos",
      description:
        "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    },
  ];

  return (
    <div className="mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-4">
      {EditorCardData.map((item) => (
        <div
          key={item.id}
          className="w-full h-64 md:h-80 lg:h-87.5 rounded-md relative overflow-hidden"
        >
          <Image
            src={item.imageUrl}
            fill
            sizes=""
            alt={item.title}
            className="object-cover"
          />
          <div className="absolute top-3 right-3 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
            {item.type}
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 py-6 space-y-3">
            <p className="text-xs text-white">{item.date}</p>
            <h2 className="text-lg font-bold text-white line-clamp-2">
              {item.title}
            </h2>
            <p className="text-xs font-normal text-white line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
