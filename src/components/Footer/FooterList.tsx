interface ColumnFormat {
  title: string,
  items: string[],
};

type LinksFormat = Array<string>; 

export const column:ColumnFormat = {
  title: "",
  items: [
    "Tarjeta Regalo",
    "Encuentra la inspiración",
    "Catálogos LEGO",
    "Encontrar una tienda",
  ],
};

export const quienessomos:ColumnFormat = {
  title: "QUIENÉS SOMOS",
  items: [
    "The LEGO Group",
    "Noticias LEGO®",
    "Sostenibilidad",
    "Declacrión de transparencia de la cadena de suministro",
    "Certificación de productos LEGO",
    "Ofertas de trabajo LEGO",
    "Línea ética LEGO",
  ],
};

export const atencionAlCliente:ColumnFormat = {
  title: "ATENCIÓN AL CLIENTE",
  items: [
    "Ponte en contacto con nosotros",
    "Instrucciones de construcción",
    "Piezas de repuesto",
    "Envíos y devoluciones",
    "Métodos de pago",
    "Términos y condiciones",
    "Productos retirados",
  ],
};

export const atracciones:ColumnFormat = {
  title: "ATRACCIONES",
  items: ["LEGO® House", "LEGOLAND® Parks", "LEGOLAND Discovery Centers"],
};

export const masImformacion:ColumnFormat = {
  title: "MÁS INFORMACIÓN",
  items: [
    "LEGO® LIFE",
    "LEGO Education",
    "LEGO Ideas",
    "LEGO Foundation",
    "Programa para socios",
  ],
};

export const links:LinksFormat = [
  "Cookies",
  "Aviso legal",
  "Clausulas de uso",
  "Accesibilidad",
  "Configuración de cookies"
]