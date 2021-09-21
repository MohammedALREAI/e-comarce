import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
export const useFetching = (someFetchActionCreator:any) => {
     const dispatch = useDispatch()
     console.log('enter faeatching')
     useEffect(() => {
          dispatch(someFetchActionCreator())
     }, [dispatch])
}
