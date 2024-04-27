import Link from "next/link";

type button = {
  children: React.ReactNode;
  type?: "normal" | "submit" | "link";
  variant?: "primary" | "secondary" | "danger" | "safe" | "customized";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  customized?: string;
  disable?: boolean;
  className?: string;
};

const mainStyles =
  " btn btn-ghost rounded-md focus:outline-4 focus:outline-primary focus:outline-offset-4 uppercase disabled:bg-gray-500 ";

const variantStyles = {
  primary: " border-none bg-primary text-gray-100",
  secondary: "border-2 border-primary text-primary",
  danger: " bg-red-500 border-none text-gray-200",
  safe: " bg-green-500 border-none text-gray-200",
  customized: " border-none",
};
const sizeStyles = {
  sm: "px-2 py-1",
  md: "px-3 py-2",
  lg: "px-4 py-3",
};

function Button({
  children,
  type = "normal",
  variant = "primary",
  size = "md",
  onClick,
  href,
  customized,
  disable,
  className,
  ...rest
}: button) {
  if (type === "link") {
    return (
      <button
        className={`${mainStyles} ${variantStyles[variant]}  ${
          customized ? customized : "bg-primary"
        } `}
        {...rest}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      disabled={disable}
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
      className={`${mainStyles} ${variantStyles[variant]}  ${
        sizeStyles[size]
      } ${customized ? customized : ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
