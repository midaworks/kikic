type ChipProps = {
  label: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Chip({ onClick, label, isActive }: ChipProps) {
  const borderColor = isActive ? 'primary-200' : 'gray-700';
  const textColor = isActive ? 'primary-200' : 'gray-700';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white border rounded-[3px] py-[5px] px-[25px] text-small-b border-${borderColor} text-${textColor}`}
    >
      {label}
    </button>
  );
}

export default Chip;
