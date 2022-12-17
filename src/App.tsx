import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={<Home />}
      />
    </Routes>
  )
}
