import {
  useState,
  useRef,
  useEffect,
  FC,
  ForwardedRef,
  SetStateAction,
  Dispatch,
  ForwardRefExoticComponent,
  MutableRefObject,
} from "react";

export default function withClickOutside(
  WrappedComponent: ForwardRefExoticComponent<{
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    ref: MutableRefObject<HTMLElement | null>;
  }>
): ForwardedRef<HTMLElement> & FC<any> {
  const Component = () => {
    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (!ref.current?.contains(event.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />;
  };

  return Component;
}
