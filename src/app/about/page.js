
import Navbar from "../Component/utils/Navbar";
import Footer from "../Component/utils/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Product Manager App</h1>
        <p className="text-lg text-gray-700 mb-4">
          The Product Manager App is a full-stack project built using the MERN stack (MongoDB, Express, React, and Node.js) with Next.js for the frontend. It helps users manage their product inventory with ease—whether you're adding, editing, or organizing products.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The goal of this app is to provide a simple, intuitive, and efficient interface to keep your product data up to date. From startups to solo developers, anyone can use this tool to streamline product management.
        </p>
        <p className="text-lg text-gray-700">
          Built with ❤️ by <strong>Sarthak Kale</strong>. For more projects and source code, feel free to check out my GitHub.
        </p>
      </main>
      <Footer />
    </div>
  );
}
