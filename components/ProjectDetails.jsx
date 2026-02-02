"use client";
import React from "react";
import ReactCompareImage from "react-compare-image";
export default function ProjectDetails({ portfolio }) {
  return (
    <section className="custom-container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolio.images.map((img, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border border-border_color hover:border-primary hover:shadow-xl transition-all transform-gpu duration-500"
          >
            <ReactCompareImage
              hover
              leftImage={img.before}
              rightImage={img.after}
              leftImageCss={{
                width: "100%",
                height: "auto",
              }}
              rightImageCss={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
