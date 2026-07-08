import { ShieldCheck, Languages, Star, ArrowRight } from "lucide-react";
import { SectionHeader } from "./Features";

const experts = [
  {
    name: "Rahul Sharma",
    badge: "CEH Certified · KYC Verified",
    speciality: "Scam recovery · UPI fraud",
    languages: "Hindi · English",
    experience: "4 years",
    rate: "Free 15 min · ₹299/hr after",
  },
  {
    name: "Priya Desai",
    badge: "Cisco Certified · KYC Verified",
    speciality: "Phishing · Social engineering",
    languages: "Marathi · Hindi · English",
    experience: "3 years",
    rate: "Free 15 min · ₹249/hr after",
  },
  {
    name: "Arjun Mehta",
    badge: "EC-Council · KYC Verified",
    speciality: "Account recovery · Identity theft",
    languages: "Hindi · English",
    experience: "5 years",
    rate: "Free 15 min · ₹349/hr after",
  },
];

export function ExpertHelp() {
  return (
    <section id="expert-help" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Expert Help"
          title={
            <>
              Talk to a verified <span className="text-gradient">cybersecurity expert</span>.
            </>
          }
          desc="Scammed? Got a suspicious message? Not sure if a website is safe? Book a free 15-minute call with a KYC-verified ethical hacker or cybersecurity expert — in Hindi, Marathi, or English."
        />

        <div className="reveal mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experts.map((e) => (
            <div
              key={e.name}
              className="group relative flex flex-col rounded-2xl border border-border/70 bg-surface/40 p-6 transition hover:border-primary/40 hover:bg-surface/60"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-primary/40 font-semibold text-foreground">
                  {e.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-[15px] font-semibold">{e.name}</p>
                  <p className="mt-0.5 inline-flex items-center gap-1 text-[11.5px] font-medium text-primary">
                    <ShieldCheck className="h-3 w-3" /> {e.badge}
                  </p>
                </div>
              </div>

              <dl className="mt-5 space-y-2 text-[13.5px]">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Speciality</dt>
                  <dd className="text-right text-foreground">{e.speciality}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Languages</dt>
                  <dd className="inline-flex items-center gap-1 text-right text-foreground">
                    <Languages className="h-3 w-3 text-muted-foreground" />
                    {e.languages}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted-foreground">Experience</dt>
                  <dd className="inline-flex items-center gap-1 text-right text-foreground">
                    <Star className="h-3 w-3 text-accent" />
                    {e.experience}
                  </dd>
                </div>
                <div className="flex justify-between gap-3 border-t border-border/60 pt-2">
                  <dt className="text-muted-foreground">Rate</dt>
                  <dd className="text-right font-medium text-foreground">{e.rate}</dd>
                </div>
              </dl>

              <a
                href="#waitlist"
                className="group/btn mt-6 inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Book a call
                <ArrowRight className="h-3.5 w-3.5 transition group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="reveal mx-auto mt-8 max-w-2xl text-center text-[13px] text-muted-foreground">
          These are illustrative profiles. Real verified experts will be onboarded in Q2 2026.{" "}
          <a href="#waitlist" className="text-primary hover:underline">
            Join the beta
          </a>{" "}
          to be notified.
        </p>
      </div>
    </section>
  );
}