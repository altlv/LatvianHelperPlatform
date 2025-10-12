import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
// If "@/config/content" does not exist, you can delete this import;
// the UI will still show the fallback title/subtitle below.
// import { content } from "@/config/content";
import logo from "@/assets/logo.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img
              src={logo}
              alt="Žanis | Žanna Logo"
              className="h-48 w-auto"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {/* {content?.landing?.title ?? "Atbalsts | Sirsnība"} */}
            Atbalsts | Sirsnība
          </h1>

          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {/* {content?.landing?.subtitle ?? "Tava drošā vieta, kur cilvēki palīdz viens otram – ar sirdi, prasmēm un cieņu."}*
