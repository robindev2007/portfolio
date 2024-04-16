import React from "react";
import { Metadata } from "next";

// export async function generateMetadata({ params }: { params: Metadata }) {
//   const title=params.title
//   return {
//     title,
//     ...params,
//   };
// }

export const metadata: Metadata = {
  title: "H***page Page | Robin Mia",
  description:
    "Home page abot Robin mia web developer| Live in Bangladesh | Open for work",
};

const CustomMetadata = ({ metadata }: { metadata?: Metadata }) => {
  return null;
};

export default CustomMetadata;
