import React from "react";
import { FaChevronRight } from "react-icons/fa6";

export const subMenuCompraClickeable = [
  { id: "setsTema", texto: "Sets por tema", icono: <FaChevronRight /> },
  { id: "edades", texto: "Edades", icono: <FaChevronRight /> },
  {
    id: "rangoPrecios",
    texto: "Rangos de precios",
    icono: <FaChevronRight />,
  },
  { id: "articulosLEGO", texto: "Artículos LEGO", icono: <FaChevronRight /> },
  { id: "intereses", texto: "Intereses", icono: <FaChevronRight /> },
  { id: "pickBuild", texto: "Pick and Build", icono: <FaChevronRight /> },

  /**
   * NO CLICKEABLE
   */

  { id: "sets-por-tema", texto: "Exclusivos", icono: null },
  { id: "sets-por-tema", texto: "Novedades", icono: null },
  { id: "sets-por-tema", texto: "Los más vendidos", icono: null },
  {
    id: "sets-por-tema",
    texto: "Decoración del hogar",
    icono: null,
  },
  {
    id: "sets-por-tema",
    texto: "Ofertas y rebajas",
    icono: null,
  },
  { id: "sets-por-tema", texto: "Tarjetas regalo", icono: null },
  { id: "sets-por-tema", texto: "Próximamente", icono: null },
  {
    id: "sets-por-tema",
    texto: "Encuentra la inspiración",
    icono: null,
  },
  {
    id: "sets-por-tema",
    texto: "Última oportunidad para comprar",
    icono: null,
  },
];

export const subMenuDescubrirClickeable = [
  "Nuestros valores",
  "Nuestras apps",
  "Nuestras revistas",
];
export const subMenuDescubrir = [
  "Todos los temas LEGO",
  "Todos los intereses LEGO",
  "Para fans adultos",
  "Para familias",
  "LEGO Fortnite",
  "LEGO Insiders",
  "LEGO Mosaic Maker",
  "Ideas de regalos LEGO",
];

export const subMenuAyuda = [
  "Comprobar el estado de un pedido",
  "Envíos y devoluciones",
  "Encontrar una tienda",
  "Instrucciones de construcción",
  "Preguntas frecuentes",
  "Ponte en contacto con nosotros",
  "Piezas de repuesto",
];
