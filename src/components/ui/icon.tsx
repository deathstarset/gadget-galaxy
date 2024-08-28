import { Button } from "./button";

interface IconProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  classname?: string;
}
export default function Icon({ children, classname, ...props }: IconProps) {
  return (
    <Button
      variant={"ghost"}
      className={`rounded-full ${classname}`}
      {...props}
    >
      {children}
    </Button>
  );
}
