export default function Features() {
  const features = [
    {
      title: 'Academic Excellence',
      description: 'Committed to providing the highest quality education.',
    },
    {
      title: 'Experienced Faculty',
      description: 'Learn from our team of dedicated educators.',
    },
    {
      title: 'Modern Facilities',
      description: 'State-of-the-art facilities for optimal learning.',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Why Choose Us
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
