import fs, { writeFile, stat } from "fs/promises";
import { extname, basename, join } from "path";
import prompts from "prompts";

// Limpiar la url del archivo
const limpiarRuta = (rutaSucia) => {
  return rutaSucia.replace(/['"]+/g, "").trim();
};

const validarCarpeta = async (url) => {
  const info = await stat(url);

  if (!info.isDirectory()) {
    throw new Error("No es una carpeta");
  }

  return true;
};

function validarPDF(fileURL) {
  const extension = extname(new URL(fileURL).pathname);
  if (extension !== ".pdf") {
    throw new Error("El archivo no es PDF");
  }
  return true;
}

export async function seleccionarUnArchivo() {
  const respuesta = await prompts({
    type: "text",
    name: "archivo",
    message: "Arrastrar el pdf ",
  });
  const fileURL = limpiarRuta(respuesta.archivo);
  await validarPDF(fileURL);
  return fileURL;
}

export async function seleccionarCarpeta() {
  const { carpeta } = await prompts({
    type: "text",
    name: "carpeta",
    message: "Arrastrar la carpeta para guardar",
  });

  const carpetaUrl = limpiarRuta(carpeta);
  await validarCarpeta(carpetaUrl);
  return carpetaUrl;
}

// Obtener el nombre del archivo
export function nombreArchivo(file) {
  const nombre = basename(file, extname(file));
  return nombre;
}

// crear el archivo .txt
export async function crearFile(archivo, texto, carpetaDestino, extension) {
  const ruta = join(carpetaDestino, `${archivo}${extension}`);

  await writeFile(ruta, texto);

  return ruta;
}
