import { useImmer } from 'use-immer';

interface ImmerState {
  [name: string]: boolean
}

type ModalHandlerType = (key: string, value: boolean) => void
type ModalHookReturnType = [ImmerState, ModalHandlerType];
type ModalHookType = (data: ImmerState) => ModalHookReturnType;

export const useImmerModal: ModalHookType = (data) => {
  const [modalState, setModalState] = useImmer<ImmerState>(data);

  const modalToggleHandler: ModalHandlerType = (key, value) => {
    setModalState((state) => {
      state[key] = value;
    });
  }

  return [modalState, modalToggleHandler]
}
