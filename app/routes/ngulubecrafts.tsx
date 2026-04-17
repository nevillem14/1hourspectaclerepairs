import React from "react";

{
  /* Define your product data at the top of your component or file */
}
const products = [
  {
    id: 1,
    name: "Big Five Elephant",
    img: "/images/ngulubecrafts/buffalo-set-1.jpg",
  },
  {
    id: 2,
    name: "Polished Rhino",
    img: "/images/ngulubecrafts/head-set-1.jpg",
  },
  {
    id: 3,
    name: "Soapstone Lion",
    img: "/images/ngulubecrafts/head-set-2.jpg",
  },
  {
    id: 4,
    name: "African Buffalo",
    img: "/images/ngulubecrafts/rhino-set-1.jpg",
  },
  {
    id: 5,
    name: "Leopard Sculpture",
    img: "/images/ngulubecrafts/buffalo-set-1.jpg",
  },
  {
    id: 6,
    name: "Traditional Figurine",
    img: "/images/ngulubecrafts/head-set-1.jpg",
  },
];

const DemoPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen font-sans text-stone-900">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-2xl font-bold tracking-tighter text-orange-900">
          NGULUBE <span className="font-light">CRAFTS</span>
          <span className="font-light text-red-500">--FOR DEMO ONLY</span>
        </h1>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#about" className="hover:text-orange-700">
            Heritage
          </a>
          <a href="#products" className="hover:text-orange-700">
            Collection
          </a>
          <a href="#contact" className="hover:text-orange-700">
            Wholesale
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-16 md:py-24 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 text-stone-800">
          African Heritage, <br />
          <span className="italic text-orange-800">Carved in Stone.</span>
        </h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          An indigenous expression of craftsmanship, bringing the soul of Africa
          to the world through meticulously sculpted soapstone marble.
        </p>
      </header>

      {/* About Section */}
      <section id="about" className="bg-stone-800 text-stone-100 py-16 px-6">
        <div className="max-auto max-w-4xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-orange-400">
              Our Story
            </h3>
            <p className="leading-relaxed mb-4">
              Ingulube Craft is an African concept that speaks to the world
              about our continent. It is an expression from our indigenous
              forefathers who developed expertise through sculpturing pieces of
              the Big Five animals.
            </p>
            <p className="text-stone-400 text-sm italic">
              Sourced from South Africa, Swaziland, and the SADC region.
            </p>
          </div>
          <div className="border-l-4 border-orange-800 pl-8">
            <h4 className="text-xl font-bold mb-2">Worldwide Delivery</h4>
            <p className="text-stone-300">
              We deliver nationwide and to the world at large. Our logistics
              ensure your sculptures arrive safely, no matter the distance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-serif">Current Collection</h3>
            <p className="text-stone-500">Available for immediate dispatch</p>
          </div>
          <span className="text-xs uppercase tracking-widest bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold">
            Wholesale
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer shadow-2xl shadow-black p-6"
            >
              <div className="aspect-square bg-stone-200 overflow-hidden rounded-lg mb-4 relative">
                {/* The <img> tag now points to your local folder */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <h4 className="font-bold text-lg uppercase tracking-tight text-stone-800">
                {product.name}
              </h4>
              <p className="text-stone-500 text-sm">
                Description of the products goes here. This is a placeholder
                text that can be replaced with actual details about the
                sculpture, its origin, and any unique features it may have.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Order Info / Footer */}
      <footer
        id="contact"
        className="bg-white py-16 px-6 border-t border-stone-200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Wholesale Ordering</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left bg-stone-50 p-8 rounded-xl shadow-inner">
            <div>
              <p className="font-semibold text-orange-900 uppercase text-xs mb-2">
                Lead Times
              </p>
              <p className="text-stone-700">
                Large quantities require a week to be completed and then
                delivered.
              </p>
            </div>
            <div>
              <p className="font-semibold text-orange-900 uppercase text-xs mb-2">
                Inquiries
              </p>
              <p className="text-stone-700 underline font-medium">
                info@ngulubecrafts.co.za
              </p>
            </div>
          </div>
          <p className="mt-12 text-stone-400 text-xs">
            © 2026 Ngulube Crafts Demo Page | Design by WSDXI
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DemoPage;
