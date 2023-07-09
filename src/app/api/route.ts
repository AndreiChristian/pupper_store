// import prisma from "@/lib/prisma";
// import { NextResponse } from "next/server";

// const categories: { name: string }[] = [
//   { name: "Cubist" },
//   { name: "Cyberpunk" },
//   { name: "Majestic" },
//   { name: "Medieval" },
//   { name: "Modern" },
//   { name: "Neon" },
//   { name: "Stars" },
//   { name: "Cubist" },
// ];

// const breeds: { name: string }[] = [
//   { name: "Australian" },
//   { name: "Beagle" },
//   { name: "Berna" },
//   { name: "French" },
//   { name: "German" },
//   { name: "Golden" },
//   { name: "Husky" },
//   { name: "Samoyed" },
// ];

// const dogs: {
//   name: string;
//   description: string;
//   price: number;
//   breedId: number;
//   categoryId: number;
// }[] = [
//   {
//     name: "Pixel Pooch",
//     description:
//       "A charming cubist interpretation of the beloved Australian breed.",
//     price: 55.23,
//     breedId: 1,
//     categoryId: 1,
//   },
//   {
//     name: "Abstract Ally",
//     description: "A beagle like no other, styled in unique cubist forms.",
//     price: 43.75,
//     breedId: 2,
//     categoryId: 1,
//   },
//   {
//     name: "Geometric Gentleman",
//     description: "A cubist tribute to the majestic Berna breed.",
//     price: 70.61,
//     breedId: 3,
//     categoryId: 1,
//   },
//   {
//     name: "Fractured Frenchie",
//     description: "A French bulldog captured in striking cubist details.",
//     price: 66.17,
//     breedId: 4,
//     categoryId: 1,
//   },
//   {
//     name: "Polygon Pup",
//     description: "A German shepherd, abstracted into intriguing cubist shapes.",
//     price: 72.83,
//     breedId: 5,
//     categoryId: 1,
//   },
//   {
//     name: "Prismatic Paws",
//     description: "The golden retriever, envisioned through a cubist lens.",
//     price: 89.59,
//     breedId: 6,
//     categoryId: 1,
//   },
//   {
//     name: "Faceted Furry",
//     description: "A husky seen through the radical transformation of cubism.",
//     price: 78.45,
//     breedId: 7,
//     categoryId: 1,
//   },
//   {
//     name: "Shattered Snow",
//     description:
//       "A samoyed painted in splintered light and angular shapes of cubism.",
//     price: 92.27,
//     breedId: 8,
//     categoryId: 1,
//   },

//   {
//     name: "Neon Knight",
//     description:
//       "An Australian breed dog with a touch of a cyberpunk neon glow.",
//     price: 62.45,
//     breedId: 1,
//     categoryId: 2,
//   },
//   {
//     name: "Retro Rover",
//     description:
//       "The beagle like you've never seen before, imbued with the essence of a dystopian future.",
//     price: 48.93,
//     breedId: 2,
//     categoryId: 2,
//   },
//   {
//     name: "Binary Berna",
//     description:
//       "This Berna breed dog is decked out in retrofuturistic cyberpunk aesthetics.",
//     price: 74.21,
//     breedId: 3,
//     categoryId: 2,
//   },
//   {
//     name: "Futuristic Frenchie",
//     description: "A French bulldog drenched in a deep cyberpunk narrative.",
//     price: 57.76,
//     breedId: 4,
//     categoryId: 2,
//   },
//   {
//     name: "Glowing Guardian",
//     description:
//       "This German shepherd is ready to protect you in a world where high-tech meets low life.",
//     price: 81.34,
//     breedId: 5,
//     categoryId: 2,
//   },
//   {
//     name: "Holographic Hound",
//     description:
//       "The golden retriever shines in the neon lights of the cyberpunk age.",
//     price: 86.98,
//     breedId: 6,
//     categoryId: 2,
//   },
//   {
//     name: "Digital Dasher",
//     description:
//       "A husky that's ready to lead the pack in the streets of a cyberpunk city.",
//     price: 73.51,
//     breedId: 7,
//     categoryId: 2,
//   },
//   {
//     name: "Pixelated Purity",
//     description:
//       "The samoyed, maintaining its purity even in a world submerged in cybernetics.",
//     price: 88.2,
//     breedId: 8,
//     categoryId: 2,
//   },

