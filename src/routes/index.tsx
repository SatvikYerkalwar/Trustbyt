import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/landing/SiteNav";
import { Hero } from "@/components/landing/Hero";
import { MissionBanner } from "@/components/landing/MissionBanner";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { Features } from "@/components/landing/Features";
import { ScamUrlChecker } from "@/components/landing/ScamUrlChecker";
import { PhishingAnalyzer } from "@/components/landing/PhishingAnalyzer";
import { VideoExplainer } from "@/components/landing/VideoExplainer";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { ScamVisuals } from "@/components/landing/ScamVisuals";
import { ScamQuiz } from "@/components/landing/ScamQuiz";
import { ExpertHelp } from "@/components/landing/ExpertHelp";
import { EmergencyHelpline } from "@/components/landing/EmergencyHelpline";
import { UseCases } from "@/components/landing/UseCases";
import { Stats, Security } from "@/components/landing/Stats";
import { Roadmap } from "@/components/landing/Story";
import { FounderStory } from "@/components/landing/FounderStory";
import { Certifications } from "@/components/landing/Certifications";
import { BeFirstReviewer } from "@/components/landing/BeFirstReviewer";
import { SocialProof } from "@/components/landing/SocialProof";
import { Testimonials } from "@/components/landing/Testimonials";
import { TrustBadges } from "@/components/landing/TrustBadges";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { FAQ, Waitlist, Footer } from "@/components/landing/FAQ";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrustByt — AI trust verification for the modern internet" },
      {
        name: "description",
        content:
          "TrustByt scores people, sites, and sellers in real time so you can stop scams before money or data ever leaves your side.",
      },
      {
        property: "og:title",
        content: "TrustByt — AI trust verification for the modern internet",
      },
      {
        property: "og:description",
        content:
          "Real-time AI trust scores, scam analysis, and reputation verification. Built like critical infrastructure.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <MissionBanner />
        <LogoMarquee />
        <SocialProof />
        <EmergencyHelpline />
        <ScamUrlChecker />
        <PhishingAnalyzer />
        <VideoExplainer />
        <ScamVisuals />
        <ScamQuiz />
        <ExpertHelp />
        <Features />
        <UseCases />
        <Testimonials />
        <TrustBadges />
        <Stats />
        <Security />
        <FounderStory />
        <Certifications />
        <Roadmap />
        <BeFirstReviewer />
        <FinalCTA />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
}
