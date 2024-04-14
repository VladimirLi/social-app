import React from "react";

interface SnackbarProps extends React.ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onClose?: () => void;
  autoHideDuration?: number;
}

export function Snackbar(props: SnackbarProps) {
  const { open, onClose, autoHideDuration, ...rest } = props;
  const [show, setShow] = React.useState(open);

  React.useEffect(() => {
    setShow(open);
  }, [open]);

  React.useEffect(() => {
    if (show && autoHideDuration) {
      const timeout = setTimeout(() => {
        setShow(false);
        onClose && onClose();
      }, autoHideDuration);
      return () => clearTimeout(timeout);
    }
  }, [show, autoHideDuration, onClose]);

  return (
    <div
      className={`fixed bottom-4 left-4 transition-transform transform ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
      {...rest}
    >
      {props.children}
    </div>
  );
}
