interface TypographyMuted extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode | string;
  classname?: string;
}

export default function TypographyMuted({
  children,
  classname,
  ...props
}: TypographyMuted) {
  return (
    <p className={`text-sm text-muted-foreground ${classname}`} {...props}>
      {children}
    </p>
  );
}
