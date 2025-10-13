import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { content } from "@/config/content";

const CategoryDetail = () => {
  const navigate = useNavigate();
  const { categorySlug } = useParams();

  const handleBack = () => {
    window.scrollTo(0, 0);
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const category = content.categories.find((cat) => cat.id === categorySlug);
  const services = content.helpCards.filter((h) => h.categoryId === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-2xl font-bold">Kategorija nav atrasta</h1>
          <p className="text-muted-foreground">Lūdzu, atgriezies un mēģini vēlreiz.</p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={handleBack}>← Atpakaļ</Button>
            <Button asChild><Link to="/search">Uz kategorijām</Link></Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6 py-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/search")}
            className="rounded-full"
          >
            ← {content.helpCategories?.backButton ?? "Atpakaļ uz kategorijām"}
          </Button>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            {category.icon} {category.title}
          </h1>
          <p className="text-muted-foreground">
            {content.helpCategories?.subtitle ?? "Izvēlies pakalpojumu"}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <Card
              key={svc.slug}
              className="group cursor-pointer hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden"
              onClick={() => navigate(`/search/${category.id}/${svc.slug}`)}
            >
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/10 pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {svc.title}
                </CardTitle>
                <CardDescription className="italic text-base">
                  {svc.description}
                </CardDescription>
              </CardHeader>
              {Array.isArray(svc.details) && svc.details.length > 0 && (
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {svc.details.slice(0, 3).map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
