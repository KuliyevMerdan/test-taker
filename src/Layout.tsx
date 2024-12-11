import { Upload, PenTool } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/Card'
import { Button } from './components/ui/Button'
import { Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
        TestMaster hoş geldiňiz!
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl">
        Aşakdakylaryň kömegi bilen test goşmagy ýa-da test geçmegi saýlap bilersiňiz.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Card className="w-full bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Upload className="mr-2" />
              Test ýükle
            </CardTitle>
            <CardDescription className='text-center'>Test tabşyrmak üçin gerekli görnüşinde ony dörediň we ýükläň</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
              Her kim öz testini öz soraglary bilen düzüp biler.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link to={"/upload"}>Ýüklemek</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <PenTool className="mr-2" />
              Test tabşyrmak
            </CardTitle>
            <CardDescription className='text-center'>Goşulan testi tabşyrmak</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
              Ahyrky goşulan testi açylar we şol boýunça tabşyrarsyňyz.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link to={"/test"}>Testi başlamak</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

