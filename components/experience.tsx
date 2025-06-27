import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown , CalendarDays, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Product Development Intern",
      company: "Yuvamytr",
      location: "Bengaluru, Karnataka, India",
      period: "2024 - Present",
      description:
        "A Product Development Intern at Yuvamytr, where I am involved in developing and maintaining web applications using modern technologies.",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Next JS", "Tailwind CSS"],
      achievements: [
        "Developed a project - Kwikstack",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Animated Arrow */}
        <div className="animate-bounce mt-10">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
