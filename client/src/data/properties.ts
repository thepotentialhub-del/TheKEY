import img1 from '@assets/generated_images/modern_luxury_house_exterior_with_glass_facade.png';
import img2 from '@assets/generated_images/luxury_apartment_interior_living_room.png';
import img3 from '@assets/generated_images/traditional_colombian_coffee_farm_house_estate.png';
// Reusing images for demo purposes to fill the grid
const img4 = img1;
const img5 = img2;
const img6 = img3;
const img7 = img1;
const img8 = img2;

export interface Property {
  id: number;
  title: string;
  description: string;
  operation: 'Venta' | 'Arriendo';
  type: 'Casa' | 'Apartamento' | 'Finca' | 'Lote' | 'Local';
  city: string;
  neighborhood: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  tags: string[];
  image: string;
  images: string[];
  featured: boolean;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Casa de Lujo en Laureles",
    description: "Espectacular casa moderna con acabados de lujo, piscina privada y vista panorámica a la ciudad. Diseñada para el confort y la exclusividad.",
    operation: "Venta",
    type: "Casa",
    city: "Armenia",
    neighborhood: "Laureles",
    price: 1250000000,
    area: 350,
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    tags: ["Piscina", "Domótica", "Vista Panorámica", "Conjunto Cerrado"],
    image: img1,
    images: [img1, img2, img3],
    featured: true
  },
  {
    id: 2,
    title: "Apartamento Penthouse",
    description: "Penthouse dúplex con terraza privada, jacuzzi y la mejor vista de la Avenida Centenario. Espacios amplios e iluminados.",
    operation: "Venta",
    type: "Apartamento",
    city: "Armenia",
    neighborhood: "Avenida Centenario",
    price: 850000000,
    area: 210,
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    tags: ["Terraza", "Jacuzzi", "Vista", "Ascensor Privado"],
    image: img2,
    images: [img2, img1, img3],
    featured: true
  },
  {
    id: 3,
    title: "Finca Cafetera Tradicional",
    description: "Auténtica finca quindiana remodelada, rodeada de cafetales y plataneras. Ideal para turismo o vivienda campestre.",
    operation: "Venta",
    type: "Finca",
    city: "Circasia",
    neighborhood: "Vereda La Cristalina",
    price: 1800000000,
    area: 5000,
    bedrooms: 6,
    bathrooms: 6,
    parking: 10,
    tags: ["Campestre", "Turismo", "Árboles Frutales", "Agua Propia"],
    image: img3,
    images: [img3, img1, img2],
    featured: true
  },
  {
    id: 4,
    title: "Apartamento Moderno Norte",
    description: "Apartamento para estrenar en el sector más exclusivo del norte. Zonas sociales completas y acabados importados.",
    operation: "Arriendo",
    type: "Apartamento",
    city: "Armenia",
    neighborhood: "La Castellana",
    price: 2500000,
    area: 95,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    tags: ["Estrenar", "Gimnasio", "Piscina", "Vigilancia 24/7"],
    image: img5, // reusing img2
    images: [img2, img1],
    featured: false
  },
  {
    id: 5,
    title: "Casa Campestre El Caimo",
    description: "Tranquilidad absoluta a solo 15 minutos de Armenia. Casa campestre de un solo nivel con amplios jardines.",
    operation: "Venta",
    type: "Casa",
    city: "Armenia",
    neighborhood: "El Caimo",
    price: 980000000,
    area: 280,
    bedrooms: 3,
    bathrooms: 3,
    parking: 4,
    tags: ["Campestre", "Jardín", "Un solo nivel", "Seguridad"],
    image: img4, // reusing img1
    images: [img1, img3],
    featured: false
  },
  {
    id: 6,
    title: "Finca de Recreo Tebaida",
    description: "Finca vacacional cerca al aeropuerto. Piscina, kiosco y casa de huéspedes. Perfecta para renta corta.",
    operation: "Venta",
    type: "Finca",
    city: "La Tebaida",
    neighborhood: "Vía al Valle",
    price: 1500000000,
    area: 3200,
    bedrooms: 5,
    bathrooms: 5,
    parking: 6,
    tags: ["Piscina", "Turismo", "Kiosco", "Rentable"],
    image: img6, // reusing img3
    images: [img3, img2],
    featured: true
  },
  {
    id: 7,
    title: "Apartamento Loft Centro",
    description: "Loft industrial en edificio restaurado del centro. Techos altos y diseño vanguardista.",
    operation: "Arriendo",
    type: "Apartamento",
    city: "Armenia",
    neighborhood: "Centro",
    price: 1800000,
    area: 70,
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    tags: ["Loft", "Industrial", "Céntrico", "Diseño"],
    image: img8, // reusing img2
    images: [img2, img1],
    featured: false
  },
  {
    id: 8,
    title: "Casa Quinta Calarcá",
    description: "Espaciosa casa quinta con árboles frutales y clima cálido. Ideal para familias grandes.",
    operation: "Venta",
    type: "Casa",
    city: "Calarcá",
    neighborhood: "Vereda Chagualá",
    price: 650000000,
    area: 1500,
    bedrooms: 4,
    bathrooms: 3,
    parking: 5,
    tags: ["Clima Cálido", "Frutales", "Amplia", "Familiar"],
    image: img7, // reusing img1
    images: [img1, img3],
    featured: false
  }
];
