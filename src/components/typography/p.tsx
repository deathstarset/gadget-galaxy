interface TypographyPProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode | string;
  classname?: string;
}
export default function TypographyP({
  children,
  classname,
  ...props
}: TypographyPProps) {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${classname}`}
      {...props}
    >
      {children}
    </p>
  );
}
