import Row from "@/components/Row";
import ProductForm from "./_componenets/ProductForm";

function newProductPage() {
  return (
    <>
      <Row>
        <h1>Add Product</h1>
      </Row>
      <Row as="section" type="vertical">
        <ProductForm />
      </Row>
    </>
  );
}

export default newProductPage;
