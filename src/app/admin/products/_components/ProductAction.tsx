"use client";

import { useTransition } from "react";
import {
  deleteProduct,
  toggleProductAvailability,
} from "../../_actions/products";
import { useRouter } from "next/navigation";

export function ActiveToogle({
  id,
  isAvilableForPurchase,
}: {
  id: string;
  isAvilableForPurchase: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <button
      className="border-none bg-inherit"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleProductAvailability(id, !isAvilableForPurchase);
          router.refresh();
        });
      }}
    >
      {isAvilableForPurchase ? "Deactivate" : "Activate"}
    </button>
  );
}

export function Delete({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <button
      className="border-none bg-inherit"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteProduct(id);
          router.refresh();
        });
      }}
    >
      Delete
    </button>
  );
}
