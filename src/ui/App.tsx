import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './pages/Test/Test'
import Layout from './Layout'
import Upload from './pages/Upload/Upload'
import UploadSuccessPage from './pages/Upload/Success'
import TestList from './pages/TestList/TestList'

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testlist" element={<TestList />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/success" element={<UploadSuccessPage />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
