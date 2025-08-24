import Layout from '@/components/Layout';

const Experience = () => {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Professional Experience</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              A journey through leadership roles in technology, from Head of Technology to innovative consultant.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;