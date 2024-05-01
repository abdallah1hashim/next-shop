import { BiDownload } from "react-icons/bi";
import { product } from "../page";
import Link from "next/link";
import { ActiveToogle, Delete } from "../_components/ProductAction";

function DropDown({ product }: { product: product }) {
  return (
    <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
      <li>
        <a download href={`/admin/products/${product.id}/download`}>
          <BiDownload /> Download
        </a>
      </li>
      <li>
        <Link href={`/admin/products/${product.id}/edit`}>Edit</Link>
      </li>
      <li>
        <ActiveToogle
          id={product.id}
          isAvilableForPurchase={product.isAvailableForPurchase}
        />
      </li>
      <li></li>
      <li className="text-red-500  hover:rounded-lg hover:bg-red-500 hover:text-gray-50">
        <Delete id={product.id} />
      </li>
    </ul>
  );
}

export default DropDown;
