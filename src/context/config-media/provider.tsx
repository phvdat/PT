import { ImageType } from '@/types/common';
import { createContext, useReducer } from 'react';

export enum ActionTypes {
  SET_IMAGES = 'SET_IMAGES',
  ADD_IMAGE = 'ADD_IMAGE',
  REMOVE_IMAGE = 'REMOVE_IMAGE',
}
interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}
type IAction =
  | {
      type: ActionTypes.SET_IMAGES;
      payload: ImageType[];
    }
  | {
      type: ActionTypes.ADD_IMAGE;
      payload: ImageType;
    }
  | {
      type: ActionTypes.REMOVE_IMAGE;
      payload: string;
    };
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
    case ActionTypes.SET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case ActionTypes.ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    case ActionTypes.REMOVE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image) => image._id !== action.payload),
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
