import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown , Code, Database, Globe, Smartphone } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, JavaScript, Tailwind CSS",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, PostgreSQL, MongoDB",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "RESTful APIs",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate Full Stack Developer with over 5 years of experience building scalable web applications
                and mobile solutions. I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                My expertise spans across modern frontend frameworks, robust backend systems, and cloud technologies.
                I'm always eager to learn new technologies and stay up-to-date with industry best practices.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me contributing to open-source projects, writing technical articles,
                or exploring the latest in web development trends.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="text-center p-4">
                  <CardContent className="pt-4">
                    <item.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Animated Arrow */}
        <div className="animate-bounce">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 mx-auto text-muted-foreground" />
        </div>
        </div>
      </div>
    </section>
  )
}
