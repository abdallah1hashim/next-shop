type formRow = {
  label?: string;
  error?: string[];
  children: React.ReactElement;
};

function FormRow({ label, error, children }: formRow) {
  return (
    <div className="grid grid-cols-[22rem_1fr_1fr] items-center gap-3 border-gray-100 px-0 py-2 first:pt-0 last:pb-0 has-[button]:flex has-[button]:justify-end has-[button]:gap-2 [&:not(:last-child)]:border-b ">
      {label && <label htmlFor={children?.props.id}>{label}</label>}
      {children}
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
}

export default FormRow;
