import { useState } from 'react'
import { PlusCircle, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Label } from '../../components/ui/Label'
import { Card, CardContent } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { useTestStore } from '../../shared/testStore'
import { Textarea } from '../../components/ui/Textarea'
import { Input } from '../../components/ui/Input'
import { useTranslation } from 'react-i18next'

interface Question {
  question_text: string
  answer_variants: string[]
  correct_answer_index: number
}

export function UploadForm() {
    const { loadData } = useTestStore();
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [testTheme, setTestTheme] = useState('')
    const [testDuration, setTestDuration] = useState('')
    const [questions, setQuestions] = useState<Question[]>([
      { question_text: '', answer_variants: [''], correct_answer_index: 0 }
    ])

    const addQuestion = () => {
      setQuestions([...questions, { question_text: '', answer_variants: [''], correct_answer_index: 0 }])
    }

    const removeQuestion = (index: number) => {
      setQuestions(questions.filter((_, i) => i !== index))
    }

    const updateQuestion = (index: number, field: keyof Question, value: string | number) => {
      const updatedQuestions: any = [...questions]
      if (field === 'answer_variants') {
        updatedQuestions[index].answer_variants = (value as string).split('\n')
      } else {
        updatedQuestions[index][field] = value
      }
      setQuestions(updatedQuestions)
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      const testData = {
        test_theme: testTheme,
        test_duration: parseInt(testDuration),
        questions: questions
      }
      
      try {
        await loadData(testData)
        console.log(testData)
        navigate('/success')
      } catch (error) {
        console.error('Error creating test:', error)
        // Handle error (e.g., show error message to user)
      }
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="test-theme">{t('upload.themeInput.label')}</Label>
            <Input
              id="test-theme"
              value={testTheme}
              onChange={(e) => setTestTheme(e.target.value)}
              placeholder={t('upload.themeInput.placeholder')}
              required
            />
          </div>
          <div>
            <Label htmlFor="test-duration">{t('upload.timeInput.label')}</Label>
            <Input
              id="test-duration"
              type="number"
              value={testDuration}
              onChange={(e) => setTestDuration(e.target.value)}
              placeholder={t('upload.timeInput.placeholder')}
              required
            />
          </div>
        </div>

        {questions.map((question, index) => (
          <Card key={index} className="p-4 bg-white">
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{t('upload.question.header')} {index + 1}</h3>
                {index > 0 && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => removeQuestion(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div>
                <Label htmlFor={`question-${index}`}>{t('upload.question.textInput.label')}</Label>
                <Input
                  id={`question-${index}`}
                  value={question.question_text}
                  onChange={(e) => updateQuestion(index, 'question_text', e.target.value)}
                  placeholder={t('upload.question.textInput.placeholder')}
                  required
                />
              </div>
              <div>
                <Label htmlFor={`answers-${index}`}>{t('upload.question.answerInput.label')}</Label>
                <Textarea
                  id={`answers-${index}`}
                  value={question.answer_variants.join('\n')}
                  onChange={(e) => updateQuestion(index, 'answer_variants', e.target.value)}
                  placeholder={t('upload.question.answerInput.placeholder')}
                  rows={4}
                  required
                />
              </div>
              <div>
                <Label htmlFor={`correct-answer-${index}`}>{t('upload.question.indexInput.label')}</Label>
                <Input
                  id={`correct-answer-${index}`}
                  type="number"
                  min={0}
                  max={question.answer_variants.length - 1}
                  value={question.correct_answer_index}
                  onChange={(e) => updateQuestion(index, 'correct_answer_index', parseInt(e.target.value))}
                  required
                />
              </div>
            </CardContent>
          </Card>
        ))}

        <Button type="button" onClick={addQuestion} className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" /> {t('upload.addButton')}
        </Button>

        <Button type="submit" className="w-full bg-green-500 hover:bg-green-500/80">{t('upload.submitButton')}</Button>

        {/* <Button className="w-full">Upload file</Button> */}
      </form>
    )
}

