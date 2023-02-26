import { useState, useEffect } from 'react';

export default function useCloseDropdown(dropdownRef) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = function (event) {
      console.log(event.target.tagName);
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Check if the click target is a link
        if (event.target.tagName !== 'H3') {
          setOpen(false);
        }
      }
    };
    // Bind the listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return [open, setOpen];
}
