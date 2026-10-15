// ============================================================
// ZONA DE CONFIGURACIÓN — EDITAR PARA CADA CLIENTE
// Cliente: Forchetta (Puente Nacional, Santander)
//
// ⚠️ PENDIENTES POR CONFIRMAR CON EL CLIENTE:
//   - Número de WhatsApp para pedidos: Google Maps y el logo muestran
//     311 4421526. Confirmar que ese es el WhatsApp donde reciben pedidos.
//   - Horario de atención: Google Maps indica que abre a las 4:30 p.m.
//     (hora de cierre y días no confirmados). Se dejó un horario de EJEMPLO
//     para que el estado "Abierto/Cerrado" funcione.
//   - "Tinto": aparece en la carta sin precio — NO se incluyó.
//   - "Limonadas" ($10.000): la carta no dice qué sabores hay.
//   - "Jugos en agua / en leche": la carta no dice los sabores.
//   - Alitas y costillas: la carta dice "preguntar disponibilidad".
//   - Carta transcrita desde fotos: revisar cada precio con el dueño.
// ============================================================
const CONFIG = {
  // ── DATOS DEL NEGOCIO ──────────────────────────────────────
  nombre:    "Forchetta",
  tagline:   "Onces y comidas · Puente Nacional",
  logo: "../img/Logo_Forchetta_Puente.png",
  emoji:     "🍔",
  whatsapp:  "573114421526",   // TODO: confirmar que es el WhatsApp de pedidos
  horarioSemana: {
    // TODO: confirmar horario real (Maps: abre 4:30 p.m.)
    domingo:    { abre: "16:30", cierra: "22:00" },
    lunes:      { abre: "16:30", cierra: "22:00" },
    martes:     { abre: "16:30", cierra: "22:00" },
    miercoles:  { abre: "16:30", cierra: "22:00" },
    jueves:     { abre: "16:30", cierra: "22:00" },
    viernes:    { abre: "16:30", cierra: "22:30" },
    sabado:     { abre: "16:30", cierra: "22:30" },
  },

  // ── CATEGORÍAS Y MENÚ ─────────────────────────────────────
  categorias: [
    { id: "hamburguesas", tabId: "hamburguesas", tabNombre: "Hamburguesas", icono: "../img/hamburg-icon.png", nombre: "Hamburguesas",
      nota: "¿Quieres algo extra? Mira la pestaña Adicionales." },
    { id: "perros",       tabId: "perros", tabNombre: "Perros",  icono: "../img/hotdog-icon.png", nombre: "Perros Calientes" },
    { id: "papas",        tabId: "papas", tabNombre: "Papas", icono: "../img/papas-fritas-icon.png", nombre: "Papas" },
    { id: "tacos",        tabId: "tacos-patacones", tabNombre: "Tacos y Patacones",  icono: "../img/tacos-icon.png", nombre: "Tacos" },
    { id: "patacones",    tabId: "tacos-patacones", tabNombre: "Tacos y Patacones",  icono: "../img/tacos-icon.png", nombre: "Patacones" },
    { id: "carnes",       tabId: "carnes", tabNombre: "Carnes", icono: "../img/carne-icon.png", nombre: "Carnes",
      nota: "Alitas y costillas: preguntar disponibilidad." },
    { id: "gaseosas",     tabId: "bebidas", tabNombre: "Bebidas", icono: "../img/bebidas-icon.png", nombre: "Gaseosas y Bebidas" },
    { id: "cervezas",     tabId: "bebidas", tabNombre: "Bebidas", icono: "../img/bebidas-icon.png", nombre: "Cervezas" },
    { id: "jugos",        tabId: "bebidas", tabNombre: "Bebidas", icono: "../img/bebidas-icon.png", nombre: "Jugos y Limonadas" },
    { id: "adicionales",  tabId: "adicionales", tabNombre: "Adicionales", icono : "../img/adicional-icon.png" ,nombre: "Adicionales" },
  ],

  productos: [
    // ── HAMBURGUESAS ────────────────────────────────────────
    { id:1,  cat:"hamburguesas", emoji:"🍔", nombre:"Forchetta", imagen: "../img/productos/hamburguesas/hamburguesa-forchetta.png", desc:"Carne de 140gr, queso cheddar, tajadas de maduro, carne y pollo deshilachado con maíz y chorizo, huevo frito, pollo en salsa de champiñones, tocineta y vegetales.", precio:28000 },
    { id:2,  cat:"hamburguesas", emoji:"🍔", nombre:"Golosa", imagen: "../img/productos/hamburguesas/hamburguesa-golosa.png", desc:"Carne de 140gr, mix de quesos, huevo frito, carne en salsa de la casa, guacamole y chicharrón.", precio:25000 },
    { id:3,  cat:"hamburguesas", emoji:"🍔", nombre:"La Doble",  imagen: "../img/productos/hamburguesas/hamburguesa-la-doble.png", desc:"Doble carne de 140gr, doble queso cheddar, tajadas de maduro, queso crema, mermelada de tocineta y vegetales.", precio:28000 },
    { id:4,  cat:"hamburguesas", emoji:"🍔", nombre:"Doble Fusión",  imagen: "../img/productos/hamburguesas/hamburguesa-doble-fusion.png", desc:"Doble carne de 140gr, doble queso cheddar, tajadas de maduro, tocineta y vegetales.", precio:28000 },
    { id:5,  cat:"hamburguesas", emoji:"🍔", nombre:"Forchina", imagen: "../img/productos/hamburguesas/hamburguesa-forchina.png", desc:"Carne de 140gr, pollo en salsa de champiñones, tajadas de maduro, chorizo en salsa de uchuva y vegetales.", precio:25000 },
    { id:6,  cat:"hamburguesas", emoji:"🍔", nombre:"Mexicana",  imagen: "../img/productos/hamburguesas/hamburguesa-mexicana.png", desc:"Carne de 140gr, carne y pollo deshilachado con maíz y chorizo, tajadas de maduro, jalapeño y vegetales.", precio:25000 },
    { id:7,  cat:"hamburguesas", emoji:"🍔", nombre:"Champiñua",  imagen: "../img/productos/hamburguesas/hamburguesa-champinua.jpg", desc:"Carne de 140gr, pollo en salsa de champiñones, tajadas de maduro y vegetales.", precio:25000 },
    { id:8,  cat:"hamburguesas", emoji:"🍔", nombre:"Criolla",  imagen: "../img/productos/hamburguesas/hamburguesa-criolla.jpg", desc:"Carne de 140gr, tajadas de maduro, huevo frito, tocineta y vegetales.", precio:21000 },
    { id:9,  cat:"hamburguesas", emoji:"🍔", nombre:"Sencilla",  imagen: "../img/productos/hamburguesas/hamburguesa-sencilla.jpg", desc:"Carne de 140gr, tajadas de maduro, tocineta y vegetales.", precio:17000 },
    { id:10, cat:"hamburguesas", emoji:"🍔", nombre:"Mini",  imagen: "../img/productos/hamburguesas/hamburguesa-mini.jpg", desc:"Carne de 80gr, queso cheddar, tajada de maduro, tocineta y pollo en salsa de champiñones.", precio:15000 },

    // ── PERROS ──────────────────────────────────────────────
    { id:11, cat:"perros", emoji:"🌭", nombre:"Callejero", imagen: "../img/productos/perros/perro-callejero.png", desc:"Salchicha americana, carne desmechada en salsa de la casa, tocineta crispy y guacamole.", precio:22000 },
    { id:12, cat:"perros", emoji:"🌭", nombre:"Mexicano", imagen: "../img/productos/perros/perro-mexicano.png", desc:"Salchicha americana, carne y pollo desmechado, maíz, chorizo, queso fundido y cubitos de maduro.", precio:22000 },
    { id:13, cat:"perros", emoji:"🌭", nombre:"Sencillo", imagen: "../img/productos/perros/perro-sencillo.png", desc:"Salchicha americana, papas trituradas y queso rallado.", precio:14000 },
    { id:14, cat:"perros", emoji:"🌭", nombre:"Champiñuo", desc:"Salchicha americana, pollo en salsa de champiñones, queso fundido y trozos de maduro.", precio:22000 },

    // ── PAPAS ───────────────────────────────────────────────
    { id:15, cat:"papas", emoji:"🍟", nombre:"Papas Mixtas", desc:"Papa francesa, carne y pollo desmechado con maíz y chorizo, queso fundido, pico de gallo.", precio:28000 },
    { id:16, cat:"papas", emoji:"🍟", nombre:"Papas Champiñuas", desc:"Papa francesa, pollo en salsa de champiñones, queso fundido, pico de gallo.", precio:28000 },
    { id:17, cat:"papas", emoji:"🍟", nombre:"Papas Bomba", desc:"Papa francesa, chorizo jalapeño, salchicha, carne en salsa de la casa y guacamole.", precio:28000 },
    { id:18, cat:"papas", emoji:"🍟", nombre:"Papas Clásicas", desc:"Papa francesa, salchicha y queso rallado.", precio:12000 },

    // ── TACOS ───────────────────────────────────────────────
    { id:19, cat:"tacos", emoji:"🌮", nombre:"Taco Mixto", desc:"Carne y pollo desmechado, maíz y chorizo.", precio:14000 },
    { id:20, cat:"tacos", emoji:"🌮", nombre:"Taco de Pollo", desc:"Pollo en salsa de champiñones.", precio:14000 },
    { id:21, cat:"tacos", emoji:"🌮", nombre:"Taco de Carne", desc:"Carne en salsa de la casa.", precio:14000 },

    // ── PATACONES ───────────────────────────────────────────
    { id:22, cat:"patacones", emoji:"🍌", nombre:"Patacón Mixto", desc:"Patacón, pollo en salsa de champiñones, carne en salsa de la casa y queso rallado.", precio:24000 },
    { id:23, cat:"patacones", emoji:"🍌", nombre:"Patacón de Carne", desc:"Patacón, carne en salsa de la casa y queso rallado.", precio:20000 },
    { id:24, cat:"patacones", emoji:"🍌", nombre:"Patacón de Pollo", desc:"Patacón, pollo en salsa de champiñones y queso rallado.", precio:20000 },

    // ── CARNES ──────────────────────────────────────────────
    { id:25, cat:"carnes", emoji:"🥩", nombre:"Picada Forchetta", desc:"Papa francesa, costillas en salsa de uchuva, fajitas de res y pechuga, chorizo jalapeño en salsa de la casa, patacón y guacamole.", precio:50000 },
    { id:26, cat:"carnes", emoji:"🥩", nombre:"Churrasco", desc:"Con papa francesa, patacón y guacamole.", precio:37000 },
    { id:27, cat:"carnes", emoji:"🍗", nombre:"Pechuga", desc:"Con papa francesa, patacón y guacamole.", precio:28000 },
    { id:28, cat:"carnes", emoji:"🍗", nombre:"Pechuga Gratinada", desc:"Con papa francesa, patacón y guacamole.", precio:35000 },
    { id:29, cat:"carnes", emoji:"🥩", nombre:"Mix de Carnes", desc:"Pechuga y carne, con papa francesa, patacón y guacamole.", precio:35000 },
    { id:30, cat:"carnes", emoji:"🍗", nombre:"Alitas", desc:"En salsa de coca-cola o uchuva, con papa francesa, patacón y guacamole. Preguntar disponibilidad.", precio:25000 },
    { id:31, cat:"carnes", emoji:"🍖", nombre:"Costillas", desc:"En salsa de coca-cola o uchuva, con papa francesa, patacón y guacamole. Preguntar disponibilidad.", precio:37000 },

    // ── BEBIDAS: GASEOSAS Y OTRAS ───────────────────────────
    { id:32, cat:"gaseosas", emoji:"🥤", nombre:"Gaseosa 1.5L", desc:"", precio:9000 },
    { id:33, cat:"gaseosas", emoji:"🥤", nombre:"Gaseosa 400ml", desc:"", precio:5000 },
    { id:34, cat:"gaseosas", emoji:"🥤", nombre:"Coca-Cola Lata", desc:"", precio:5000 },
    { id:35, cat:"gaseosas", emoji:"🥤", nombre:"Bretaña", desc:"", precio:5000 },
    { id:36, cat:"gaseosas", emoji:"🥤", nombre:"Soda Hatsu", desc:"", precio:6000 },
    { id:37, cat:"gaseosas", emoji:"🥤", nombre:"Refajo Andina", desc:"", precio:4000 },
    { id:38, cat:"gaseosas", emoji:"🧃", nombre:"Jugo Hit", desc:"", precio:4000 },
    { id:39, cat:"gaseosas", emoji:"🥤", nombre:"Mr. Tea", desc:"", precio:4000 },
    { id:40, cat:"gaseosas", emoji:"🥤", nombre:"Gatorade", desc:"", precio:5000 },
    { id:41, cat:"gaseosas", emoji:"💧", nombre:"Agua 600ml", desc:"", precio:3000 },
    { id:42, cat:"gaseosas", emoji:"💧", nombre:"Agua 300ml", desc:"", precio:2000 },

    // ── BEBIDAS: CERVEZAS ───────────────────────────────────
    { id:43, cat:"cervezas", emoji:"🍺", nombre:"Águila", desc:"", precio:4000 },
    { id:44, cat:"cervezas", emoji:"🍺", nombre:"Águila Light", desc:"", precio:4000 },
    { id:45, cat:"cervezas", emoji:"🍺", nombre:"Club Colombia", desc:"", precio:6000 },
    { id:46, cat:"cervezas", emoji:"🍺", nombre:"Coronita", desc:"", precio:5000 },

    // ── BEBIDAS: JUGOS Y LIMONADAS ──────────────────────────
    { id:47, cat:"jugos", emoji:"🍋", nombre:"Limonada Natural", desc:"", precio:8000 },
    { id:48, cat:"jugos", emoji:"🍹", nombre:"Jugo en Agua", desc:"Consulta los sabores disponibles.", precio:9000 },
    { id:49, cat:"jugos", emoji:"🥛", nombre:"Jugo en Leche", desc:"Consulta los sabores disponibles.", precio:10000 },
    { id:50, cat:"jugos", emoji:"🍋", nombre:"Limonadas", desc:"Consulta los sabores disponibles.", precio:10000 },

    // ── ADICIONALES ─────────────────────────────────────────
    { id:51, cat:"adicionales", emoji:"➕", nombre:"Carne de Hamburguesa", desc:"", precio:6000 },
    { id:52, cat:"adicionales", emoji:"➕", nombre:"Pollo Desmechado", desc:"", precio:4000 },
    { id:53, cat:"adicionales", emoji:"➕", nombre:"Carne Desmechada", desc:"", precio:4000 },
    { id:54, cat:"adicionales", emoji:"➕", nombre:"Papa Francesa", desc:"", precio:5000 },
    { id:55, cat:"adicionales", emoji:"➕", nombre:"Chorizo Jalapeño", desc:"", precio:1500 },
  ],
};
