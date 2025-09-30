import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0A%0AMessage:%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/254768893142?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: "Your message is ready to send via WhatsApp.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Connect
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, innovative projects, and 
              collaborations. Whether you have a question or just want to connect, feel free to reach out.
            </p>
          </div>

          {/* Contact Form */}
          <div className="mb-16">
            <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me more about your inquiry..."
                    className="min-h-[150px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Direct Contact Information */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Direct Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:ianjravin@gmail.com"
                className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <div className="font-medium text-foreground">ianjravin@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/254768893142"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">WhatsApp</div>
                  <div className="font-medium text-foreground">+254 768 893 142</div>
                </div>
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Connect on Social Media
            </h2>
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/ianmacharia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-foreground" />
              </a>
              <a
                href="https://github.com/ianmacharia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-foreground" />
              </a>
              <a
                href="https://twitter.com/ianmacharia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 text-foreground" />
              </a>
            </div>
          </div>

          {/* Closing Message */}
          <div className="text-center">
            <p className="text-muted-foreground italic">
              I look forward to hearing from you.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;