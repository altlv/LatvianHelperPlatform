import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";

const TrainingLesson = () => {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  // Lesson 1: Communication and Empathy
  const lessonContent = {
    title: "🗣️ Komunikācijas un empātijas pamati",
    duration: "30 min",
    slides: [
      {
        type: "intro",
        title: "Laipni lūdzam pirmajā nodarbībā!",
        content: [
          "Šajā nodarbībā mēs apgūsim komunikācijas un empātijas pamatus",
          "Tu iemācīsies:",
          "• Kā veidot efektīvu komunikāciju ar klientiem",
          "• Aktīvās klausīšanās metodes",
          "• Kā izrādīt empātiju un izpratni",
          "• Kā saglabāt profesionālu un cieņpilnu attieksmi"
        ]
      },
      {
        type: "content",
        title: "Kas ir efektīva komunikācija?",
        content: [
          "Efektīva komunikācija ir divvirzienu process, kurā iesaistās gan runātājs, gan klausītājs.",
          "",
          "Galvenie elementi:",
          "✓ Skaidrība - runā vienkārši un saprotami",
          "✓ Uzmanība - pievērs pilnu uzmanību sarunbiedram",
          "✓ Empātija - centies izprast otras personas perspektīvu",
          "✓ Cieņa - izturies ar cieņu pret katru klientu"
        ]
      },
      {
        type: "content",
        title: "Aktīvā klausīšanās",
        content: [
          "Aktīvā klausīšanās nozīmē pilnīgi koncentrēties uz to, ko saka klients.",
          "",
          "Kā praktizēt aktīvo klausīšanos:",
          "1️⃣ Uzturi acu kontaktu",
          "2️⃣ Pamāj ar galvu, lai parādītu, ka klausies",
          "3️⃣ Uzdod precizējošus jautājumus",
          "4️⃣ Pārfrāzē dzirdēto, lai pārliecinātos, ka pareizi saproti",
          "5️⃣ Netraucē, kad klients runā"
        ]
      },
      {
        type: "example",
        title: "Piemērs: Nepareiza vs Pareiza komunikācija",
        content: [
          "❌ NEPAREIZI:",
          'Klients: "Man šodien ir slikta diena..."',
          'Palīgs: "Jā, jā, nu labi. Kur ir veļa?"',
          "",
          "✅ PAREIZI:",
          'Klients: "Man šodien ir slikta diena..."',
          'Palīgs: "Saprotu. Vai vēlaties par to pastāstīt? Es esmu šeit, lai palīdzētu."',
          "",
          "Pareizā atbilde parāda empātiju un gatavību klausīties."
        ]
      },
      {
        type: "content",
        title: "Empātijas nozīme",
        content: [
          "Empātija ir spēja izprast un dalīties citu cilvēku jūtās.",
          "",
          "Kāpēc empātija ir svarīga:",
          "💚 Rada uzticību starp tevi un klientu",
          "💚 Palīdz labāk saprast klienta vajadzības",
          "💚 Veido pozitīvu un atbalstošu atmosfēru",
          "💚 Uzlabo pakalpojuma kvalitāti",
          "",
          "Atceries: Empātija nenozīmē piekrist visam, bet gan izprast otras personas perspektīvu."
        ]
      },
      {
        type: "quiz",
        title: "Pārbaudi savas zināšanas",
        questions: [
          {
            id: 1,
            question: "Kas ir aktīvās klausīšanās galvenā iezīme?",
            options: [
              "Ātri atbildēt uz katru teikumu",
              "Pilnīgi koncentrēties uz runātāju un izprast viņa viedokli",
              "Domāt par savu atbildi, kamēr otra persona runā",
              "Pārliecināt personu par savu viedokli"
            ],
            correct: 1
          },
          {
            id: 2,
            question: "Kā pareizi izrādīt empātiju klientam?",
            options: [
              "Teikt 'es zinu, kā jūs jūtaties'",
              "Ignorēt klienta emocijas un koncentrēties uz darbu",
              "Klausīties uzmanīgi un atzīt klienta jūtas",
              "Nekavējoties dot padomus"
            ],
            correct: 2
          },
          {
            id: 3,
            question: "Ko darīt, ja nesaproti klienta vajadzības?",
            options: [
              "Minēt un cerēt, ka būsi pareizs",
              "Uzdot precizējošus jautājumus",
              "Ignorēt un turpināt darbu",
              "Teikt, ka klients neprot izskaidrot"
            ],
            correct: 1
          }
        ]
      }
    ]
  };

  const totalSlides = lessonContent.slides.length;
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  const currentSlideData = lessonContent.slides[currentSlide];

  const handleNext = () => {
    if (currentSlideData.type === "quiz" && !showResults) {
      setShowResults(true);
    } else if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
      setShowResults(false);
    } else {
      // Complete lesson
      navigate("/register/helper/training/course");
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setShowResults(false);
    }
  };

  const renderSlideContent = () => {
    if (currentSlideData.type === "quiz") {
      const questions = currentSlideData.questions || [];
      const allAnswered = questions.every(q => quizAnswers[q.id] !== undefined);
      const correctAnswers = questions.filter(
        q => quizAnswers[q.id] === String(q.correct)
      ).length;
      const score = Math.round((correctAnswers / questions.length) * 100);

      return (
        <div className="space-y-6">
          {questions.map((question, idx) => (
            <Card key={question.id}>
              <CardHeader>
                <CardTitle className="text-lg">
                  {idx + 1}. {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={quizAnswers[question.id]}
                  onValueChange={(value) =>
                    setQuizAnswers({ ...quizAnswers, [question.id]: value })
                  }
                  disabled={showResults}
                >
                  {question.options.map((option, optIdx) => {
                    const isCorrect = optIdx === question.correct;
                    const isSelected = quizAnswers[question.id] === String(optIdx);
                    
                    return (
                      <div
                        key={optIdx}
                        className={`flex items-center space-x-2 p-3 rounded-lg border ${
                          showResults && isCorrect
                            ? "border-green-500 bg-green-50 dark:bg-green-950"
                            : showResults && isSelected && !isCorrect
                            ? "border-red-500 bg-red-50 dark:bg-red-950"
                            : "border-border"
                        }`}
                      >
                        <RadioGroupItem value={String(optIdx)} id={`q${question.id}-${optIdx}`} />
                        <Label
                          htmlFor={`q${question.id}-${optIdx}`}
                          className="flex-1 cursor-pointer"
                        >
                          {option}
                        </Label>
                        {showResults && isCorrect && (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                    );
                  })}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}

          {showResults && (
            <Card className={score >= 70 ? "bg-green-50 dark:bg-green-950" : "bg-yellow-50 dark:bg-yellow-950"}>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">
                    Tavs rezultāts: {score}%
                  </h3>
                  <p className="text-muted-foreground">
                    {correctAnswers} no {questions.length} pareizas atbildes
                  </p>
                  {score >= 70 ? (
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      🎉 Lieliski! Tu esi apguvis šo tēmu!
                    </p>
                  ) : (
                    <p className="text-yellow-600 dark:text-yellow-400 font-medium">
                      💡 Ieteicams pārskatīt materiālu vēlreiz
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {!showResults && !allAnswered && (
            <p className="text-sm text-muted-foreground text-center">
              Lūdzu, atbildi uz visiem jautājumiem, lai turpinātu
            </p>
          )}
        </div>
      );
    }

    return (
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {currentSlideData.content?.map((line, idx) => (
          <p key={idx} className="text-foreground whitespace-pre-wrap">
            {line}
          </p>
        ))}
      </div>
    );
  };

  const canProceed = () => {
    if (currentSlideData.type === "quiz" && !showResults) {
      const questions = currentSlideData.questions || [];
      return questions.every(q => quizAnswers[q.id] !== undefined);
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/register/helper/training/course")}
          >
            ← Atpakaļ uz kursu
          </Button>
          <span className="text-sm text-muted-foreground">
            ⏱️ {lessonContent.duration}
          </span>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">{lessonContent.title}</span>
            <span className="text-muted-foreground">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Content */}
        <Card className="min-h-[400px]">
          <CardHeader>
            <CardTitle className="text-2xl">
              {currentSlideData.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderSlideContent()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentSlide === 0}
          >
            ← Iepriekšējais
          </Button>
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
          >
            {currentSlide === totalSlides - 1 && showResults
              ? "Pabeigt nodarbību ✓"
              : currentSlideData.type === "quiz" && !showResults
              ? "Pārbaudīt atbildes"
              : "Nākamais →"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrainingLesson;
