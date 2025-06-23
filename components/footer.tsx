import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">John Doe</h3>
              <p className="text-muted-foreground mb-4">
                Full Stack Developer passionate about creating amazing digital experiences.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/SimonLeo28" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/simon-leo-alexander-500983332/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://x.com/Simon282004" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:simon28.2004@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>API Development</li>
                <li>Database Design</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Simon Leo Alexander. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
