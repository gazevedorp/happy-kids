
import { Rocket, Palette, Zap, Code, Smartphone, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Instant hot reload and optimized build times with Vite's native ESM support."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Utility-First CSS",
      description: "Build custom designs rapidly with Tailwind's comprehensive utility classes."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developer Experience",
      description: "TypeScript support, modern tooling, and excellent debugging capabilities."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Responsive design out of the box with mobile-first utility variants."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Production Ready",
      description: "Optimized builds with automatic code splitting and tree shaking."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Modern Stack",
      description: "Latest React features with concurrent rendering and suspense support."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose This Stack?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern tools that enable developers to build faster, ship quicker, and create better user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 hover:border-purple-200"
            >
              <div className="text-purple-600 group-hover:text-blue-600 transition-colors duration-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
