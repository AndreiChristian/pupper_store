import Card from "@/components/Card";
import prisma from "@/lib/prisma";
import Link from "next/link";

interface Dog {
  id: number;
  name: string;
  description: string;
  price: number;
  breedId: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}

export default async function DogsIndex() {
  const dogs = await prisma.dog.findMany();

  return (
    <div className="flex mt-10 mb-10 flex-row flex-wrap justify-center align-middle gap-4 ">
      {dogs.map((dog) => {
        return (
          <Card key={dog.id} content={dog.description} title={dog.name}></Card>
        );
      })}
    </div>
  );
}
