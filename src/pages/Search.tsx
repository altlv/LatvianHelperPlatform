import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Globe } from "lucide-react";
import helpersData from "@/data/helpers.json";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");

  const filteredHelpers = helpersData.filter((helper) => {
    const matchesSearch = 
      helper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      helper.specializations.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = 
      locationFilter === "all" || helper.region === locationFilter;
    
    return matchesSearch && matchesLocation;
  });

  const uniqueRegions = Array.from(new Set(helpersData.map(h => h.region)));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Meklēt Palīgu
          </h1>
          <p className="text-lg text-foreground/80">
            Atrodiet savu ideālo palīgu no pārbaudītiem profesionāļiem
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            placeholder="Meklēt pēc vārda vai specializācijas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Izvēlies reģionu" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Visi reģioni</SelectItem>
              {uniqueRegions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-foreground/70">
            Atrasti {filteredHelpers.length} palīgi
          </p>
        </div>

        {/* Helper Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHelpers.map((helper) => (
            <Link key={helper.slug} to={`/paligs/${helper.slug}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="space-y-4">
                  {/* Icon and Name */}
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{helper.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground">
                        {helper.name}
                      </h3>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{helper.rating}</span>
                        <span className="text-foreground/60">
                          ({helper.reviewsCount})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <MapPin className="w-4 h-4" />
                    <span>{helper.region}</span>
                    {helper.online && (
                      <>
                        <span>|</span>
                        <Globe className="w-4 h-4" />
                        <span>Tiešsaistē</span>
                      </>
                    )}
                  </div>

                  {/* Specializations */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">
                      Specializācijas:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {helper.specializations.slice(0, 3).map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-muted px-2 py-1 rounded-full text-foreground/80"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t">
                    <p className="text-sm text-foreground/70">
                      Cena no{" "}
                      <span className="font-bold text-foreground">
                        {helper.services[0]?.price || "—"}
                      </span>
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredHelpers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-foreground/60 mb-4">
              Diemžēl neviens palīgs neatbilst meklēšanas kritērijiem
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setLocationFilter("all");
              }}
            >
              Notīrīt filtrus
            </Button>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/">Atgriezties sākumlapā</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
