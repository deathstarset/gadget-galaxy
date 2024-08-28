interface TypographySmall extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode | string;
  classname?: string;
}

export default function TypographySmall({
  children,
  classname,
  ...props
}: TypographySmall) {
  return (
    <p className={`text-sm font-medium leading-none ${classname}`} {...props}>
      {children}
    </p>
  );
}
