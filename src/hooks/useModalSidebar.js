import { useState } from 'react';

export const useModalSidebar = (initialValue = false) => {
  const [isOpenSidebar, setIsOpen] = useState(initialValue);

  const openModalSidebar = () => {
    setIsOpen(true)
  }

  const closeModalSidebar = () => {
    setIsOpen(false)
  }

  return [isOpenSidebar, openModalSidebar, closeModalSidebar];

}
