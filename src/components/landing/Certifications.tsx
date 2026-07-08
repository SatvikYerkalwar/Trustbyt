import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  CheckCircle2,
  Shield,
} from "lucide-react";
import { SectionHeader } from "./Features";

const certifications = [
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "September 29, 2025",
    validUntil: "September 29, 2027",
    credentialId: "322674633OCI25GAIOCP",
    pdfUrl:
      "https://blobs.vusercontent.net/blob/Generative%20ai-ZbOLb5B4RoG3wUsT2SkTXLgaiVVHbq.pdf",
    color: "from-rose-500 to-orange-500",
    icon: "OCI",
  },
  {
    title: "Ethical Hacker",
    issuer: "EC-Council",
    date: "August 30, 2023",
    credentialId: "Verified",
    pdfUrl:
      "https://blobs.vusercontent.net/blob/Ethical_Hacker_Badge20230830-28-64y3vi-8esRiWcmTF3jxURidM3lbMzIbH8ayL.pdf",
    color: "from-emerald-400 to-green-600",
    icon: "CEH",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage (Mastercard)",
    date: "July 1, 2025",
    skills: [
      "IAM Fundamentals",
      "IAM Strategy",
      "Custom IAM Solutions",
      "Platform Integration",
    ],
    pdfUrl:
      "https://blobs.vusercontent.net/blob/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_XYkHqd8TduE5n9twC_1751336748780_completion_certificate_copy-zo3OQOTEyFfMqoBbJDKCHbnbbyBXF3.pdf",
    color: "from-amber-400 to-orange-500",
    icon: "MC",
  },
  {
    title: "Cybersecurity",
    issuer: "Tech Mahindra Foundation · Skill India Digital Hub",
    date: "May 20, 2024",
    duration: "10 Hours",
    pdfUrl:
      "https://blobs.vusercontent.net/blob/31d98b22ca954c79bbd7ee16a61822a8-TX2lPYwPrvq0GqHR9RTV2Fvdt9R78p.pdf",
    color: "from-cyan-400 to-blue-500",
    icon: "TMF",
  },
];

const stats = [
  { v: "4+", l: "Certifications" },
  { v: "3+", l: "Years experience" },
  { v: "5+", l: "Organizations" },
  { v: "100%", l: "Verified" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora opacity-40" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Professional credentials"
          title={
            <>
              Certifications cracked by{" "}
              <span className="text-gradient">Satvik.</span>
            </>
          }
          desc="Industry-recognized credentials demonstrating real expertise in cybersecurity, ethical hacking, and cloud — the foundation TrustByt is built on."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          {certifications.map((c, i) => (
            <article
              key={c.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border/70 bg-surface/50 p-6 hover-lift backdrop-blur"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {/* gradient top stripe */}
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${c.color}`}
              />
              <div className="flex items-start gap-4">
                <div
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${c.color} text-[12px] font-bold text-white shadow-[0_8px_24px_-6px_oklch(0.84_0.16_200_/_0.45)]`}
                >
                  {c.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold leading-snug text-foreground transition group-hover:text-primary">
                    {c.title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5" />
                    {c.issuer}
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11.5px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {c.date}
                    </span>
                    {c.validUntil && (
                      <span className="inline-flex items-center gap-1 text-success">
                        <CheckCircle2 className="h-3 w-3" />
                        Valid until {c.validUntil}
                      </span>
                    )}
                    {c.duration && (
                      <span className="inline-flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        {c.duration}
                      </span>
                    )}
                  </div>

                  {c.skills && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {c.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10.5px] text-primary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {c.credentialId && (
                    <p className="mt-3 font-mono text-[10.5px] text-muted-foreground/80">
                      ID: {c.credentialId}
                    </p>
                  )}

                  <a
                    href={c.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-primary transition hover:text-primary/80"
                  >
                    View certificate
                    <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-border/70 bg-surface/40 p-4 text-center"
            >
              <div className="font-mono text-3xl font-semibold text-gradient">
                {s.v}
              </div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-center text-[12px] text-muted-foreground">
          <Award className="h-3.5 w-3.5 text-primary" />
          Every certificate is independently verifiable — click through to open
          the issuer's PDF.
        </p>
      </div>
    </section>
  );
}
