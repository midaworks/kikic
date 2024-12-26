type ScrollTopButtonProps = {
  label: string;
  onClick: () => void;
};

function ScrollTopButton({ onClick, label }: ScrollTopButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-200 text-white font-noto text-content-b "
    >
      {label}
    </button>
  );
}

export default ScrollTopButton;
