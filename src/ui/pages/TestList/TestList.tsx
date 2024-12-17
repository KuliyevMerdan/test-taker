import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button"
import { Card, CardContent, CardFooter } from "../../components/ui/Card"
// import { testData } from "../../shared/temp"
import { useTestStore } from "../../shared/testStore"
import { useTranslation } from "react-i18next";

export default function TestList() {
    const { t } = useTranslation()
    const { setCurrent, testData } = useTestStore();
    const navigate = useNavigate()
    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-center mb-6">{t('pass.header')}</h1>
            <div className="space-y-4">
                {testData.map((test: any, index: number) => (
                    <Card key={index} className="w-full bg-white transition-all duration-300 ease-in-out transform hover:scale-[1.01] hover:shadow-xl">
                        <CardContent className="pt-4">
                            <h2 className="text-xl font-semibold mb-2">{test.test_theme}</h2>
                            <p className="text-gray-600">{t('pass.duration')}: {parseInt((test.test_duration / 60).toFixed(0)) == 0 ? 1 : (test.test_duration / 60).toFixed(0)} {t('pass.minutes')}</p>
                            <p className="text-gray-600">{t('pass.questions')}: {test.questions.length}</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" onClick={() => { setCurrent(test); navigate('/test')}}>
                                {t('pass.button')}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}