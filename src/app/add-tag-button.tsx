"use client";

import { useFormStatus } from "react-dom";

export function AddTagButton() {
  const { pending } = useFormStatus();

  return <button type="submit">{pending ? "Loading" : "Create tag"}</button>;
}
