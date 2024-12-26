type ImageButtonProps = {
  src: string;
  alt: string;
  title: string;
  onClick: () => void;
};

function ImageButton({ onClick, src, alt, title }: ImageButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex items-center justify-center overflow-hidden"
      aria-label={title}
    >
      <img src={src} alt={alt} />
    </button>
  );
}

export default ImageButton;
