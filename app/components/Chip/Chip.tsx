type ChipProps = {
  label: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Chip({ onClick, label, isSelected }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white border rounded-[3px] py-[5px] px-[25px] text-small-b ${
        isSelected
          ? 'border-primary-200 text-primary-200'
          : 'border-gray-700 text-gray-700'
      }`}
    >
      {label}
    </button>
  );
}

export default Chip;
