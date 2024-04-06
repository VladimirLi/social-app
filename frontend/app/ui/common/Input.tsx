export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <input
      className={`block w-full p-2 border border-gray-300 rounded-md ${className}`}
      {...rest}
    />
  );
}
