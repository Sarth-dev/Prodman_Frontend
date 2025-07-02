export default function FeaturesSection() {
  const features = [
    {
      title: "Quick Add & Edit",
      description: "Easily add or update products in just a few clicks.",
      icon: "📥",
    },
    {
      title: "Category Filters",
      description: "Organize your inventory with custom categories.",
      icon: "🗂️",
    },
    {
      title: "Inventory Overview",
      description: "Track stock levels and stay updated in real-time.",
      icon: "📊",
    },
    {
      title: "Responsive Design",
      description: "Access your dashboard smoothly across all devices.",
      icon: "📱",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}