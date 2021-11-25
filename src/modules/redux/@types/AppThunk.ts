import type { Action, ThunkAction } from '@reduxjs/toolkit'
import type { AppState } from './AppState'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>
