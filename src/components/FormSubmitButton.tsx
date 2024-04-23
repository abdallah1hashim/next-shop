"use client";

import { ComponentPropsWithoutRef } from "react";
import { useFormStatus } from "react-dom";

type formSubmitButton = {
  children: React.ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

function FormSubmitButton({ children, className, ...rest }: formSubmitButton) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className={`${className} btn btn-primary `}
      {...rest}
    >
      {pending ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        children
      )}
    </button>
  );
}

export default FormSubmitButton;
