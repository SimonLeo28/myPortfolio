import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import MyPic from "../app/Images/MyPic.png"

export function Hero() {
  return (
   <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 pt-20 sm:pt-24"> {/* Added top padding */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      {/* Image Container with margin-top */}
      <div className="mt-8 sm:mt-12 mb-6 sm:mb-8 w-full flex justify-center"> {/* Adjusted margins */}
        <Image
          src={MyPic}
          alt="John Doe"
          width={160}
          height={160}
          className="rounded-full border-4 border-background shadow-xl 
                    w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52
                    transition-all duration-300 hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="w-full px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Full Stack Developer
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 mx-auto max-w-md sm:max-w-xl md:max-w-2xl">
          Crafting digital experiences with modern technologies. Passionate about clean code, user experience, and
          innovative solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 w-full">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
          <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-12 sm:w-12" asChild>
            <a href="https://github.com/SimonLeo28" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-12 sm:w-12" asChild>
            <a href="https://www.linkedin.com/in/simon-leo-alexander-500983332/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-12 sm:w-12" asChild>
            <a href="mailto:simon28.2004@gmail.com">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>

        {/* Animated Arrow */}
        <div className="animate-bounce">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
