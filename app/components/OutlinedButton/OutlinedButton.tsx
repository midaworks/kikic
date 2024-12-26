type OutlinedButtonProps = {
  children: React.ReactNode;
  color: string;
  fontWeight: 'medium' | 'bold';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

function OutlinedButton({
  onClick,
  children,
  color,
  fontWeight,
  disabled,
}: OutlinedButtonProps) {
  const fontWeightClass = fontWeight === 'bold' ? 'small-b' : 'small-m';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white border rounded-[3px] py-[5px] px-[25px] text-${fontWeightClass}`}
      style={{
        borderColor: color,
        color,
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default OutlinedButton;
