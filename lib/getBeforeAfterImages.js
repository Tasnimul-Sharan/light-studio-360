import fs from "fs";
import path from "path";

export const getBeforeAfterImages = (folder) => {
  const directoryPath = path.join(
    process.cwd(),
    "public/image-editing",
    folder,
  );

  const files = fs.readdirSync(directoryPath);

  const beforeImages = files.filter((file) => file.includes("--1"));

  return beforeImages.map((file) => {
    const baseName = file.replace("--1.jpg", "");

    return {
      before: `/image-editing/${folder}/${baseName}--1.jpg`,
      after: `/image-editing/${folder}/${baseName}--2.jpg`,
    };
  });
};
