import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  from: string;
  fromType: "helper" | "admin";
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

const ClientMailbox = () => {
  // Mock data - in production this would come from database
  const messages: Message[] = [
    {
      id: "1",
      from: "Administrācija",
      fromType: "admin",
      subject: "Laipni lūdzam platformā!",
      message: "Paldies, ka pievienojies mūsu platformai. Ja tev ir kādi jautājumi, droši sazinies ar mums!",
      date: "2025-01-10",
      read: true
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6 py-8">
        <div className="flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link to="/profile/client">← Atpakaļ uz profilu</Link>
          </Button>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-foreground">
          📬 Pastkastīte
        </h1>

        <div className="space-y-4">
          {messages.length > 0 ? (
            messages.map((message) => (
              <Card key={message.id} className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">
                        {message.from}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        message.fromType === "admin" 
                          ? "bg-primary/10 text-primary" 
                          : "bg-accent text-accent-foreground"
                      }`}>
                        {message.fromType === "admin" ? "Administrācija" : "Palīgs"}
                      </span>
                      {!message.read && (
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{message.date}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{message.subject}</h3>
                  <p className="text-foreground/80">{message.message}</p>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground mb-4">Nav ziņojumu</p>
              <Button asChild>
                <Link to="/search">Meklēt palīgus</Link>
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientMailbox;
