import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DeepLinkModal from "./components/DeepLinkModal";
import TermsConditions from "./pages/TermsConditions";
import KebijakanPrivasi from "./pages/KebijakanPrivasi";
import TentangKami from "./pages/TentangKami";
import Fitur from "./pages/Fitur";
import ListKuliner from "./pages/ListKuliner";
import FAQ from "./pages/FAQ";

type DeepLinkType = "place" | "post" | "user";

const IndexWithDeepLink = ({ type }: { type: DeepLinkType }) => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <Index />
      {id && <DeepLinkModal type={type} id={id} />}
    </>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/list-kuliner" element={<ListKuliner />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/syarat-ketentuan" element={<TermsConditions />} />
          <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
          <Route path="/place/:id" element={<IndexWithDeepLink type="place" />} />
          <Route path="/post/:id" element={<IndexWithDeepLink type="post" />} />
          <Route path="/u/:id" element={<IndexWithDeepLink type="user" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
