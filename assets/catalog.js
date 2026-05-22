// Generado automáticamente — 21/5/2026, 2:56:37 p.m.

function driveToImg(url) {
  if (!url) return null;
  const m = url.match(/(?:id=|\/d\/)([a-zA-Z0-9_-]{20,})/);
  return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w800` : url;
}
function formatPrecio(val) {
  if (!val) return null;
  const num = parseFloat(String(val).replace(/[^0-9.]/g, ''));
  if (!num) return null;
  return '$' + num.toLocaleString('es-MX');
}
const CATALOG = {
  cadenas: [
  {
    "sku": "CAD-MEX-001",
    "nombre": "Barbado Planchada",
    "desc": "Cadena barbado planchada en oro 10K, 65 cm de largo y 5 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "65 cm",
    "grosor": "5 mm",
    "peso": "13.3g",
    "precio": 19950,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/13dq2RDm6L66oCDj0EaX-Gertukjz1tBT/view?usp=drive_link"
  },
  {
    "sku": "CAD-MEX-002",
    "nombre": "Cartier",
    "desc": "Cadena Cartier en oro 10K, 60 cm de largo y 3 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "60 cm",
    "grosor": "3 mm",
    "peso": "4.4g",
    "precio": 6600,
    "kilate": "10K",
    "foto": "https://drive.google.com/open?id=1KHxP6eojLCVp1zPDf9lLuqR2sYpkZF-m"
  },
  {
    "sku": "CAD-MEX-003",
    "nombre": "Cartier",
    "desc": "Cadena Cartier en oro 10K, 50 cm de largo y 3 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "50 cm",
    "grosor": "3 mm",
    "peso": "3.9g",
    "precio": 5850,
    "kilate": "10K",
    "foto": "https://drive.google.com/open?id=1KHxP6eojLCVp1zPDf9lLuqR2sYpkZF-m"
  },
  {
    "sku": "CAD-MEX-004",
    "nombre": "Cartier",
    "desc": "Cadena Cartier en oro 10K, 50 cm de largo y 5 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "50 cm",
    "grosor": "5 mm",
    "peso": "10.4g",
    "precio": 15600,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/1k3cOk40wl6NW0RSTRktrXbcG2g-NQ4Fj/view?usp=sharing"
  },
  {
    "sku": "CAD-MEX-005",
    "nombre": "Planchada",
    "desc": "Cadena planchada en oro 10K, 50 cm de largo y 2 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "50 cm",
    "grosor": "2 mm",
    "peso": "3.1g",
    "precio": 4650,
    "kilate": "10K",
    "foto": "https://drive.google.com/open?id=184Yy1ET1RZo3pvIgKt0XSFPcJrgIE224"
  },
  {
    "sku": "CAD-MEX-006",
    "nombre": "Planchadita",
    "desc": "Cadena planchadita en oro 10K, 40 cm de largo y 2 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "40 cm",
    "grosor": "2 mm",
    "peso": "2.6g",
    "precio": 3900,
    "kilate": "10K",
    "foto": "https://drive.google.com/open?id=10HY8grKz7Ny72Ug_FHPzRiFaCvg2ijth"
  },
  {
    "sku": "CAD-MEX-007",
    "nombre": "Gucci",
    "desc": "Cadena estilo Gucci en oro 10K, 50 cm de largo y 4 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "50 cm",
    "grosor": "4 mm",
    "peso": "5.7g",
    "precio": 8550,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/184Yy1ET1RZo3pvIgKt0XSFPcJrgIE224/view?usp=sharing"
  },
  {
    "sku": "CAD-MEX-008",
    "nombre": "Planchada",
    "desc": "Cadena planchada en oro 10K, 55 cm de largo y 2.5 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "55 cm",
    "grosor": "2.5 mm",
    "peso": "2.1g",
    "precio": 3150,
    "kilate": "10K",
    "foto": "https://drive.google.com/open?id=12S7H_dBFRTGvP0KLkyqVS7aug-e_qb5I"
  },
  {
    "sku": "CAD-MEX-009",
    "nombre": "Planchada",
    "desc": "Cadena planchada en oro 10K, 50 cm de largo y 2 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "50 cm",
    "grosor": "2 mm",
    "peso": "1.9g",
    "precio": 2850,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/1EhqwCOyehio9nup3oKsEESdYpiCX4i9D/view?usp=sharing"
  },
  {
    "sku": "CAD-MEX-010",
    "nombre": "Gucci",
    "desc": "Cadena estilo Gucci en oro 10K, 65 cm de largo y 3 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "65 cm",
    "grosor": "3 mm",
    "peso": "3.4g",
    "precio": 5100,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/184Yy1ET1RZo3pvIgKt0XSFPcJrgIE224/view?usp=sharing"
  },
  {
    "sku": "CAD-MEX-011",
    "nombre": "Gucci",
    "desc": "Cadena estilo Gucci en oro 10K, 55 cm de largo y 2 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "55 cm",
    "grosor": "2 mm",
    "peso": "1.6g",
    "precio": 2400,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/184Yy1ET1RZo3pvIgKt0XSFPcJrgIE224/view?usp=sharing"
  },
  {
    "sku": "CAD-MEX-012",
    "nombre": "Gucci",
    "desc": "Cadena estilo Gucci en oro 10K, 50 cm de largo y 2 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "50 cm",
    "grosor": "2 mm",
    "peso": "1.6g",
    "precio": 2400,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/184Yy1ET1RZo3pvIgKt0XSFPcJrgIE224/view?usp=sharing"
  },
  {
    "sku": "CAD-MEX-013",
    "nombre": "Gucci",
    "desc": "Cadena estilo Gucci en oro 10K, 50 cm de largo y 3 mm de grosor. Hecha a pedido en Guadalajara, entrega en una semana.",
    "largo": "50 cm",
    "grosor": "3 mm",
    "peso": "2.9g",
    "precio": 4350,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/184Yy1ET1RZo3pvIgKt0XSFPcJrgIE224/view?usp=sharing"
  },
  {
    "sku": "Precio base: $1,500 MXN por gramo · 10K · Actualizado: mayo 2026",
    "nombre": "",
    "desc": "",
    "largo": "",
    "grosor": "",
    "peso": "",
    "precio": "",
    "kilate": "10K",
    "foto": ""
  }
],
  pulsos: [
  {
    "sku": "PUL-MEX-001",
    "nombre": "Petatillo con placa",
    "desc": "Pulso petatillo con placa en oro 10K, 19 cm de largo, eslabón 6 mm y placa 6 mm. Hecho a pedido en Guadalajara, entrega en una semana.",
    "largo": "19 cm",
    "eslabon": "6 mm",
    "peso": "10.2g",
    "precio": 15300,
    "kilate": "10K",
    "foto": "https://drive.google.com/open?id=1H0G4NhuT3dKH4QhCSPLSCpVxxSWMTnWx"
  },
  {
    "sku": "PUL-MEX-002",
    "nombre": "Cartier con placa",
    "desc": "Pulso Cartier con placa en oro 10K, 18 cm de largo, eslabón 5 mm y placa 6 mm. Hecho a pedido en Guadalajara, entrega en una semana.",
    "largo": "18 cm",
    "eslabon": "6 mm",
    "peso": "4.8g",
    "precio": 7200,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/1CjU0U7eXjGAPkrC5Hgead95ZHEg1OXQ2/view?usp=drive_link"
  },
  {
    "sku": "PUL-MEX-003",
    "nombre": "Planchado con placa",
    "desc": "Pulso planchado con placa en oro 10K, 21 cm de largo, eslabón 6 mm y placa 7 mm. Hecho a pedido en Guadalajara, entrega en una semana.",
    "largo": "21 cm",
    "eslabon": "7 mm",
    "peso": "8.3g",
    "precio": 12450,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/1W8nrnkkrZ_mxcmbKkvDbx9J7DwjGxURv/view?usp=sharing"
  },
  {
    "sku": "PUL-MEX-004",
    "nombre": "Cartier",
    "desc": "Pulso Cartier en oro 10K, 19 cm de largo y eslabón 4 mm. Hecho a pedido en Guadalajara, entrega en una semana.",
    "largo": "19 cm",
    "eslabon": "",
    "peso": "4.6g",
    "precio": 6900,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/1qx5P8TZavJcu-0tTJyTWAYqIo3SECBD3/view?usp=sharing"
  },
  {
    "sku": "PUL-MEX-005",
    "nombre": "Cartier",
    "desc": "Pulso Cartier en oro 10K, 18.5 cm de largo y eslabón 4 mm. Hecho a pedido en Guadalajara, entrega en una semana.",
    "largo": "18.5 cm",
    "eslabon": "",
    "peso": "3.2g",
    "precio": 4800,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/1iubALbqbMTcU4HYCVDsJXDVmHnX4_hWX/view?usp=sharing"
  },
  {
    "sku": "PUL-MEX-006",
    "nombre": "Cartier",
    "desc": "Pulso Cartier en oro 10K, 18 cm de largo y eslabón 3 mm. Hecho a pedido en Guadalajara, entrega en una semana.",
    "largo": "18 cm",
    "eslabon": "",
    "peso": "1.6g",
    "precio": 2400,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/1Kz2OC5asSwBFU-gJb5nGT7tUzIxRBeZU/view?usp=sharing"
  },
  {
    "sku": "PUL-MEX-007",
    "nombre": "Cartier",
    "desc": "Pulso Cartier en oro 10K, 21 cm de largo y eslabón 4.5 mm. Hecho a pedido en Guadalajara, entrega en una semana.",
    "largo": "21 cm",
    "eslabon": "",
    "peso": "2.4g",
    "precio": 3600,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/1vpdYbcXD8GicDpJqlOFRBqMVhkxOm4S4/view?usp=sharing"
  },
  {
    "sku": "PUL-MEX-008",
    "nombre": "Cartier",
    "desc": "Pulso Cartier en oro 10K, 20 cm de largo y eslabón 4.5 mm. Hecho a pedido en Guadalajara, entrega en una semana.",
    "largo": "20 cm",
    "eslabon": "",
    "peso": "2.5g",
    "precio": 3750,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/12L4xgNdod1O_LofC7_9VXhwKRma0LHYC/view?usp=sharing"
  },
  {
    "sku": "PUL-MEX-009",
    "nombre": "Cartier",
    "desc": "Pulso Cartier en oro 10K, 17 cm de largo y eslabón 5 mm. Hecho a pedido en Guadalajara, entrega en una semana.",
    "largo": "17 cm",
    "eslabon": "",
    "peso": "4.1g",
    "precio": 6150,
    "kilate": "10K",
    "foto": "https://drive.google.com/file/d/1IHdd2WOAvnDkHpf4Jerz7p9SAmeSQeV4/view?usp=sharing"
  },
  {
    "sku": "Precio base: $1,500 MXN por gramo · 10K · Actualizado: mayo 2026",
    "nombre": "",
    "desc": "",
    "largo": "",
    "eslabon": "",
    "peso": "",
    "precio": "",
    "kilate": "10K",
    "foto": ""
  }
],
  broqueles: [
  {
    "sku": "BRQ-001",
    "nombre": "Broquel Corazón con Zirconia 10K",
    "desc": "Broqueles de oro 10K con diseño de corazón calado y zirconia central.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1hO6171s2vGKq93gQJ8XI5GW_rvepmt0J&usp=drive_copy"
  },
  {
    "sku": "BRQ-002",
    "nombre": "Broquel Corazón Liso",
    "desc": "Par de broqueles de oro con diseño de corazón liso y acabado pulido.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=18nnTNmHDq32XCFrDSgjtHHyCBhvnVMfp&usp=drive_copy"
  },
  {
    "sku": "BRQ-003",
    "nombre": "Broquel Árbol de la Vida con Circonias",
    "desc": "Broquel dorado con diseño de Árbol de la Vida y orla de circonias.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1ba9fY9VeJ8ZEbyRqDrOJI32OR3Up98jW&usp=drive_copy"
  },
  {
    "sku": "BRQ-004",
    "nombre": "Broquel Cruz 10K",
    "desc": "Broqueles de oro 10K con diseño de cruz y broche de rosca.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1yUj7kAeHArKLrjW7VIQUzHUEB9xclCi0&usp=drive_copy"
  },
  {
    "sku": "BRQ-005",
    "nombre": "Broquel Corazón con Zirconia",
    "desc": "Broqueles de oro con diseño de corazón y una zirconia engastada.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1II5GTRnKPh3V0td8ZLPmW-YHyngn8X5q&usp=drive_copy"
  },
  {
    "sku": "BRQ-006",
    "nombre": "Broquel Estrella Rayada",
    "desc": "Broqueles de oro con diseño de estrella y superficie rayada.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1zOcSG0VGeAQxD3e-aghcEYBxruscI-ZK&usp=drive_copy"
  },
  {
    "sku": "BRQ-007",
    "nombre": "Broquel Flor Zafiro y Diamantes",
    "desc": "Broquel de oro con diseño floral, zafiro central y diamantes circundantes.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1pYHmil9cR6w1zA6vafaARldJS8DgRhti&usp=drive_copy"
  },
  {
    "sku": "BRQ-008",
    "nombre": "Broquel Doble Piedra Rosa y Blanca",
    "desc": "Broquel de oro con doble piedra, circonia blanca y rosa, broche de rosca.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1f_HxN9vgTL4z-uFrPavenOOuHKqGh7j6&usp=drive_copy"
  },
  {
    "sku": "BRQ-009",
    "nombre": "Broquel Estrella Perla",
    "desc": "Broquel de oro con estrella de circonia y perla.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1zCAi-sVcozfchE1xoIhRntlBux4jz8n-&usp=drive_copy"
  },
  {
    "sku": "BRQ-010",
    "nombre": "Broquel Diseño Flores",
    "desc": "Broquel de oro con diseño floral de piedras blancas y rosas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1Cr87Lq0itdIyklTq8dKtX15bqE_Cc8j-&usp=drive_copy"
  },
  {
    "sku": "BRQ-011",
    "nombre": "Broquel Perla Oro",
    "desc": "Broquel de oro con perlas cultivadas redondas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=10QktLf81h6nKztcr2E7o2BC4dIJ04QdW&usp=drive_copy"
  },
  {
    "sku": "BRQ-012",
    "nombre": "Broquel Flor Zirconia 10K",
    "desc": "Broquel de oro 10K con diseño de flor de cuatro zirconias y broche de rosca.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1ALNNLcZezO3P6RPinI09qrNxM8tkkc2R&usp=drive_copy"
  },
  {
    "sku": "BRQ-013",
    "nombre": "Broquel Flor Zirconias Oro",
    "desc": "Broquel de oro con diseño floral y zirconias incrustadas, cierre de rosca.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1ULO3zzNbqmYo5ojOymCnx-6aeXeUDsaO&usp=drive_copy"
  },
  {
    "sku": "BRQ-014",
    "nombre": "Broquel Zirconia Redonda 10K",
    "desc": "Broqueles de oro 10K con zirconia redonda en engaste de cuatro puntas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1VZbUEN8AYBAqKozPE1B2uCxoTPGQZ_LI&usp=drive_copy"
  },
  {
    "sku": "BRQ-015",
    "nombre": "Broquel Piedra Redonda Oro",
    "desc": "Broquel de oro con piedra redonda engastada y broche de rosca.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1ZtarkZg4Jqs9sWURkKGYjrFlEUIC3Nue&usp=drive_copy"
  },
  {
    "sku": "BRQ-016",
    "nombre": "Broquel Cuadrado Piedra Negra Texturizado 10K",
    "desc": "Broqueles de oro 10K cuadrados con piedra negra central y bisel texturizado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=18W7eFFQ5VpXqsNr1uZYZZSrrw-2LfuSs&usp=drive_copy"
  },
  {
    "sku": "BRQ-017",
    "nombre": "Broquel Cuadrado Piedra 10K",
    "desc": "Broqueles de oro con piedras cuadradas en engaste de cuatro puntas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1BdnUkpwAUZlX8bTh875b5aUhwMxIxNiV&usp=drive_copy"
  },
  {
    "sku": "BRQ-018",
    "nombre": "Broquel Flor con Zirconia 10K",
    "desc": "Broquel de oro con diseño floral, zirconia central y broche de rosca.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1f_BrmSgfWHoC7JdjneeRlBdJ8m1iTskn&usp=drive_copy"
  },
  {
    "sku": "BRQ-019",
    "nombre": "Broquel Estrella Rayada 10K",
    "desc": "Broqueles de oro 10K con diseño de estrella rayada.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1bgmlJdW_ywUVRg3a1_DsKE7DIL3467oP&usp=drive_copy"
  },
  {
    "sku": "BRQ-020",
    "nombre": "Broquel Corazón con Piedra 10K",
    "desc": "Broqueles de oro 10K con diseño de corazón y piedra brillante central.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1ss6_K_fpx0qY06dkNHqCdpVBuxSYSVz1&usp=drive_copy"
  },
  {
    "sku": "BRQ-021",
    "nombre": "Broquel Corazón Rayado",
    "desc": "Broqueles de oro con forma de corazón y diseño rayado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1aHMGkUKcJW49oP8218DIQckxi4Sxa9nh&usp=drive_copy"
  },
  {
    "sku": "BRQ-022",
    "nombre": "Broquel Corazones Anidados",
    "desc": "Broqueles de oro con diseño calado de tres corazones anidados.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1wvcaXC7AqgVRN6GrXhozmcgDaVjbCA78&usp=drive_copy"
  },
  {
    "sku": "BRQ-023",
    "nombre": "Broquel Flor Rayada",
    "desc": "Broqueles de oro con diseño floral de cinco pétalos y acabado rayado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1Y-bLHuYErMSTuQdAYgKY3hHa_5cgGciY&usp=drive_copy"
  },
  {
    "sku": "BRQ-024",
    "nombre": "Broquel Corazón Calado con Piedra",
    "desc": "Broqueles de oro con diseño de corazón calado y una piedra central.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1LIBi4U2vAFSRiU84IOy677W8rzNpvp8i&usp=drive_copy"
  },
  {
    "sku": "BRQ-025",
    "nombre": "Broquel Diseño Corazones 10K",
    "desc": "Broqueles de oro con diseño de tres corazones: uno vertical y otro horizontal.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1OjXrMY6Fy89haVwDdu3UxC1uFOSccaT7&usp=drive_copy"
  },
  {
    "sku": "BRQ-026",
    "nombre": "Broquel Flor Radiante",
    "desc": "Broquel de oro con diseño floral de cinco pétalos y textura radiante.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=13-LYRjO6tCxY0lNHEmKYs4taUN7wiD_F&usp=drive_copy"
  },
  {
    "sku": "BRQ-027",
    "nombre": "Broquel Sol Rayado 10K",
    "desc": "Broqueles de oro 10K con diseño circular de rayos.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1akW2ecxURH6zFWpDI0fARIaz_AAAvoYk&usp=drive_copy"
  },
  {
    "sku": "BRQ-028",
    "nombre": "Broquel Corazón Rojo",
    "desc": "Broquel de oro con piedra roja en forma de corazón.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1_EWizdO7CBRXftL-ptyNaADk8eF2dPd3&usp=drive_copy"
  },
  {
    "sku": "BRQ-029",
    "nombre": "Broquel Cisne Dorado",
    "desc": "Broqueles de diseño en forma de cisne con acabado dorado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=13pPVHOinW9Mfs1FiC7bsTqwGCx3DaFvy&usp=drive_copy"
  },
  {
    "sku": "BRQ-030",
    "nombre": "Broquel Delfín Oro",
    "desc": "Broqueles de oro con diseño de delfín, acabado pulido.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1xj0jOluIHx41iWZk6B-K9ilb-GsiP3VL&usp=drive_copy"
  },
  {
    "sku": "BRQ-031",
    "nombre": "Broquel Búho Oro 10K",
    "desc": "Broqueles de oro 10K con diseño de búho y ojos de ónix negro.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1SUmpkGMcXP9dvgR7uyrTyzl72AB4oBgn&usp=drive_copy"
  },
  {
    "sku": "BRQ-032",
    "nombre": "Broquel Patita 10K",
    "desc": "Broqueles de oro con diseño de huella de patita.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1yTnhLpGP-GVUOQdCvh08jCsqp-dG_t_a&usp=drive_copy"
  },
  {
    "sku": "BRQ-033",
    "nombre": "Broquel Elefante Oro",
    "desc": "Broqueles de oro con diseño de elefante, acabado dorado y textura detallada.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1TsUHbVsiH96OTXhHbTG9pdCYeCswnqky&usp=drive_copy"
  },
  {
    "sku": "BRQ-034",
    "nombre": "Broquel Gatito Oro",
    "desc": "Broqueles de oro con diseño de gato, ideales para uso diario.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1l5-InT1F3y7k3H0n3WUVrxWg3cqU9rZB&usp=drive_copy"
  },
  {
    "sku": "BRQ-035",
    "nombre": "Broquel Árbol 10K",
    "desc": "Broqueles de oro con diseño de árbol calado, acabado pulido.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1d8Y2onnSeWSIpFdCF745TJ2tvr1xJ0VD&usp=drive_copy"
  },
  {
    "sku": "BRQ-036",
    "nombre": "Broquel Flor 10K",
    "desc": "Broquel de oro con diseño de flor y broche de rosca.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1kDE9QF4fRW6PI6ieOKF60t8lN5Dgq-Ou&usp=drive_copy"
  },
  {
    "sku": "BRQ-037",
    "nombre": "Broquel Rana 10K",
    "desc": "Broqueles de oro 10K con diseño de ranas, acabado pulido.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1-anlB-MYMb3VfJLR7tOddIpD6FWn0vnX&usp=drive_copy"
  },
  {
    "sku": "BRQ-038",
    "nombre": "Broquel Corona con Zirconias",
    "desc": "Par de broqueles dorados con diseño de corona y zirconias incrustadas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=10FSr5cEFLM7R8T-muYpw68nhDxZXQFl4&usp=drive_copy"
  },
  {
    "sku": "BRQ-039",
    "nombre": "Broquel Llave Corazón Zirconias",
    "desc": "Broquel de oro con diseño de llave en forma de corazón y zirconias.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1RmWXm5RSZdPaPPZWCyqg7cHuZ5BOBnTj&usp=drive_copy"
  },
  {
    "sku": "BRQ-040",
    "nombre": "Broquel Concha",
    "desc": "Broqueles de oro con diseño de concha marina, acabado pulido.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=16LoiBTrc2JK9xhx3BEEZTsOdQojs0cAr&usp=drive_copy"
  },
  {
    "sku": "BRQ-041",
    "nombre": "Broquel Corona Princesa 10K",
    "desc": "Broqueles de oro 10K con diseño de corona princesa y zirconias.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1rs6Sf6km2BAI0rXkBm4KUxPPcVb7XcCs&usp=drive_copy"
  },
  {
    "sku": "BRQ-042",
    "nombre": "Broquel Angelito con Zirconia",
    "desc": "Broqueles de oro con diseño de ángel, adornados con zirconias cúbicas brillantes.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1ipM0dqJiuSngstu0HZrAGgQXF-gXEywa&usp=drive_copy"
  },
  {
    "sku": "BRQ-043",
    "nombre": "Broquel Infinito Love",
    "desc": "Broquel de oro con diseño de infinito y la palabra 'love' calada.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1vMeJQAzkzrSV4nJp5MGhQ1g8hU_EzMWi&usp=drive_copy"
  },
  {
    "sku": "BRQ-044",
    "nombre": "Broquel Infinito con Piedras",
    "desc": "Broqueles de oro con diseño de infinito, adornados con pequeñas piedras.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1Yxqyu0xtqghEDeybLRutYpLTwZ4qUa3l&usp=drive_copy"
  },
  {
    "sku": "BRQ-045",
    "nombre": "Broquel Estrella de Mar",
    "desc": "Broqueles de oro con diseño de estrella marina texturizada.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1i4Kzm-5oJEmgXoDWqm3ISivgBeH5P-Pk&usp=drive_copy"
  },
  {
    "sku": "BRQ-046",
    "nombre": "Broquel Sol 10K",
    "desc": "Broquel de oro 10K con diseño de sol y broche de rosca.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1ED2ZuOyLij3zy-FnE4sNJbkSNFkn4WJa&usp=drive_copy"
  },
  {
    "sku": "BRQ-047",
    "nombre": "Broquel Coronas",
    "desc": "Par de broqueles de oro con diseño de corona, acabado pulido.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1lsKRN7TQSD3ZzsyZR-XZbrQ3m-mtLJzb&usp=drive_copy"
  },
  {
    "sku": "BRQ-048",
    "nombre": "Broquel Flor Rubí Oro",
    "desc": "Broqueles de oro con diseño floral y gema roja central engastada.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1JMQ_rmwp5Vwyi6VLOPt3N6rt61_uJ7SN&usp=drive_copy"
  },
  {
    "sku": "BRQ-049",
    "nombre": "Broquel Flor Zirconia",
    "desc": "Broquel de oro con zirconia central engastada en forma de flor.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1CSVucUo7iocGLT3pGFGaLeak66GcG1YZ&usp=drive_copy"
  },
  {
    "sku": "BRQ-050",
    "nombre": "Broquel Ala Oro",
    "desc": "Par de broqueles de oro con diseño estilizado en forma de ala.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1H3ohkXDzCCXSadfjTV5TJl79Kstj3xu2&usp=drive_copy"
  },
  {
    "sku": "BRQ-051",
    "nombre": "Broquel Zirconia Trenzado 10K",
    "desc": "Broquel de oro con zirconia redonda engastada en bisel trenzado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1x5G85pu3Wd_RbK817jUo3A8tQfrn_qjH&usp=drive_copy"
  },
  {
    "sku": "BRQ-052",
    "nombre": "Broquel Piedra Cuadrada Colgante",
    "desc": "Broquel de oro con piedra cuadrada colgante y detalle de circonia.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1iIQk9kJXv0a_DEOd4BuNhVJtAF2BtLRW&usp=drive_copy"
  },
  {
    "sku": "BRQ-053",
    "nombre": "Broquel Gota con Zirconia",
    "desc": "Broquel con zirconia y dije de gota pulida.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1lDc5lfp2i_PWLypFCQNDkIdBm-4zSqvu&usp=drive_copy"
  },
  {
    "sku": "BRQ-054",
    "nombre": "Broquel Gota Colgante",
    "desc": "Broquel de oro con piedra redonda y gota colgante.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=13gu1sU5WytOKezDwUEHUQPX3ef0OqeJ7&usp=drive_copy"
  },
  {
    "sku": "BRQ-055",
    "nombre": "Broquel Flecha con Zirconia",
    "desc": "Broquel de oro con zirconia y dije colgante de flecha.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1zG4DW1uQIaHNY9TOJRhvlORKXy0z4_8_&usp=drive_copy"
  },
  {
    "sku": "BRQ-056",
    "nombre": "Broquel Flor Zirconias Oro",
    "desc": "Broqueles de oro con zirconias cúbicas en diseño de flor colgante.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=19vffDxJNhycxqyAvfUyjfCoLEudLhC1v&usp=drive_copy"
  },
  {
    "sku": "BRQ-057",
    "nombre": "Broquel Diseño Pulpo",
    "desc": "Broquel de oro con gema y dije de pulpo colgante.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1vxUoc8w5BMzNyY2vuuPN-_kZmvyPllqc&usp=drive_copy"
  },
  {
    "sku": "BRQ-058",
    "nombre": "Broquel Dangle Gota Torcida",
    "desc": "Broquel con poste, piedra redonda, barra torcida y gota colgante.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1bf2r7a1P9noSdw2w7L-b15XwfIIphCc9&usp=drive_copy"
  },
  {
    "sku": "BRQ-059",
    "nombre": "Broquel Flor Zafiro",
    "desc": "Broqueles de oro con zafiro central y diamantes en diseño floral.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1TUN8eGze510dvqzaG8rh8DMxNfQnkmmS&usp=drive_copy"
  },
  {
    "sku": "BRQ-060",
    "nombre": "Broquel Virgen Guadalupe Zirconias",
    "desc": "Broquel de oro con figura de la Virgen de Guadalupe y orla de zirconias.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1ACrR_OfC-L2GgUtixTBV60qHXJCxIuF1&usp=drive_copy"
  },
  {
    "sku": "BRQ-061",
    "nombre": "Broquel Ángel Zirconia",
    "desc": "Broquel de oro con diseño de ángel, alas, halo y zirconias incrustadas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1o7pr-uhIc4ccQH_7qVoySX9kEbvfyFGo&usp=drive_copy"
  },
  {
    "sku": "BRQ-062",
    "nombre": "Broquel Cruces con Zirconia",
    "desc": "Broqueles de oro con diseño de cruces estilizadas y zirconias.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1OkKUjc7rarefyJG06pFIPgaaeeDJzFp6&usp=drive_copy"
  },
  {
    "sku": "BRQ-063",
    "nombre": "Broquel Flor Zirconias 10K",
    "desc": "Broquel de oro 10K con diseño de flor y seis zirconias incrustadas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1jLnC8daNjtQqHB2EUKv5C9UzBo9C9so0&usp=drive_copy"
  },
  {
    "sku": "BRQ-064",
    "nombre": "Broquel Barra 3 Piedras",
    "desc": "Broqueles de oro con tres piedras redondas engastadas en línea.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=13JXeLJY8N7MF-18wZ5Arj_c22WEmH1ul&usp=drive_copy"
  },
  {
    "sku": "BRQ-065",
    "nombre": "Broquel Trébol Piedra 10K",
    "desc": "Broqueles de oro con diseño de trébol y tres circonias cúbicas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1jvsg0BShTsf0uZQSzm6Eyk7qCm3JnQ_D&usp=drive_copy"
  },
  {
    "sku": "BRQ-066",
    "nombre": "Broquel Baguette Oro",
    "desc": "Broqueles de oro con gema rectangular engastada en bisel.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1Gbfut2mlzyqUWt5G8OH6v_EBF1Wakzpc&usp=drive_copy"
  },
  {
    "sku": "BRQ-067",
    "nombre": "Broquel Cluster Cuadrado",
    "desc": "Broqueles de oro con cuatro piedras blancas formando un cluster cuadrado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1I1fLL_MCLq1C71uB07HSgwt7i7TgyK40&usp=drive_copy"
  },
  {
    "sku": "BRQ-068",
    "nombre": "Broquel Línea Esmeralda",
    "desc": "Broquel de oro con tres esmeraldas talla redonda en línea.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1mDwI8gT4zDoB-PsfaZbBmApg8y_ZDoCH&usp=drive_copy"
  },
  {
    "sku": "BRQ-069",
    "nombre": "Broquel Ojo con Zirconia 10K",
    "desc": "Broqueles de oro con diseño de ojo y una zirconia central brillante.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1PCM-R8IlQ20EoivchscUD7AkgiI0_AKs&usp=drive_copy"
  },
  {
    "sku": "BRQ-070",
    "nombre": "Broquel Trío Zirconias",
    "desc": "Broquel de oro 10K con zirconia central blanca y dos laterales rosas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1psy-JPprYqoAbRCLYNR5VQUyhN28K8sw&usp=drive_copy"
  },
  {
    "sku": "BRQ-071",
    "nombre": "Broquel Barra Tres Piedras",
    "desc": "Broquel de oro con tres piedras redondas transparentes en diseño de barra.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1-wIEV9aW4qgESbByB4CFGBuCvElHVEKK&usp=drive_copy"
  },
  {
    "sku": "BRQ-072",
    "nombre": "Broquel Flor Calada con Zirconia",
    "desc": "Broqueles de oro con diseño de flor calada y zirconia central brillante.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1HvXiTbjo6Z40dywu3nCFpkQ2mwHzQCxh&usp=drive_copy"
  },
  {
    "sku": "BRQ-073",
    "nombre": "Broquel Hojas Esmeralda",
    "desc": "Broqueles de oro con tres piedras verdes talla marquesa en forma de hoja.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1KWSNNAUJlqYoo6KhPX72O8HX_wNMiyjy&usp=drive_copy"
  },
  {
    "sku": "BRQ-074",
    "nombre": "Broquel Corazones Anidados",
    "desc": "Broqueles de oro con diseño calado de tres corazones anidados.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1RvRu6DzmAUmAz-hZFGoyU3mB0DZDW35D&usp=drive_copy"
  },
  {
    "sku": "BRQ-075",
    "nombre": "Broquel Barra con Circonias",
    "desc": "Broquel de barra con múltiples circonias incrustadas y broche de seguridad.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1izWpJT5nm5kgsyAk2fv0aReA6Wwq0RsA&usp=drive_copy"
  },
  {
    "sku": "BRQ-076",
    "nombre": "Broquel Tres Piedras",
    "desc": "Broquel de oro con tres piedras blancas engastadas en línea.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1YWIV82uu5xObescFYR8D27FA3s6irioo&usp=drive_copy"
  },
  {
    "sku": "BRQ-077",
    "nombre": "Broquel Flor Zirconia Oro",
    "desc": "Broquel de oro con piedra de zirconia en forma de flor.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1TWyBYjgfxqKHD-fRr2y03PYYvbNYSMRr&usp=drive_copy"
  },
  {
    "sku": "BRQ-078",
    "nombre": "Broquel Corazón Colgante",
    "desc": "Broquel de oro con doble piedra transparente, una redonda y una corazón colgante.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1YejYcECBSvNc77oHV6Sw9MeMlA531ETk&usp=drive_copy"
  },
  {
    "sku": "BRQ-079",
    "nombre": "Broquel Sol y Luna",
    "desc": "Broqueles de oro con diseño de sol y luna.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1yjPKRkZSL6lPuBI8vdNJn3gYQb8UWL-I&usp=drive_copy"
  },
  {
    "sku": "BRQ-080",
    "nombre": "Broquel Tortuga Oro",
    "desc": "Broqueles de oro con diseño de tortuga, esmalte verde y zirconia.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1Nn0zNGhH5jOcIThFhCrHvReNW1FQd0QW&usp=drive_copy"
  },
  {
    "sku": "BRQ-081",
    "nombre": "Broquel Hexagonal Piedra",
    "desc": "Broquel de oro con piedra central en engaste hexagonal.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1nVbdu-Q3F9cYtslVCNSxUrTCgD9Nfrgd&usp=drive_copy"
  },
  {
    "sku": "BRQ-082",
    "nombre": "Broquel Corazón Hueco Oro",
    "desc": "Broqueles de oro con diseño de corazón hueco, acabado pulido y poste con broche de bola.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1rFHTHBPiKG5Mp58YQrrrLFaHu83pAXGu&usp=drive_copy"
  },
  {
    "sku": "BRQ-083",
    "nombre": "Broquel Flor con Zirconia",
    "desc": "Broqueles de oro con zirconia central en forma de flor.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1E3HWp_6qkFstCYimvrfkTgGX3I3XxwDD&usp=drive_copy"
  },
  {
    "sku": "BRQ-084",
    "nombre": "Broquel Flor Rosa 10K",
    "desc": "Broqueles de oro 10K con piedra rosa facetada y diseño floral.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1bpypxdxLV1RLeNmb2BTvQPLVIgymZDPJ&usp=drive_copy"
  },
  {
    "sku": "BRQ-085",
    "nombre": "Broquel Corazón 10K",
    "desc": "Broqueles de oro con diseño de corazón y broche de rosca.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1-mhXPwfpLa4zEMU7IDYr2jLSy5JCFxci&usp=drive_copy"
  },
  {
    "sku": "BRQ-086",
    "nombre": "Broquel Bola Diamantada 10K",
    "desc": "Broquel de oro 10K con bola diamantada y broche de presión.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1kxYSR_E2aL8_n8ntp21OZ_BLD3Fl7HAz&usp=drive_copy"
  },
  {
    "sku": "BRQ-087",
    "nombre": "Broquel Media Luna con Zirconias 10K",
    "desc": "Broquel de oro con diseño de media luna y zirconias engastadas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1WxIqrYxh_9jBo51mcM5oyDepOKNoxphl&usp=drive_copy"
  },
  {
    "sku": "BRQ-088",
    "nombre": "Broquel Corazón Piedra",
    "desc": "Broqueles de oro con corazón de piedra central y orilla texturizada.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1MskjucCJtcBXjo7EU5RG9nWKe1Y8pBI6&usp=drive_copy"
  },
  {
    "sku": "BRQ-089",
    "nombre": "Broquel Zirconia Cuadrada",
    "desc": "Broqueles de oro con zirconia cuadrada engastada, cierre de rosca.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1uAGSclwURlZ7rzDp0J5JpVQjJyfxp7H2&usp=drive_copy"
  },
  {
    "sku": "BRQ-090",
    "nombre": "Broquel Cuadrado con Piedra",
    "desc": "Par de broqueles con piedra cuadrada transparente en engaste sencillo.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1WU60DwvALDitvGUHHQOYD4I9kCOI5rSF&usp=drive_copy"
  },
  {
    "sku": "BRQ-091",
    "nombre": "Broquel Pera Zirconia",
    "desc": "Broquel de oro con zirconia corte pera, engaste de cuatro puntas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=13tjqVLVGl_VhZ1cz7Q2_YT0it6n3A1q6&usp=drive_copy"
  },
  {
    "sku": "BRQ-092",
    "nombre": "Broquel Marquise Amatista Oro",
    "desc": "Broquel de oro con piedra marquise amatista en engaste de cuatro puntas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1MJ0m4G1J5MWT_pIRc-Up3i4ajMhAIlBN&usp=drive_copy"
  },
  {
    "sku": "BRQ-093",
    "nombre": "Broquel Pera con Piedra",
    "desc": "Broqueles de oro con piedra en forma de pera y bisel texturizado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=182bk3bYgjdR4R8C7Y7oQ-gga5vLQrJAD&usp=drive_copy"
  },
  {
    "sku": "BRQ-094",
    "nombre": "Broquel Corazón y Pera Oro",
    "desc": "Broqueles de oro con zirconias facetadas en forma de corazón y pera.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=14yP_CyX8qRDqgR0RNhSlIDA4Qrto375j&usp=drive_copy"
  },
  {
    "sku": "BRQ-095",
    "nombre": "Broquel Cruz con Piedras",
    "desc": "Broqueles de oro con diseño de cruz, adornados con múltiples piedras.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1eWleq1Pt1Xbdk0MS18lyx45qYpIeqxrl&usp=drive_copy"
  },
  {
    "sku": "BRQ-096",
    "nombre": "Broquel Virgen Guadalupe con Piedras",
    "desc": "Broqueles ovalados dorados con relieve de la Virgen de Guadalupe y orla de circonias.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=12ERXf8hqw2wTdeztDx6xFK6j5lyK2aml&usp=drive_copy"
  },
  {
    "sku": "BRQ-097",
    "nombre": "Broquel Doble Piedra",
    "desc": "Broquel de oro con dos zirconias redondas engastadas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1Y9zOz0aZCkasQFuK_MXeZ8vKcqvG0nEB&usp=drive_copy"
  },
  {
    "sku": "BRQ-098",
    "nombre": "Broquel Circonia Redonda 10K",
    "desc": "Broquel de oro con circonia redonda engastada en cuatro garras.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1c4Up5u91Rngx3c4PQbGsyjYsITW7YBI3&usp=drive_copy"
  },
  {
    "sku": "BRQ-099",
    "nombre": "Broquel Solitario Redondo",
    "desc": "Par de broqueles con gema redonda brillante en engaste de cuatro puntas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1a7miul2TF8b8RrFWJvYHzv5x72vlRCLb&usp=drive_copy"
  },
  {
    "sku": "BRQ-100",
    "nombre": "Broquel Piedra Fina",
    "desc": "Broqueles con piedras facetadas en montura de oro.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1WpheNTd3JtJfGFWxWzkSO1T2Qwra_Y3-&usp=drive_copy"
  },
  {
    "sku": "BRQ-101",
    "nombre": "Broquel Brillante Redondo",
    "desc": "Broqueles con piedra brillante redonda engastada en un diseño de cuatro garras.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1cks2F-X7BG-k4Qc34p-Fkl0uvdy3274Q&usp=drive_copy"
  },
  {
    "sku": "BRQ-102",
    "nombre": "Broquel Oro Piedra Negra",
    "desc": "Broqueles de oro con piedra negra facetada engastada en cuatro garras.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1nKIJZDXteHuBLFySOSUf1iPBt9JdKgiT&usp=drive_copy"
  },
  {
    "sku": "BRQ-103",
    "nombre": "Broquel Circonia Rosa",
    "desc": "Broquel tipo stud con circonia rosa redonda en engaste de oro.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1eXILFUxxsO2BkvdZ3gfhJECNPQC6Kg4X&usp=drive_copy"
  },
  {
    "sku": "BRQ-104",
    "nombre": "Broquel Piedra Envolvente 10K",
    "desc": "Broqueles de oro con piedra redonda central y montura de diseño envolvente.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1qpl-q1wJBObbKo9EgPXLtWfdwGSPmM5R&usp=drive_copy"
  },
  {
    "sku": "BRQ-105",
    "nombre": "Broquel Piedra Redonda Oro",
    "desc": "Broquel de oro con piedra redonda facetada en engaste de bisel.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1jLY5DBf1Zoz_uhnjLRqQ8WszV7zLv2nE&usp=drive_copy"
  },
  {
    "sku": "BRQ-106",
    "nombre": "Broquel Solitario con Piedra 10K",
    "desc": "Broqueles de oro amarillo 10K con piedra central redonda engastada.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1f0eH7SCTrP06WQzckPyfXdyw-HSlec3N&usp=drive_copy"
  },
  {
    "sku": "BRQ-107",
    "nombre": "Broquel Piedra Cuerda 10K",
    "desc": "Broquel de oro con piedra central y bisel de cuerda.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=18J9jKzVYsUP9O74jqNXKrk3iLHfpCj9z&usp=drive_copy"
  },
  {
    "sku": "BRQ-108",
    "nombre": "Broquel Piedra Rosa Borde Trenzado",
    "desc": "Broquel de oro con gema central rosa y borde trenzado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1HqHZVRj69Qmh95or3Gdvd63zLpecCrU0&usp=drive_copy"
  },
  {
    "sku": "BRQ-109",
    "nombre": "Broquel Piedra Orilla Torzal",
    "desc": "Broqueles de oro con piedra central redonda y orilla con diseño torzal.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1PAU3_WreMVxNNqJ6F-mbFu7tK-7VnfIE&usp=drive_copy"
  },
  {
    "sku": "BRQ-110",
    "nombre": "Broquel Redondo Piedra Borde Trenzado",
    "desc": "Broqueles redondos con piedra central facetada y bisel de oro con diseño trenzado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1pWoS4WLxfwH3EMCkS2qJ3xFqxzexwyn_&usp=drive_copy"
  },
  {
    "sku": "BRQ-111",
    "nombre": "Broquel Gota con Brillante",
    "desc": "Broquel de oro con piedra redonda y gota de circonia engastadas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1wmz7_8PKFWFMOM5f0pkX9b9lH2WhvPTO&usp=drive_copy"
  },
  {
    "sku": "BRQ-112",
    "nombre": "Broquel Estrella Diamante Natural",
    "desc": "Broqueles de oro con diseño de estrella y diamante natural en bruto.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1VsilbDYIYKJmV-4-sBY6wkfJ2pFtFkIP&usp=drive_copy"
  },
  {
    "sku": "BRQ-113",
    "nombre": "Broquel Flor con Piedra",
    "desc": "Par de broqueles con diseño floral en oro y piedra central.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1GyfXiyL2exguFtHGBvAybKYjMjmQjni2&usp=drive_copy"
  },
  {
    "sku": "BRQ-114",
    "nombre": "Broquel Flor Estriada Oro",
    "desc": "Broqueles de oro con piedra central y diseño floral estriado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1IQlDIoOzJ-gYdrJm8hh-0Dummf3LnVt8&usp=drive_copy"
  },
  {
    "sku": "BRQ-115",
    "nombre": "Broquel Disco Liso",
    "desc": "Broqueles de oro con forma de disco liso y acabado pulido.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1ChvRxJUGfZrnl9ePBOBw9zQmA0wOubB0&usp=drive_copy"
  },
  {
    "sku": "BRQ-116",
    "nombre": "Broquel Cuadrado Piedra Verde",
    "desc": "Broqueles cuadrados de oro con piedra verde central y orilla texturizada.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1hdy50UEUaN-W6QWzq2khIQv9B6I465lp&usp=drive_copy"
  },
  {
    "sku": "BRQ-117",
    "nombre": "Broquel Estrella Colgante",
    "desc": "Broquel de diseño con estrella de circonia y dos colgantes con piedras.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1Y_kL4IfMj6l9-CiYZs3JSboXgHnfsBnO&usp=drive_copy"
  },
  {
    "sku": "BRQ-118",
    "nombre": "Broquel Cuadrado Piedra Rosa",
    "desc": "Broqueles cuadrados de oro con piedra central rosa y orilla texturizada.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1YcpJNIHClO-nblWvY1KMkUr3nAtmgtyk&usp=drive_copy"
  },
  {
    "sku": "BRQ-119",
    "nombre": "Broquel Cuadrado Facetado con Piedra",
    "desc": "Broqueles de oro amarillo con piedra central cuadrada y borde facetado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1uzCrh9X05ukdmlPj4-3uJk2c3zY3heGS&usp=drive_copy"
  },
  {
    "sku": "BRQ-120",
    "nombre": "Broquel Cuadrado Piedra Sol 10K",
    "desc": "Broqueles de oro 10K con piedra cuadrada central y marco de diseño radiante.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1D21diQfWjXvNpD1ESydueJgrrxHoUdWP&usp=drive_copy"
  },
  {
    "sku": "BRQ-121",
    "nombre": "Broquel Zirconia Cuadrada Oro",
    "desc": "Broqueles de oro con zirconia cuadrada engastada en bisel decorado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1YOTNQ1GHWm47alGU1HUDzsIHqQysfqoy&usp=drive_copy"
  },
  {
    "sku": "BRQ-122",
    "nombre": "Broquel Redondo Oro con Piedra Facetada",
    "desc": "Broqueles redondos de oro con piedra central facetada en engaste de bisel.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1Dk4GFhPmnowFD8XVh63Nn3r8-taM3ZHB&usp=drive_copy"
  },
  {
    "sku": "BRQ-123",
    "nombre": "Broquel Sol",
    "desc": "Broqueles de oro con diseño de sol facetado que maximiza el brillo.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1cawYbEEWsbhChk46UurgAtIBed8acV-y&usp=drive_copy"
  },
  {
    "sku": "BRQ-124",
    "nombre": "Broquel Bola Oro",
    "desc": "Broqueles de oro con forma de esfera lisa.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=19-0TRuobHxHJDzLn457OTE1Q3cQe3JY3&usp=drive_copy"
  },
  {
    "sku": "BRQ-125",
    "nombre": "Broquel Bola Lisa 10K",
    "desc": "Broqueles de oro 10K en forma de esfera lisa y pulida.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1OMqHc3PEX5ilD-WNvbE6f9pQusEjXBrU&usp=drive_copy"
  },
  {
    "sku": "BRQ-126",
    "nombre": "Broquel Oro Piedras Bicolor Redondas",
    "desc": "Broqueles de oro con piedras redondas facetadas en bisel, una negra y una morada/azul.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1Bj6IoyhlNsUKE95nEDlFoZnGFY19FcOr&usp=drive_copy"
  },
  {
    "sku": "BRQ-127",
    "nombre": "Broquel Cuadrado Morado",
    "desc": "Broqueles con piedra cuadrada morada engastada en cuatro puntas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1Dk3w0_9nvg_3j1TcNBCSAKo1svRJetMU&usp=drive_copy"
  },
  {
    "sku": "BRQ-128",
    "nombre": "Broquel Piedra Cuadrada",
    "desc": "Broquel con piedra cuadrada engastada con cuatro puntas en metal dorado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=14wDxTmYpCohcCzLqVHJeLVDE2cYQEX1f&usp=drive_copy"
  },
  {
    "sku": "BRQ-129",
    "nombre": "Broquel Corazón Rojo Estriado",
    "desc": "Broqueles de oro con gema roja facetada en forma de corazón y borde estriado.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1XbqVzL118psmxk8d_HiQmvP--H6YEACc&usp=drive_copy"
  },
  {
    "sku": "BRQ-130",
    "nombre": "Broquel Piedra Rosa",
    "desc": "Broquel con piedra rosa redonda en engaste de cuatro puntas.",
    "kilate": "10K",
    "precio": "",
    "foto": "https://drive.google.com/open?id=1wiXI4lELbqR4jGb-E5bsyki6tSsHB09A&usp=drive_copy"
  }
],
  unicas: [
    { sku:'PU-001', nombre:'Pinocho adiamantado', desc:'Figurita de pinocho con su traje cubierto de diamantes de colores', peso:'15g', kilate:'', precio:'$80,000', foto:'https://drive.google.com/file/d/1-by4IBdWjo4yQgOaEaUBellsom0vitRw/view?usp=drive_link' },
    { sku:'PU-002', nombre:'Cruz adiamantada', desc:'Cruz de oro repleta de diamantes', peso:'20g', kilate:'', precio:'$150,000', foto:'https://drive.google.com/file/d/1PAbPpg8ml22A9lZkymo9Ira9xgVt1olM/view?usp=drive_link' },
    { sku:'PU-003', nombre:'$20 de oro', desc:'Moneda de oro méxicana de 20 pesos antigua', peso:'20g', kilate:'', precio:'$34,000', foto:'https://drive.google.com/file/d/1nDNbuX87hWi99pS21IsBy-JxtVO0QUae/view?usp=sharing' },
    { sku:'PU-004', nombre:'Trozo de oro', desc:'Trozo de oro puro', peso:'20g', kilate:'', precio:'$1,200', foto:'https://drive.google.com/file/d/1LR44AwkYUrywoPUhrRbZTOuou9h0Jrog/view?usp=sharing' },
  ]
};

Object.values(CATALOG).forEach(arr =>
  arr.forEach(p => { if(p.foto) p.foto = driveToImg(p.foto); })
);
