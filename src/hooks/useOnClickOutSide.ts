import { useEffect} from "react";

type OutSide = {
  ref: React.RefObject<HTMLDivElement | null>;
  setOpen: (value: boolean) => void;
  visible?: boolean;
};

export const useOnClickOutSide = ({ ref, setOpen, visible }: OutSide) => {
  useEffect(() => {
    if (!visible) return;

    const handleClose = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClose)

    return () => window.removeEventListener("mousedown", handleClose)


  }, [ref, setOpen, visible]);
};
