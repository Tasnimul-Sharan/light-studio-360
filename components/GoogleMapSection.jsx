import { FaMapMarkerAlt } from "react-icons/fa";

export default function GoogleMapSection() {
  return (
    <div className="relative overflow-hidden rounded-xl border shadow-md">
      {/* Google Map */}
      <iframe
        title="Rampura Bus Stand Location"
        src="https://www.google.com/maps?q=Rampura%20Bus%20Stand,%20Sahid%20Muktijoddha%20Faruk%20Iqbal%20And%20Taslim%20Rd,%20Dhaka%201219&output=embed"
        className="w-full h-[500px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Center Map Pin */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center">
          <div className="bg-primary text-white p-3 rounded-full shadow-lg animate-bounce">
            <FaMapMarkerAlt className="text-xl" />
          </div>
          <span className="mt-2 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            Rampura Bus Stand
          </span>
        </div>
      </div> */}

      {/* Open in Google Maps Button */}
      <a
        href="https://share.google/cUxBrgwh3Q1uGytMU"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-white text-gray-900 text-sm font-semibold
                   px-4 py-2 rounded-full shadow hover:shadow-md transition"
      >
        Open in Google Maps →
      </a>
    </div>
  );
}
