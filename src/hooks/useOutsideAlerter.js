import React, { useEffect } from "react";

/**
 * Runs callback, when ref is rendered and user clicks elsewhere.
 * @param ref {React.RefObject} - ref
 * @param handleOutsideClick {() => void} callback
 * @return {void}
 */
export function useOutsideAlerter(ref, handleOutsideClick, handleInsideClick) {
  useEffect(() => {
    function handleDropdownClose(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOutsideClick();
      } else if (ref.current?.contains(event.target) && handleInsideClick) {
        handleInsideClick(true);
      }
    }
    document.addEventListener("mousedown", handleDropdownClose);
    return () => {
      document.removeEventListener("mousedown", handleDropdownClose);
    };
  });
}
