import Link from "next/link"
import { Check, MessageCircle } from 'lucide-react';

const TouristExperiences = () => {
  const experiences = [
    {
      title: "Burj Khalifa Tickets",
      price: "95",
      image: "/burj-khalifa.png",
      description: "Visit the world's tallest skyscraper, the Burj Khalifa, to enjoy breathtaking views of Dubai's skyline.",
      features: ["Access to At The Top", "Super saver combo offers", "Hotel transfers"],
      tag: "1 Day Trip"
    },
    {
      title: "Dubai Marina Night Cruise",
      price: "70",
      image: "/dubai-marina.jpg",
      description: "Experience Dubai's glittering skyline from the water with a relaxing evening cruise and dinner.",
      features: ["International buffet dinner", "Live entertainment", "Hotel transfers"],
      tag: "1 Day Trip"
    },
    {
      title: "Desert Safari & Dune Bashing",
      price: "70",
      image: "/dubai-desert.jpg",
      description: "Soak in the golden dunes, thrilling dune bashing, and a classic Bedouin camp experience.",
      features: ["Dune bashing + camel ride", "BBQ dinner & shows", "Hotel transfers"],
      tag: "1 Day Trip"
    }
  ];

  return (
    <section className="bg-gradient-to-t from-[#fff4dc] to-white py-20 px-6 md:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16 bauhaus">
      <h2 className="text-4xl md:text-5xl font-black text-[#0B1221] mb-4 tracking-tight">
        Must-Try Dubai Experiences
      </h2>
      <p className="text-slate-400 text-md font-medium">
        Handpicked activities to elevate your UAE journey
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {experiences.map((item, index) => (
        <div 
          key={index} 
          className="bg-[#1A2333] rounded-[40px] overflow-hidden border border-slate-800/50 p-6 flex flex-col h-full transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/20"
        >
          {/* Image Container */}
          <div className="relative h-60 w-full mb-8">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover rounded-[32px]"
            />
            <div className="absolute top-4 right-4 bg-[#E11D48] text-white text-[11px] font-black px-4 py-1.5 rounded-full shadow-lg">
              {item.tag}
            </div>
          </div>

          {/* Text Content */}
          <div className="px-2 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">
              {item.title}
            </h3>
            
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[#E4F354] text-2xl font-black">${item.price}</span>
              <span className="text-slate-400 text-sm">per guest</span>
            </div>

            <p className="text-slate-400 text-[15px] leading-relaxed mb-8">
              {item.description}
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              {item.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-3 text-[14px] text-slate-300">
                  <Check size={16} className="text-[#E11D48]" strokeWidth={3} />
                  {feature}
                </li>
              ))}
            </ul>

            {/* WhatsApp Button */}
            <div className="mt-auto">
              <Link href="https://wa.me/+971502947867" className="flex items-center gap-2 bg-[#2D364D] hover:bg-[#37415c] text-white px-6 py-3 rounded-full text-sm font-bold transition-colors">
                Chat with our team
                <MessageCircle size={18} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default TouristExperiences;