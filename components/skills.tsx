import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js","Express.js"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "Azure", "GitHub Actions", "Vercel", "Netlify"],
    },
    {
      title: "Mobile",
      skills: ["React Native"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Vite", "Figma", "Postman", "REST APIs"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
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
