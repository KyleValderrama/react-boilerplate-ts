import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";

interface HelmetProps {
  title: string;
  description: string;
  keywords: string[];
}
export const Helmet: React.FC<HelmetProps> = ({
  title,
  description,
  keywords,
}) => {
  return (
    <ReactHelmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
    </ReactHelmet>
  );
};
