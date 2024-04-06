interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}

export function Card(props: CardProps) {
  const { className, ...rest } = props;
  return (
    <div
      className={`bg-white shadow-md rounded-md p-4 ${className}`}
      {...rest}
    />
  );
}
