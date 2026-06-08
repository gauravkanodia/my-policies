type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  buttonLabel: string;
  variant?: ButtonVariant;
  onClick?: () => void;
};

export const Button = ({
  buttonLabel,
  variant = "secondary",
  onClick,
}: ButtonProps) => {
  const variantClasses = {
    primary: "bg-accent text-secondary",
    secondary: "bg-surface text-secondary",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer inline-flex items-center justify-center w-full min-h-12 rounded-full border-2 border-secondary font-bold text-button transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variantClasses[variant]}`}
    >
      {buttonLabel}
    </button>
  );
};
