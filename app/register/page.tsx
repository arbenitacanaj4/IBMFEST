"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { CheckCircle, Calendar, Users, MapPin, Mail } from "lucide-react"

export default function RegisterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    role: "",
    workshopInterest: "",
    dietaryRestrictions: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Registration data:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="border-primary/20">
                <CardContent className="p-12">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h1 className="text-3xl font-bold text-primary mb-4">Registration Successful!</h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    Thank you for registering for IBM Quantum Fall Fest 2025. We're excited to have you join us!
                  </p>
                  <div className="bg-secondary/50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-primary mb-2">What's Next?</h3>
                    <ul className="text-left text-muted-foreground space-y-2">
                      <li>• You'll receive a confirmation email within 24 hours</li>
                      <li>• Event details and schedule will be sent closer to the date</li>
                      <li>• Follow us on social media for updates</li>
                    </ul>
                  </div>
                  <Button asChild>
                    <a href="/">Return to Homepage</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Register Now</h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Join us for IBM Quantum Fall Fest 2025 - Celebrating 100 Years of Quantum
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Secure your spot at this exclusive student-led event bringing together quantum enthusiasts, researchers, and
            industry professionals.
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-primary mb-1">When</h3>
                <p className="text-muted-foreground">October 2025</p>
                <p className="text-sm text-muted-foreground">2 Days of Events</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-primary mb-1">Where</h3>
                <p className="text-muted-foreground">BME University</p>
                <p className="text-sm text-muted-foreground">Budapest, Hungary</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-primary mb-1">Who</h3>
                <p className="text-muted-foreground">Students & Professionals</p>
                <p className="text-sm text-muted-foreground">All Levels Welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Registration Form</CardTitle>
                <CardDescription>Please fill out all required fields to complete your registration.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution/Organization *</Label>
                    <Input
                      id="institution"
                      required
                      value={formData.institution}
                      onChange={(e) => handleInputChange("institution", e.target.value)}
                      placeholder="University, Company, or Organization"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role *</Label>
                    <Select onValueChange={(value) => handleInputChange("role", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="undergraduate">Undergraduate Student</SelectItem>
                        <SelectItem value="graduate">Graduate Student</SelectItem>
                        <SelectItem value="phd">PhD Student</SelectItem>
                        <SelectItem value="postdoc">Postdoctoral Researcher</SelectItem>
                        <SelectItem value="faculty">Faculty/Professor</SelectItem>
                        <SelectItem value="industry">Industry Professional</SelectItem>
                        <SelectItem value="researcher">Independent Researcher</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="workshopInterest">Workshop Interest (Optional)</Label>
                    <Select onValueChange={(value) => handleInputChange("workshopInterest", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quantum-algorithms">Quantum Algorithms</SelectItem>
                        <SelectItem value="quantum-hardware">Quantum Hardware</SelectItem>
                        <SelectItem value="quantum-software">Quantum Software Development</SelectItem>
                        <SelectItem value="quantum-applications">Quantum Applications</SelectItem>
                        <SelectItem value="quantum-theory">Quantum Theory</SelectItem>
                        <SelectItem value="hackathon">Hackathon Participation</SelectItem>
                        <SelectItem value="networking">Networking Events</SelectItem>
                        <SelectItem value="all">All of the above</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietaryRestrictions">Dietary Restrictions/Allergies (Optional)</Label>
                    <Textarea
                      id="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                      placeholder="Please let us know about any dietary restrictions or allergies"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                        required
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the terms and conditions and privacy policy *
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="subscribeNewsletter"
                        checked={formData.subscribeNewsletter}
                        onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked as boolean)}
                      />
                      <Label htmlFor="subscribeNewsletter" className="text-sm">
                        Subscribe to our newsletter for quantum computing updates
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full text-lg py-3" size="lg">
                    Complete Registration
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alternative Registration */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Alternative Registration</h2>
            <p className="text-muted-foreground mb-6">
              If you prefer to use an external registration platform, you can also register through our partner portal.
            </p>
            <div className="bg-secondary/50 p-6 rounded-lg">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-muted-foreground mb-4">
                For questions about registration or if you encounter any issues, please contact us:
              </p>
              <a
                href="mailto:xxx@gmail.com"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                xxx@gmail.com
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
