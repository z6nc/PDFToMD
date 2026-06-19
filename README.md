# PDFToMD

Una herramienta de línea de comandos ágil y modular para procesar archivos PDF. Este script lee documentos locales y extrae su contenido (texto o imágenes), estructurándolo en formatos amigables y listos para ser consumidos en entornos de desarrollo, documentaciones o gestores de contenido.

## Tabla de Características

| Funcionalidad              | Descripción Técnica                                                                                                                     |
| :------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Extracción a Markdown**  | Lee el texto crudo del PDF y lo exporta a un archivo `.md`, ideal para integrarlo directamente en blogs o bases de conocimiento.        |
| **Extracción de Imágenes** | Escanea los buffers del documento, aísla las imágenes incrustadas y las exporta masivamente en formato `.png`.                          |
| **Menú Interactivo**       | Utiliza `prompts` para guiar al usuario paso a paso en la selección de archivos, directorios de salida y el tipo de extracción deseado. |
| **Arquitectura Modular**   | Construido con un enfoque escalable, separando la lógica central en `helpers` y utilizando un mapeo dinámico de opciones.               |

## Requisitos Previos

Para ejecutar esta herramienta, necesitas tener instalado un entorno de ejecución de JavaScript. El proyecto está diseñado para funcionar de manera óptima con **Bun**, aunque es completamente compatible con **Node.js**.

## Instalación

Para mantener el repositorio ligero, no se incluye la carpeta `node_modules`. Debes instalar las dependencias localmente en tu máquina antes del primer uso.

Sigue estos pasos en tu terminal:

1. Clona el repositorio y accede a la carpeta del proyecto:

```bash
git clone <URL_DE_TU_REPOSITORIO>
```

cd extractorpdf
Instala las dependencias necesarias utilizando Bun:

```bash
bun install
```

(Nota: Si prefieres usar el ecosistema tradicional, puedes ejecutar npm install en su lugar).

Uso de la Herramienta
Una vez instaladas las dependencias, iniciar el extractor es un proceso directo. Desde la raíz del directorio, ejecuta el siguiente comando:

```bash
bun start
```

(O `npm start` si estás utilizando Node.js).

## Flujo de Ejecución CLI

Al ejecutar el comando, la consola te presentará un menú interactivo. El flujo de trabajo es el siguiente:

Rutas: El sistema te solicitará primero seleccionar el archivo PDF de origen y luego indicar la carpeta de destino donde se guardarán los resultados.

Selección de Acción: Aparecerá un menú con las siguientes opciones:

Solo texto: El script procesará el documento y generará un archivo .md con todo el contenido textual.

Solo imágenes: El script iterará sobre las páginas y generará archivos .png independientes por cada imagen encontrada, etiquetados de forma secuencial (ej. nombre-page1-img0.png).

Confirmación: La consola te notificará el éxito de la operación y mostrará la ruta exacta de los archivos generados.

## Estructura del Proyecto

```bash
/extractorpdf
├── extractorMain.js       # Punto de entrada y configuración del menú CLI dinámico
├── /helpers
│   ├── extractorPDF.js    # Lógica de pdf-parse para buffers, texto e imágenes
│   └── helper.js          # Utilidades para el manejo del File System y directorios
├── package.json           # Metadatos del proyecto y dependencias
└── README.md              # Documentación técnica
```

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Eres libre de utilizar, modificar y distribuir este código en tus propios proyectos. Creado por Andrés.
