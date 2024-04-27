"use server";

import prisma from "@/db/db";
import { z } from "zod";
import fs from "fs/promises";
import { redirect } from "next/navigation";

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/"),
);

const addSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.coerce.number().int().min(1),
  file: fileSchema.refine((file) => file.size > 0, "Required"),
  image: imageSchema.refine((file) => file.size > 0, "Required"),
});

export async function addProduct(prevState: unknown, formData: FormData) {
  const results = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (results.success === false) {
    return results.error.formErrors.fieldErrors;
  }

  const data = results.data;

  await fs.mkdir("products", { recursive: true });
  const filePath = `products/${crypto.randomUUID()}-${data.file.name}`;
  await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()));

  await fs.mkdir("public/products", { recursive: true });
  const imagePath = `public/products/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(imagePath, Buffer.from(await data.image.arrayBuffer()));

  await prisma.product.create({
    data: {
      isAvailableForPurchase: false,
      name: data.name,
      description: data.description,
      priceInCents: data.price,
      filePath: filePath,
      imagePath: imagePath,
    },
  });

  redirect("/admin/products");
}

export async function toggleProductAvailability(
  id: string,
  isAvailableForPurchase: boolean,
) {
  await prisma.product.update({
    where: { id },
    data: { isAvailableForPurchase },
  });
}
