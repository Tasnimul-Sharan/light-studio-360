//

"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPageSection() {
  return (
    <section className="w-full py-24 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold leading-tight text-gray-900">
              Let’s <span className="text-secondary">Connect</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Have a project in mind, a business inquiry, or just want to say
              hello? We’d love to hear from you.
            </p>

            <div className="mt-12 space-y-6">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Location",
                  text: (
                    <>
                      24/6 response for global clients
                      <br />
                      Dhaka, Bangladesh
                    </>
                  ),
                },
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  text: "+8801326414530",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  text: "support@lightstudio360.com",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100
                             hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-xl bg-primary flex items-center 
                               justify-center text-white text-lg"
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-semibold text-lg text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="bg-white border border-gray-100 rounded-3xl p-10
                       shadow-[0_15px_50px_rgba(0,0,0,0.06)]"
          >
            <h3 className="text-3xl font-semibold mb-10 text-gray-900">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl bg-gray-50 border border-gray-200 
                             px-5 py-3 focus:outline-none focus:ring-2 
                             focus:ring-primary/30 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-gray-50 border border-gray-200 
                             px-5 py-3 focus:outline-none focus:ring-2 
                             focus:ring-primary/30 transition"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-xl bg-gray-50 border border-gray-200 
                             px-5 py-3 focus:outline-none focus:ring-2 
                             focus:ring-primary/30 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white
                           bg-primary hover:opacity-90
                           transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
