import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Ethics from "./pages/Ethics";
import Privacy from "./pages/Privacy";
import ClientStep1 from "./pages/register/ClientStep1";
import ClientStep2 from "./pages/register/ClientStep2";
import ClientStep3 from "./pages/register/ClientStep3";
import ClientWelcome from "./pages/register/ClientWelcome";
import HelperStep1 from "./pages/register/HelperStep1";
import HelperStep2 from "./pages/register/HelperStep2";
import HelperStep3 from "./pages/register/HelperStep3";
import HelperStep4 from "./pages/register/HelperStep4";
import HelperTraining from "./pages/register/HelperTraining";
import HelperWelcome from "./pages/register/HelperWelcome";
import Profile from "./pages/Profile";
import HelpCategories from "./pages/HelpCategories";
import CategoryDetail from "./pages/CategoryDetail";
import HelperProfile from "./pages/HelperProfile";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/privacy" element={<Privacy />} />
          
          {/* Client Registration Flow */}
          <Route path="/register/client" element={<ClientStep1 />} />
          <Route path="/register/client/step2" element={<ClientStep2 />} />
          <Route path="/register/client/step3" element={<ClientStep3 />} />
          <Route path="/register/client/welcome" element={<ClientWelcome />} />
          
          {/* Helper Registration Flow */}
          <Route path="/register/helper" element={<HelperStep1 />} />
          <Route path="/register/helper/step2" element={<HelperStep2 />} />
          <Route path="/register/helper/step3" element={<HelperStep3 />} />
          <Route path="/register/helper/step4" element={<HelperStep4 />} />
          <Route path="/register/helper/training" element={<HelperTraining />} />
          <Route path="/register/helper/welcome" element={<HelperWelcome />} />
          
          {/* Profile */}
          <Route path="/profile" element={<Profile />} />
          
          {/* Help Categories and Helper Profiles */}
          <Route path="/help-categories" element={<HelpCategories />} />
          <Route path="/help-category/:categoryId" element={<CategoryDetail />} />
          <Route path="/helper/:helperId" element={<HelperProfile />} />
          
          {/* Search and Dynamic Helper Profile */}
          <Route path="/meklet" element={<Search />} />
          <Route path="/paligs/:helperId" element={<HelperProfile />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
