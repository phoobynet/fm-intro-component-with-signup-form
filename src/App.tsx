import SignUpForm from './routes/SignUpForm'
import { Route, Routes } from 'react-router-dom'

export default function App () {
  return (
    <Routes>
      <Route
        index
        element={<SignUpForm />}
      />
    </Routes>
  )
}
