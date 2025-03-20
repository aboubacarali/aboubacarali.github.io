import { ExternalLink, MoveLeft } from "lucide-react";

// Type modifié sans image
type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-medium"
          >
            <MoveLeft size={18} />
            Retour à la page principale
          </a>
        </div>

        <h2 className="text-4xl font-bold mb-12 text-center">
          Mes <span className="text-emerald-500">Projets</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-6 shadow-lg hover:transform hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-2 text-emerald-400">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-emerald-500 hover:text-emerald-400"
              >
                Voir le projet
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const projects: Project[] = [
  {
    id: 1,
    title: "Boutique en ligne",
    description: "Une boutique en ligne construite avec Angular et Symfony",
    tags: [
      "Angular",
      "Typescript",
      "Tailwind CSS",
      "Symfony",
      "MySQL",
      "API Platform",
    ],
    link: "https://github.com/aboubacarali/store",
  },
  {
    id: 2,
    title: "Système de gestion d'un département",
    description:
      "Application d'un département de gestion d'entreprises, de leurs employés, activités",
    tags: ["React", "Tailwind CSS", "Laravel", "Docker"],
    link: "https://github.com/aboubacarali/management-system",
  },
  {
    id: 3,
    title: "Système d'inventaire en symfony",
    description:
      "Système d'inventaire pour une boutique de produits classés en différentes catégories",
    tags: ["Symfony", "Twig", "Bootstrap"],
    link: "https://github.com/aboubacarali/inventory-system",
  },
  {
    id: 4,
    title: "Jeu du serpent en python",
    description: "Création du jeu de serpent en python.",
    tags: ["Python", "Pygame", "Docker"],
    link: "https://github.com/aboubacarali/snake-game-python",
  },
  {
    id: 5,
    title: "Brick breaker",
    description: "Création du je de casse-brique en python.",
    tags: ["Python", "Pygame"],
    link: "https://github.com/aboubacarali/brick_breaker",
  },
  {
    id: 6,
    title: "Minesweeper",
    description: "Création du jeu de mines en python.",
    tags: ["Python", "Tkinter"],
    link: "https://github.com/aboubacarali/Minesweeper",
  },
];

export default Projects;
