import Layout from '@/components/Layout';
import { Building, Users, Rocket, Target, Award, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Founder, WezaLife Ecosystem",
      company: "WezaLife",
      period: "2024 – Present",
      location: "Kenya",
      description: "Building an integrated ecosystem for financial inclusion and wellbeing",
      achievements: [
        "Built WezaCredit (asset financing), AfriPay (digital ID & payments), WezaScore (credit scoring), and ValorLife (wellbeing & mental health)",
        "Designed scalable fintech solutions tackling access to credit, digital identity, and wellness",
        "Leading strategy, product design, partnerships, and implementation across the ecosystem"
      ],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Consultant",
      company: "Adaptive Services Limited",
      period: "2023 – Present",
      location: "Kenya",
      description: "Supporting counties with digital transformation and revenue systems",
      achievements: [
        "Supporting counties in Kenya with revenue collection and management systems",
        "Focused on digital transformation, data-driven governance, and financial inclusion",
        "Delivered measurable improvements in revenue collection efficiency"
      ],
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Head of Technology",
      company: "International Business Settlement Holdings Ltd",
      period: "2023 – 2024",
      location: "Djibouti",
      description: "Leading fintech innovation in the Horn of Africa region",
      achievements: [
        "Spearheaded fintech and digital payment initiatives in the Djibouti region",
        "Led cross-border projects introducing new settlement systems",
        "Improved financial infrastructure across multiple markets"
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Head of Projects Operations",
      company: "Nouveta",
      period: "2021 – 2023",
      location: "Kenya",
      description: "Managing multiple high-impact technology projects",
      achievements: [
        "Built RevenueSure – revenue management for counties, Blink – NFC e-wallet, Kenya Railways Toll Platform",
        "Delivered Sacco-Benki SACCO system, ReconMate for Housing Finance Bank, PayMe payment gateway",
        "Implemented Hospital Management System in Homa Bay County serving thousands of patients",
        "Managed client relations, technical operations, and product innovation across 8+ major projects"
      ],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const innovations = [
    "Revease – Revenue collection and administration platform",
    "Mediflow – Comprehensive hospital management system",
    "Hydrolink – Water supply and management platform",
    "PropMate – Property and tenant management solution",
    "E-Therapy Platform – Digital mental health support",
    "Amani Drive – Executive chauffeured fleet service"
  ];

  const impactStats = [
    { number: "15+", label: "Large-scale projects delivered" },
    { number: "1000s", label: "Users across Kenya & Djibouti" },
    { number: "8+", label: "Industries impacted" },
    { number: "5+", label: "Counties supported" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                Experience
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
                A journey of building, leading, and innovating across technology, fintech, entrepreneurship, and consulting.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Timeline */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              Professional Journey
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-px"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className={`relative mb-16 ${index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'} md:w-1/2 ml-16`}>
                  {/* Timeline Dot */}
                  <div className="absolute -left-12 md:-left-4 top-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground transform md:translate-x-1/2">
                    {exp.icon}
                  </div>
                  
                  <Card className="hover-lift">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        <MapPin className="w-4 h-4 ml-2" />
                        <span>{exp.location}</span>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {exp.company}
                      </CardDescription>
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Projects */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              Entrepreneurial & Innovation Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {innovations.map((innovation, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-medium text-foreground">{innovation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Highlights */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              Impact Highlights
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                "Bridging financial access, improving governance, and supporting wellbeing through innovative technology solutions that serve thousands of users across Kenya and the Horn of Africa."
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Placeholder */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              What Colleagues Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground italic mb-4">
                      "Testimonial placeholder - Ian's leadership and technical expertise have been instrumental in delivering impactful solutions."
                    </p>
                    <div className="font-semibold text-foreground">Colleague Name</div>
                    <div className="text-sm text-muted-foreground">Position, Company</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore my portfolio or get in touch to collaborate on your next big project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                View Portfolio
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Contact Me
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Experience;