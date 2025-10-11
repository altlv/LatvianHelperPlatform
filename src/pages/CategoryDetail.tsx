import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { content } from "@/config/content";

const CategoryDetail = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const category = content.clientRegistration.step2.categories.find(
    (cat) => cat.id === categoryId
  );

  const helpCard = content.helpCards.household; // Example data

  const helpers = [
    { id: 1, name: "Anna L.", rating: 5, specialty: "īpaša uzmanība detaļām, pieredze ar ģimenēm ar bērniem" },
    { id: 2, name: "Marija K.", rating: 4.8, specialty: "specializējas kārtošanā un tīrīšanā ar eko līdzekļiem" },
    { id: 3, name: "Dace S.", rating: 4.9, specialty: "palīdz ar ikdienas rutīnu un organizēšanu" },
    { id: 4, name: "Dainis S.", rating: null, specialty: "palīdz ar aizkrāmētu telpu atbrīvošanu, tīrīšanu un organizēšanu", isNew: true }
  ];

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="rounded-full"
        >
          ← {content.helpCategories.backButton}
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{helpCard.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">📄 Apraksts</h3>
              <p className="text-muted-foreground mb-3">{helpCard.description}</p>
              <p className="text-sm font-medium mb-2">Ietver:</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {helpCard.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/30 p-4 rounded-lg">
              <p className="text-sm">💡 {helpCard.ideal}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">💶 Cena</h3>
              <p className="text-sm">{helpCard.pricing.basic}</p>
              <p className="text-sm">{helpCard.pricing.extended}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">🎁 Atlaides</h3>
              {helpCard.discounts.map((discount, index) => (
                <p key={index} className="text-sm text-muted-foreground">{discount}</p>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-4">👩‍🔧 Pieejamie palīgi</h3>
              <div className="space-y-3">
                {helpers.map((helper) => (
                  <Card 
                    key={helper.id}
                    className="cursor-pointer hover:bg-accent/50 transition-colors"
                    onClick={() => navigate(`/helper/${helper.id}`)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{helper.name}</span>
                            {helper.isNew ? (
                              <span className="text-sm px-2 py-0.5 bg-primary/20 text-primary rounded-full">Jauns</span>
                            ) : (
                              <span className="text-sm">⭐ {helper.rating}</span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{helper.specialty}</p>
                        </div>
                        <Button variant="ghost" size="sm">→</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CategoryDetail;
