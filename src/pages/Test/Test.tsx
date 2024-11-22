import { useEffect, useState } from "react"
import { testData } from "../../shared/temp"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/Card"
import { RadioGroup, RadioGroupItem } from "../../components/ui/Radio-group"
import { Label } from "../../components/ui/Label"
import { Button } from "../../components/ui/Button"
import { Progress } from "../../components/ui/Progress"

export default function Test() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(testData.questions.length).fill(-1))
    const [timeRemaining, setTimeRemaining] = useState(testData.test_duration)
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer)
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
  
      return () => clearInterval(timer)
    }, [])
  
    const handleAnswerSelect = (answerIndex: number) => {
      setSelectedAnswers((prev) => {
        const newAnswers = [...prev]
        newAnswers[currentQuestionIndex] = answerIndex
        return newAnswers
      })
    }
  
    const handleNextQuestion = () => {
      if (currentQuestionIndex < testData.questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
      }
    }
  
    const handlePreviousQuestion = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex((prev) => prev - 1)
      }
    }
  
    const handleSubmit = () => {
      // Implement submit logic here
      console.log("Test submitted:", selectedAnswers)
    }
  
    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = seconds % 60
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }
  
    const currentQuestion = testData.questions[currentQuestionIndex]
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-8 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto bg-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">{testData.test_theme}</CardTitle>
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm font-medium">
                Question {currentQuestionIndex + 1} of {testData.questions.length}
              </div>
              <div className="text-sm font-medium">
                Time Remaining: {formatTime(timeRemaining)}
              </div>
            </div>
            <Progress value={(currentQuestionIndex + 1) / testData.questions.length * 100} className="mt-2" />
          </CardHeader>
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">{currentQuestion.question_text}</h2>
            <RadioGroup value={selectedAnswers[currentQuestionIndex].toString()} onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
              {currentQuestion.answer_variants.map((answer, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={index.toString()} id={`answer-${index}`} />
                  <Label htmlFor={`answer-${index}`}>{answer}</Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</Button>
            {currentQuestionIndex === testData.questions.length - 1 ? (
              <Button onClick={handleSubmit}>Submit</Button>
            ) : (
              <Button onClick={handleNextQuestion}>Next</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    )
  }
  
  