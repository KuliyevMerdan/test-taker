interface NavigationProps {
    currentQuestion: number
    totalQuestions: number
    onPrevious: () => void
    onNext: () => void
    onSubmit: () => void
  }
  
  export function Navigation({
    currentQuestion,
    totalQuestions,
    onPrevious,
    onNext,
    onSubmit,
  }: NavigationProps) {
    return (
      <div className="flex justify-between items-center mt-6">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={onPrevious}
          disabled={currentQuestion === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          {currentQuestion} / {totalQuestions}
        </span>
        {currentQuestion === totalQuestions ? (
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r"
            onClick={onSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r"
            onClick={onNext}
          >
            Next
          </button>
        )}
      </div>
    )
  }
  
  