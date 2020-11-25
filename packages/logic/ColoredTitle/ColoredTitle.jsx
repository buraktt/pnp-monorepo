import React from "react";
import Title from "@monorepo/ui/Title/Title";

export default function ColoredTitle(props) {
  const { title } = props;
  return <Title title={title} color="secondary" />;
}
