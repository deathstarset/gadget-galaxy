interface TypographyH4Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  classname?: string;
}

export default function TypographyH4({
  children,
  classname,
  ...props
}: TypographyH4Props) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${classname}`}
      {...props}
    >
      {children}
    </h4>
  );
}
