import { BiDownload } from "react-icons/bi";
import { product } from "../page";
import Link from "next/link";

function DropDown({ product }: { product: product }) {
  return (
    <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
      <li>
        <a download href={`/admin/products/${product.id}/download`}>
          <BiDownload /> Download
        </a>
      </li>
      <li>
        <Link href={`/admin/product/${product.id}/edit`}>Edit</Link>
      </li>
    </ul>
  );
}

export default DropDown;
