Mi Portafolio
Estaremos trabajando en mi portafolio de trabajo la version inicial del [Figma](https://www.figma.com/proto/Xdg52r1HfHC5RY4uY0zJEt/Untitled?type=design&node-id=9-209&scaling=min-zoom&page-id=0%3A1)

Tecnologia utilizada
NextJs

version de nodejs v18.16.0

creamos el proyecto
npx create-next-app@latest

Para trabajar estilos utilizaremos less y la libreria ant designer.
yarn add less next-with-less antd
configuramos el less en el archivo next.config.js
const withLess = require("next-with-less");
const nextConfig = withLess({});
module.exports = nextConfig;

Para conectar con la base de datos estoy utilzando prisma.
yarn add prisma -D
utilizaremos mysql
npx prisma init --url mysql://root:123456@localhost:3306/portafolio

Para el manejo de estado utilizamos recoil.
yarn add recoil

en el archivo layout.sx lo importamos
import { RecoilRoot } from "recoil";

    return (
        <html lang="en">
        <body className={inter.className}><RecoilRoot>{children}</RecoilRoot></body>
        </html>
    )

para la internacionizacion voy a utilizar next-i18next
yarn add next-i18next react-i18next i18next
