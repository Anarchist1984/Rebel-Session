import { useParams, Link } from 'react-router-dom';
import { Sparkles, ArrowLeft } from 'lucide-react';

const productData = {
  research: {
    title: 'Research Buddy',
    description:
      'A smart Chrome extension that enhances your research workflow. It automatically organizes your findings, generates summaries, and helps you stay focused.',
    features: [
      'Automatic summary generation',
      'Organize and categorize research notes',
      'AI-powered focus mode',
    ],
  },
  gmail: {
    title: 'Gmail Manager',
    description:
      'Take control of your inbox with AI-powered email management. Automatically categorize, prioritize, and draft responses to your emails.',
    features: [
      'Automatic email sorting and categorization',
      'Priority inbox management',
      'AI-generated email replies',
    ],
  },
};

function ProductPage() {
  const { type } = useParams();
  const product = productData[type];

  if (!product) {
    return <div className="text-center text-gray-400">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="container mx-auto">
        <Link to="/" className="text-orange-400 flex items-center gap-2 mb-10">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-lg text-gray-400 mb-8">{product.description}</p>

        <div className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 p-8 rounded-2xl border border-blue-900/30 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-4">
            {product.features.map((feature:Array<String>, index:) => (
              <li key={index} className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <span className="text-lg text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition-all">
          Join Beta Program
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
