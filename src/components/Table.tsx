import { Product } from "@prisma/client";

function Table({ data }: { data: Product[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Orders</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((product) => (
            <tr key={product.id}>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
