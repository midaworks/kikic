type OutlinedButtonProps = {
  label: string;
  color: string;
  fontWeight: 'medium' | 'bold';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function OutlinedButton({
  onClick,
  label,
  color,
  fontWeight,
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
    >
      {label}
    </button>
  );
}

export default OutlinedButton;
