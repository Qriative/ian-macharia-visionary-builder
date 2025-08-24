import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, BarChart3, Smartphone, Heart, Home, Building, Activity, Droplets, Car } from 'lucide-react';

const Ventures = () => {
  const mainVentures = [
    {
      name: "WezaCredit",
      tagline: "Expanding access to asset financing",
      description: "WezaCredit makes credit more accessible by offering secure, technology-driven lending solutions with AI-powered fraud detection for responsible financing.",
      icon: CreditCard,
      color: "emerald"
    },
    {
      name: "WezaScore",
      tagline: "Intelligent credit scoring for emerging markets",
      description: "WezaScore uses data and machine learning to deliver inclusive, fair, and accurate credit scoring models for underserved markets.",
      icon: BarChart3,
      color: "navy"
    },
    {
      name: "AfriPay",
      tagline: "One ID. Infinite possibilities",
      description: "AfriPay simplifies verification and financial access through a unified digital ID and payments system, creating seamless, trusted user experiences.",
      icon: Smartphone,
      color: "gold"
    },
    {
      name: "ValorLife",
      tagline: "Well-being and mental health for modern living",
      description: "ValorLife provides AI-driven tools for reflection, support, and empowerment, enabling users to prioritize mental health and personal growth.",
      icon: Heart,
      color: "emerald"
    }
  ];

  const otherVentures = [
    {
      name: "PropMate",
      tagline: "Smart property management",
      description: "A platform that simplifies property and tenant management, from rent collection to repairs and services.",
      icon: Home
    },
    {
      name: "Revease",
      tagline: "Revenue collection and management",
      description: "A digital platform for transparent and efficient revenue administration for councils and public entities.",
      icon: Building
    },
    {
      name: "Mediflow",
      tagline: "Transforming healthcare administration",
      description: "A hospital management system that improves patient workflows, billing, and overall care delivery.",
      icon: Activity
    },
    {
      name: "Hydrolink",
      tagline: "Water supply and management reimagined",
      description: "Tools for efficient water distribution, tracking, and service requests.",
      icon: Droplets
    },
    {
      name: "Amani Drive",
      tagline: "Executive transport, redefined",
      description: "Premium executive transport for discerning clients, offering secure VIP travel and bespoke mobility solutions.",
      icon: Car
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="pt-20 min-h-screen bg-background">
        <div className="relative overflow-hidden bg-gradient-to-br from-navy/5 via-background to-emerald/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--emerald))_0%,transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--gold))_0%,transparent_50%)] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-navy mb-6">
                WezaLife Ecosystem <span className="text-emerald">&</span> Ventures
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover the interconnected ecosystem of ventures driving financial inclusion and technological innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Main Ventures Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
              Core WezaLife Ventures
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald to-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {mainVentures.map((venture, index) => {
              const IconComponent = venture.icon;
              return (
                <Card key={venture.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-2xl bg-${venture.color}/10 group-hover:bg-${venture.color}/20 transition-colors`}>
                        <IconComponent className={`w-8 h-8 text-${venture.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-playfair text-navy group-hover:text-emerald transition-colors">
                          {venture.name}
                        </CardTitle>
                        <p className="text-sm font-medium text-gold uppercase tracking-wide">
                          {venture.tagline}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                      {venture.description}
                    </CardDescription>
                    <Button variant="ghost" className="group-hover:bg-emerald/10 group-hover:text-emerald transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Other Ventures Section */}
        <div className="bg-gray-50/50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4">
                Extended Venture Portfolio
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-navy to-charcoal mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherVentures.map((venture, index) => {
                const IconComponent = venture.icon;
                return (
                  <Card key={venture.name} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-navy/10 group-hover:bg-navy/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-navy" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-playfair text-navy group-hover:text-emerald transition-colors">
                            {venture.name}
                          </CardTitle>
                          <p className="text-xs font-medium text-gold uppercase tracking-wide">
                            {venture.tagline}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-600 text-sm leading-relaxed">
                        {venture.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Looking Ahead Section */}
        <div className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-charcoal"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--emerald)/0.1)_0%,transparent_70%)]"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-8">
              Looking Ahead
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald to-gold mx-auto mb-12"></div>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
              The WezaLife ecosystem is more than a group of ventures — it is a vision for scalable, 
              interconnected systems addressing financial inclusion, empowerment, and human well-being. 
              Each venture strengthens the other, building a foundation for long-term impact across 
              Africa and beyond.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ventures;