
import { Shield, Users, Rocket, Globe } from "lucide-react";

const TrustSignals = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "Every property is thoroughly verified for authenticity and accuracy."
    },
    {
      icon: Users,
      title: "Expert Property Advisors",
      description: "Our team of real estate professionals will guide you through each step."
    },
    {
      icon: Rocket,
      title: "Fast Closing & Paperwork Help",
      description: "We simplify the paperwork and speed up the closing process."
    },
    {
      icon: Globe,
      title: "Nationwide Reach",
      description: "Access to properties across the country with local expertise."
    }
  ];

  return (
    <section className="section-padding bg-realestate-blue text-white">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-realestate-gold uppercase font-medium tracking-wide">Why Choose Us</span>
          <h2 className="text-3xl font-bold mt-2">The LuxeHome Advantage</h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            We go beyond just helping you find a property—we ensure a seamless, 
            transparent, and rewarding real estate journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-white/20 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center bg-realestate-gold/20 p-3 rounded-full mb-5">
                <feature.icon className="h-8 w-8 text-realestate-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
