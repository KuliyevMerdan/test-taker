import { Upload, PenTool } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/Card'
import { Button } from './components/ui/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Layout() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
        {t('home.mainHeader')}
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl">
        {t('home.mainDesc')}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Card className="w-full bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Upload className="mr-2" />
              {t('home.upload.header')}
            </CardTitle>
            <CardDescription className='text-center'>{t('home.upload.firstDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
            {t('home.upload.secondDesc')}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link to={"/upload"}>{t('home.upload.button')}</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full bg-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <PenTool className="mr-2" />
              {t('home.pass.header')}
            </CardTitle>
            <CardDescription className='text-center'>{t('home.pass.firstDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
              {t('home.pass.secondDesc')}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link to={"/testlist"}>{t('home.pass.button')}</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