//   {
//     name: "Regal Roo",
//     description: "The majestic Australian breed, truly a sight to behold.",
//     price: 64.3,
//     breedId: 1,
//     categoryId: 3,
//   },
//   {
//     name: "Royal Rambler",
//     description: "A beagle of unparalleled beauty, exuding majesty and grace.",
//     price: 53.84,
//     breedId: 2,
//     categoryId: 3,
//   },
//   {
//     name: "Noble Navigator",
//     description: "The Berna breed, celebrated in all its majestic glory.",
//     price: 76.05,
//     breedId: 3,
//     categoryId: 3,
//   },
//   {
//     name: "Sovereign Strider",
//     description: "The French bulldog, capturing the essence of majesty.",
//     price: 59.26,
//     breedId: 4,
//     categoryId: 3,
//   },
//   {
//     name: "Gallant Guardian",
//     description:
//       "The German shepherd, a majestic presence and loyal protector.",
//     price: 83.67,
//     breedId: 5,
//     categoryId: 3,
//   },
//   {
//     name: "Imperial Illuminator",
//     description:
//       "The golden retriever, the embodiment of majesty and gentleness.",
//     price: 88.67,
//     breedId: 6,
//     categoryId: 3,
//   },
//   {
//     name: "Dignified Dasher",
//     description: "The husky, its majestic stride is a sight to behold.",
//     price: 75.88,
//     breedId: 7,
//     categoryId: 3,
//   },
//   {
//     name: "Prestigious Purity",
//     description: "The samoyed, a majestic breed that's pure and bright.",
//     price: 90.76,
//     breedId: 8,
//     categoryId: 3,
//   },
//   {
//     name: "Digital Dasher",
//     description:
//       "A husky that's ready to lead the pack in the streets of a cyberpunk city.",
//     price: 73.51,
//     breedId: 7,
//     categoryId: 2,
//   },
//   {
//     name: "Pixelated Purity",
//     description:
//       "The samoyed, maintaining its purity even in a world submerged in cybernetics.",
//     price: 88.2,
//     breedId: 8,
//     categoryId: 2,
//   },

