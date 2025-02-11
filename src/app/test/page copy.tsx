import React from 'react';

// Function to fetch data from multiple APIs
const fetchDataFromApis = async () => {
  const urls = [
    'http://127.0.0.1:8000/catalog/catalogs_new_drops/',
    'http://127.0.0.1:8000/catalog/catalogs_inveter/',
    'http://127.0.0.1:8000/catalog/catalogs_aio_lithium/',
    'http://127.0.0.1:8000/catalog/catalogs_ac_stabalizer/',
  ];

  // Fetch data from all APIs
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const data = await Promise.all(responses.map((response) => response.json()));
  return data; // Return the combined data
};

const Home = async () => {
  // Fetch data from all the catalogs
  const catalogs = await fetchDataFromApis();

  // Flatten the catalogs data to display it in a single array
  const allCards = catalogs.flat();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-5 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold">MyLogo</div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-10">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Catalog Cards
          </h1>
        </section>

        {/* Cards Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCards.map((card: any) => (
            <div
              key={card.id}
              className="group bg-white p-6 rounded-lg shadow-md overflow-hidden relative transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={card.card_image}
                alt={card.card_title}
                className="w-full h-56 object-cover rounded-md transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {card.card_title}
              </h3>

              {/* Description section */}
              <div
                className="opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-[300px] p-4"
                dangerouslySetInnerHTML={{ __html: card.catalogs_desc }}
              />
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 mt-16">
        <p>&copy; 2025 MyCompany. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
