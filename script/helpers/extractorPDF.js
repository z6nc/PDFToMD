import { readFile, writeFile } from "node:fs/promises";
import { PDFParse } from "pdf-parse";
import { crearFile } from "./helper.js";

export async function extraerImg(urlFile, NombreFile, carpetaURL) {
  try {
    const buffer = await readFile(urlFile);
    const parser = new PDFParse({ data: buffer });

    const result = await parser.getImage();

    for (let i = 0; i < result.pages.length; i++) {
      const imagenes = result.pages?.[i]?.images ?? [];

      for (let j = 0; j < imagenes.length; j++) {
        const imagen = imagenes[j];

        await crearFile(
          `${NombreFile}-page${i}-img${j}`,
          imagen.data,
          carpetaURL,
          ".png",
        );
      }
    }
    await parser.destroy();
  } catch (err) {
    console.error(err.message);
    throw new Error("No se puedo extraer Imagenes" + err.message);
  }
}

export async function extraerPDF(urlFile, nombreFile, carpetaURL) {
  const parser = new PDFParse({
    url: urlFile,
  });
  try {
    const result = await parser.getText();
    const rutaFinal = await crearFile(
      nombreFile,
      result.text,
      carpetaURL,
      ".md",
    );
    return rutaFinal;
  } catch (err) {
    console.error(err.message);
    throw new Error("No se puedo extraer datos" + err.message);
  } finally {
    await parser.destroy();
  }
}
