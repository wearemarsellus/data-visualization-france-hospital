import { useSelector } from 'react-redux'
import { selectAppContents } from 'store/app/selectors'
import { AppContents } from 'contents/types'

const useAppContents = (): AppContents => (
  useSelector(selectAppContents)
)

export default useAppContents
