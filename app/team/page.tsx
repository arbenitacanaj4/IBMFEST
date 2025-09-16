import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Gvantsa Kapanadze",
      role: "Lead Organizer",
      email: "gkapanadze@edu.bme.hu",
      description:
        "Computer Science student passionate about quantum computing and event coordination. Leading the overall organization and partnerships.",
      image: "/team-member-gvantsa.jpg",
    },
    {
      name: "Rodina Osman",
      role: "Technical Coordinator",
      email: "rodainaosman9@edu.bme.hu",
      description:
        "Physics student specializing in quantum mechanics. Coordinating technical workshops and hackathon activities.",
      image: "/team-member-rodina.jpg",
    },
    {
      name: "Arbenite Canaj",
      role: "Communications Manager",
      email: "arbenitecanaj@edu.bme.hu",
      description:
        "Engineering student with expertise in project management. Managing communications and participant engagement.",
      image: "/team-member-arbenite.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Organizing Team</h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Student-led team bringing IBM Quantum Fall Fest to life
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated students from Budapest University of Technology and Economics who are making this quantum
            celebration possible through their passion and commitment.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-secondary group-hover:border-primary transition-colors"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                    <p className="text-lg font-medium text-accent mb-4">{member.role}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{member.description}</p>
                    <div className="flex justify-center items-center gap-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title={`Email ${member.name}`}
                      >
                        <Mail size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title={`${member.name} on LinkedIn`}
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title={`${member.name} on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Our Mission</h2>
            <div className="bg-secondary/50 p-8 rounded-lg">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As students at Budapest University of Technology and Economics, we are excited to bring the IBM Quantum
                Fall Fest to our campus and community. Our goal is to create an inclusive, educational, and inspiring
                event that celebrates the incredible journey of quantum science over the past 100 years.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through workshops, hackathons, and networking opportunities, we aim to connect students, researchers,
                and industry professionals in the quantum computing space, fostering collaboration and innovation for
                the next century of quantum breakthroughs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Join Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to be part of this quantum celebration? Register now and join us for two days of learning,
              innovation, and community building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Register Now
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 text-lg font-medium text-muted-foreground hover:bg-secondary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2025 IBM Quantum Fall Fest. A student-led collaboration between IBM and BME.</p>
        </div>
      </footer>
    </div>
  )
}
