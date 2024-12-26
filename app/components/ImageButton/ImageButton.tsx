type ImageButtonProps = {
  image: string;
  onClick: () => void;
};

function ImageButton({ onClick, image }: ImageButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex items-center justify-center overflow-hidden active:opacity-90"
    >
      <img src={image} alt="imageButton" />
    </button>
  );
}

export default ImageButton;
