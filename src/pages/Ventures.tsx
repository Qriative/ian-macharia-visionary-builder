import Layout from '@/components/Layout';

const Ventures = () => {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">WezaLife Ecosystem & Ventures</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover the interconnected ecosystem of ventures driving financial inclusion and technological innovation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ventures;