// "use client";
// import React from "react";
// import ReactCompareImage from "react-compare-image";
// export default function ProjectDetails({ project }) {
//   return (
//     <section className="custom-container mx-auto py-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {project.images.map((img, index) => (
//           <div
//             key={index}
//             className="rounded-xl overflow-hidden border border-border_color hover:border-primary hover:shadow-xl transition-all transform-gpu duration-500"
//           >
//             <ReactCompareImage
//               hover
//               leftImage={img.before}
//               rightImage={img.after}
//               leftImageCss={{
//                 width: "100%",
//                 height: "auto",
//               }}
//               rightImageCss={{
//                 width: "100%",
//                 height: "auto",
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import ReactCompareImage from "react-compare-image";

export default function ProjectDetails({ project }) {
  return (
    <section className="custom-container mx-auto py-16">

      {/* IMAGE EDITING */}
      {Array.isArray(project.images) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border border-border_color 
                         hover:border-primary hover:shadow-xl 
                         transition-all transform-gpu duration-500"
            >
              <ReactCompareImage
                hover
                leftImage={img.before}
                rightImage={img.after}
              />
            </div>
          ))}
        </div>
      )}

      {/* VFX & VIDEO EDITING – AUTOPLAY */}
      {Array.isArray(project.videos) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.videos.map((video, index) => {
            const autoplayUrl =
              `${video.url}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`;

            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden border border-border_color 
                           hover:border-primary hover:shadow-xl 
                           transition-all transform-gpu duration-500"
              >
                <iframe
                  className="w-full aspect-video"
                  src={autoplayUrl}
                  title={`${project.title} video ${index + 1}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      )}

    </section>
  );
}
