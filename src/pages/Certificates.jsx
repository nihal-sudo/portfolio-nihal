import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Certificates() {
const certificates = [
  {
    title: " Full Stack Web development ",
    organization: "internshala",
    year: "2025",
    image: "https://training-uploads.internshala.com/nsdc-certificate-images/gje9ltpkiqk.jpg",
    url: "https://trainings.internshala.com/s/v/3741453/bb130a1b",
  },
  {
    title: "web development",
    organization: "Shadow Infosystem",
    year: "2026",
    image: "https://storage3.me-qr.com/image/2026/Aug/25/0854b798-fc74-4256-ab94-58675ea45088.png",
    url: "https://qr1.me-qr.com/data/image-pack/0cmw4ikq",
  },
  {
    title: "",
    organization: "",
    year: "",
    image: "",
    url: "",
  },
  
 
];

  return (
    <div className="min-h-screen py-10 sm:py-14 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4">

            <Award className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Certificates
              </span>
            </h1>

          </div>

          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Professional certifications and achievements that validate my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">

          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative"
            >
              <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-70 transition duration-300" />
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/95 via-[#1e1b4b]/95 to-[#0f172a]/95 backdrop-blur-lg hover:border-cyan-400/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/10 pointer-events-none" />
                <div className="relative overflow-hidden h-24 sm:h-40 md:h-48">

                  <ImageWithFallback
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-cyan-500/10" />
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">

                    <Award className="w-3 h-3 sm:w-5 sm:h-5 text-cyan-300" />

                  </div>
                </div>

                <div className="p-2.5 sm:p-5 flex flex-col justify-between h-[145px] sm:h-[210px]">

                  <div className="space-y-2 sm:space-y-3">

                    <h3 className="text-[13px] sm:text-xl font-bold leading-tight text-white group-hover:text-cyan-300 transition-colors line-clamp-2">

                      {cert.title}

                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">

                      <span className="text-[10px] sm:text-sm text-gray-400 leading-snug line-clamp-2">
                        {cert.organization}
                      </span>

                      <span className="w-fit px-2 py-0.5 text-[9px] sm:text-xs rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">

                        {cert.year}

                      </span>
                    </div>
                  </div>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 sm:mt-5 flex items-center justify-center gap-1.5 sm:gap-2 w-full py-2.5 sm:py-3 rounded-2xl text-[11px] sm:text-sm font-semibold border border-cyan-400/20 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 text-white hover:scale-[1.03] hover:from-cyan-500 hover:via-violet-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg shadow-violet-500/20"
                  >
                    <ExternalLink size={14} />
                    View
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-20 grid grid-cols-3 gap-3 sm:gap-6"
        >

          {[
            { label: "Certificates", value: "5+" },
            { label: "Hours", value: "100+" },
            { label: "Platforms", value: "6+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

              <div className="relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#111827]/95 to-[#1e1b4b]/95 p-3 sm:p-6 text-center backdrop-blur-xl">

                <Award className="w-5 h-5 sm:w-8 sm:h-8 text-cyan-300 mx-auto mb-2 sm:mb-3" />

                <p className="text-xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </p>

                <p className="text-[10px] sm:text-sm text-gray-400 mt-1">
                  {stat.label}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}