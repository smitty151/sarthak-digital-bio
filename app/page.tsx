export const dynamic = "force-static";

type KV = { label: string; value: string };

const BIO = {
  name: "Sarthak Mittal",
  about: `I’m a decent person raised by a couple more than decent individuals — my parents and sister. Constantly trying to not just emulate them but also learn from them. I like to stand for what I believe in but am not afraid of differing perspectives and always welcome growth. I love to learn in all aspects of life, and thrive in an environment where I’m being challenged. I know I’m not perfect and I’m not trying to be — just doing my best for myself and everyone around me.`,
  vital: [
    { label: "Date of Birth", value: "January 6, 1995" },
    { label: "Place of Birth", value: "New Delhi" },
    { label: "Residence", value: "Bangalore" },
    { label: "Nationality", value: "Indian" },
    { label: "Religion", value: "Hindu" },
    { label: "Gotra", value: "Mittal" },
    { label: "Height", value: "5’6”" },
  ] as KV[],
  personality: [
    "Hardworking", "Caring", "Considerate", "Genuine", "Straightforward",
    "Honest", "Creative", "Ambitious", "Respectful", "Family-oriented"
  ],
  interests: [
    "Art", "Photography", "Movies", "Philosophy", "Cooking", "Tennis",
    "Badminton", "Dancing", "Water Sports", "Biking", "Outdoor Activities",
    "Travelling", "Animals"
  ],
  education: [
    "M.S. in Business Analytics — University of Houston (2020–2022)",
    "B.S. in Finance & Accounting — Bentley University (2013–2017)",
    "IGCSE & IB — The International School Bangalore (2009–2013)",
  ],
  workCurrent: [
    "PwC Strategy&, Consultant",
    "Family Business",
    "OurEarth BioPlastics — Partner & Co-founder (upcycling; circular economy in plastics)",
    "Investments — building a real-estate investment company focused on value-add and strategic deals",
  ],
  workPast: [
    "Senior Associate — Deals, PricewaterhouseCoopers US (2022–2023)",
    "Acquisitions Associate — Nitya Capital LLC (2017–2022)",
  ],
  family: [
    { label: "Father", value: "Sri Naresh Mittal — BE (Industrial & Production, M.S. Ramaiah, Bangalore); Entrepreneur; Partner & Co-founder, OurEarth BioPlastics; Owner & Founder, Yamuna Industries Ltd; Promoter Member — International Vaish Federation; Trustee — Maharaja Agarsen Hospital, Bangalore; Member — Rotary Bangalore IT Corridor." },
    { label: "Mother", value: "Srimati Deepika Mittal — BS Home Science (Lady Irwin College, Delhi); Entrepreneur; Co-founder, ISAAKA (lifestyle décor)." },
    { label: "Elder Sister", value: "Sakshi Mittal Agarwal — MS (Entrepreneurial Leadership, Babson); BS (Management, LSE); Entrepreneur; Co-founder, ISAAKA; Married, residing in Delhi." },
    { label: "Brother-in-Law", value: "Rachit Agarwal — MS (Business Management, Univ. of Strathclyde, Glasgow); BE (Chemical Engineering, BMS College, Bangalore); Entrepreneur in family agro-chemicals business (Krishi Rasayan Group, Delhi)." },
    { label: "Family Type", value: "Nuclear" },
  ] as KV[],
  contact: {
    primary: "Sri Naresh Mittal",
    phoneDisplay: "+91 98-10067785",
    phoneTel: "+919810067785",
    residence: "Palm Meadows, Whitefield, Bangalore, 560066",
  },
  files: {
    pdf: "/sarthak-bio-2025.pdf",
    docx: "/sarthak-bio-2025.docx",
  }
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="card scroll-mt-20">
      <h2 className="section-title text-xl font-header mb-4">
        <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)]"></span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen pb-16">
      <header className="border-b border-white/10 sticky top-0 backdrop-blur bg-bg/80 z-10">
        <div className="container flex items-center justify-between py-3">
          <div>
            <div className="text-2xl font-header font-bold tracking-wide">Sarthak Mittal</div>
            <div className="text-sm text-[var(--muted)]">Personal Bio</div>
          </div>
          <nav className="nav hidden md:flex gap-4 text-sm">
            <a href="#about">About</a>
            <a href="#vital">At-a-Glance</a>
            <a href="#personality">Personality & Interests</a>
            <a href="#education">Education</a>
            <a href="#work">Work</a>
            <a href="#family">Family</a>
            <a href="#files">Files</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container space-y-6 mt-6">
        <Section id="about" title="About Me">
          <p className="leading-relaxed text-[1.03rem]">{BIO.about}</p>
        </Section>

        <Section id="vital" title="At-a-Glance">
          <dl className="kv">
            {BIO.vital.map((row, i) => (
              <div key={i} className="contents">
                <dt className="text-[var(--muted)]">{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="personality" title="Personality & Interests">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="mb-2 text-lg font-header">Personality</h3>
              <ul className="list space-y-1">{BIO.personality.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-header">Interests</h3>
              <ul className="list space-y-1">{BIO.interests.map((t, i) => <li key={i}>{t}</li>)}</ul>
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          <ul className="list space-y-1">{BIO.education.map((e, i) => <li key={i}>{e}</li>)}</ul>
        </Section>

        <Section id="work" title="Work">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="mb-2 text-lg font-header">Current</h3>
              <ul className="list space-y-1">{BIO.workCurrent.map((w, i) => <li key={i}>{w}</li>)}</ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-header">Past</h3>
              <ul className="list space-y-1">{BIO.workPast.map((w, i) => <li key={i}>{w}</li>)}</ul>
            </div>
          </div>
        </Section>

        <Section id="family" title="Family Background">
          <ul className="list space-y-2">
            {BIO.family.map((f, i) => (
              <li key={i}><span className="font-semibold">{f.label}:</span> {f.value}</li>
            ))}
          </ul>
        </Section>

        <Section id="files" title="Files">
          <div className="grid sm:grid-cols-2 gap-3">
            <a className="btn" href={BIO.files.pdf} target="_blank" rel="noreferrer noopener">Open Bio (PDF)</a>
            <a className="btn" href={BIO.files.docx} target="_blank" rel="noreferrer noopener">Download Bio (DOCX)</a>
          </div>
          <p className="text-sm text-[var(--muted)] mt-2">
            Add files to <code className="px-1 py-0.5 bg-white/5 rounded">/public/</code> before deploying.
          </p>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div><span className="font-semibold">Primary Contact:</span> {BIO.contact.primary}</div>
              <div><span className="font-semibold">Phone:</span> <a className="underline" href={`tel:${BIO.contact.phoneTel}`}>{BIO.contact.phoneDisplay}</a></div>
              <div><span className="font-semibold">Residence:</span> {BIO.contact.residence}</div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="container mt-10 text-xs text-[var(--muted)]">© {new Date().getFullYear()} · Sarthak Mittal — Bio</footer>
    </div>
  );
}
