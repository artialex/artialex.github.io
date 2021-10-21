import { useDispatch } from 'react-redux'
import { AppDispatch } from '../services/store.service'

export const useAppDispatch = () => useDispatch<AppDispatch>()
