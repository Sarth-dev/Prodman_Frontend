export default function PreviewSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        See It In Action
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Here's a quick look at how the product dashboard works – clean, intuitive,
        and built to help you manage inventory without the hassle.
      </p>
      <div className="flex justify-center">
        <img
          src="./images/dashboard.avif"
          alt="Dashboard Preview"
          className="rounded-lg shadow-md max-w-full h-auto border"
        />
      </div>
    </section>
  );
}