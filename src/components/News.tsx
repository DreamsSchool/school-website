export default function News() {
  const newsItems = [
    {
      title: 'School Achievement',
      date: 'June 15, 2023',
      description: 'Our students won the national science competition.',
    },
    {
      title: 'Upcoming Events',
      date: 'June 20, 2023',
      description: 'Annual sports day celebration next week.',
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Latest News
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <div key={item.title} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.date}</p>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
