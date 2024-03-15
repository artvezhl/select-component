import { FC } from "react";
import { MenuElement } from "../types";
import MenuItem from "./MenuItem";

type Props = {
  isOpen: boolean;
  elements: MenuElement[];
  onMenuElementClick: (id: string) => void;
};

const MenuList: FC<Props> = ({ isOpen, elements, onMenuElementClick }) => {
  return (
    <ul
      className={`${
        isOpen ? "block" : "hidden"
      } absolute top-10 z-10 w-full overflow-auto rounded bg-secondary p-0 text-primary focus:outline-none sm:text-sm border border-transparent hover:border-border divide-y divide-divider text-sm leading-[1.2] leading-tight`}
    >
      {elements.map(({ id, name }) => (
        <MenuItem
          key={id}
          name={name}
          onClickHandler={() => onMenuElementClick(id)}
        />
      ))}
    </ul>
  );
};

export default MenuList;
