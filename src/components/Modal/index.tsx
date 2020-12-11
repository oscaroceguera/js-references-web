import React from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from './styles';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

const Modal: React.FC<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}: ModalProps) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };

  React.useEffect(() => {
    // Disable scrolling
    isShown
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');

    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.addEventListener('keydown', onKeyDown, false);
    };
  }, [isShown]);

  const modal = (
    <React.Fragment>
      <Backdrop onClick={hide} />

      <FocusLock>
        <Wrapper
          aria-modal
          aria-labelledby={headerText}
          tabIndex={-1}
          role="dialog"
        >
          <StyledModal>
            <Header>
              <HeaderText>{headerText}</HeaderText>
              <CloseButton
                type="button"
                data-dimiss="modal"
                aria-label="Closee"
                onClick={hide}
              >
                x
              </CloseButton>
            </Header>
            <Content>{modalContent}</Content>
          </StyledModal>
        </Wrapper>
      </FocusLock>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
