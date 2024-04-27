interface row {
  children: React.ReactNode;
  type?: "vertical" | "horizontal";
  justify?:
    | "normal"
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
  className?: string;
  as?: React.ComponentType | keyof JSX.IntrinsicElements;
}

function Row({
  children,
  type = "horizontal",
  justify = "between",
  className,
  as: Tag = "div",
  ...rest
}: row) {
  const classNames = {
    horizontal: "flex-row",
    vertical: "flex-col",
  };
  const rowClass = classNames[type] || "";
  const justifyFlex = `justify-${justify}`;

  return (
    <Tag
      className={`
  flex ${justifyFlex}  justify-between ${rowClass} my-4  ${
    className ? className : ""
  }
  `}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Row;
