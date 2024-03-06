"use client";

import { createClient } from "@/utils/supabase/client";
import { Button } from "../ui/button";
import { useState } from "react";

async function AddProject() {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const handleAddProject = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("projects").insert({});
    if (error) {
      alert("Failed to create new project");
    }
    setLoading(false);
  };

  return (
    <Button
      className="w-auto max-w-fit mx-auto px-[35px] bg-[#1c1917]"
      variant={"outline"}
      disabled={loading}
      onClick={() => handleAddProject()}
    >
      {loading ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        "Add Project"
      )}
    </Button>
  );
}

export default AddProject;
