import { FC } from "react";

const MenuButton: FC<{ onClickHandler: () => void; name: string }> = ({
  onClickHandler,
  name,
}) => {
  return (
    <div
      onClick={onClickHandler}
      className="relative pointer-events-none w-60 p-px mx-auto rounded bg-secondary hover:bg-[linear-gradient(97.64deg,_#54F4DF_19.69%,_#2AB6FD_96.22%)]"
    >
      <div className="hover:bg-secondary rounded">
        <button className="pointer-events-auto w-full py-2 bg-secondary hover:bg-hover rounded text-primary text-sm leading-[1.2] leading-tight">
          {name}
        </button>
      </div>
    </div>
  );
};

export default MenuButton;
