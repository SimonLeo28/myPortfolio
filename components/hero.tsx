import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import MyPic from "../app/Images/MyPic.png"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src={MyPic}
              alt="John Doe"
              width={200}
              height={150}
              className="rounded-full mx-auto mb-8 border-4 border-background shadow-xl"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Full Stack Developer</h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies. Passionate about clean code, user experience, and
            innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/SimonLeo28" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/simon-leo-alexander-500983332/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:simon28.2004@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
