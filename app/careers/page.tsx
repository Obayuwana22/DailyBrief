import { MapPin, Briefcase } from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Product Manager - Voice Assistant",
    department: "Product",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 5,
    title: "Data Scientist",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: 6,
    title: "Customer Success Manager",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
  },
];

const CareersPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We&apos;re building the future of news with AI. If you&apos;re
            passionate about technology and journalism, we&apos;d love to hear
            from you.
          </p>
        </section>

        {/* Why Join */}
        <section className="mb-16 p-8 rounded-xl border border-border bg-card/30">
          <h2 className="text-2xl font-serif font-bold mb-6">
            Why Join Nexus?
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>Work on cutting-edge AI and news aggregation technology</li>
            <li>Competitive compensation and comprehensive benefits</li>
            <li>Flexible, remote-friendly work environment</li>
            <li>Impact millions of users daily</li>
            <li>Learn and grow with an exceptional team</li>
          </ul>
        </section>

        {/* Job Listings */}
        <section>
          <h2 className="text-3xl font-serif font-bold mb-8">Open Positions</h2>
          <div className="space-y-4">
            {JOBS.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-card/30 transition-all cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-3">{job.title}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {job.department}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
                    {job.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default CareersPage;
