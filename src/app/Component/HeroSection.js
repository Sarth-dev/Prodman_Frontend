export default function HeroSection() {
  return (
    <section className="bg-blue-50 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
        Manage Your Products Effortlessly
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
        A simple, intuitive dashboard to add, update, and organize your inventory.
      </p>
      <a href="/Dashboard">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold">
          Try the Dashboard
        </button>
      </a>
    </section>
  );
}