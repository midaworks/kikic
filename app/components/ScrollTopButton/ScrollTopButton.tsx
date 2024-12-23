type ScrollTopButtonProps = {
  label: string;
  onClick: () => void;
};

function ScrollTopButton({ onClick, label }: ScrollTopButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-white text-content-b font-sans"
    >
      {label}
    </button>
  );
}

export default ScrollTopButton;
