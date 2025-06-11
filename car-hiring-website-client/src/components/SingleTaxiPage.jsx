import { useParams } from "react-router-dom";
import taxiPages from "./taxiData.js";

function SingleTaxiPage() {
  const { id } = useParams(); // expecting /taxi/:id
  const taxi = taxiPages.find(page => page.id === id);
  console.log(taxi);

  if (!taxi) return <div>Taxi service not found</div>;

  const formattedId = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div className="text-white bg-[#1C1C1E] min-h-screen ">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${taxi.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white text-center px-4">{taxi.title}</h1>
        </div>
      </div>

      {/* Description */}
      <section className="p-6 max-w-4xl mx-auto">
        <p className="mb-6 text-lg leading-relaxed">{taxi.description}</p>

        {/* Why Choose */}
        <h2 className="text-xl font-semibold mb-2">Why Choose Big Day Taxi?</h2>
        <ul className="list-disc ml-6 mb-6">
          {taxi.whyChoose.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* Route Options */}
        <h2 className="text-xl font-semibold mb-2">Route Options</h2>
        <table className="w-full mb-6 border text-sm">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2">Route</th>
              <th className="p-2">Distance</th>
              <th className="p-2">Travel Time</th>
            </tr>
          </thead>
          <tbody>
            {taxi.routes.map((route, i) => (
              <tr key={i} className="bg-gray-700">
                <td className="p-2">{route.route}</td>
                <td className="p-2">{route.distance}</td>
                <td className="p-2">{route.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Fare Chart */}
        <h2 className="text-xl font-semibold mb-2">{formattedId} Taxi Fare</h2>
        <table className="w-full mb-6 border text-sm">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2">Cab Type</th>
              <th className="p-2">Capacity</th>
              <th className="p-2">One-Way</th>
              <th className="p-2">Round Trip</th>
            </tr>
          </thead>
          <tbody>
            {taxi.fareChart.map((item, i) => (
              <tr key={i} className="bg-gray-700">
                <td className="p-2">{item.type}</td>
                <td className="p-2">{item.capacity}</td>
                <td className="p-2">{item.oneWay}</td>
                <td className="p-2">{item.roundTrip}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* FAQs */}
        <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {taxi.faq.map((faq, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded">
              <h3 className="font-medium">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Contact Big Day Taxi</h2>
          <p>📞 Phone: {taxi.contact.phone}</p>
          <p>
            🌐 Website:{" "}
            <a
              href={`https://${taxi.contact.website}`}
              className="text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {taxi.contact.website}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default SingleTaxiPage;
