import { useSelector } from 'react-redux'
import { selectAppConfig } from 'store/app/selectors'
import { AppConfig } from 'config/app'

const useAppConfig = (): AppConfig => useSelector(selectAppConfig)

export default useAppConfig
