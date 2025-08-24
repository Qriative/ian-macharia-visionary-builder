import Layout from '@/components/Layout';

const ThoughtLeadership = () => {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Thought Leadership</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              Insights on fintech innovation, men's empowerment, mental health, and transformative technology.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThoughtLeadership;