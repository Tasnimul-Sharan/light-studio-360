import {
  FiCamera,
  FiEdit3,
  FiCheckCircle,
  FiLayers,
  FiStar,
  FiCode,
} from "react-icons/fi";
import { FaVideo, FaCogs, FaCube, FaGear, FaPaintbrush } from "react-icons/fa6";

const featureIcons = {
  "image-editing": FiCamera,
  "video-production": FaVideo,
  vfx: FaGear,
  "3d-modeling": FaCube,
  animation: FaPaintbrush,
  "web-development": FiCode,
};

export default function ServiceDetails({ service }) {
  if (!service) return null;
  const details = service;

  return (
    <section className="bg-light py-24">
      <div className="max-w-7xl mx-auto md:px-0 px-6">
        {/* {details.hero && (
          <div className="text-center mb-24">
            <span
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full
              bg-secondary/10 text-secondary text-sm font-semibold tracking-wide"
            >
              <FiStar />
              {details.hero.badge}
            </span>

            <h2 className="text-5xl font-extrabold text-primary mt-6">
              {details.hero.title}
            </h2>

            <p className="text-primary/70 mt-6 max-w-3xl mx-auto text-lg">
              {details.hero.desc}
            </p>
          </div>
        )} */}

        {details.intro && (
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-5">
            {details.intro.map((text, i) => (
              <p key={i} className="text-lg text-secondary leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        )}

        {details.beforeAfter && (
          <div className="mb-24">
            {/* <h3 className="text-4xl font-bold text-primary text-center mb-6">
              {details.works?.title}
            </h3>

            <p className="text-primary/70 text-center max-w-3xl mx-auto mb-14">
              {details.works?.desc}
            </p> */}

            <div className="grid md:grid-cols-3 gap-10">
              {details.beforeAfter.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border
          border-primary/10 hover:shadow-xl transition"
                >
                  <div className="grid grid-cols-2">
                    <img
                      src={item.before}
                      alt=""
                      className="object-cover h-48 w-full"
                    />
                    <img
                      src={item.after}
                      alt=""
                      className="object-cover h-48 w-full"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="font-bold text-lg text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-primary/70 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {details.works?.showreel && (
          <div className="mb-24 text-center">
            <h3 className="text-4xl font-bold text-primary mb-6">
              {details.works.showreel.title}
            </h3>

            <p className="text-primary/70 max-w-3xl mx-auto mb-12">
              {details.works.showreel.desc}
            </p>

            <div className="relative aspect-video max-w-7xl mx-auto rounded-2xl overflow-hidden pointer-events-none">
              <iframe
                src={`${details.works.showreel.videoUrl}?autoplay=1&mute=1&loop=1`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {details.works?.categories && (
          <div className="mb-24">
            <div className="grid md:grid-cols-2 gap-12">
              {details.works.categories.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-primary/10
          hover:shadow-xl transition overflow-hidden"
                >
                  <div className="relative aspect-video w-full min-h-[320px] pointer-events-none">
                    <iframe
                      src={`${item.videoUrl}?autoplay=1&mute=1&loop=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; encrypted-media"
                      allowFullScreen
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold tracking-widest text-secondary">
                      {item.tag}
                    </span>

                    <h4 className="text-xl font-bold text-primary mt-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FEATURES */}
        {details.features && (
          <div className="grid md:grid-cols-2 gap-10 mb-24">
            {details.features.map((item, i) => {
              // service অনুযায়ী icon set
              const Icon = featureIcons[service?.slug] || FiCamera;

              return (
                <div
                  key={i}
                  className="group relative bg-white p-10 rounded-2xl border
          border-primary/10 hover:border-accent transition"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center
            bg-accent/10 text-accent mb-6"
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>

                  <p className="text-primary/70 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* INCLUDES */}
        {details.includes && (
          <div className="mb-24">
            <h3 className="text-4xl font-bold text-primary text-center mb-12">
              What’s Included
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {details.includes.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-6 rounded-xl
                  border border-primary/10 hover:border-secondary transition"
                >
                  <FiCheckCircle className="text-secondary" size={22} />
                  <span className="font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SERVICES */}
        {details.services && (
          <div className="mb-24">
            <h3 className="text-4xl font-bold text-primary text-center mb-12">
              Our Capabilities
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {details.services.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-primary/5 p-6 rounded-xl"
                >
                  <FiLayers className="text-accent" size={22} />
                  <span className="font-semibold text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHY CHOOSE */}
        {details.why && (
          <div className="mb-24">
            <h3 className="text-4xl font-bold text-primary text-center mb-14">
              Why Choose Us
            </h3>

            <div className="grid md:grid-cols-3 gap-10">
              {details.why.map((item, i) => (
                <div
                  key={i}
                  className="relative bg-white p-10 rounded-2xl border
                  border-primary/10 hover:shadow-xl transition"
                >
                  <div
                    className="absolute -top-6 left-10 bg-secondary
                    text-dark w-12 h-12 rounded-xl flex items-center justify-center"
                  >
                    <FiEdit3 size={22} />
                  </div>

                  <h4 className="font-bold text-xl text-primary mt-8 mb-3">
                    {item.title}
                  </h4>

                  <p className="text-primary/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="relative bg-primary text-light p-16 rounded-3xl text-center">
          <h3 className="text-4xl font-bold mb-4">
            Ready to Elevate Your Brand?
          </h3>

          <p className="text-light/80 max-w-2xl mx-auto mb-8">
            Let’s create premium visuals and experiences that set you apart.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-secondary
            text-dark px-10 py-4 rounded-xl font-bold
            hover:bg-secondary/90 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
