import { useState } from 'react';

export const useModalSidebar = (initialValue = false) => {
  const [isOpenSidebar, setIsOpenSideBar] = useState(initialValue);

  const openModalSidebar = () => {
    setIsOpenSideBar(true)
  }

  const closeModalSidebar = () => {
    setIsOpenSideBar(false)
  }

  return [isOpenSidebar, openModalSidebar, closeModalSidebar];

}
