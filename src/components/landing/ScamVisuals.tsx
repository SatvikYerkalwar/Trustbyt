import { AlertTriangle, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./Features";
import smsImg from "@/assets/scam-sms.jpg";
import callImg from "@/assets/scam-call.jpg";
import prizeImg from "@/assets/scam-prize.jpg";

const scams = [
  {
    img: smsImg,
    alt: "Elderly woman receiving a fake bank SMS asking to update KYC",
    tag: "Fake SMS",
    title: "\"Your bank account will be blocked\"",
    body: "Scammers send urgent messages pretending to be your bank. They use fake links to steal your login details.",
    redFlag: "Real banks never send KYC links by SMS.",
  },
  {
    img: callImg,
    alt: "Young man confused while a scammer asks for OTP over phone",
    tag: "Phone Fraud",
    title: "\"I am calling from your bank. Share your OTP.\"",
    body: "Fraudsters pose as bank staff or government officers and pressure you into sharing OTPs or PINs.",
    redFlag: "No bank, government office, or company ever asks for your OTP.",
  },
  {
    img: prizeImg,
    alt: "Man looking at a fake prize popup on his computer screen",
    tag: "Fake Prize",
    title: "\"You won an iPhone! Pay Rs 499 to claim it.\"",
    body: "If you did not enter a contest, you did not win anything. Paying to claim a prize is always a scam.",
    redFlag: "You never need to pay money to receive a real prize.",
  },
];

export function ScamVisuals() {
  return (
    <section id="scams" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Recognize the scam"
          title={
            <>
              Scammers target <span className="text-gradient">everyone</span>.
              <br />
              Learn to spot them.
            </>
          }
          desc="These are the most common frauds in India today. If you see something like this, stop and think before you act."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {scams.map((s, i) => (
            <article
              key={s.tag}
              className="reveal group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface/40"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-danger/50 bg-danger/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-lg backdrop-blur">
                  <AlertTriangle className="h-3 w-3" />
                  {s.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-[16px] font-semibold leading-snug tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>

                <div className="mt-4 flex items-start gap-2 rounded-xl border border-success/30 bg-success/10 p-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span className="text-[13px] font-medium leading-snug text-success">
                    {s.redFlag}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
