"use client";
import { addProduct, updateProduct } from "@/app/admin/_actions/products";
import SubmitButton from "@/components/SubmitButton";
import FormRow from "@/components/FormRow";
import Row from "@/components/Row";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { useFormState } from "react-dom";
import { Product } from "@prisma/client";
import Image from "next/image";

function ProductForm({ product }: { product?: Product | null }) {
  const [error, action] = useFormState(
    product == null ? addProduct : updateProduct.bind(null, product.id),
    {},
  );
  const [priceAmount, setPriceAmount] = useState<number | undefined>(
    product?.priceInCents,
  );
  return (
    <form action={action}>
      <FormRow label="Name " error={error.name}>
        <input
          className="input input-bordered"
          type="text"
          placeholder="Enter a Name.."
          id="name"
          name="name"
          defaultValue={product?.name}
          required
        />
      </FormRow>
      <FormRow label="Price in Cents" error={error.price}>
        <input
          className="input input-bordered"
          type="number"
          placeholder="Enter a price.."
          id="price"
          name="price"
          onChange={(e) => setPriceAmount(Number(e.target.value) || undefined)}
          defaultValue={product?.priceInCents}
          required
        />
      </FormRow>
      {priceAmount && (
        <Row className="border-b border-gray-100 pb-2 ">
          price = {formatCurrency((priceAmount || 0) / 100)}
        </Row>
      )}
      <FormRow label="Description" error={error.description}>
        <textarea
          className="textarea textarea-bordered"
          id="description"
          name="description"
          defaultValue={product?.description}
          required
        />
      </FormRow>
      <FormRow label="File" error={error.file}>
        <input
          className="file-input file-input-bordered  w-full max-w-xs"
          type="file"
          id="file"
          name="file"
          required={product == null}
        />
      </FormRow>
      {product != null && <div>{product.filePath}</div>}
      <FormRow label="Image" error={error.image}>
        <input
          className="file-input file-input-bordered  w-full max-w-xs"
          type="file"
          id="image"
          name="image"
          required={product == null}
        />
      </FormRow>
      {product != null && (
        <Image
          src={product.imagePath.slice(6)}
          height="400"
          width="400"
          alt="Product Image"
        />
      )}
      <SubmitButton />
    </form>
  );
}

export default ProductForm;
