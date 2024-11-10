import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-400 mb-6">
            <span>AI Tools Today, Not Tomorrow</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500 text-transparent bg-clip-text pb-5">
            Your Personal Digital Assistant
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're a small team of developers passionate about making your digital life easier. Our upcoming tools will revolutionize how you do your daily tasks.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Products</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're crafting intelligent tools that understand how you work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProductCard
              title="Research Buddy"
              description="A smart Chrome extension that enhances your research workflow."
              type="research"
            />
            <ProductCard
              title="Gmail Manager"
              description="Take control of your inbox with AI-powered email management."
              type="gmail"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
