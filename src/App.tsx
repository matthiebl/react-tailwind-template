import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<b className='text-3xl font-bold italic text-orange-500'>Hello</b>} />
    </Routes>
  </BrowserRouter>
)

export default App
