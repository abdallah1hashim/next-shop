import Button from "@/components/Button";
import Table from "@/components/Table";
import Link from "next/link";

function productsPage() {
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
        <Table data={[]} />
      </section>
    </div>
  );
}

export default productsPage;
