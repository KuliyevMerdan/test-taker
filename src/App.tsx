import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './pages/Test/Test'
import Layout from './Layout'
import Upload from './pages/Upload/Upload'

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout />} />
        <Route path="/test" element={<Test />} />
        <Route path="/upload" element={<Upload />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
