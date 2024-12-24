export default function ChessBoard(props) {
  const {
    rowCount,
    colCount,
    highlightedIndex,
    setHighlightedIndex,
    attackedIndexes,
    setAttackedIndexes,
  } = props;
  let rows = Array(rowCount).fill(undefined);
  let columns = Array(colCount).fill(undefined);
  let boolean = false;

  const constructAttackedIndexes = (i, j) => {
    let indexes = [];
    let rowIndex = i;
    let colIndex = j;
    while (rowIndex >= 0 && colIndex >= 0) {
      rowIndex--;
      colIndex--;
      indexes.push(rowIndex.toString() + colIndex.toString());
    }
    rowIndex = i;
    colIndex = j;
    while (rowIndex >= 0 && colIndex < colCount) {
      rowIndex--;
      colIndex++;
      indexes.push(rowIndex.toString() + colIndex.toString());
    }
    rowIndex = i;
    colIndex = j;
    while (rowIndex < rowCount && colIndex >= 0) {
      rowIndex++;
      colIndex--;
      indexes.push(rowIndex.toString() + colIndex.toString());
    }
    rowIndex = i;
    colIndex = j;
    while (rowIndex < rowCount && colIndex < colCount) {
      rowIndex++;
      colIndex++;
      indexes.push(rowIndex.toString() + colIndex.toString());
    }
    setAttackedIndexes(indexes);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {rows.map((_row, i) => {
          boolean = !boolean;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {columns.map((_column, j) => {
                let backgroundCondition = boolean ? j % 2 === 0 : j % 2 !== 0;
                const isHighlighted =
                  i === highlightedIndex.i && j === highlightedIndex.j;
                const isAttacked = attackedIndexes.includes(
                  i.toString() + j.toString()
                );
                return (
                  <div
                    key={j}
                    style={{
                      height: "5rem",
                      width: "5rem",
                      background: isHighlighted
                        ? "#6dd4f1"
                        : isAttacked
                        ? "#059aff"
                        : backgroundCondition
                        ? "white"
                        : "black",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => {
                      setHighlightedIndex({
                        i,
                        j,
                      });
                      constructAttackedIndexes(i, j);
                    }}
                    onMouseLeave={() => {
                      setHighlightedIndex({});
                      setAttackedIndexes([]);
                    }}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
