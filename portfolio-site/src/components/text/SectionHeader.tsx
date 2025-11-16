import React from "react";
interface Props {
  text: string;
}
const SectionHeader = ({ text }: Props) => {
  return <h2 className="font-bold text-[2.1rem]">{text}</h2>;
};

export default SectionHeader;
