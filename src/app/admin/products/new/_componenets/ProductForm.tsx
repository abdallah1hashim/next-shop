"use client";
import { addProduct } from "@/app/admin/_actions/products";
import SubmitButton from "@/components/SubmitButton";
import FormRow from "@/components/FormRow";
import Row from "@/components/Row";
import { formatCurrency } from "@/lib/formatters";
import { useState } from "react";
import { useFormState } from "react-dom";

function ProductForm() {
  const [error, action] = useFormState(addProduct, {});
  const [priceAmount, setPriceAmount] = useState<number>();
  return (
    <form action={action}>
      <FormRow label="Name " error={error.name}>
        <input
          className="input input-bordered"
          type="text"
          placeholder="Enter a Name.."
          id="name"
          name="name"
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
          required
        />
      </FormRow>
      <FormRow label="File" error={error.file}>
        <input
          className="file-input file-input-bordered  w-full max-w-xs"
          type="file"
          id="file"
          name="file"
          required
        />
      </FormRow>
      <FormRow label="Image" error={error.image}>
        <input
          className="file-input file-input-bordered  w-full max-w-xs"
          type="file"
          id="image"
          name="image"
          required
        />
      </FormRow>
      <SubmitButton />
    </form>
  );
}

export default ProductForm;
