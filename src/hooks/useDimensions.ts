import React from "react";

export default function useDimensions(
  containerRef: React.RefObject<HTMLElement>,
) {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const currentRef = containerRef.current;

    /**
     * Retrieves the current dimensions of the referenced element.
     * @returns An object containing the width and height of the element.
     */
    function getDimensions() {
      return {
        width: currentRef?.offsetWidth || 0, // Element width or 0 if not available
        height: currentRef?.offsetHeight || 0, // Element height or 0 if not available
      };
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setDimensions(getDimensions());
      }
    });

    if (currentRef) {
      resizeObserver.observe(currentRef);
      setDimensions(getDimensions());
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
      resizeObserver.disconnect();
    };
  }, [containerRef]);

  return dimensions;
}
