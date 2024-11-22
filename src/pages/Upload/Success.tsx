import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export default function UploadSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Test Uploaded Successfully!
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl">
        Your test has been created and is now available for others to take.
      </p>
      <div className="space-x-4">
        <Button asChild variant="outline">
          <Link to={"/"}>Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}

