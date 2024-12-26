type ChipProps = {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Chip({ onClick, children, isSelected }: ChipProps) {
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
      {children}
    </button>
  );
}

export default Chip;
