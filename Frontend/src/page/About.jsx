import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-theme-gray text-black">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-theme-gray to-theme-pink h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            'url(/about.jpg)',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center bg-black bg-opacity-40 p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            About Our Skincare Mission
          </h1>
          <p className="text-xl text-white font-light">
            Curating the world’s best skincare for you.
          </p>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="h-1 bg-gradient-to-r from-theme-pink to-theme-gray mx-auto w-1/2 my-8 rounded-full"></div>

      {/* Origin Story */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Launched in 2025, our store was born from a passion for bringing the world’s most viral and effective skincare products to your doorstep. Inspired by the global craze for Korean skincare and the innovation of brands worldwide, we set out to create a one-stop shop for skincare enthusiasts.
            </p>
            <p className="text-lg leading-relaxed">
              As a dedicated retailer, we carefully curate products from top brands in Korea, Japan, France, and beyond, ensuring you get access to the latest trends and proven formulas. From K-beauty sheet masks to French serums, our mission is to make high-quality skincare accessible and exciting.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/about2.jpg"
              alt="Curated skincare products"
              className="w-full h-72 object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow-xl bg-theme-gray bg-opacity-20 hover:bg-theme-pink hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105">
              <img
                src="/about3.jpeg"
                alt="Global skincare products"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Curated Global Brands</h3>
              <p className="text-gray-600">
                Shop viral Korean skincare, Japanese essences, and European favorites, handpicked for quality and effectiveness.
              </p>
              <p className="text-sm text-gray-600 mt-2 italic">
                Replace with your product image (e.g., K-beauty products).
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-xl bg-theme-gray bg-opacity-20 hover:bg-theme-pink hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Skin type quiz"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Skin Type Quiz</h3>
              <p className="text-gray-600">
                Find the perfect products for your skin with our personalized quiz, tailored to your unique needs.
              </p>
              <p className="text-sm text-gray-600 mt-2 italic">
                Replace with your quiz-related image.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-xl bg-theme-gray bg-opacity-20 hover:bg-theme-pink hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Customer support"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Skincare Guidance</h3>
              <p className="text-gray-600">
                Our team helps you navigate global skincare trends with expert advice and recommendations.
              </p>
              <p className="text-sm text-gray-600 mt-2 italic">
                Replace with your support team image.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 md:px-8 container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Values</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 text-center p-6 rounded-xl bg-theme-gray bg-opacity-30 hover:bg-theme-pink hover:bg-opacity-20 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Authenticity</h3>
            <p className="text-gray-600">We source genuine products from trusted global brands, ensuring you get the real deal.</p>
          </div>
          <div className="md:w-1/3 text-center p-6 rounded-xl bg-theme-gray bg-opacity-30 hover:bg-theme-pink hover:bg-opacity-20 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Curation</h3>
            <p className="text-gray-600">Our team handpicks the best skincare to bring you trending and effective solutions.</p>
          </div>
          <div className="md:w-1/3 text-center p-6 rounded-xl bg-theme-gray bg-opacity-30 hover:bg-theme-pink hover:bg-opacity-20 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Accessibility</h3>
            <p className="text-gray-600">We make global skincare affordable and easy to shop, no matter where you are.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-theme-gray to-theme-pink text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Discover Global Skincare</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-600">
          Ready to elevate your routine with viral K-beauty and global favorites? Shop now or take our quiz to find your perfect match.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/allproducts"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-theme-pink hover:text-gray-800 transition-colors duration-300 shadow-md"
          >
            Shop Now
          </Link>
          <Link
            to="/skintypequiz"
            className="bg-white text-gray-600 px-6 py-3 rounded-lg hover:bg-theme-pink hover:text-gray-800 transition-colors duration-300 border border-gray-600 shadow-md"
          >
            Take the Quiz
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;