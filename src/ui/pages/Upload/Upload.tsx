import { useTranslation } from "react-i18next";
import { UploadForm } from "./UploadForm";

export default function Upload() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          {t('upload.header')}
        </h1>
        <UploadForm />
      </div>
    </div>
  )
}

