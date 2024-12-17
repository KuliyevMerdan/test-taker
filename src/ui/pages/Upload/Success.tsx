import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { useTranslation } from "react-i18next";

export default function UploadSuccessPage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {t('upload.success.header')}
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl">
        {t('upload.success.description')}
      </p>
      <div className="space-x-4">
        <Button asChild variant="default">
          <Link to={"/"}>{t('upload.success.button')}</Link>
        </Button>
      </div>
    </div>
  )
}