//   {
//     name: "Knight's K-9",
//     description:
//       "An Australian breed that would have been the pride of any medieval knight.",
//     price: 66.72,
//     breedId: 1,
//     categoryId: 4,
//   },
//   {
//     name: "Bard's Beagle",
//     description:
//       "A beagle that echoes the tales of troubadours from the medieval ages.",
//     price: 45.89,
//     breedId: 2,
//     categoryId: 4,
//   },
//   {
//     name: "Berna Baron",
//     description:
//       "A Berna breed dog, styled with the noble flair of the medieval ages.",
//     price: 78.5,
//     breedId: 3,
//     categoryId: 4,
//   },
//   {
//     name: "Feudal Frenchie",
//     description:
//       "This French bulldog could have been a loyal companion to a medieval lord.",
//     price: 60.85,
//     breedId: 4,
//     categoryId: 4,
//   },
//   {
//     name: "Guard of the Gate",
//     description:
//       "A German shepherd suited to guard the gates of any medieval castle.",
//     price: 72.37,
//     breedId: 5,
//     categoryId: 4,
//   },
//   {
//     name: "Heraldic Hound",
//     description:
//       "The golden retriever, bearing the majesty and nobility of a heraldic symbol.",
//     price: 80.22,
//     breedId: 6,
//     categoryId: 4,
//   },
//   {
//     name: "Husky Herald",
//     description: "A husky that could be the herald of a medieval king.",
//     price: 67.9,
//     breedId: 7,
//     categoryId: 4,
//   },
//   {
//     name: "Samoyed Serf",
//     description:
//       "A samoyed that shines with the rustic charm of the medieval peasantry.",
//     price: 74.6,
//     breedId: 8,
//     categoryId: 4,
//   },
//   {
//     name: "Urban Aussie",
//     description:
//       "An Australian breed that fits perfectly in the modern cityscape.",
//     price: 63.5,
//     breedId: 1,
//     categoryId: 5,
//   },
//   {
//     name: "Beagle in the Borough",
//     description: "A beagle, suited to the hustle and bustle of modern life.",
//     price: 51.92,
//     breedId: 2,
//     categoryId: 5,
//   },
//   {
//     name: "Berna Boulevard",
//     description:
//       "This Berna breed has a style that's as modern as the city boulevards.",
//     price: 75.2,
//     breedId: 3,
//     categoryId: 5,
//   },
//   {
//     name: "Frenchie Fusion",
//     description:
//       "A French bulldog that brings the charm of the old into the aesthetics of the new.",
//     price: 56.83,
//     breedId: 4,
//     categoryId: 5,
//   },
//   {
//     name: "German in the Grid",
//     description:
//       "This German shepherd embodies the rhythm and pulse of modern city life.",
//     price: 79.01,
//     breedId: 5,
//     categoryId: 5,
//   },
//   {
//     name: "Golden in the Grit",
//     description:
//       "The golden retriever, a warm and friendly presence in the modern world.",
//     price: 84.76,
//     breedId: 6,
//     categoryId: 5,
//   },
//   {
//     name: "Husky in the Hub",
//     description: "A husky that's right at home in the heart of a modern city.",
//     price: 70.67,
//     breedId: 7,
//     categoryId: 5,
//   },
//   {
//     name: "Samoyed in the Skyline",
//     description:
//       "The samoyed, standing tall and bright against the modern skyline.",
//     price: 88.25,
//     breedId: 8,
//     categoryId: 5,
//   },
//   {
//     name: "Neon Nomad",
//     description:
//       "An Australian breed illuminated by the vibrant neon lights of the city.",
//     price: 67.9,
//     breedId: 1,
//     categoryId: 6,
//   },
//   {
//     name: "Glowing Gait",
//     description:
//       "A beagle highlighted by neon, lighting up every step it takes.",
//     price: 54.28,
//     breedId: 2,
//     categoryId: 6,
//   },
//   {
//     name: "Berna Beacon",
//     description: "This Berna breed shines as a beacon in the neon night.",
//     price: 77.6,
//     breedId: 3,
//     categoryId: 6,
//   },
//   {
//     name: "Frenchie Flare",
//     description:
//       "A French bulldog that flares up the night with its neon charm.",
//     price: 60.82,
//     breedId: 4,
//     categoryId: 6,
//   },
//   {
//     name: "Radiant Rover",
//     description:
//       "This German shepherd radiates an aura as captivating as neon lights.",
//     price: 85.43,
//     breedId: 5,
//     categoryId: 6,
//   },
//   {
//     name: "Golden Glow",
//     description: "The golden retriever, glowing with neon warmth.",
//     price: 89.62,
//     breedId: 6,
//     categoryId: 6,
//   },
//   {
//     name: "Husky Highlight",
//     description: "A husky highlighted by the captivating allure of neon.",
//     price: 76.84,
//     breedId: 7,
//     categoryId: 6,
//   },
//   {
//     name: "Samoyed Sparkle",
//     description:
//       "The samoyed sparkles in the dazzling neon light, mesmerizing all who see it.",
//     price: 92.32,
//     breedId: 8,
//     categoryId: 6,
//   },
//   {
//     name: "Stellar Shepherd",
//     description:
//       "An Australian breed that bears the splendor of a starlit sky.",
//     price: 65.34,
//     breedId: 1,
//     categoryId: 7,
//   },
//   {
//     name: "Galactic Guide",
//     description:
//       "A beagle bearing the charm and mystery of a galaxy full of stars.",
//     price: 52.89,
//     breedId: 2,
//     categoryId: 7,
//   },
//   {
//     name: "Berna of the Big Dipper",
//     description:
//       "This Berna breed carries the grandeur of the celestial constellations.",
//     price: 79.43,
//     breedId: 3,
//     categoryId: 7,
//   },
//   {
//     name: "Frenchie's Constellation",
//     description:
//       "A French bulldog that evokes the awe-inspiring beauty of a starry constellation.",
//     price: 62.22,
//     breedId: 4,
//     categoryId: 7,
//   },
//   {
//     name: "Orion's Guardian",
//     description:
//       "This German shepherd echoes the brilliance of Orion, the hunter in the night sky.",
//     price: 86.99,
//     breedId: 5,
//     categoryId: 7,
//   },
//   {
//     name: "Golden Galaxy",
//     description:
//       "The golden retriever, bearing the shimmering beauty of a far-off galaxy.",
//     price: 90.67,
//     breedId: 6,
//     categoryId: 7,
//   },
//   {
//     name: "Husky's Milky Way",
//     description: "A husky that's as striking and mesmerizing as the Milky Way.",
//     price: 77.48,
//     breedId: 7,
//     categoryId: 7,
//   },
//   {
//     name: "Samoyed Supernova",
//     description: "The samoyed shines with the dazzling light of a supernova.",
//     price: 93.1,
//     breedId: 8,
//     categoryId: 7,
//   },
// ];

// export async function GET() {
//   for (const c of dogs) {
//     const category = await prisma.dog.create({
//       data: {
//         ...c,
//       },
//     });
//     console.log({ ok: "ok", ...category });
//   }

//   const pdogs = await prisma.dog.findMany();

//   console.table(pdogs);

//   return NextResponse.json({ ok: "ok" });
// }
