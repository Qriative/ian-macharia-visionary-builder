import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Target, Heart, Users, Zap, Shield, Lightbulb, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const timeline = [
    {
      company: "WezaLife Ecosystem",
      role: "Founder",
      description: "Building interconnected fintech, wellness, and empowerment ventures driving financial inclusion across Africa.",
      icon: <Target className="w-6 h-6" />
    },
    {
      company: "IBS Holdings (Djibouti)",
      role: "Head of Technology",
      description: "Led innovation across multiple technology projects, driving digital transformation initiatives.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      company: "Adaptive Services Ltd",
      role: "Consultant",
      description: "Provided strategic consulting for revenue management solutions across various counties.",
      icon: <Users className="w-6 h-6" />
    },
    {
      company: "Nouveta",
      role: "Technology Contributor",
      description: "Contributed to platforms like RevenueSure, Blink, Sacco-Benki, and PayMe, enhancing financial services.",
      icon: <Lightbulb className="w-6 h-6" />
    }
  ];

  const expertise = [
    {
      title: "Fintech & Digital Innovation",
      description: "Building cutting-edge financial technologies that democratize access to financial services.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Ecosystem Building & Strategy",
      description: "Creating interconnected systems that amplify impact across multiple ventures and industries.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Mental Health & Men's Empowerment",
      description: "Advocating for mental wellness and creating platforms that empower men to thrive.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Scalable Tech Solutions",
      description: "Designing and implementing technology solutions that grow with evolving business needs.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const values = [
    { name: "Innovation", icon: <Lightbulb className="w-6 h-6" /> },
    { name: "Integrity", icon: <Shield className="w-6 h-6" /> },
    { name: "Empowerment", icon: <Heart className="w-6 h-6" /> },
    { name: "Collaboration", icon: <Handshake className="w-6 h-6" /> },
    { name: "Impact", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-navy via-navy-light to-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
                  About Ian Macharia
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Fintech Innovator | Tech Entrepreneur | Advocate for Men's Empowerment
                </p>
              </div>
              <Link to="/portfolio">
                <Button className="bg-emerald hover:bg-emerald-dark text-white px-8 py-3 text-lg group">
                  Explore My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-emerald/20 to-gold/20 rounded-full flex items-center justify-center border border-emerald/30">
                <div className="w-72 h-72 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                  Professional Photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <p className="text-xl text-foreground leading-relaxed">
              I am Ian Macharia, a technology entrepreneur passionate about building scalable solutions that drive financial inclusion, empower individuals, and create sustainable impact. With a strong foundation in software engineering, fintech innovation, and strategic leadership, I am committed to shaping ecosystems that connect finance, technology, and human well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Journey Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">Professional Journey</h2>
            <p className="text-lg text-muted-foreground">Key milestones that shaped my entrepreneurial path</p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center text-emerald">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.company}</h3>
                      <p className="text-emerald font-medium mb-3">{item.role}</p>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">Areas of Expertise</h2>
            <p className="text-lg text-muted-foreground">Core competencies driving innovation and impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-emerald mb-4 flex justify-center">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-to-r from-navy to-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-16">Vision & Mission</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-emerald">Vision</h3>
              <p className="text-gray-200 leading-relaxed">
                To build interconnected ecosystems that empower individuals financially, mentally, and socially.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gold">Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To create innovative, inclusive, and scalable solutions that solve real challenges while improving lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-lg text-muted-foreground">Principles that guide every decision and action</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {values.map((value, index) => (
              <Card key={index} className="w-48 text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-emerald mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Human Side / Personal Touch */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-8">Beyond Business</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Beyond business and technology, I am deeply committed to men's empowerment, mental health awareness, and creating opportunities that inspire growth and resilience.
          </p>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <section className="py-16 bg-gradient-to-br from-emerald via-emerald-dark to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">
            Let's Shape the Future Together
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            I invite you to explore my ventures, connect, and join me in shaping a future where technology and humanity thrive together.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-emerald hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;