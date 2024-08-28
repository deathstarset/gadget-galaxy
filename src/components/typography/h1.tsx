interface TypographyH1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode | string;
  classname?: string;
}
export default function TypographyH1({
  children,
  classname,
  ...props
}: TypographyH1Props) {
  return (
    <h1
      className={`scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl ${classname}`}
      {...props}
    >
      {children}
    </h1>
  );
}
