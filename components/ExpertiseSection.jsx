import {
  HiSparkles,
  HiFilm,
  HiCube,
  HiVideoCamera,
  HiPlayCircle,
  HiPhoto,
} from "react-icons/hi2";

const expertise = [
  {
    title: "Creative Direction",
    icon: <HiSparkles />,
  },
  {
    title: "VFX & Motion",
    icon: <HiFilm />,
  },
  {
    title: "3D Modeling & Rendering",
    icon: <HiCube />,
  },
  {
    title: "Video Production",
    icon: <HiVideoCamera />,
  },
  {
    title: "Animation",
    icon: <HiPlayCircle />,
  },
  {
    title: "Image Services",
    icon: <HiPhoto />,
  },
];

export default function Expertise() {
  return (
    <section className="bg-gradient-to-br from-light to-white py-12 md:py-16 border border-primary/5">
      <h2 className="text-4xl md:text-5xl font-black text-primary text-center mb-14 font-heading">
        Our Expertise
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6 md:px-0">
        {expertise.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-2xl p-[1px]
                       bg-gradient-to-br from-secondary/40 via-accent/30 to-primary/30
                       transition-all duration-500 hover:-translate-y-1"
          >
            {/* Card */}
            <div
              className="relative h-full rounded-2xl bg-white p-6
                         shadow-sm group-hover:shadow-xl transition-all duration-500"
            >
              <div
                className="w-11 h-11 mb-5 flex items-center justify-center rounded-xl
                           bg-gradient-to-br from-secondary to-accent
                           text-white shadow-md text-xl"
              >
                {item.icon}
              </div>

              <h4 className="text-xl font-bold text-primary mb-2">
                {item.title}
              </h4>

              <p className="text-dark/60 leading-relaxed text-sm">
                Premium-grade execution aligned with business goals.
              </p>
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl
                           opacity-0 group-hover:opacity-100 transition duration-500
                           bg-gradient-to-br from-secondary/10 to-accent/10"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
