import './styles/style.css'

import { Toaster } from 'react-hot-toast'
import { Root } from './routes'

export const App = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={true} />
      <Root />
    </>
  )
}
