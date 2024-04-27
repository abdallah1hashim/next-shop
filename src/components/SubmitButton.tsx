import Button from "@/components/Button";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-3 min-w-10" type="submit" disable={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}

export default SubmitButton;
