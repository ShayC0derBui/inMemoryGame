import { useState, useMemo } from "react";
import { shuffle } from "lodash";
import ImageBoard from "./ImageBoard";

type Props = {
  images: string[];
};

const MemoryGame = ({ images }: Props) => {
  const shuffledImages = useMemo(
    () => shuffle([...images, ...images]),
    [images],
  );
  const [moves, setMoves] = useState<number>(0);
  const [won, setWon] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="absolute top-8 flex w-full flex-col items-center justify-center font-extrabold">
        <h1 className="text-4xl">Memory Game</h1>
        <p className="font-bold">Moves: {moves}</p>
      </div>
      <ImageBoard
        images={shuffledImages}
        incrementMoves={() => setMoves(moves + 1)}
        setWon={setWon}
      />
      {won && (
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-9xl font-extrabold text-yellow-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          You won!
        </p>
      )}
    </div>
  );
};

export default MemoryGame;
