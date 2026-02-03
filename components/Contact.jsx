// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// export default function ContactPageSection() {
//   return (
//     <section className="relative w-full py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Top Grid Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//           {/* Left – Contact Info */}
//           <div className="max-w-xl">
//             <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
//               Let’s <span className="text-primary">Connect</span>
//             </h2>

//             <p className="mt-5 text-gray-600 leading-relaxed">
//               Have a project in mind, a business inquiry, or just want to say
//               hello? We’d love to hear from you.
//             </p>

//             <div className="mt-12 space-y-6">
//               {/* Address */}
//               <div className="flex gap-5 p-5 rounded-2xl bg-white border border-primary/20 transition-all transform duration-500">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
//                   <FaMapMarkerAlt />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900">Office Address</p>
//                   <p className="text-gray-600 text-sm">
//                     327, Purbo Rampura Abdullah Bag
//                     <br />
//                     Dhaka, Bangladesh
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex gap-5 p-5 rounded-2xl bg-white border border-primary/20 transition-all transform duration-500">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
//                   <FaPhoneAlt />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900">Phone</p>
//                   <p className="text-gray-600 text-sm">+880 1765 733715</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex gap-5 p-5 rounded-2xl bg-white border border-primary/20 transition-all transform duration-500">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
//                   <FaEnvelope />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900">Email</p>
//                   <p className="text-gray-600 text-sm">redithgroup@gmail.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right – Contact Form */}
//           <div className="bg-white/80 backdrop-blur border border-primary/20 rounded-3xl p-8 lg:p-10">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-8">
//               Send Us a Message
//             </h3>

//             <form className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your full name"
//                   className="w-full rounded-xl border border-gray-300 px-4 py-3
//                              focus:outline-none focus:ring-2 focus:ring-primary/30"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full rounded-xl border border-gray-300 px-4 py-3
//                              focus:outline-none focus:ring-2 focus:ring-primary/30"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   rows={5}
//                   placeholder="Write your message here..."
//                   className="w-full rounded-xl border border-gray-300 px-4 py-3
//                              focus:outline-none focus:ring-2 focus:ring-primary/30"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-primary text-white font-semibold
//                            py-3 rounded-xl hover:bg-primary-dark transition-all transform duration-500"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// export default function ContactPageSection() {
//   return (
//     <section className="relative w-full py-28 overflow-hidden bg-gradient-to-br from-[#0B0F1A] via-[#111827] to-[#0B0F1A] text-white">
//       {/* Soft Glow Background */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full" />
//       <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />

//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//           {/* LEFT SIDE */}
//           <div className="max-w-xl">
//             <h2 className="text-5xl font-extrabold leading-tight tracking-wide">
//               Let’s{" "}
//               <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
//                 Connect
//               </span>
//             </h2>

//             <p className="mt-6 text-gray-300 leading-relaxed">
//               Have a project in mind, business inquiry, or just want to say
//               hello? We’d love to hear from you.
//             </p>

//             <div className="mt-14 space-y-8">
//               {/* CARD ITEM */}
//               {[
//                 {
//                   icon: <FaMapMarkerAlt />,
//                   title: "Office Address",
//                   text: (
//                     <>
//                       327, Purbo Rampura Abdullah Bag
//                       <br />
//                       Dhaka, Bangladesh
//                     </>
//                   ),
//                 },
//                 {
//                   icon: <FaPhoneAlt />,
//                   title: "Phone",
//                   text: "+880 1765 733715",
//                 },
//                 {
//                   icon: <FaEnvelope />,
//                   title: "Email",
//                   text: "redithgroup@gmail.com",
//                 },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl
//                              hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
//                 >
//                   <div
//                     className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center
//                                   text-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.35)] text-xl"
//                   >
//                     {item.icon}
//                   </div>

//                   <div>
//                     <p className="font-semibold text-lg">{item.title}</p>
//                     <p className="text-gray-400 text-sm mt-1">{item.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT SIDE FORM */}
//           <div
//             className="bg-white/5 border border-white/10 backdrop-blur-2xl
//                        rounded-[28px] p-10 shadow-[0_0_60px_rgba(0,0,0,0.4)]"
//           >
//             <h3 className="text-3xl font-semibold mb-10 tracking-wide">
//               Send Us a Message
//             </h3>

//             <form className="space-y-7">
//               <div>
//                 <label className="block text-sm text-gray-400 mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your full name"
//                   className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3
//                              focus:outline-none focus:ring-2 focus:ring-indigo-500/40
//                              transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-400 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3
//                              focus:outline-none focus:ring-2 focus:ring-indigo-500/40
//                              transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-400 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   rows={5}
//                   placeholder="Write your message..."
//                   className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3
//                              focus:outline-none focus:ring-2 focus:ring-indigo-500/40
//                              transition-all"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-xl font-semibold tracking-wide
//                            bg-gradient-to-r from-indigo-500 to-cyan-500
//                            hover:scale-[1.03] active:scale-95
//                            transition-all duration-300 shadow-lg"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// export default function ContactPageSection() {
//   return (
//     <section className="relative w-full py-28 overflow-hidden bg-dark text-light">
//       {/* Glow Background */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/20 blur-[150px] rounded-full" />
//       <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-secondary/20 blur-[170px] rounded-full" />

