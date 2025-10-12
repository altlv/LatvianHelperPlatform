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
  const { categorySlug } = useParams(); // URL: /search/:categorySlug

  // Find category by id (slug in URL == category.id in content)
  const category = content.categories.find((cat) => cat.id === categorySlug);

  // Services (help cards) that belong to this category
  const services = content.helpCards.filter((h) => h.categoryId === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-2xl font-bold">Kategorija nav atrasta</h1>
          <p className="text-muted-foreground">Lūdzu, atgriezies un mēģini vēlreiz.</p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={() => navigate(-1)}>← Atpakaļ</Button>
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
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((svc) => (
            <Card
              key={svc.slug}
              className="cursor-pointer hover:bg-accent/50 transition-colors"
              onClick={() => navigate(`/search/${category.id}/${svc.slug}`)}
            >
              <CardHeader>
                <CardTitle className="text-xl">{svc.title}</CardTitle>
                <CardDescription>{svc.description}</CardDescription>
              </CardHeader>
              {Array.isArray(svc.details) && svc.details.length > 0 && (
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {svc.details.slice(0, 3).map((d, i) => (
                      <li key={i}>{d}</li>
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
