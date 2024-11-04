"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Toaster, ToasterProps } from "sonner";

type ToasterProviderProps = ToasterProps;

function ToasterProvider({ ...props }: ToasterProviderProps) {
  const { theme } = useTheme();

  return <Toaster theme={(theme as "dark") ?? "dark"} {...props} />;
}

export default ToasterProvider;
