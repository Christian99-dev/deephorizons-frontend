import React from "react";
import Icon from "../shared/Icon";
import getNextId from "@/lib/getNextId";

const Navigation = ({
  count,
  activeIndex,
  onSelect,
  onLeftButton,
  onRightButton,
}: {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  onLeftButton: () => any;
  onRightButton: () => any;
}) => {
  return (
    <div className="flex p-[--spacing-5] items-center">
      <Icon className="xl:hidden" name="white-left" onClick={onLeftButton} />
      <div className="flex-1 flex justify-center">
        {Array(count)
          .fill(null)
          .map((_, index) => {
            const isActive = index == activeIndex;
            const isNextLeft = index == getNextId(count, activeIndex, -1);
            const isNextRight = index == getNextId(count, activeIndex, 1);
            return (
              <div
                key={index}
                className={`
                rounded-sm
                cursor-pointer
                w-3
                mx-2
                aspect-square 
                white 
                bg-white
                transition-all
                opacity-50
                xl:w-2
                hover:scale-150
                hover:opacity-50
                ${isActive ? "!opacity-100" : "opacity-50"}
                ${isActive ? "!scale-[175%]" : "scale-100"}
                ${isActive && "shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"}
                ${isNextLeft && "scale-125"}
                ${isNextRight && "scale-125"}
                `}
                onClick={() => onSelect(index)}
              />
            );
          })}
      </div>
      <Icon className="xl:hidden" name="white-right" onClick={onRightButton} />
    </div>
  );
};

export default Navigation;
