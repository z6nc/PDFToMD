import fs from "fs/promises";
import { exit } from "process";
import prompts from "prompts";
import {
  seleccionarUnArchivo,
  seleccionarCarpeta,
  nombreArchivo,
  crearFile,
} from "./helpers/helper.js";
import { extraerPDF, extraerImg } from "./helpers/extractorPDF.js";

const extracciones = {
  texto: {
    titulo: "📄 Solo texto",
    ejecutar: async (fileURL, nombreFile, carpetaURL) => {
      console.log("📄 Extrayendo texto...");
      const resultado = await extraerPDF(fileURL, nombreFile, carpetaURL);
      console.log("✅ Archivo creado:", resultado);
      return resultado;
    },
  },

  imagenes: {
    titulo: "🖼️ Solo imágenes",
    ejecutar: async (fileURL, nombreFile, carpetaURL) => {
      console.log("🖼️ Extrayendo imágenes...");
      const resultado = await extraerImg(fileURL, nombreFile, carpetaURL);
      console.log("✅ Imágenes creadas correctamente");
      return resultado;
    },
  },
};

const opciones = Object.entries(extracciones).map(([value, { titulo }]) => ({
  title: titulo,
  value,
}));

async function run() {
  try {
    const carpetaURL = await seleccionarCarpeta();
    const fileURL = await seleccionarUnArchivo();
    const nombreFile = nombreArchivo(fileURL);

    const respuesta = await prompts({
      type: "select",
      name: "tipoExtraccion",
      message: "¿Qué tipo de extracción deseas?",
      choices: opciones,
    });

    const { tipoExtraccion } = respuesta;

    if (!tipoExtraccion) {
      console.log("❌ Operación cancelada");
      process.exit(0);
    }

    const extraccion = extracciones[tipoExtraccion];
    await extraccion.ejecutar(fileURL, nombreFile, carpetaURL);
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

run();
