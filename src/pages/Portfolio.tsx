import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CreditCard, 
  Target, 
  Smartphone, 
  Heart, 
  Receipt, 
  Hospital, 
  Droplets, 
  Home, 
  Brain, 
  Users,
  Building2,
  Zap,
  Banknote,
  Shield,
  Car,
  Palette,
  BookOpen,
  Mic,
  Handshake,
  Rocket
} from 'lucide-react';

const Portfolio = () => {
  const wezaLifeVentures = [
    {
      name: "WezaCredit",
      description: "Access to asset-based credit, inclusive financing for SMEs and individuals.",
      impact: "Expanding financial access to underserved markets",
      icon: <CreditCard className="w-8 h-8" />,
      status: "Active"
    },
    {
      name: "WezaScore",
      description: "AI-powered credit scoring system improving financial trust and lending decisions.",
      impact: "Enhanced credit assessment accuracy by 40%",
      icon: <Target className="w-8 h-8" />,
      status: "Active"
    },
    {
      name: "AfriPay",
      description: "A unified digital ID and payment ecosystem for Africa, integrating secure verification, cross-border payments, and seamless transactions.",
      impact: "Simplifying financial access across African markets",
      icon: <Smartphone className="w-8 h-8" />,
      status: "Development"
    },
    {
      name: "ValorLife",
      description: "Mental health and wellbeing platform combining therapy access, AI-driven support, and tools for resilience.",
      impact: "Supporting mental wellness for modern living",
      icon: <Heart className="w-8 h-8" />,
      status: "Active"
    },
    {
      name: "Revease",
      description: "Revenue collection, management, and administration platform for counties and institutions.",
      impact: "Streamlined revenue operations for public entities",
      icon: <Receipt className="w-8 h-8" />,
      status: "Active"
    },
    {
      name: "Mediflow",
      description: "Comprehensive hospital management and information system enhancing patient care and operations.",
      impact: "Improved healthcare delivery and patient workflows",
      icon: <Hospital className="w-8 h-8" />,
      status: "Active"
    },
    {
      name: "Hydrolink",
      description: "Water supply and management system with tracking, requests, and delivery solutions.",
      impact: "Optimized water distribution and service delivery",
      icon: <Droplets className="w-8 h-8" />,
      status: "Active"
    },
    {
      name: "PropMate",
      description: "Property management system for landlords and tenants, enabling rent collection, repairs, communication, and services.",
      impact: "Simplified property management operations",
      icon: <Home className="w-8 h-8" />,
      status: "Active"
    },
    {
      name: "E-Therapy Platform",
      description: "Online therapy and mental health assistance platform.",
      impact: "Accessible mental health support for all",
      icon: <Brain className="w-8 h-8" />,
      status: "Development"
    },
    {
      name: "Men's Empowerment Initiatives",
      description: "Content and programs on mental health, financial literacy, and modern men's challenges.",
      impact: "Empowering men through education and community",
      icon: <Users className="w-8 h-8" />,
      status: "Active"
    }
  ];

  const clientProjects = [
    {
      name: "RevenueSure (Nouveta)",
      description: "A revenue management system for county governments.",
      impact: "Enhanced revenue collection efficiency for counties",
      icon: <Building2 className="w-8 h-8" />,
      client: "Nouveta"
    },
    {
      name: "Blink",
      description: "NFC e-wallet solution for parents to fund boarding school students.",
      impact: "Simplified student funding and expense tracking",
      icon: <Zap className="w-8 h-8" />,
      client: "Nouveta"
    },
    {
      name: "Kenya Railways Ticketing System",
      description: "Ticketing and toll solution to streamline transport.",
      impact: "Modernized railway ticketing operations",
      icon: <Receipt className="w-8 h-8" />,
      client: "Kenya Railways"
    },
    {
      name: "Sacco-Benki",
      description: "SACCO management system.",
      impact: "Digitized SACCO operations and member services",
      icon: <Banknote className="w-8 h-8" />,
      client: "Nouveta"
    },
    {
      name: "ReconMate",
      description: "Automated reconciliation system for Housing Finance Bank.",
      impact: "Reduced reconciliation time by 75%",
      icon: <Shield className="w-8 h-8" />,
      client: "Housing Finance Bank"
    },
    {
      name: "PayMe",
      description: "Secure payment gateway for digital transactions.",
      impact: "Enabled secure digital payment processing",
      icon: <CreditCard className="w-8 h-8" />,
      client: "Nouveta"
    },
    {
      name: "Hospital Management System",
      description: "Digital hospital system improving healthcare delivery for Homa Bay County.",
      impact: "Enhanced patient care and operational efficiency",
      icon: <Hospital className="w-8 h-8" />,
      client: "Homa Bay County"
    },
    {
      name: "Adaptive Services Solutions",
      description: "Revenue collection and management solutions for counties in Kenya.",
      impact: "Improved revenue administration across multiple counties",
      icon: <Target className="w-8 h-8" />,
      client: "Adaptive Services Limited"
    },
    {
      name: "IBS Djibouti Projects",
      description: "Led technology projects for the Hong Kong-based company in financial services.",
      impact: "Delivered innovative fintech solutions in East Africa",
      icon: <Building2 className="w-8 h-8" />,
      client: "International Business Settlement"
    }
  ];

  const personalInnovations = [
    {
      name: "Amani Drive",
      description: "Premium executive chauffeured vehicle and fleet services for corporate clients, delegations, and VIPs.",
      impact: "Executive transport redefined with premium service",
      icon: <Car className="w-8 h-8" />
    },
    {
      name: "Soul Sister Decor",
      description: "Events and décor solutions with a contract pitch to Jaza Supermarket.",
      impact: "Creative event solutions and partnership opportunities",
      icon: <Palette className="w-8 h-8" />
    },
    {
      name: "Financial Literacy Course",
      description: "Progressive content series moving from beginner to advanced wealth-building strategies.",
      impact: "Educating thousands on financial empowerment",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      name: "Men's Empowerment Content",
      description: "Writing, talks, and workshops addressing financial literacy, wellbeing, and life skills.",
      impact: "Supporting men's personal and professional growth",
      icon: <Users className="w-8 h-8" />
    },
    {
      name: "Speaking Engagements",
      description: "Talks on financial literacy, savings, investments, and empowerment for young people.",
      impact: "Inspired audiences across multiple platforms",
      icon: <Mic className="w-8 h-8" />
    },
    {
      name: "Strategic Partnerships",
      description: "Collaboration discussions with CogniX and engagement with Web Summit Qatar for global exposure.",
      impact: "Building international networks and opportunities",
      icon: <Handshake className="w-8 h-8" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-navy via-charcoal to-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              My Portfolio & Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A comprehensive showcase of ventures, projects, and innovations driving financial inclusion, 
              technology advancement, and holistic wellbeing across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* WezaLife Ventures */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">WezaLife Ventures</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Core ecosystem of interconnected ventures addressing financial inclusion, mental health, and technological innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wezaLifeVentures.map((venture, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-emerald">{venture.icon}</div>
                    <Badge variant={venture.status === 'Active' ? 'default' : 'secondary'}>
                      {venture.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{venture.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {venture.description}
                  </p>
                  <div className="bg-emerald/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-emerald-dark">
                      Impact: {venture.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client/Consulting Projects */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">Client & Consulting Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategic partnerships and consulting engagements delivering transformative technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-navy">{project.icon}</div>
                    <Badge variant="outline">{project.client}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="bg-navy/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-navy-dark">
                      Impact: {project.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Innovations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">Personal Innovations & Ventures</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Independent initiatives and thought leadership driving social impact and personal empowerment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInnovations.map((innovation, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="text-gold mb-4">{innovation.icon}</div>
                  <CardTitle className="text-xl">{innovation.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {innovation.description}
                  </p>
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-gold-dark">
                      Impact: {innovation.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Ventures */}
      <section className="py-16 bg-gradient-to-r from-emerald via-emerald-dark to-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <Rocket className="w-16 h-16 mx-auto mb-8 text-gold" />
            <h2 className="text-4xl font-playfair font-bold mb-6">Future Ventures</h2>
            <p className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
              The WezaLife ecosystem continues to evolve with upcoming innovations in blockchain technology, 
              AI-driven financial services, cross-border payment solutions, and expanded mental health platforms. 
              Each new venture builds upon our foundation of financial inclusion, technological excellence, and human empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-navy hover:bg-gray-100 px-8 py-3 text-lg">
                Explore Partnerships
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-lg">
                Investment Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;