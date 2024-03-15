import { FC } from "react";
import { ArrowIcon } from "../icons/ArrowIcon";

type Props = { name: string; onClickHandler: () => void };

const MenuItem: FC<Props> = ({ name, onClickHandler }) => {
  return (
    <li
      onClick={onClickHandler}
      className="px-6 py-3 flex justify-between cursor-pointer hover:bg-hover"
    >
      {name}
      <ArrowIcon />
    </li>
  );
};

export default MenuItem;
