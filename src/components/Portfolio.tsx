import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Mail,
  ExternalLink,
  Code,
  User,
  Star,
  BarChart,
  Smartphone,
  Home,
  Send,
  Phone,
  // MapPin,
  Server,
  Terminal,
  // Shield,
  Cpu,
  Monitor,
  Network,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

// Types
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Observer pour détecter la section active lors du défilement
  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Section considérée visible quand 60% est visible
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Accueil", icon: <Home size={24} /> },
    { href: "#about", label: "À propos", icon: <User size={24} /> },
    { href: "#projects", label: "Projets", icon: <Code size={24} /> },
    { href: "#skills", label: "Compétences", icon: <Star size={24} /> },
    { href: "#contact", label: "Contact", icon: <Mail size={24} /> },
  ];

  return (
    <>
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm text-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-emerald-500">
                Aboubacar ALI
              </span>
            </div>

            {/* Desktop Navigation avec liens actifs */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`transition-colors ${
                      activeSection === link.href.substring(1)
                        ? "text-emerald-500 font-medium"
                        : "hover:text-emerald-500"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* New Animated Mobile Menu with active links */}
      <div
        className={`fixed inset-0 bg-slate-900/90 backdrop-blur-lg z-40 md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Close button in top-right */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Centered navigation links */}
          <div className="flex flex-col items-center justify-center flex-grow space-y-8 -mt-16">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-4 text-2xl transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-emerald-500 font-medium"
                    : "hover:text-emerald-500"
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Social links at bottom */}
          <div className="flex justify-center space-x-8 p-8">
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-500 transition-colors"
            >
              <Code size={24} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-500 transition-colors"
            >
              <User size={24} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-emerald-500 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center bg-slate-900 text-white pt-16"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="text-emerald-500">Développeur</span> Full Stack
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-slate-300">
        Passionné par la création d'applications modernes et performantes
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="#contact"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full transition-colors"
        >
          Me contacter
        </a>
        <a
          href="#projects"
          className="border border-white hover:border-emerald-500 hover:text-emerald-500 px-8 py-3 rounded-full transition-colors"
        >
          Voir mes projets
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-slate-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="text-emerald-500">À propos</span> de moi
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-slate-300">
            Développeur passionné avec plus de 3 ans d'expérience dans la
            création d'applications modernes. Spécialisé dans les technologies
            JavaScript/TypeScript modernes, notamment React, Angular et Vue.js.
          </p>
          <p className="text-lg text-slate-300">
            J'aime relever des défis techniques et créer des solutions
            innovantes qui améliorent la vie des utilisateurs.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-emerald-500 hover:text-emerald-400">
              <Code size={24} />
            </a>
            <a href="#" className="text-emerald-500 hover:text-emerald-400">
              <User size={24} />
            </a>
            <a href="#" className="text-emerald-500 hover:text-emerald-400">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-700 p-6 rounded-lg">
            <Code className="text-emerald-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Développement Frontend</h3>
            <p className="text-slate-300">
              JavaScript, TypeScript, Tailwind CSS, Bootstrap ...
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg">
            <BarChart className="text-emerald-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Développement Backend</h3>
            <p className="text-slate-300">
              Node.js, Symfony, Laravel, Spring ...
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg">
            <Smartphone className="text-emerald-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Développement Mobile</h3>
            <p className="text-slate-300">React Native, Flutter, Kotlin</p>
          </div>
          <div className="bg-slate-700 p-6 rounded-lg">
            <Server className="text-emerald-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Infrastructure IT</h3>
            <p className="text-slate-300">Linux, Windows Server, Cisco ...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Découvrez mes <span className="text-emerald-500">Projets</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Explorez une sélection de mes réalisations techniques Chaque projet
            est une aventure unique où je mets en œuvre mes compétences pour
            résoudre des problèmes.
          </p>

          {/* Bouton "Voir mes projets" */}
          <Link
            to="/projects"
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full transition-colors"
          >
            Voir mes projets
            <ExternalLink size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = {
    frontend: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Angular",
      "Tailwind CSS",
      "Bootstrap",
    ],

    backend: [
      "PHP",
      "Laravel",
      "Symfony",
      "Nest.js",
      "Java",
      "Spring",
      "Python",
      "REST API",
      "GraphQL",
    ],

    database: ["MongoDB", "MySQL", "PostgreSQL"],

    mobile: [
      "React Native",
      "Flutter",
      "Expo",
      "Kotlin",
      "App Store Deployment",
    ],
  };

  const infrastructureGroups = [
    {
      title: "Windows Server",
      icon: <Monitor className="text-emerald-500" size={20} />,
      skills: ["AD DS", "DNS", "DHCP", "IIS", "WSUS", "GPO"],
    },
    {
      title: "Linux",
      icon: <Terminal className="text-emerald-500" size={20} />,
      skills: ["Ubuntu", "Debian", "Gentoo", "RedHat"],
    },
    {
      title: "Cisco",
      icon: <Network className="text-emerald-500" size={20} />,
      skills: [
        "Switch/Router",
        "Firewall",
        "VLAN",
        "Trunk",
        "Routage",
        "VPN",
        "WiFi",
      ],
    },
    {
      title: "Scripting",
      icon: <Code className="text-emerald-500" size={20} />,
      skills: ["Python", "Bash", "PowerShell"],
    },
    {
      title: "Virtualisation",
      icon: <Cpu className="text-emerald-500" size={20} />,
      skills: ["VMware ESXi", "VMware Workstation"],
    },
  ];

  // Function to render skill tag
  const renderSkillTag = (skill: string, index: number) => (
    <div
      key={index}
      className="bg-slate-700/80 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300 flex items-center justify-center"
    >
      {skill}
    </div>
  );

  return (
    <section
      id="skills"
      className="py-20 bg-slate-800 text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Mes <span className="text-emerald-500">Compétences</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Development Frontend */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-emerald-500/10 hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-slate-800 rounded-xl">
                <Code className="text-emerald-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold">Frontend</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skillCategories.frontend.map(renderSkillTag)}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-emerald-500/10 hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-slate-800 rounded-xl">
                <BarChart className="text-emerald-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold">Backend</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skillCategories.backend.map(renderSkillTag)}
            </div>
          </div>

          {/* Mobile Development */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-emerald-500/10 hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-slate-800 rounded-xl">
                <Smartphone className="text-emerald-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold">Mobile</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 text-center gap-3">
              {skillCategories.mobile.map(renderSkillTag)}
            </div>
          </div>

          {/* Database */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-emerald-500/10 hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-slate-800 rounded-xl">
                <Database className="text-emerald-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold">Base de données</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skillCategories.database.map(renderSkillTag)}
            </div>
          </div>
        </div>

        {/* Infrastructure IT */}
        <div className="mt-16">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="p-3 bg-slate-800 rounded-xl">
              <Server className="text-emerald-500" size={28} />
            </div>
            <h3 className="text-2xl font-bold">Infrastructure IT</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-emerald-500/10 hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3 mb-6 border-b border-slate-700 pb-3">
                  <div className="p-2 bg-slate-800 rounded-lg">
                    {group.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{group.title}</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-slate-800 p-3 rounded-lg text-sm flex items-center justify-center text-center hover:bg-slate-700 hover:text-emerald-400 transition-all"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="text-emerald-500" size={24} />,
      title: "Email",
      value: "aboubacarali532@gmail.com",
      link: "mailto:aboubacarali532@gmail.com",
    },

    {
      icon: <Phone className="text-emerald-500" size={24} />,
      title: "Téléphone",
      value: "+33 6 05 78 98 23",
      link: "tel:+33605789823",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center_ mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Un <span className="text-emerald-500">recrutement ?</span> Un
            nouveau défi en{" "}
            <span className="text-emerald-500">alternance ?</span>
          </h2>
          <p className="text-slate-400 mt-14 text-lg text-center text-balance max-w-5xl mx-auto">
            Actuellement en alternance, je cherche un nouveau défi en tant que
            développeur fullstack. Passionné par le Dev, le DevOps et
            l'infrastructure, je suis prêt à relever n'importe quel challenge,
            peu importe la technologie. Ma motivation et mon adaptabilité me
            permettent de m'investir pleinement dans chaque projet. Si vous
            recherchez un profil motivé et audacieux, je serai ravi d'échanger
            avec vous sur une opportunité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800 p-8 rounded-2xl space-y-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700 transition-colors"
                >
                  <div className="p-3 bg-slate-800 rounded-lg">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{method.title}</h3>
                    <p className="text-slate-300">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6">Envoyez-moi un message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                  placeholder="Ex: John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                  placeholder="Ex: john@exemple.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Sujet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                  placeholder="Le sujet de votre message"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow h-32"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Envoyer le message</span>
                <Send
                  size={20}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-emerald-500">
            Aboubacar ALI
          </span>
          <p className="text-slate-400 mt-2">© 2025 Tous droits réservés</p>
        </div>
        <div className="flex space-x-6">
          <a href="#skills" className="text-slate-400 hover:text-emerald-500">
            <Code size={20} />
          </a>
          <a href="#about" className="text-slate-400 hover:text-emerald-500">
            <User size={20} />
          </a>
          <a
            href="mailto:aboubacarali532@gmail.com"
            className="text-slate-400 hover:text-emerald-500"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const Portfolio = () => (
  <div className="min-h-screen bg-slate-900">
    <Navigation />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

export default Portfolio;
