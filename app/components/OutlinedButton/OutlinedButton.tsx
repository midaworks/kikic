type OutlinedButtonProps = {
  label: string;
  color: string;
  fontWeight: 'medium' | 'bold';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

function OutlinedButton({
  onClick,
  label,
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
      {label}
    </button>
  );
}

export default OutlinedButton;
