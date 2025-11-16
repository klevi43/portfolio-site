import React from "react";
interface Props {
  imgUrl: string;
  text: string;
}
const SkillIcon = ({ imgUrl, text }: Props) => {
  // we need an image and text
  return (
    <>
      <div className="border-2 border-white-500 h-25 w-25 flex justify-center items-center flex-wrap">
        <img className="h-20 w-20" src={`${imgUrl}`} alt="" />
        <h3>{text}</h3>
      </div>
    </>
  );
};

export default SkillIcon;
