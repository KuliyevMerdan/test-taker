import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/Card"
import { RadioGroup, RadioGroupItem } from "../../components/ui/Radio-group"
import { Label } from "../../components/ui/Label"
import { Button } from "../../components/ui/Button"
import { Progress } from "../../components/ui/Progress"
import { useTestStore } from "../../shared/testStore"
import * as Dialog from "@radix-ui/react-dialog";
// import { IoClose } from "react-icons/io5";
import "./Test.css";
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Input } from "../../components/ui/Input"

export default function Test() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [username, setUsername] = useState<any>()
    const [specialty, setSpecialty] = useState<any>()
    const { current }: any = useTestStore()
    const [modal, setModal] = useState(false)
    const [started, setStarted] = useState(false)
    const [finished, setFinished] = useState(false)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(current.questions.length).fill(-1))
    const [timeRemaining, setTimeRemaining] = useState(current.test_duration)
  
    useEffect(() => {
      if(started) {
        const timer = setInterval(() => {
          setTimeRemaining((prevTime: any) => {
            if (prevTime <= 0) {
              clearInterval(timer)
              setFinished(true)
              setStarted(false)
              return 0
            }
            return prevTime - 1
          })
        }, 1000)
    
        return () => clearInterval(timer)
      }
    }, [started])
  
    const handleAnswerSelect = (answerIndex: number) => {
      setSelectedAnswers((prev) => {
        const newAnswers = [...prev]
        newAnswers[currentQuestionIndex] = answerIndex
        return newAnswers
      })
    }
  
    const handleNextQuestion = () => {
      if (currentQuestionIndex < current.questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
      }
    }
  
    const handlePreviousQuestion = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex((prev) => prev - 1)
      }
    }
    
    const handleStart = () => {
      if(username !== '' && specialty !== ''){
        setStarted(true)
      } else {
        console.log("Fill out")
      }
    }
    const handleSubmit = () => {
      // Implement submit logic here
      setFinished(true)
      setStarted(false)
      console.log("Test submitted:", selectedAnswers)
    }
  
    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = seconds % 60
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }
  
    const currentQuestion = current.questions[currentQuestionIndex]
  
    if(started) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-8 px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">{current.test_theme}</CardTitle>
              <div className="flex justify-between items-center mt-4">
                <div className="text-sm font-medium">
                  Question {currentQuestionIndex + 1} of {current.questions.length}
                </div>
                <div className="text-sm font-medium">
                  Time Remaining: {formatTime(timeRemaining)}
                </div>
              </div>
              <Progress value={(currentQuestionIndex + 1) / current.questions.length * 100} className="mt-2" />
            </CardHeader>
            <CardContent>
              <h2 className="text-xl font-semibold mb-4">{currentQuestion.question_text}</h2>
              <RadioGroup value={selectedAnswers[currentQuestionIndex].toString()} onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
                {currentQuestion.answer_variants.map((answer: any, index: number) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={index.toString()} id={`answer-${index}`} />
                    <Label htmlFor={`answer-${index}`}>{answer}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</Button>
              {currentQuestionIndex === current.questions.length - 1 ? (
                <Button onClick={handleSubmit}>Submit</Button>
              ) : (
                <Button onClick={handleNextQuestion}>Next</Button>
              )}
            </CardFooter>
          </Card>
          <Dialog.Root
            open={modal}
          >
            {/* <Dialog.Trigger asChild>
              <button className="Button violet">Edit profile</button>
            </Dialog.Trigger> */}
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                  Make changes to your profile here. Click save when you're done.
                </Dialog.Description>
                <div
                  style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
                >
                  <Button onClick={() => setModal(false)}>
                    Close
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      ) 
    }

    if(finished) {
      return(
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-8 px-4 sm:px-6 lg:px-8">
          <Dialog.Root
            open={true}
          >
            <Dialog.Portal>
              <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                  Make changes to your profile here. Click save when you're done.
                </Dialog.Description>
                <div
                  style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
                >
                  <Button onClick={() => navigate("/")}>
                    Close
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      )
    }

    return(
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-8 px-4 sm:px-6 lg:px-8">
        <Dialog.Root
            open={true}
          >
            <Dialog.Portal>
              <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle text-center text-2xl">{t('test.startModal.header.lable')}</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                  {t('test.startModal.header.desc')}
                </Dialog.Description>
                <div
                  style={{ display: "flex", marginTop: 25 }}
                >
                  <form onSubmit={() => { handleStart() }} className="space-y-4 w-full">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="username">{t('test.startModal.usernameInput.lable')}</Label>
                        <Input
                          id="username"
                          // value={testTheme}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder={t('test.startModal.usernameInput.placeholder')}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="specialty">{t('test.startModal.specialtyInput.lable')}</Label>
                        <Input
                          id="specialty"
                          type="text"
                          // value={testDuration}
                          onChange={(e) => setSpecialty(e.target.value)}
                          placeholder={t('test.startModal.specialtyInput.placeholder')}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-green-500 hover:bg-green-500/80"
                    >
                      {t('test.startModal.button')}
                    </Button>
                  </form>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
      </div>
    )
  }
  
  