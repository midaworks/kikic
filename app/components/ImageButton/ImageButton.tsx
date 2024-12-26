type ImageButtonProps = {
  image: string;
  onClick: () => void;
};

function ImageButton({ onClick, image }: ImageButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex h-11 w-11 items-center justify-center rounded-full overflow-hidden"
    >
      <img src={image} alt="imageButton" className="h-11 w-11 object-cover" />
    </button>
  );
}

export default ImageButton;
