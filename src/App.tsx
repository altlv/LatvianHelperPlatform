import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

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

import ClientProfile from "./pages/ClientProfile";
import ClientMailbox from "./pages/ClientMailbox";
import HelperMailbox from "./pages/HelperMailbox";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Training from "./pages/Training";
import HelpCategories from "./pages/HelpCategories";
import CategoryDetail from "./pages/CategoryDetail";
import ServiceDetail from "./pages/ServiceDetail";
import HelperProfile from "./pages/HelperProfile";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ethics" element={<Ethics />} />
          <Route path="/privacy" element={<Privacy />} />

          <Route path="/register/client" element={<ClientStep1 />} />
          <Route path="/register/client/step2" element={<ClientStep2 />} />
          <Route path="/register/client/step3" element={<ClientStep3 />} />
          <Route path="/register/client/welcome" element={<ClientWelcome />} />

          <Route path="/register/helper" element={<HelperStep1 />} />
          <Route path="/register/helper/step2" element={<HelperStep2 />} />
          <Route path="/register/helper/step3" element={<HelperStep3 />} />
          <Route path="/register/helper/step4" element={<HelperStep4 />} />
          <Route path="/register/helper/training" element={<HelperTraining />} />
          <Route path="/register/helper/welcome" element={<HelperWelcome />} />

          {/* Profile pages */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/client" element={<ClientProfile />} />
          <Route path="/mailbox" element={<ClientMailbox />} />
          <Route path="/helper/mailbox" element={<HelperMailbox />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/training" element={<Training />} />

          {/* Category / Service flow */}
          <Route path="/search" element={<Search />} />
          <Route path="/search/:categorySlug" element={<CategoryDetail />} />
          <Route path="/search/:categorySlug/:serviceSlug" element={<ServiceDetail />} />

          {/* Legacy / redirect route */}
          <Route path="/meklet" element={<Navigate to="/search" replace />} />

          {/* Helper / Paligs profile */}
          <Route path="/paligs/:helperId" element={<HelperProfile />} />
          <Route path="/helper/:helperId" element={<HelperProfile />} />

          {/* About / Contact pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
