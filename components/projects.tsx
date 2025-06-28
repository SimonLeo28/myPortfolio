"use client";

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Personal from "../app/Images/KumarSirPic.jpg";
import Lic from "../app/Images/LicPic.jpg";
import Technoquest from "../app/Images/TQPic.jpg";
import InternationalConference from "../app/Images/Conference.jpg";

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
      slidesToScroll: 1
    }, 
    [Autoplay({ delay: 3000 })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          {/* Carousel Container */}
          <div className="relative">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex gap-6">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="embla__slide min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                  >
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md hover:bg-background transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Animated Arrow */}
          <div className="animate-bounce mt-10">
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}