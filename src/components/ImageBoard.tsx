import { useState } from "react";
import Card from "./Card";

type Props = {
  images: string[];
  incrementMoves: () => void;
  setWon: (won: boolean) => void;
};

const ImageBoard = ({ images, incrementMoves, setWon }: Props) => {
  const [flippedIndex, setFlippedIndex] = useState<number>();
  const [foundImages, setFoundImages] = useState<{ [key: number]: boolean }>(
    {},
  );

  const handleImageClick = (index: number) => {
    incrementMoves();
    const prevFlippedIndex = flippedIndex;
    // not first image
    if (prevFlippedIndex !== undefined) {
      // match found
      if (images[index] === images[prevFlippedIndex]) {
        setFoundImages({
          ...foundImages,
          [index]: true,
          [prevFlippedIndex]: true,
        });
        // check if all images are found
        if (Object.keys(foundImages).length + 2 === images.length) {
          setWon(true);
        }
      }
    }
    // flip new image
    setFlippedIndex(index);
  };

  const isImageVisible = (index: number) => {
    if (index === flippedIndex) return true; // if image is just flipped
    if (foundImages[index] === true) return true; // if image is already found
    return false; // if image is hidden
  };

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="grid h-[500px] max-w-5xl grid-cols-3 gap-2 p-4 sm:h-[600px] sm:grid-cols-4 sm:gap-7">
        {images.map((image, index) =>
          isImageVisible(index) ? (
            <Card key={index} image={image} flipped={true} />
          ) : (
            <Card
              key={index}
              image={image}
              flipped={false}
              onClick={() => handleImageClick(index)}
              className="cursor-pointer"
            />
          ),
        )}
      </div>
    </div>
  );
};

export default ImageBoard;
