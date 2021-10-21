import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppState } from '../services/store.service'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
