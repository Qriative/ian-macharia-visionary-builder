import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ianPortrait from '@/assets/ian-portrait.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-emerald/10 animate-float"></div>
        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-gold/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 rounded-full bg-emerald/5 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gold/5 animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--emerald))" />
              <stop offset="100%" stopColor="hsl(var(--gold))" />
            </linearGradient>
          </defs>
          <path
            d="M 100 400 Q 300 200 600 400 T 1100 400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M 200 600 Q 400 300 800 500 T 1000 300"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald/10 text-emerald text-sm font-medium mb-6">
              <Globe size={16} className="mr-2" />
              Global Fintech Innovator
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Scalable Solutions for 
              <span className="text-emerald"> Finance</span>, 
              <span className="text-gold"> Technology</span>, and 
              <span className="text-emerald"> Human Well-Being</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Founder, Innovator, and Advocate for transformative technology and empowerment. 
              Currently pursuing MBA in Entrepreneurship & Innovation while building the 
              WezaLife ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-emerald hover:bg-emerald-dark text-white hover-lift">
                <Link to="/ventures" className="flex items-center">
                  View My Work
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                <Link to="/about" className="flex items-center">
                  Explore Ventures
                  <TrendingUp size={20} className="ml-2" />
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-emerald">10+</div>
                <div className="text-sm text-gray-300">Ventures Built</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald">∞</div>
                <div className="text-sm text-gray-300">Impact Created</div>
              </div>
            </div>
          </div>
          
          {/* Portrait */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald via-gold to-emerald rounded-full opacity-75 blur-lg animate-glow"></div>
              <img
                src={ianPortrait}
                alt="Ian Macharia - Fintech Innovator"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald rounded-full flex items-center justify-center animate-bounce">
                <TrendingUp size={24} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                <Users size={24} className="text-navy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;