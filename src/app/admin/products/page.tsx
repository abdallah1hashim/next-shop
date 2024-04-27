import Button from "@/components/Button";
import Table from "@/components/Table";
import prisma from "@/db/db";
import Link from "next/link";

export type product = {
  id: string;
  name: string;
  priceInCents: number;
  isAvailableForPurchase: boolean;
  _count: { orders: number };
};

async function getProducts() {
  return await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      priceInCents: true,
      isAvailableForPurchase: true,
      _count: { select: { orders: true } },
    },
    orderBy: { name: "asc" },
  });
}

async function productsPage() {
  const products = await getProducts();

  return (
    <div>
      <header className="my-8 flex flex-row justify-between">
        <h1 className="bold text-3xl font-semibold">Products</h1>
        <Button type="link">
          <Link className="block px-2 py-2" href="/admin/products/new">
            Add producat
          </Link>
        </Button>
      </header>
      <section>
        {products.length === 0 && <p>No Products Found</p>}
        {products && products.length !== 0 && <Table data={products} />}
      </section>
    </div>
  );
}

export default productsPage;
