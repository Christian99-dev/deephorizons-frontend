import React, { useState } from "react";
import Icon from "../shared/Icon";

const NameAndDescription = ({
  name,
  beschreibung,
}: {
  name: string;
  beschreibung: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h1 className="relative fs-7 font-bold gap-[--spacing-2] flex justify-center" onClick={toggleDescription}>
        {name}
        <Icon
          name="white-down"
          className={`cursor-pointer hidden xl:inline ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </h1>
      <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr]" : "xl:grid-rows-[0fr]"} animate-height-open`} onClick={toggleDescription}>
        <p
          className={`transition-all overflow-hidden 
        ${isOpen ? "opacity-100" : "xl:opacity-0"}`}
        >
          {beschreibung}
        </p>
      </div>
    </>
  );
};

export default NameAndDescription;
