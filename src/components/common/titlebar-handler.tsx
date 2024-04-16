"use client";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";

const TitleBarHandler = ({ messege }: { messege: string }) => {
  const [originalTitle, setOriginalTitle] = useState("");
  useEffect(() => {
    setOriginalTitle(document.title);

    const handleBlur = () => {
      document.title = "I'm right here";
    };

    const handleFocus = () => {
      document.title = originalTitle; // Restore the original title
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return null;
};

export default TitleBarHandler;
