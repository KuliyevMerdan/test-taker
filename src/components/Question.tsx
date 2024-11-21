interface QuestionProps {
    question: {
      question_text: string
      answer_variants: string[]
    }
    userAnswer: number
    onAnswer: (index: number) => void
  }
  
  export function Question({ question, userAnswer, onAnswer }: QuestionProps) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">{question.question_text}</h2>
        <div className="space-y-2">
          {question.answer_variants.map((answer, index) => (
            <button
              key={index}
              className={`w-full text-left p-2 rounded ${
                userAnswer === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => onAnswer(index)}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    )
  }
  
  