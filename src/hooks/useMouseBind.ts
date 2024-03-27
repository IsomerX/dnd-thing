import { useState, useMemo } from "react";

const useMousePosition = (): [
  number,
  number,
  { onMouseMove: (event: React.MouseEvent<Element, MouseEvent>) => void },
] => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const bind = useMemo(
    () => ({
      onMouseMove: (event: React.MouseEvent<Element, MouseEvent>) => {
        setX(event.nativeEvent.offsetX);
        setY(event.nativeEvent.offsetY);
      },
    }),
    [],
  );

  return [x, y, bind];
};

export default useMousePosition;
