import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, AppState } from './core.store'

export let useAppDispatch = () => useDispatch<AppDispatch>()
export let useAppSelector: TypedUseSelectorHook<AppState> = useSelector
