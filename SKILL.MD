| name | pdf-extractor |
| ------ | ------ |
| description | Utilidad CLI para procesar PDFs (rutas locales o URLs) y extraer su contenido en modo texto o imágenes incrustadas. |
| metadata | {"category":"utility","priority":"medium","difficulty":"intermediate","version":"1.0.0"} |

---

# Skill: PDF Extractor (Node.js)

Utilidad de línea de comandos (CLI) diseñada para auditar y procesar archivos PDF distribuidos mediante rutas locales o URLs remotas.

---

##  Funciones (Acciones)

### 1. `extraerPDF` (Modo Texto)
* **Input:** * `urlFile` (Ruta/URL de origen)
    * `nombreFile` (Nombre del archivo final)
    * `carpetaURL` (Directorio de destino)
* **Proceso:** Analiza el documento y extrae el texto plano estructurado.
* **Output:** Genera un archivo `.md` o `.txt` con el contenido procesado en la ruta de destino.

### 2. `extraerImg` (Modo Imágenes)
* **Input:** * `urlFile` (Ruta/URL de origen)
    * `nombreFile` (Nombre base para las imágenes)
    * `carpetaURL` (Directorio de destino)
* **Proceso:** Itera a través de las páginas del documento y extrae los buffers de las imágenes incrustadas.
* **Output:** Múltiples archivos optimizados en formato `.png` bajo el patrón de nomenclatura: `[nombreFile]-page[X]-img[Y].png`.

---

## Flujo de Datos

> **Secuencia operativa de la herramienta:**

1. **Interacción Inicial:** La UI basada en la CLI (`prompts`) solicita al operador definir el archivo origen, la carpeta de destino y el tipo de extracción requerido.
2. **Ejecución:** El script principal evalúa la opción elegida e invoca de manera asíncrona al helper correspondiente (`extraerPDF` o `extraerImg`).
3. **Finalización:** Retorna una confirmación de éxito junto con la ruta absoluta de los recursos generados.

---

## Requisitos

* **Dependencias Core:** `pdf-parse`, `fs/promises`, `prompts`.
* **Permisos del Entorno:** Requiere privilegios de escritura activos en el directorio asignado a `carpetaURL`.