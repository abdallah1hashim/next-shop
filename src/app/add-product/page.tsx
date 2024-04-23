import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Add Product - Next-Shop",
};

async function addProduct(formData: FormData) {
  "use server";
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imgUrl = formData.get("imgUrl")?.toString();
  const price = Number(formData.get("price")) || 0;

  if (!name || !description || !imgUrl || !price) {
    throw Error("missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imgUrl, price },
  });
  redirect("/");
}

function AddProductPage() {
  return (
    <div>
      <h1>Add Product</h1>
      <form action={addProduct} className=" flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Type a name"
          className="input input-bordered w-full "
          required
        />
        <textarea
          required
          name="description"
          placeholder="description"
          className=" textarea textarea-bordered w-full "
        />
        <input
          type="text"
          name="imgUrl"
          placeholder="Type a url"
          className="input input-bordered w-full "
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Type a price"
          className="input input-bordered w-full "
          required
        />
        <FormSubmitButton className=" btn-block" type="submit">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}

export default AddProductPage;
