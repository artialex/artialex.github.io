import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { AppState } from '@/redux'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
