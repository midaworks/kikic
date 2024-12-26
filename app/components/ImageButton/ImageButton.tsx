type ImageButtonProps = {
  src: string;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function ImageButton({ onClick, src, label }: ImageButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex items-center justify-center overflow-hidden"
      title={label}
    >
      <img src={src} alt={label} />
    </button>
  );
}

export default ImageButton;
