import React from "react";
import { useNavigate } from "react-router";

export default function Sucess() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-4xl text-green-600 font-bold">Success</h1>
      <button onClick={() => navigate("/")} className="bg-gray-500 text-gray-50 px-4 py-2 rounded-md mt-8">
        Back to Home
      </button>
    </div>
  );
}
