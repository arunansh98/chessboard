import { useState } from "react";
import ChessBoard from "./views/ChessBoard";

export default function App() {
  const [highlightedIndex, setHighlightedIndex] = useState({});

  const [attackedIndexes, setAttackedIndexes] = useState([]);

  return (
    <ChessBoard
      rowCount={8}
      colCount={8}
      highlightedIndex={highlightedIndex}
      setHighlightedIndex={setHighlightedIndex}
      attackedIndexes={attackedIndexes}
      setAttackedIndexes={setAttackedIndexes}
    />
  );
}
