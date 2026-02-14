import fs from "fs";
import path from "path";

export function getBeforeAfterImages(folderName) {
  const directory = path.join(
    process.cwd(),
    "public/image-edating/",
    folderName,
  );

  if (!fs.existsSync(directory)) return [];

  const files = fs.readdirSync(directory);

  const beforeFiles = files
    .filter((file) => file.endsWith("--1.jpg"))
    .sort((a, b) => {
      const numA = parseInt(a.split("--")[0]);
      const numB = parseInt(b.split("--")[0]);
      return numA - numB;
    });

  return beforeFiles.map((file) => {
    const base = file.replace("--1.jpg", "");
    return {
      before: `/image-edating/${folderName}/${base}--1.jpg`,
      after: `/image-edating/${folderName}/${base}--2.jpg`,
    };
  });
}
