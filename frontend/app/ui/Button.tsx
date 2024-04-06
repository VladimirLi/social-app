interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export function Button(props: ButtonProps) {
  const { className, ...rest } = props;
  return (
    <button
      className={`block w-full p-2 bg-blue-500 text-white rounded-md ${className}`}
      {...rest}
    />
  );
}
