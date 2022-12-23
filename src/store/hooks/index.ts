import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import type { RootState, AppDispatch } from "../store";

export const useAppDispatch = (): any => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const useAction = () => {
//     const dispatch = useAppDispatch();
//     return bindActionCreators(ActionCreators, dispatch);
//   };