import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">About Ian Macharia</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              Visionary entrepreneur building the future of fintech and social impact across Africa and beyond.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;