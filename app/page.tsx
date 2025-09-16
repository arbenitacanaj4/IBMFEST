import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, Mail, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
              IBM Quantum Fall Fest 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              IBM x BME – Celebrating 100 Years of Quantum
            </p>
            <p className="text-lg text-muted-foreground mb-8">A student-led event</p>
            <div className="mb-12">
              <img
                src="/quantum-computing-celebration-banner-with-ibm-and-.jpg"
                alt="IBM Quantum Fall Fest Banner"
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
            <Button size="lg" asChild className="text-lg px-8 py-3">
              <Link href="/register">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">About the Event</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  It's almost that time of year again! Qiskit Fall Fest is returning for its fifth annual installment to
                  once again bring the quantum community together for a global celebration of quantum technology,
                  research, and collaboration.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  In honor of the 2025 International Year of Quantum Science and Technology, this year's theme
                  celebrates the century-long history of quantum science and innovation. This student-led collaboration
                  between IBM and BME showcases the next generation of quantum researchers.
                </p>
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-2">100 Years of Quantum</h3>
                  <p className="text-muted-foreground">
                    Celebrating a century of quantum breakthroughs and looking forward to the next 100 years of
                    innovation.
                  </p>
                </div>
              </div>
              <div>
                <img src="/quantum-science-history-timeline-illustration.jpg" alt="Quantum Science Timeline" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
              <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="/ibm-logo.png" alt="IBM Logo" className="mx-auto" />
              </div>
              <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="/bme-budapest-university-logo.jpg" alt="BME Logo" className="mx-auto" />
              </div>
              <div className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="/partner-organization-logo.jpg" alt="Partner Logo" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Event Schedule</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Day 1</CardTitle>
                  <CardDescription className="text-lg">Quantum Insights Day</CardDescription>
                </CardHeader>
                <CardContent className="group-hover:bg-secondary/20 transition-colors p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-primary" size={20} />
                      <span className="text-muted-foreground">Introduction & Speaker Sessions</span>
                    </div>
                    <ul className="space-y-2 text-left text-muted-foreground">
                      <li>• Opening Keynote: The Future of Quantum Computing</li>
                      <li>• Quantum Algorithms in Practice</li>
                      <li>• Industry Applications of Quantum Technology</li>
                      <li>• Research Frontiers in Quantum Science</li>
                      <li>• Panel Discussion: Next 100 Years of Quantum</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Day 2</CardTitle>
                  <CardDescription className="text-lg">Hackathon Day</CardDescription>
                </CardHeader>
                <CardContent className="group-hover:bg-secondary/20 transition-colors p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="text-primary" size={20} />
                      <span className="text-muted-foreground">Hands-on Development</span>
                    </div>
                    <ul className="space-y-2 text-left text-muted-foreground">
                      <li>• Team Formation & Challenge Introduction</li>
                      <li>• Working Sessions with Mentorship</li>
                      <li>• Project Development Time</li>
                      <li>• Pitch Presentations</li>
                      <li>• Jury Evaluation & Closing Ceremony</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Featured Speakers</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((speaker) => (
                <Card key={speaker} className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <img
                      src={`/professional-speaker.png?height=150&width=150&query=professional speaker ${speaker} portrait`}
                      alt={`Speaker ${speaker}`}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-primary mb-1">Dr. Speaker Name</h3>
                    <p className="text-sm text-muted-foreground mb-2">Senior Quantum Researcher</p>
                    <p className="text-xs text-muted-foreground">Quantum Computing Applications</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Venue</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <div className="bg-secondary/50 p-6 rounded-lg mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-primary mb-2">
                        Budapest University of Technology and Economics
                      </h3>
                      <p className="text-muted-foreground">
                        1111 Budapest, Műegyetem rkp. 3.
                        <br />
                        Building Q, Conference Hall
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <strong>Public Transport:</strong> Metro Line 4 - Gellért tér station
                    </p>
                    <p>
                      <strong>Accessibility:</strong> Wheelchair accessible entrance and facilities
                    </p>
                    <p>
                      <strong>Parking:</strong> Limited on-site parking available
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  src="/bme-university-building-exterior.jpg"
                  alt="BME University Building"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Interactive Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">General Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="text-primary" size={20} />
                    <a
                      href="mailto:xxx@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      xxx@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Organizing Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-left">
                    <p className="font-medium">Gvantsa Kapanadze</p>
                    <a
                      href="mailto:gkapanadze@edu.bme.hu"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      gkapanadze@edu.bme.hu
                    </a>
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Rodina Osman</p>
                    <a
                      href="mailto:rodainaosman9@edu.bme.hu"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      rodainaosman9@edu.bme.hu
                    </a>
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Arbenite Canaj</p>
                    <a
                      href="mailto:arbenitecanaj@edu.bme.hu"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      arbenitecanaj@edu.bme.hu
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-primary mb-6">Follow Us</h3>
              <div className="flex justify-center gap-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link href="/register">Register Now</Link>
              </Button>
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
