import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Lock } from "lucide-react";

const TrainingCourse = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      id: 1,
      title: "🗣️ Komunikācijas un empātijas pamati",
      description: "Kā veidot sarunu, klausīties, izprast vajadzības, saglabāt cieņu",
      duration: "30 min",
      completed: false,
      locked: false,
      route: "/register/helper/training/lesson/1"
    },
    {
      id: 2,
      title: "👥 Klientu apkalpošanas kultūra",
      description: "Etiķete, saskarsme, apģērbs, uzvedība",
      duration: "25 min",
      completed: false,
      locked: true,
      route: "/register/helper/training/lesson/2"
    },
    {
      id: 3,
      title: "🧠 Emocionālā inteliģence un robežu ievērošana",
      description: "Robežu izpratne un ievērošana",
      duration: "35 min",
      completed: false,
      locked: true,
      route: "/register/helper/training/lesson/3"
    },
    {
      id: 4,
      title: "🔐 Drošība un datu aizsardzība",
      description: "GDPR, privātums",
      duration: "20 min",
      completed: false,
      locked: true,
      route: "/register/helper/training/lesson/4"
    },
    {
      id: 5,
      title: "🕊️ Konfidencialitāte un ētika",
      description: "Ētikas kodeksa pamati",
      duration: "25 min",
      completed: false,
      locked: true,
      route: "/register/helper/training/lesson/5"
    },
    {
      id: 6,
      title: "🧰 Pirmās palīdzības pamati",
      description: "Obligāti visiem",
      duration: "40 min",
      completed: false,
      locked: true,
      route: "/register/helper/training/lesson/6"
    },
    {
      id: 7,
      title: "💻 Digitālā pratība",
      description: "Lietot aplikāciju, komunikācijas rīkus",
      duration: "20 min",
      completed: false,
      locked: true,
      route: "/register/helper/training/lesson/7"
    }
  ];

  const completedLessons = lessons.filter(l => l.completed).length;
  const progress = (completedLessons / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto py-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/register/helper/training")}
          >
            ← Atpakaļ
          </Button>
        </div>

        {/* Course Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            🧭 Bāzes apmācība palīgiem
          </h1>
          <p className="text-muted-foreground">
            Nodrošināt vienotu kvalitāti, attieksmi un profesionālu ētiku
          </p>
          
          {/* Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tavs progress</CardTitle>
              <CardDescription>
                {completedLessons} no {lessons.length} nodarbībām pabeigtas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Nodarbības</h2>
          
          {lessons.map((lesson) => (
            <Card
              key={lesson.id}
              className={`transition-all ${
                lesson.locked
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:shadow-md cursor-pointer"
              }`}
              onClick={() => !lesson.locked && navigate(lesson.route)}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="mt-1">
                      {lesson.completed ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      ) : lesson.locked ? (
                        <Lock className="h-6 w-6 text-muted-foreground" />
                      ) : (
                        <Circle className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">
                        {lesson.title}
                      </CardTitle>
                      <CardDescription>{lesson.description}</CardDescription>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-muted-foreground">
                          ⏱️ {lesson.duration}
                        </span>
                        {!lesson.locked && !lesson.completed && (
                          <span className="text-xs text-primary font-medium">
                            Sākt nodarbību →
                          </span>
                        )}
                        {lesson.completed && (
                          <span className="text-xs text-green-500 font-medium">
                            ✓ Pabeigts
                          </span>
                        )}
                        {lesson.locked && (
                          <span className="text-xs text-muted-foreground">
                            🔒 Pabeigt iepriekšējās nodarbības
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Certificate Info */}
        <Card className="bg-gradient-to-br from-accent/30 to-accent/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ✅ Sertifikāts
            </CardTitle>
            <CardDescription>
              Pēc visu nodarbību pabeigšanas saņemsi Žaņa Akadēmijas pamata sertifikātu: 
              "Pakalpojumu sniedzējs – 1. līmenis"
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default TrainingCourse;
