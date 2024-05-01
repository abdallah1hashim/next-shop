import { GoCheckCircle, GoXCircle } from "react-icons/go";

import { formatCurrency, formatNumber } from "@/lib/formatters";
import { CgMoreVertical } from "react-icons/cg";
import DropDown from "@/app/admin/products/_ui/DropDown";
import { product } from "@/app/admin/products/page";

function Table({ data }: { data: product[] }) {
  return (
    <div className=" min-h-96 overflow-x-auto">
      <table className=" table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <th className="text-2xl ">
                {product.isAvailableForPurchase ? (
                  <>
                    <span className="sr-only">Avilable</span>
                    <GoCheckCircle />
                  </>
                ) : (
                  <>
                    <span className="sr-only">Unavilable</span>
                    <GoXCircle />
                  </>
                )}
              </th>
              <td>{product.name}</td>
              <td>{formatCurrency(product.priceInCents / 100)}</td>
              <td>{formatNumber(product._count.orders)}</td>
              <td>
                <details className="dropdown">
                  <summary className="btn m-1 border-none bg-base-100 ">
                    <CgMoreVertical />
                  </summary>
                  <DropDown product={product} />
                </details>
                <span className="sr-only">Actions</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
