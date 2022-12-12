import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// TS + redux想調用useSelect時，需記得定義型別
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector