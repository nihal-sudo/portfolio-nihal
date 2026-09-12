import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

export function Projects() {

  const projects = [
         

    {  
      title: "API Pariksha",
      description:
        "API Pariksha is a modern, beginner-friendly API testing platform built for developers, students, and API learners.",
      image:
        "https://i.postimg.cc/zvy9wfxm/image.png",
      tags: ["API Testing", "REST API", "Developer Tool", "Open Source", "Debugging"],
      liveUrl:
        "https://pariksha-api.vercel.app/",
      githubUrl:
        "https://github.com/nihal-sudo/pariksha-testing",
    }, 

    // {  
    //   title: "",
    //   description:
    //     "",
    //   image:
    //     "",
    //   tags: [],
    //   liveUrl:
    //     "",
    //   githubUrl:
    //     "",
    // }, 

    {
      title: "NIKE Ecommerce Website",
      description:
        "A modern e-commerce website for the NIKE brand.",
      image:
        "https://raw.githubusercontent.com/nihal-sudo/nike-ecommerce-store/main/Screenshot%202026-08-25%20045441.png",
      tags: ["REACT", "JS", "UI", "Type script"],
      liveUrl:
        "https://nike-ecommerce-store-one.vercel.app/",
      githubUrl:
        "https://github.com/nihal-sudo/nike-ecommerce-store",
    },
    {
      title: "Project Management Dashboard",
      description:
        "A modern project management dashboard built with React.",
      image:
        "https://raw.githubusercontent.com/nihal-sudo/project-management/refs/heads/main/screenshot.png",
      tags: ["REACT", "JS", "Tailwind CSS", "Redux"],
      liveUrl:
        "https://project-management-rmhx.vercel.app/",
      githubUrl:
        "https://github.com/nihal-sudo/project-management",
    },

     {
      title: "simple-react-ecommerce-master",
      description:
        "A modern e-commerce application built with React.",
      image:
        "https://raw.githubusercontent.com/nihal-sudo/simple-react-ecommerce-master/refs/heads/master/Screenshot%202026-08-29%20092036.png",
      tags: ["REACT", "JS", "Redux", "Type script"],
      liveUrl:
        "https://simple-react-ecommerce-maste.vercel.app/",
      githubUrl:
        "https://github.com/nihal-sudo/simple-react-ecommerce-master",
     },

    {
      title: "Todo App",
      description:
        "A small attempt to make an Todo app .",
      image:
        "https://user-images.githubusercontent.com/36126362/213862825-c5c342c6-6ba1-421a-9784-2848368feea4.png",
      tags: ["REACT", "JS", "UI", "MOBILE"],
      liveUrl:
        "https://todo-app-nihal15.vercel.app/",
      githubUrl:
        "https://github.com/nihal-sudo/todo-app",
    },


    {
      title: " Quiz  Web Application Design",
      description:
        "A small attempt to make an Quiz app for Android and Windows. 📱💻",
      image:
        "https://raw.githubusercontent.com/nihal-sudo/QUIZ-WEB-APP/refs/heads/main/PRJ%20ScrnShts/MERGED.png",
      tags: ["JS", "Bootstrap 5", "UI", "Animate.css"],
      liveUrl:
        "https://quiz-web-app-nihal.netlify.app/",
      githubUrl:
        "https://github.com/nihal-sudo/QUIZ-WEB-APP",
    },
  ];

  return (
    <div className="min-h-screen py-10 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-16 space-y-4"
        >

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2 leading-relaxed">
            Things I have built and experimented with.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >

              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500" />

              <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card/60 backdrop-blur-sm">

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 md:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                </div>

                <div className="p-5 sm:p-7 space-y-5">

                  <div className="space-y-3">

                    <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                      {project.title}
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs sm:text-sm bg-primary/10 border border-primary/20 text-primary"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="flex gap-3 pt-2">

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm sm:text-base">

                        <ExternalLink className="w-4 h-4" />
                        Live Demo

                      </button>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="h-12 px-5 sm:px-6 rounded-xl border border-primary/20 bg-card hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2">

                        <GitBranch className="w-4 h-4" />
                        <span className="hidden sm:inline">
                          Code
                        </span>

                      </button>
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}