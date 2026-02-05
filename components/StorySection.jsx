// export default function StorySection() {
//   return (
//     <section className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6 py-16 md:py-24">
//       <div>
//         <h2 className="text-4xl font-black text-gray-800 mb-6">Our Story</h2>
//         <p className="text-lg text-gray-700 mb-4">
//           Light Studio360 was founded with one goal: combine creativity with
//           strategy to deliver real business impact.
//         </p>
//         <p className="text-lg text-gray-700 mb-4">
//           From startups to global brands, we deliver 3D, VFX, animation, video,
//           and image services worldwide.
//         </p>
//         <p className="text-lg text-gray-700">
//           Every project is a chance to create meaningful results.
//         </p>
//       </div>

//       <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-lg">
//         <div className="text-6xl font-black text-indigo-600 mb-4">5+</div>
//         <p className="text-2xl font-bold text-gray-800 mb-6">
//           Years of Excellence
//         </p>
//         <ul className="space-y-3 text-gray-700 font-medium">
//           <li>✓ 1000+ Happy Clients</li>
//           <li>✓ 400+ Projects Delivered</li>
//           <li>✓ 50+ Countries Served</li>
//           <li>✓ 100% Client Satisfaction</li>
//         </ul>
//       </div>
//     </section>
//   );
// }

export default function StorySection() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6 md:px-0 py-16 md:py-20">
      <div>
        <h2 className="text-4xl font-black text-gray-800 mb-6">Our Story</h2>
        <p className="text-lg text-gray-700 mb-4">
          Light Studio360 was founded with one goal: combine creativity with
          strategy to deliver real business impact.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          From startups to global brands, we deliver 3D, VFX, animation, video,
          and image services worldwide.
        </p>
        <p className="text-lg text-gray-700">
          Every project is a chance to create meaningful results.
        </p>
      </div>

      <div className="bg-gradient-to-br from-accent to-primary rounded-2xl p-8">
        <div className="text-6xl font-black text-primary mb-4">5+</div>
        <p className="text-2xl font-bold text-secondary mb-6">
          Years of Excellence
        </p>
        <ul className="space-y-3 text-white font-medium">
          <li>✓ 1000+ Happy Clients</li>
          <li>✓ 400+ Projects Delivered</li>
          <li>✓ 50+ Countries Served</li>
          <li>✓ 100% Client Satisfaction</li>
        </ul>
      </div>
    </section>
  );
}
