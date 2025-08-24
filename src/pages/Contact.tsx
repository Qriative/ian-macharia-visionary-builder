import Layout from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Get In Touch</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to collaborate on transformative ventures? Let's connect and build the future together.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;