import { ImageType } from '@/types/common';
import { createContext, useReducer } from 'react';
export const ADD_IMAGE = 'ADD_IMAGE';
interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}
interface IAction {
  type: string;
  payload: any;
}
interface IState {
  images: ImageType[];
}

const initialState = {
  images: [],
};
export const ConfigMediaContext = createContext<IContext>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return {
        ...state,
        images: [action.payload],
      };
    default:
      return state;
  }
};

const ConfigMediaProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ConfigMediaContext.Provider value={{ state, dispatch }}>
      {children}
    </ConfigMediaContext.Provider>
  );
};

export default ConfigMediaProvider;
