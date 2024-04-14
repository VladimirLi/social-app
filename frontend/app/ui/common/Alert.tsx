import clsx from "clsx";

interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
  color: "success" | "error";
}

export function Alert(props: AlertProps) {
  const { color, children, ...rest } = props;

  return (
    <div
      className={clsx("p-4 rounded-md", {
        "bg-green-100 text-green-800": color === "success",
        "bg-red-100 text-red-800": color === "error",
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
