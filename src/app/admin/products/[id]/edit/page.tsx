import Row from "@/components/Row";
import ProductForm from "../../new/_componenets/ProductForm";
import prisma from "@/db/db";

async function EditProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return (
    <>
      <Row>
        <h1>Edit Product</h1>
      </Row>
      <Row type="vertical" as="section">
        <ProductForm product={product} />
      </Row>
    </>
  );
}

export default EditProductPage;
