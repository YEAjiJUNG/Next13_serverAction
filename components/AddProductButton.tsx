"use client";

import { addProductToDatabase } from "@/actions/serverActions";

function AddProductButton() {
  // const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("product", "macbook");
  formData.append("price", "1000");

  return (
    <button
      onClick={() => addProductToDatabase(formData)}
      className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48"
    >
      Add
    </button>
  );
}

export default AddProductButton;
