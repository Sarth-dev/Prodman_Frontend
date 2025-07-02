
export default function CTASection() {
  return (
    <section className="py-16 px-6 bg-blue-600 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to simplify your product management?
      </h2>
      <p className="text-lg mb-6">
        Start using our intuitive dashboard today – it's fast, free, and built for scale.
      </p>
      <a href="/dashboard">
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100">
          Get Started
        </button>
      </a>
    </section>
  );
}