//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//           {/* LEFT SIDE */}
//           <div className="max-w-xl">
//             <h2 className="text-5xl font-extrabold leading-tight tracking-wide">
//               Let’s{" "}
//               <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
//                 Connect
//               </span>
//             </h2>

//             <p className="mt-6 text-gray-400 leading-relaxed">
//               Have a project in mind, a business inquiry, or just want to say
//               hello? We’d love to hear from you.
//             </p>

//             <div className="mt-14 space-y-8">
//               {[
//                 {
//                   icon: <FaMapMarkerAlt />,
//                   title: "Office Address",
//                   text: (
//                     <>
//                       327, Purbo Rampura Abdullah Bag
//                       <br />
//                       Dhaka, Bangladesh
//                     </>
//                   ),
//                 },
//                 {
//                   icon: <FaPhoneAlt />,
//                   title: "Phone",
//                   text: "+880 1765 733715",
//                 },
//                 {
//                   icon: <FaEnvelope />,
//                   title: "Email",
//                   text: "redithgroup@gmail.com",
//                 },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex gap-6 p-6 rounded-3xl bg-primary/40 border border-primary/50
//                              backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl
//                              transition-all duration-500"
//                 >
//                   <div
//                     className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center
//                                   text-accent shadow-[0_0_25px_rgba(74,144,226,0.45)] text-xl"
//                   >
//                     {item.icon}
//                   </div>

//                   <div>
//                     <p className="font-semibold text-lg text-light">
//                       {item.title}
//                     </p>
//                     <p className="text-gray-400 text-sm mt-1">{item.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT SIDE FORM */}
//           <div
//             className="bg-primary/40 border border-primary/60 backdrop-blur-2xl
//                        rounded-[28px] p-10 shadow-[0_0_60px_rgba(0,0,0,0.5)]"
//           >
//             <h3 className="text-3xl font-semibold mb-10 tracking-wide text-light">
//               Send Us a Message
//             </h3>

//             <form className="space-y-7">
//               <div>
//                 <label className="block text-sm text-gray-400 mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your full name"
//                   className="w-full rounded-xl bg-dark border border-primary px-5 py-3
//                              focus:outline-none focus:ring-2 focus:ring-accent/40
//                              transition-all text-light"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-400 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className="w-full rounded-xl bg-dark border border-primary px-5 py-3
//                              focus:outline-none focus:ring-2 focus:ring-accent/40
//                              transition-all text-light"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-400 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   rows={5}
//                   placeholder="Write your message..."
//                   className="w-full rounded-xl bg-dark border border-primary px-5 py-3
//                              focus:outline-none focus:ring-2 focus:ring-accent/40
//                              transition-all text-light"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-xl font-semibold tracking-wide
//                            bg-gradient-to-r from-secondary to-accent
//                            hover:scale-[1.03] active:scale-95
//                            transition-all duration-300 shadow-lg text-dark"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPageSection() {
  return (
    <section className="relative w-full py-28 overflow-hidden bg-dark text-light">
      {/* Glow Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/20 blur-[150px] rounded-full" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-secondary/20 blur-[170px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <div className="max-w-xl">
            <h2 className="text-5xl font-extrabold leading-tight tracking-wide">
              Let’s{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Connect
              </span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Have a project in mind, a business inquiry, or just want to say
              hello? We’d love to hear from you.
            </p>

            <div className="mt-14 space-y-8">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Office Address",
                  text: (
                    <>
                      327, Purbo Rampura Abdullah Bag
                      <br />
                      Dhaka, Bangladesh
                    </>
                  ),
                },
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  text: "+880 1765 733715",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  text: "redithgroup@gmail.com",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-6 rounded-3xl bg-primary/40 border border-primary/50 
                             backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl 
                             transition-all duration-500"
                >
                  <div
                    className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center 
                                  text-accent shadow-[0_0_25px_rgba(74,144,226,0.45)] text-xl"
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="font-semibold text-lg text-light">
                      {item.title}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="bg-primary/40 border border-primary/60 backdrop-blur-2xl 
                       rounded-[28px] p-10 shadow-[0_0_60px_rgba(0,0,0,0.5)]"
          >
            <h3 className="text-3xl font-semibold mb-10 tracking-wide text-light">
              Send Us a Message
            </h3>

            <form className="space-y-7">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl bg-dark border border-primary px-5 py-3
                             focus:outline-none focus:ring-2 focus:ring-accent/40
                             transition-all text-light"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-dark border border-primary px-5 py-3
                             focus:outline-none focus:ring-2 focus:ring-accent/40
                             transition-all text-light"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-xl bg-dark border border-primary px-5 py-3
                             focus:outline-none focus:ring-2 focus:ring-accent/40
                             transition-all text-light"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold tracking-wide
                           bg-gradient-to-r from-secondary to-accent
                           hover:scale-[1.03] active:scale-95
                           transition-all duration-300 shadow-lg text-dark"
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
