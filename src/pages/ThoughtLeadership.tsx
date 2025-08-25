import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Heart, Building2, Play, Download, MessageCircle, Calendar } from 'lucide-react';

const ThoughtLeadership = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Fintech', 'Tech & Entrepreneurship', 'Empowerment', 'Social Impact'];

  const coreThemes = [
    {
      title: "Fintech Innovation & Inclusion",
      description: "I design systems that expand access to credit and trusted identity. Topics include credit scoring in thin-file contexts, fraud controls, cross-border rails, and the economics of digital lending.",
      icon: Building2
    },
    {
      title: "Technology & Entrepreneurship", 
      description: "From idea to product to scale. I share operating models, OKRs, org design, and how we build resilient platforms under real constraints.",
      icon: BookOpen
    },
    {
      title: "Men's Empowerment & Mental Health",
      description: "Stronger men build stronger families and communities. I focus on practical tools for mental fitness, responsibility, and financial stability.",
      icon: Heart
    },
    {
      title: "Social Impact & Governance",
      description: "Impact must live in the unit economics. I write about governance, data ethics, and how to align incentives so good outcomes sustain themselves.",
      icon: Users
    }
  ];

  const featuredArticles = [
    {
      title: "Redefining Access to Credit in Africa – Why Fintech Must Go Beyond Lending",
      abstract: "For decades, access to credit in Africa has been framed as a privilege rather than a right. Fintech has opened a new chapter, but to truly transform lives, we must go beyond traditional lending approaches.",
      category: "Fintech"
    },
    {
      title: "Men's Empowerment in the Modern Age – Why WezaLife is Building More Than Just Tech",
      abstract: "Men face silent battles with mental health, unemployment, and shifting gender roles. Through WezaLife, we're creating an ecosystem that supports men holistically — financially, emotionally, and socially.",
      category: "Empowerment"
    },
    {
      title: "Mental Health & Technology – Can AI Become Africa's New Therapist?",
      abstract: "With fewer than two mental health professionals per 100,000 people in Africa, technology can be a bridge. AI can complement human therapists to scale mental health support across the continent.",
      category: "Tech & Entrepreneurship"
    },
    {
      title: "Building Credit Systems When Data Is Sparse",
      abstract: "Thin files are common, but they are not dead ends. Here is how to construct a layered score using behavior, device signals, and verified anchors without breaking fairness or privacy.",
      category: "Fintech"
    },
    {
      title: "Fraud Is a Strategy Problem Before It Is a Model Problem",
      abstract: "Fraudsters probe incentives. Teams often respond with heavier KYC and higher friction. This piece covers a balanced approach using tiered trust, velocity limits, and post-transaction analytics.",
      category: "Fintech"
    },
    {
      title: "Designing AfriPay: One ID that Actually Works",
      abstract: "Digital ID only helps when verification is fast, consent is clear, and partners can integrate with low lift. I share the architecture choices that reduce failure points and keep costs predictable.",
      category: "Tech & Entrepreneurship"
    },
    {
      title: "Men's Mental Health and Money Habits",
      abstract: "Emotional regulation and financial discipline reinforce each other. I map a simple weekly cadence that improves both without gimmicks.",
      category: "Empowerment"
    },
    {
      title: "Operating Principles for Early Platforms",
      abstract: "You do not need everything on day one. You need the right feedback loops. These are the five operating principles that keep teams focused and customers retained.",
      category: "Tech & Entrepreneurship"
    },
    {
      title: "Revenue Platforms for the Public Sector",
      abstract: "Transparency, reconciliation, and citizen trust rise together. A practical blueprint for collections, controls, and service quality that can be audited and improved.",
      category: "Social Impact"
    }
  ];

  const speakingEngagements = [
    {
      title: "Financial Literacy That People Actually Use",
      host: "Community and youth programs",
      summary: "A practical session on saving, debt, and investing basics. I focus on behavior, not slogans, and show a simple plan people can follow in one hour a week."
    },
    {
      title: "Building for Africa: Product, Trust, and Scale",
      host: "Innovation and startup forums", 
      summary: "Real constraints shape better products. We cover payments, identity, risk, and the partnerships that unlock adoption."
    },
    {
      title: "Men's Mental Fitness in High-Pressure Careers",
      host: "Corporate wellness and leadership events",
      summary: "A direct playbook for stress, discipline, and relationships. Small habits that compound."
    },
    {
      title: "Public Revenue Systems That Citizens Respect",
      host: "Government and development conferences",
      summary: "Service design, transparency, and reconciliation that turn collections into trust."
    }
  ];

  const mediaItems = [
    {
      type: "Video",
      title: "Fireside: Credit, Risk, and Inclusion",
      context: "A candid conversation on building fair credit products."
    },
    {
      type: "Audio", 
      title: "Founder Notes: Designing With Constraints",
      context: "Why constraints sharpen strategy and product."
    },
    {
      type: "Video",
      title: "Mental Health, Money, and Meaning", 
      context: "Practical routines for resilience and focus."
    }
  ];

  const perspectives = [
    "Technology must serve people first.",
    "Inclusion fails when incentives are misaligned.",
    "Risk controls are customer experience.",
    "Talk is cheap. Measurement is not.",
    "Empowered men raise empowered families.",
    "If the unit economics do not work, the impact will not last."
  ];

  const guides = [
    {
      title: "The Financial Literacy Starter Pack",
      bullets: [
        "A weekly money routine that fits real life",
        "How to pick your first investment vehicle", 
        "Simple rules for debt and emergency funds"
      ]
    },
    {
      title: "Launching a Credit Product Responsibly",
      bullets: [
        "Minimum data set and anchors",
        "Tiered trust and velocity controls",
        "Collections that protect dignity"
      ]
    },
    {
      title: "Men's Mental Fitness Playbook",
      bullets: [
        "Daily habits that stabilize mood and focus",
        "How to ask for help with courage",
        "Boundaries that protect your mission"
      ]
    }
  ];

  const filteredArticles = selectedFilter === 'All' 
    ? featuredArticles 
    : featuredArticles.filter(article => article.category === selectedFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Ideas that move markets and people
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              I write and speak about fintech, technology, and men's empowerment. My lens is practical. Build what works. Scale what lasts. Protect the human in the loop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-3">
                Read Insights
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Invite Me To Speak
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why I Write</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  I use technology to solve real problems in finance and well-being. Thought leadership is how I test ideas in public, compare notes with peers, and turn lessons into operating playbooks. I share what works, what fails, and what we change next.
                </p>
                <p>
                  If you build for emerging markets, you know context is everything. My work blends product thinking, risk controls, and human outcomes. The goal is clear. Better access. Better decisions. Better lives.
                </p>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="w-48 h-48 mx-auto bg-muted rounded-full flex items-center justify-center">
                <Users className="w-20 h-20 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Themes Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Core Themes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreThemes.map((theme, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <theme.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-lg">{theme.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{theme.description}</CardDescription>
                  <Button variant="link" className="p-0 h-auto">View posts →</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured Articles</h2>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">{article.abstract}</CardDescription>
                  <Button variant="link" className="p-0 h-auto">Read more →</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking & Panels */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Speaking & Panels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {speakingEngagements.map((talk, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {talk.title}
                  </CardTitle>
                  <CardDescription className="font-medium">{talk.host}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{talk.summary}</p>
                  <Button variant="outline">Request speaking</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Library */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Media</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-primary" />
                    <Badge variant="outline">{item.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.context}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Perspectives */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Signature Perspectives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perspectives.map((quote, index) => (
              <Card key={index} className="text-center p-8">
                <CardContent className="pt-6">
                  <blockquote className="text-xl font-medium text-foreground italic">
                    "{quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Guides */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Resources & Guides</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {guide.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            If you are building in fintech, identity, wellness, or public systems, I can help you accelerate outcomes and reduce risk. I advise, I design operating models, and I speak to teams that want to level up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <MessageCircle className="w-5 h-5 mr-2" />
              Collaborate
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Session
            </Button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <a href="mailto:ianjravin@gmail.com" className="hover:text-primary transition-colors">
                ianjravin@gmail.com
              </a>
              <a href="https://wa.me/254768893142" className="hover:text-primary transition-colors">
                WhatsApp: +254 768 893 142
              </a>
              <Button variant="link" className="p-0 h-auto">
                LinkedIn Profile →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThoughtLeadership;