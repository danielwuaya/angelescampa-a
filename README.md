# Campaña Health

Sitio web de la Dra. María de los Ángeles Campaña, preparado para publicarse
desde GitHub en Vercel.

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

## Validación

```bash
npm run lint
npm run build
```

## Publicación en Vercel

1. Crear un repositorio nuevo en GitHub.
2. Subir todos los archivos de esta carpeta a la raíz del repositorio.
3. En Vercel, seleccionar **Add New → Project** e importar el repositorio.
4. Confirmar que Vercel detecte **TanStack Start**.
5. Mantener el comando de compilación como `npm run build`.
6. No configurar manualmente un directorio de salida; Vercel y Nitro lo
   detectan automáticamente.
7. Publicar el proyecto.

El sitio actual no necesita variables de entorno.

## Dominio

Una vez validada la dirección temporal de Vercel, agregar el dominio desde
**Project → Settings → Domains** y seguir los registros DNS indicados por
Vercel.
