import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Kontakti</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Mēs esam šeit, lai palīdzētu. Sazinies ar mums!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>📧</span> E-pasts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">info@latvianhelper.lv</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>📞</span> Tālrunis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">+371 20 123 456</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>📍</span> Adrese
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                Brīvības iela 1<br />
                Rīga, LV-1010<br />
                Latvija
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🕐</span> Darba laiks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                Pirmdien - Piektdien: 9:00 - 18:00<br />
                Sestdien - Svētdien: Slēgts
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center pt-8">
          <Link to="/">
            <Button variant="outline" className="rounded-xl">
              Atpakaļ uz sākumu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
