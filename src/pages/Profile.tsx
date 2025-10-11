import { Button } from "@/components/ui/button";
import { content } from "@/config/content";

const Profile = () => {
  const profile = content.profile;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-3xl mx-auto space-y-6 py-8">
        <h1 className="text-3xl font-bold text-center text-foreground">
          {profile.title}
        </h1>

        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">👤 {profile.name}</h3>
              <p className="text-lg text-foreground">Jānis Bērziņš</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground">📍 {profile.location}</h3>
              <p className="text-lg text-foreground">Rīga, Latvija</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground">📬 {profile.mailbox}</h3>
              <p className="text-lg text-foreground">janis.berzins@example.com</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground">🧩 {profile.interests}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-accent rounded-full text-sm">Ikdienas palīdzība</span>
                <span className="px-3 py-1 bg-accent rounded-full text-sm">Sports</span>
                <span className="px-3 py-1 bg-accent rounded-full text-sm">Kultūra</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground">🗓️ {profile.history}</h3>
              <p className="text-foreground/70 mt-1">Nav iepriekšēju rezervāciju</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground">💬 {profile.reviews}</h3>
              <p className="text-foreground/70 mt-1">Nav atsauksmju</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button className="flex-1 rounded-full">
              🔘 {profile.editButton}
            </Button>
            <Button variant="outline" className="flex-1 rounded-full">
              🔘 {profile.supportButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
