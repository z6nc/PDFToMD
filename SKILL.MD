# 🛠️ Skill: PDF Extractor (Node.js)

**Core:** Utilidad CLI para procesar PDFs (Rutas locales o URLs) y extraer contenido.

## ⚙️ Funciones (Acciones)

**1. `extraerPDF` (Modo Texto)**
- **Input:** `urlFile` (Ruta/URL), `nombreFile` (Nombre archivo), `carpetaURL` (Destino).
- **Proceso:** Extrae texto plano del documento.
- **Output:** Archivo `.md` o `.txt` con el contenido.

**2. `extraerImg` (Modo Imágenes)**
- **Input:** `urlFile` (Ruta/URL), `nombreFile` (Nombre base), `carpetaURL` (Destino).
- **Proceso:** Itera páginas y extrae buffers de imágenes incrustadas.
- **Output:** Múltiples archivos `.png` (Formato: `[nombreFile]-page[X]-img[Y].png`).

## 📥 Flujo de Datos
1. UI CLI (`prompts`) solicita: Archivo, Destino, y Tipo de Extracción.
2. Script invoca helper correspondiente (`extraerPDF` o `extraerImg`).
3. Retorna éxito y ruta de archivos generados.

## 🔑 Requisitos
- Dependencias clave: `pdf-parse`, `fs/promises`, `prompts`.
- Permisos de escritura en `carpetaURL`.