import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  forwardRef,
  useId,
  useState,
} from "react";
import MenuButton from "./MenuButton";
import MenuList from "./MenuList";
import { MenuElement } from "../types";
import withClickOutside from "./withCloseOutside";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
} & MutableRefObject<HTMLElement>;

const Menu = forwardRef<HTMLDivElement, Props>(({ open, setOpen }, ref) => {
  const menuElements: MenuElement[] = [
    { name: "ACCOUNT", id: useId() },
    { name: "WALLET", id: useId() },
    { name: "BONUSES", id: useId() },
    { name: "BETS", id: useId() },
    { name: "HISTORY", id: useId() },
  ];
  const [activeElement, setActiveElement] = useState<MenuElement>(
    menuElements[0]
  );
  const onMenuElementClick = (id: string) => {
    setActiveElement(menuElements.find((element) => element.id === id)!);
    setOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div ref={ref} className="relative w-60">
        <MenuButton
          onClickHandler={() => setOpen((prev) => !prev)}
          name={activeElement.name}
        />
        <MenuList
          isOpen={open}
          elements={menuElements}
          onMenuElementClick={onMenuElementClick}
        />
      </div>
    </div>
  );
});

export default withClickOutside(Menu as unknown as any);
