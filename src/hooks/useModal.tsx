import React from 'react';

// import { Modal } from '../components';

export const useModal = () => {
  const [isShown, setIsShown] = React.useState<boolean>(false);

  const toggle = () => setIsShown(!isShown);

  return {
    isShown,
    toggle,
  };
};

// export const useModal = () => {
//   const [isVisible, setIsVisible] = React.useState<boolean>(false);

//   const show = () => setIsVisible(true);
//   const hide = () => setIsVisible(false);

//   const RenderModal = ({ children }: { children: React.ReactChild }) => (
//     <React.Fragment>
//       {isVisible && <Modal closeModal={hide}>{children}</Modal>}
//     </React.Fragment>
//   );

//   return {
//     show,
//     hide,
//     RenderModal,
//   };
// };
