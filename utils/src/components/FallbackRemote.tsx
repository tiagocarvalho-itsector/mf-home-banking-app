import React from "react";

type ThisProps = {
  name: string;
};
const FallbackRemote = ({ name }: ThisProps) => {
  return <h3>{name} failed import</h3>;
};

export default FallbackRemote;
