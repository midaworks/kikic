type ChipProps = {
  label: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Chip({ onClick, label, isSelected }: ChipProps) {
  const borderColor = isSelected ? 'primary-200' : 'gray-700';
  const textColor = isSelected ? 'primary-200' : 'gray-700';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-whtie border rounded-[3px] py-[5px] px-[25px] text-small-b border-${borderColor} text-${textColor}`}
    >
      {label}
    </button>
  );
}

export default Chip;
