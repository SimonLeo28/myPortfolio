import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown , ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Personal from "../app/Images/KumarSirPic.jpg"
import Lic from "../app/Images/LicPic.jpg"
import Technoquest from "../app/Images/TQPic.jpg"
import InternationalConference from "../app/Images/Conference.jpg"

export function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website of Dr. Kumar B I D created with React, Node JS and PostgreSQL",
      image: Personal,
      technologies: ["Vite + React", "JavaScript", "PostgreSQL", "Tailwind CSS","Vercel"],
      liveUrl: "https://www.kumarbid.in/",
      githubUrl: "https://github.com/SimonLeo28/devfolio",
    },
    {
      title: "Life Insurance Policy Agent",
      description:
        "A website for life insurance policy agent to manage customer policies, claims, and renewals with a user-friendly interface.",
      image: Lic,
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Express.js","Vercel"],
      liveUrl: "https://www.jeevanshanthi.com/",
      githubUrl: "https://github.com/SimonLeo28/lic",
    },
    {
      title: "Event Registration Website",
      description:
        "A Website to register for an inter college Hackathon - TechnoQuest 3.O.",
      image: Technoquest,
      technologies: ["Nextjs", "Express.js", "MongoDB", "Tailwind CSS", "ShadCN UI","Vercel"],
      liveUrl: "https://technoquest.vercel.app/",
      githubUrl: "https://github.com/SimonLeo28/technoquest",
    },
    {
      title: "International Conference Website",
      description:
        "A Website for an international conference with speaker profiles, session schedules, and registration.",
      image: InternationalConference,
      technologies: ["Next.js", "Nodemailer", "MongoDB", "Node JS", "Tailwind CSS", "Express.js","Vercel","ShadCN UI"],
      liveUrl: "https://international-conference-azure.vercel.app/",
      githubUrl: "https://github.com/SimonLeo28/InternationalConference",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
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