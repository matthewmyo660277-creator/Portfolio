import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import {
  personalDetails,
  skillCategories,
  contactDetails,
} from "./data/portfolioData";
import {
  Mail,
  Phone,
  ExternalLink,
  Github,
  Layers,
  Eye,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

import profileImg from "./assets/profile.jpg";
import profileSuit from "./assets/profile-suit.jpg";

import certL5 from "./assets/certificates/ncc5.png";
import certL5Transcript from "./assets/certificates/ncc5-transcript.png";
import certL4 from "./assets/certificates/ncc4.png";
import certL4Transcript from "./assets/certificates/ncc4-transcript.png";
import certBSE from "./assets/certificates/bse.jpg";
import certPython from "./assets/certificates/python.jpg";
import certEBA from "./assets/certificates/eba.jpg";
import certIT from "./assets/certificates/it.jpg";

import project1 from "./assets/projects/m3.png";
import project2 from "./assets/projects/m1.png";
import project3 from "./assets/projects/m2.png";
import project4 from "./assets/projects/m4.png";
import project5 from "./assets/projects/m5.png";
import project6 from "./assets/projects/m6.png";
import project7 from "./assets/projects/m7.png";
import project8 from "./assets/projects/m8.png";
import project9 from "./assets/projects/m9.png";
import project10 from "./assets/projects/m10.png";
import project11 from "./assets/projects/m11.png";
import project12 from "./assets/projects/m12.png";
import project13 from "./assets/projects/m13.png";
import project14 from "./assets/projects/m14.png";
import project15 from "./assets/projects/m15.png";
import project16 from "./assets/projects/m16.png";
import project17 from "./assets/projects/m17.png";
import project18 from "./assets/projects/m18.png";
import project19 from "./assets/projects/m19.png";
import project20 from "./assets/projects/m20.png";
import localHarvestImage from "./assets/projects/L1.png";
import localHarvestVideo from "./assets/projects/Lr.mp4";
import mobileAppImage from "./assets/projects/ma.png";
import mobileAppVideo from "./assets/projects/ma.mp4";
import artWorld1 from "./assets/projects/cp1.png";
import artWorld2 from "./assets/projects/cp2.png";
import artWorld3 from "./assets/projects/cp3.png";
import artWorld4 from "./assets/projects/cp4.png";
import artWorld5 from "./assets/projects/cp5.png";
import artWorld6 from "./assets/projects/cp6.png";
import artWorld7 from "./assets/projects/cp7.png";
import artWorld8 from "./assets/projects/cp8.png";
import artWorld9 from "./assets/projects/cp9.png";
import artWorld10 from "./assets/projects/cp10.png";
import artWorld11 from "./assets/projects/cp11.png";
import fitness1 from "./assets/projects/T1.png";
import fitness2 from "./assets/projects/T2.png";
import fitness3 from "./assets/projects/T3.png";
import fitness4 from "./assets/projects/T4.png";

// FoodFusion project assets imports (F1 to F13)
import foodFusion1 from "./assets/projects/F1.png";
import foodFusion2 from "./assets/projects/F2.png";
import foodFusion3 from "./assets/projects/F3.png";
import foodFusion4 from "./assets/projects/F4.png";
import foodFusion5 from "./assets/projects/F5.png";
import foodFusion6 from "./assets/projects/F6.png";
import foodFusion7 from "./assets/projects/F7.png";
import foodFusion8 from "./assets/projects/F8.png";
import foodFusion9 from "./assets/projects/F9.png";
import foodFusion10 from "./assets/projects/F10.png";
import foodFusion11 from "./assets/projects/F11.png";
import foodFusion12 from "./assets/projects/F12.png";
import foodFusion13 from "./assets/projects/F13.png";

interface ImageItem {
  title: string;
  url: string;
}

interface EducationItem {
  year: string;
  title: string;
  institution: string;
  details?: string;
  images?: ImageItem[];
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  images: ImageItem[];
  mediaOnly?: boolean;
  video?: string;
  stackLabel?: string;
}

const educationData: EducationItem[] = [
  {
    year: "2027",
    title: "BSc (Hons) Computer Science",
    institution: "University of Wolverhampton",
    details:
      "Advanced software engineering, distributed systems, and computer science fundamentals.",
  },
  {
    year: "2026",
    title: "NCC Education Level 5 Diploma in Computing",
    institution: "Strategy First International College Mandalay / NCC Education",
    details: "Merit mark of 67% in qualification awarded by NCC Education.",
    images: [
      { title: "Level 5 Diploma Certificate", url: certL5 },
      { title: "Academic Transcript", url: certL5Transcript },
    ],
  },
  {
    year: "2025",
    title: "NCC Education Level 4 Diploma in Computing",
    institution: "Strategy First University (Mandalay Branch) / NCC Education",
    details: "Merit mark of 64% in qualification awarded by NCC Education.",
    images: [
      { title: "Level 4 Diploma Certificate", url: certL4 },
      { title: "Academic Transcript", url: certL4Transcript },
    ],
  },
  {
    year: "2025",
    title: "Basic Software Engineering",
    institution: "KMD Training Center",
    details: "Algorithm with Pseudo Code & Java Programming.",
    images: [{ title: "Certificate of Competence", url: certBSE }],
  },
  {
    year: "2024",
    title: "Python Programming",
    institution: "KMD Training Center",
    details:
      "Python Programming, Introduction to MySQL Database, Practical Project.",
    images: [{ title: "Certificate of Competence", url: certPython }],
  },
  {
    year: "2023",
    title: "Information Technology & Business Applications",
    institution: "KMD Training Center",
    details: "IT Competence & Microsoft Excel in Business Application.",
    images: [
      { title: "Excel in Business Application", url: certEBA },
      { title: "IT Competence Certificate", url: certIT },
    ],
  },
];

const moodifyImages: ImageItem[] = [
  { title: "Moodify - Home Page", url: project1 },
  { title: "Moodify - Login Page", url: project2 },
  { title: "Moodify - Register Page", url: project3 },
  { title: "Moodify - Emotion Detection", url: project4 },
  { title: "Moodify - Happy Mood", url: project5 },
  { title: "Moodify - Sad Mood", url: project6 },
  { title: "Moodify - Angry Mood", url: project7 },
  { title: "Moodify - Neutral Mood", url: project8 },
  { title: "Moodify - Music Recommendation", url: project9 },
  { title: "Moodify - Music Player", url: project10 },
  { title: "Moodify - Favourite Songs", url: project11 },
  { title: "Moodify - Listening History", url: project12 },
  { title: "Moodify - Manual Mood Selector", url: project13 },
  { title: "Moodify - Song Catalogue", url: project14 },
  { title: "Moodify - Recommendation Result", url: project15 },
  { title: "Moodify - User Interface", url: project16 },
  { title: "Moodify - Responsive Design", url: project17 },
  { title: "Moodify - Admin Interface", url: project18 },
  { title: "Moodify - Database Management", url: project19 },
  { title: "Moodify - Final Interface", url: project20 },
];

const matthewsArtWorldImages: ImageItem[] = [
  { title: "Fig 3.3: Home Page", url: artWorld1 },
  { title: "Fig 3.4: Premium Page", url: artWorld2 },
  { title: "Fig 3.5: About Us", url: artWorld3 },
  { title: "Fig 3.6: Products Page", url: artWorld4 },
  { title: "Fig 3.7: Account Page", url: artWorld5 },
  { title: "Fig 3.8: Wishlist Page", url: artWorld6 },
  { title: "Fig 3.9: Admin Dashboard UI", url: artWorld7 },
  { title: "Fig 3.10: User Management UI Page", url: artWorld8 },
  { title: "Fig 3.11: Products Management UI Page", url: artWorld9 },
  { title: "Fig 3.12: Brand Management UI Page", url: artWorld10 },
  { title: "Fig 3.13: Supplier Management UI Page", url: artWorld11 },
];

const fitnessTrackingImages: ImageItem[] = [
  { title: "Login Screen (Image 1)", url: fitness1 },
  { title: "Register Screen (Image 2)", url: fitness2 },
  { title: "Activity Selection Screen (Image 3)", url: fitness3 },
  { title: "Burned Calories Screen (Image 4)", url: fitness4 },
];

const foodFusionImages: ImageItem[] = [
  { title: "Fig 4.1: Register popup", url: foodFusion1 },
  { title: "Fig 4.2: Cookie", url: foodFusion2 },
  { title: "Fig 4.3: Social Media", url: foodFusion3 },
  { title: "Fig 4.4: Private Policy", url: foodFusion4 },
  { title: "Fig 5.1: Home page", url: foodFusion5 },
  { title: "Fig 5.2: Home page", url: foodFusion6 },
  { title: "Fig 5.3: About us", url: foodFusion7 },
  { title: "Fig 5.4: Recipe", url: foodFusion8 },
  { title: "Fig 5.5: Event", url: foodFusion9 },
  { title: "Fig 5.6: Community", url: foodFusion10 },
  { title: "Fig 5.7: Culinary resource", url: foodFusion11 },
  { title: "Fig 5.8: Educational resource", url: foodFusion12 },
  { title: "Fig 5.9: Contact", url: foodFusion13 },
];

const projectsData: Project[] = [
  {
    title: "Moodify",
    subtitle: "Web-based Emotion-Aware Music Recommendation System",
    description:
      "Moodify is a web-based emotion-aware music recommendation system that detects a user's facial expression using AI and recommends curated songs based on their current mood. The system combines real-time client-side emotion detection with a personalized music recommendation experience, while also providing manual mood selection for users who prefer not to use the camera.",
    technologies: [
      "React 19",
      "JavaScript",
      "JSX",
      "CSS",
      "Python 3",
      "Flask 3.0.3",
      "face-api.js",
      "TinyFaceDetector",
      "FaceExpressionNet",
      "MySQL",
      "SQLite",
      "REST API",
      "YouTube",
    ],
    features: [
      "Real-time facial emotion detection",
      "Happy, Sad, Angry and Neutral moods",
      "Manual mood selection",
      "Personalized music recommendations",
      "Favourite songs",
      "Listening history",
      "User registration and login",
      "MySQL database support",
      "SQLite fallback",
      "YouTube music playback",
      "Responsive user interface",
      "Admin song management",
    ],
    github:
      "https://github.com/matthewmyo660277-creator/Music-Recommendation-System-Based-on-User-s-Facial-Emotion",
    images: moodifyImages,
    stackLabel: "React + Flask",
  },
  {
    title: "Local Harvest",
    subtitle: "Local Farmer Marketplace",
    description:
      "Local Harvest is a farmer marketplace project designed to connect local farmers with customers and make it easier to discover fresh local products.",
    technologies: [],
    features: [],
    github:
      "https://github.com/matthewmyo660277-creator/local_farmer_marketplace",
    images: [{ title: "Local Harvest Preview", url: localHarvestImage }],
    mediaOnly: true,
    video: localHarvestVideo,
    stackLabel: "Marketplace",
  },
  {
    title: "MOBILE APPLICATION DESIGN AND DEVELOPMENT",
    subtitle: "Mobile Application Design & Development",
    description:
      "This project showcases a mobile application design and development project, with a focus on a clean interface, intuitive navigation, and a smooth user experience across mobile screens.",
    technologies: [],
    features: [],
    images: [{ title: "Mobile Application Design Preview", url: mobileAppImage }],
    mediaOnly: true,
    video: mobileAppVideo,
    stackLabel: "Mobile Application",
  },
  {
    title: "Fitness Tracking Mobile App",
    subtitle: "Mobile Fitness and Calorie Tracking Application",
    description:
      "A mobile fitness tracking application concept that lets users log in or register, choose a workout activity such as biking, boxing, or workout, and enter workout duration to estimate calories burned. The screenshots show the core user flow from authentication through activity selection and calorie tracking.",
    technologies: ["Kotlin", "Android", "Material Design", "PHP", "MySQL"],
    features: [
      "User login screen",
      "New user registration",
      "Workout activity selection",
      "Workout duration input",
      "Burned calorie calculation screen",
      "Touch-friendly mobile interface",
    ],
    images: fitnessTrackingImages,
    stackLabel: "Android Fitness App",
  },
  {
    title: "Matthew’s Art World",
    subtitle: "Art Supplies E-Commerce Platform",
    description:
      "Matthew’s Art World is a responsive e-commerce platform for browsing and purchasing art supplies. The project includes customer-facing pages for the home page, premium collection, about us, product catalogue, account, and wishlist, together with administration interfaces for dashboard analytics, user management, product management, brand management, and supplier management.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap 5", "XAMPP"],
    features: [
      "Responsive home page and premium collection",
      "Product browsing and search",
      "Customer account management",
      "Wishlist management",
      "Admin dashboard",
      "User management",
      "Product management",
      "Brand management",
      "Supplier management",
      "MySQL database integration",
    ],
    images: matthewsArtWorldImages,
    stackLabel: "PHP + MySQL",
  },
  {
    title: "FoodFusion",
    subtitle: "Community Food & Recipe Vlog Web Platform",
    description:
      "FoodFusion is a comprehensive community web site where users can upload, share, and discover delicious meals, recipes, and food vlogs. It features interactive community engagement, user authentication popups, culinary and educational resources, events, and contact pages.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "REST API",
    ],
    features: [
      "Register popup & user authentication",
      "Cookie consent management",
      "Social media integration",
      "Privacy policy documentation",
      "Interactive home pages & food discovery",
      "About us platform story",
      "Recipe catalog & sharing",
      "Community events management",
      "Culinary and educational resources",
      "Contact support page",
    ],
    github: "https://github.com/matthewmyo660277-creator",
    images: foodFusionImages,
    stackLabel: "Community Web App",
  },
];

export const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [previewGallery, setPreviewGallery] = useState<ImageItem[]>([]);
  const [previewIndex, setPreviewIndex] = useState(0);

  const openImagePreview = (images: ImageItem[], index: number) => {
    if (!images.length || !images[index]) return;
    setPreviewGallery(images);
    setPreviewIndex(index);
    setSelectedImage(images[index]);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
    setPreviewGallery([]);
    setPreviewIndex(0);
  };

  const showPreviousImage = () => {
    if (previewGallery.length < 2) return;
    const nextIndex = (previewIndex - 1 + previewGallery.length) % previewGallery.length;
    setPreviewIndex(nextIndex);
    setSelectedImage(previewGallery[nextIndex]);
  };

  const showNextImage = () => {
    if (previewGallery.length < 2) return;
    const nextIndex = (previewIndex + 1) % previewGallery.length;
    setPreviewIndex(nextIndex);
    setSelectedImage(previewGallery[nextIndex]);
  };
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const goBackToProjects = () => {
    setSelectedProject(null);
    window.setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  // Local Harvest has a simple media view: one image and one video only.
  if (selectedProject?.mediaOnly) {
    return (
      <div className="min-h-screen bg-[#e8f7f4] text-slate-800 font-sans antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-6">
          <button
            type="button"
            onClick={goBackToProjects}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#0d7a66] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#0a6353]"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </button>

          <header className="mb-10 text-center">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-[#0d7a66]">
              Featured Project
            </p>
            <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">
              {selectedProject.title}
            </h1>
            <p className="mt-3 text-base font-semibold text-[#0d7a66] sm:text-lg">
              {selectedProject.subtitle}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              {selectedProject.description}
            </p>
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0d7a66] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0a6353]"
              >
                <Github size={17} />
                GitHub Repository
                <ExternalLink size={14} />
              </a>
            )}
          </header>

          <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <div className="border-b border-slate-100 px-5 py-5 sm:px-8">
              <h2 className="text-xl font-black text-slate-900 sm:text-2xl">Project Image</h2>
              <p className="mt-1 text-sm text-slate-500">{selectedProject.title} preview</p>
            </div>
            <div className="flex min-h-[260px] items-center justify-center bg-white p-5 sm:min-h-[420px] sm:p-10">
              <img
                src={selectedProject.images[0]?.url ?? localHarvestImage}
                alt={`${selectedProject.title} preview`}
                className="max-h-[650px] w-full max-w-5xl object-contain"
              />
            </div>
          </section>

          <section className="mt-8 overflow-hidden rounded-[2rem] border border-emerald-900/20 bg-gradient-to-br from-[#0d7a66] to-[#075244] shadow-xl">
            <div className="px-5 pt-6 text-white sm:px-8 sm:pt-8">
              <h2 className="text-xl font-black sm:text-2xl">Project Video</h2>
              <p className="mt-1 text-sm text-emerald-50/90">Watch the project recording</p>
            </div>
            <div className="p-4 sm:p-8">
              <video
                className="mx-auto block max-h-[75vh] w-full max-w-5xl rounded-2xl border border-white/20 bg-black shadow-2xl"
                controls
                preload="metadata"
                playsInline
              >
                <source src={selectedProject.video} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          </section>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={goBackToProjects}
              className="inline-flex items-center gap-2 rounded-full bg-[#0d7a66] px-8 py-3 font-bold text-white shadow-md transition hover:bg-[#0a6353]"
            >
              <ArrowLeft size={17} />
              Back to Portfolio
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Full details view for projects with screenshots and technologies.
  if (selectedProject) {
    return (
      <div className="min-h-screen bg-[#e8f7f4] text-slate-800 font-sans antialiased">
        <Navbar />

        <main className="max-w-6xl mx-auto px-5 sm:px-6 pt-28 pb-16">
          <button
            type="button"
            onClick={goBackToProjects}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#0d7a66] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#0a6353]"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </button>

          <article className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-[#0d7a66]">
                  Project Details
                </p>
                <h1 className="mb-3 text-4xl font-black text-slate-900 sm:text-5xl">
                  {selectedProject.title}
                </h1>
                <h2 className="mb-5 text-base font-semibold leading-relaxed text-[#0d7a66] sm:text-lg">
                  {selectedProject.subtitle}
                </h2>
                <p className="mb-7 text-sm leading-7 text-slate-600 sm:text-base">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0d7a66] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0a6353]"
                    >
                      <Github size={17} />
                      GitHub
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-[#0d7a66] px-6 py-3 text-sm font-bold text-[#0d7a66] transition hover:bg-[#0d7a66] hover:text-white"
                    >
                      <Eye size={17} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d7a66] to-[#075244] p-6 sm:p-10">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
                <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/5" />
                {selectedProject.images[0] && (
                  <button
                    type="button"
                    onClick={() => openImagePreview(selectedProject.images, 0)}
                    className="relative z-10 w-full overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
                    aria-label={`Preview ${selectedProject.images[0].title}`}
                  >
                    <img
                      src={selectedProject.images[0].url}
                      alt={selectedProject.images[0].title}
                      className="w-full object-cover transition duration-500 hover:scale-[1.02]"
                    />
                  </button>
                )}
              </div>
            </div>
          </article>

          {selectedProject.technologies.length > 0 && (
            <section className="mt-8 rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f7f4] text-[#0d7a66]">
                  <Layers size={22} />
                </div>
                <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
                  Technologies Used
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies.map((technology, index) => (
                  <span
                    key={`${technology}-${index}`}
                    className="rounded-lg border border-emerald-200 bg-[#e8f7f4] px-3 py-2 text-sm font-semibold text-[#0d7a66]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          )}

          {selectedProject.features.length > 0 && (
            <section className="mt-8 rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f7f4] text-[#0d7a66]">
                  <Layers size={22} />
                </div>
                <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
                  Key Features
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {selectedProject.features.map((feature, index) => (
                  <div
                    key={`${feature}-${index}`}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-emerald-200 hover:bg-[#e8f7f4]/60"
                  >
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0d7a66]" />
                    <span className="text-sm leading-6 text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mt-8 rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg sm:p-9">
            <div className="mb-7">
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#0d7a66]">
                Explore the Project
              </p>
              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                Interface Screenshots
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Click any screenshot to preview it in full size. Use the left and right arrows to move through screenshots.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {selectedProject.images.map((image, index) => (
                <button
                  type="button"
                  key={`${image.title}-${index}`}
                  onClick={() => openImagePreview(selectedProject.images, index)}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0d7a66] hover:shadow-xl"
                >
                  <div className="aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={image.url}
                      alt={image.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-4">
                    <div>
                      <p className="mb-1 text-xs font-bold text-[#0d7a66]">
                        SCREENSHOT {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-sm font-semibold text-slate-800">
                        {image.title}
                      </p>
                    </div>
                    <Eye size={19} className="shrink-0 text-[#0d7a66]" />
                  </div>
                </button>
              ))}
            </div>
          </section>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={goBackToProjects}
              className="inline-flex items-center gap-2 rounded-full bg-[#0d7a66] px-8 py-3 font-bold text-white shadow-md transition hover:bg-[#0a6353]"
            >
              <ArrowLeft size={17} />
              Back to Portfolio
            </button>
          </div>
        </main>

        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={closeImagePreview}
          >
            <div
              className="relative w-full max-w-6xl rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#0d7a66]">
                    Screenshot Preview
                  </p>
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeImagePreview}
                  aria-label="Close image preview"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                >
                  <X size={21} />
                </button>
              </div>
              <div className="relative flex max-h-[75vh] items-center justify-center overflow-hidden bg-slate-50 p-2">
                {previewGallery.length > 1 && (
                  <button type="button" onClick={showPreviousImage} aria-label="Previous screenshot" className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-lg transition hover:bg-[#0d7a66] hover:text-white sm:left-5">
                    <ChevronLeft size={25} />
                  </button>
                )}
                <img src={selectedImage.url} alt={selectedImage.title} className="h-auto max-h-[72vh] max-w-full rounded-lg object-contain" />
                {previewGallery.length > 1 && (
                  <button type="button" onClick={showNextImage} aria-label="Next screenshot" className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-lg transition hover:bg-[#0d7a66] hover:text-white sm:right-5">
                    <ChevronRight size={25} />
                  </button>
                )}
              </div>
              {previewGallery.length > 1 && <p className="mt-2 text-center text-xs font-semibold text-slate-500">{previewIndex + 1} / {previewGallery.length}</p>}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen scroll-smooth bg-white font-sans text-slate-800 antialiased">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="mx-auto flex min-h-[90vh] max-w-6xl items-center px-6 pb-20 pt-32 md:pb-28 md:pt-40"
      >
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-1 flex justify-center">
            <div className="group relative">
              <div className="flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-emerald-500/20 bg-[#0d7a66] p-2 shadow-[0_0_50px_rgba(13,122,102,0.4)] md:h-80 md:w-80">
                <img
                  src={profileImg}
                  alt={personalDetails.name}
                  className="h-full w-full rounded-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="order-2 space-y-5 text-center md:text-left">
            <h3 className="text-xl font-semibold text-slate-800 md:text-2xl">
              Hello, My name is
            </h3>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              {personalDetails.name}
            </h1>
            <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
              And I'm a <span className="text-[#0d7a66]">{personalDetails.role}</span>
            </h2>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-600 md:mx-0 md:text-base">
              {personalDetails.aboutShort}
            </p>

            <div className="flex justify-center gap-3 pt-2 md:justify-start">
              <a
                href={contactDetails.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0d7a66] text-[#0d7a66] transition duration-300 hover:bg-[#0d7a66] hover:text-white"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0d7a66] text-[#0d7a66] transition duration-300 hover:bg-[#0d7a66] hover:text-white"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${contactDetails.phone}`}
                aria-label="Phone"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0d7a66] text-[#0d7a66] transition duration-300 hover:bg-[#0d7a66] hover:text-white"
              >
                <Phone size={18} />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4 md:justify-start">
              <a
                href="#contact"
                className="rounded-full bg-[#0d7a66] px-8 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#0a6353] hover:shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="#about"
                className="rounded-full border-2 border-[#0d7a66] px-8 py-3 text-sm font-semibold text-[#0d7a66] transition duration-300 hover:bg-emerald-50"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="overflow-hidden bg-[#e8f7f4] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative flex min-h-[300px] w-full items-start sm:min-h-[400px] md:min-h-[410px]">
            <h1 className="w-full origin-top-left scale-y-[1.6] select-none whitespace-nowrap text-[70px] font-black leading-none tracking-tighter text-[#0d7a66] sm:text-[120px] md:text-[190px] lg:text-[220px]">
              WHO I AM
            </h1>
            <div className="absolute right-[3%] top-[90px] z-10 w-[180px] sm:right-[7%] sm:w-[220px] md:right-[10%] md:w-[280px] lg:w-[320px]">
              <img
                src={profileSuit}
                alt="Myo Naing Win Professional"
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="relative z-20 mt-10">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-[#0d7a66] sm:text-sm">
              FULL STACK & FRONTEND DEVELOPER
            </p>
            <p className="max-w-5xl text-sm font-medium uppercase leading-8 tracking-wide text-slate-700 sm:text-base md:text-lg">
              HI, I'M <strong className="text-slate-900">MYO NAING WIN</strong>, A PASSIONATE FRONTEND DEVELOPER AND FULL STACK DEVELOPER WITH A STRONG INTEREST IN BUILDING MODERN, RESPONSIVE, AND USER-FRIENDLY WEB APPLICATIONS.
            </p>

            {isAboutExpanded && (
              <div className="mt-6 max-w-5xl space-y-5 border-t border-emerald-200 pt-6 text-sm uppercase leading-7 tracking-wide text-slate-600 sm:text-base">
                <p>
                  I HAVE A BACKGROUND IN COMPUTING AND FULL STACK DEVELOPMENT, WHERE I HAVE DEVELOPED MY KNOWLEDGE AND PRACTICAL SKILLS IN BOTH FRONTEND AND BACKEND TECHNOLOGIES. MY DEVELOPMENT JOURNEY HAS GIVEN ME THE OPPORTUNITY TO WORK ON DIFFERENT TYPES OF WEB APPLICATIONS.
                </p>
                <p>
                  AS A FRONTEND DEVELOPER, I FOCUS ON CREATING CLEAN, RESPONSIVE, AND INTERACTIVE USER INTERFACES USING HTML, CSS, JAVASCRIPT, REACT, AND MODERN FRONTEND TOOLS. AT THE SAME TIME, I WORK WITH BACKEND TECHNOLOGIES INCLUDING PYTHON, FLASK, PHP, MYSQL, AND REST APIS TO BUILD ROBUST FULL-STACK SOLUTIONS.
                </p>
                <p>
                  ONE OF THE THINGS I ENJOY MOST ABOUT SOFTWARE DEVELOPMENT IS PROBLEM-SOLVING. WHEN I FACE A TECHNICAL PROBLEM, I LIKE TO UNDERSTAND THE CAUSE, EXPLORE POSSIBLE SOLUTIONS, AND FIND A PRACTICAL WAY TO SOLVE IT.
                </p>
                <p>
                  I AM ALWAYS INTERESTED IN LEARNING NEW TECHNOLOGIES, IMPROVING MY DEVELOPMENT SKILLS, AND TAKING ON NEW CHALLENGES. MY GOAL IS TO BUILD USEFUL, HIGH-QUALITY WEB APPLICATIONS WHILE CONTINUOUSLY GROWING AS A DEVELOPER.
                </p>
              </div>
            )}

            <div className="mt-7 flex justify-end pr-0 md:pr-20">
              <button
                type="button"
                onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                className="inline-flex items-center gap-2 rounded-full bg-[#0d7a66] px-8 py-3 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#0a6353] hover:shadow-lg sm:text-sm"
              >
                {isAboutExpanded ? "READ LESS" : "READ MORE"}
                {isAboutExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl space-y-12 px-6 py-20">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
            Technical <span className="text-[#0d7a66]">Skills</span>
          </h2>
          <p className="text-sm text-slate-500">
            Core technologies, frameworks, and programming tools
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-md transition duration-300 hover:border-[#0d7a66]/40 hover:shadow-xl"
            >
              <div className="mb-5 flex items-center gap-3 text-[#0d7a66]">
                <Layers size={22} />
                <h3 className="text-lg font-bold text-slate-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-lg border border-emerald-200 bg-[#e8f7f4] px-3 py-1.5 text-xs font-medium text-[#0d7a66]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS OVERVIEW */}
      <section id="projects" className="overflow-hidden bg-[#e8f7f4] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.3em] text-[#0d7a66] sm:text-sm">
              MY WORK
            </p>
            <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
              Featured <span className="text-[#0d7a66]">Projects</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
              A selection of my academic and full-stack development work, demonstrating my experience in modern web development and software engineering.
            </p>
          </div>

          <div className="space-y-12">
            {projectsData.map((project, projectIndex) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d7a66] text-sm font-black text-white">
                        {String(projectIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0d7a66]">
                        Featured Project
                      </span>
                    </div>

                    <h3 className="mb-2 text-3xl font-black text-slate-900 md:text-4xl">
                      {project.title}
                    </h3>
                    <h4 className="mb-5 text-sm font-semibold leading-relaxed text-[#0d7a66] md:text-base">
                      {project.subtitle}
                    </h4>
                    <p className="mb-7 text-sm leading-7 text-slate-600 md:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#0d7a66] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0a6353] hover:shadow-lg"
                        >
                          <Github size={17} />
                          GitHub
                          <ExternalLink size={14} />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedImage(null);
                          setSelectedProject(project);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#0d7a66] px-6 py-3 text-sm font-bold text-[#0d7a66] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d7a66] hover:text-white"
                      >
                        <Eye size={17} />
                        View Project
                      </button>
                    </div>
                  </div>

                  <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0d7a66] to-[#075244] p-8 lg:min-h-[520px]">
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
                    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5" />
                    <button
                      type="button"
                      onClick={() => openImagePreview(project.images, 0)}
                      className="relative z-10 w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-black/30 transition duration-500 hover:scale-[1.02]"
                      aria-label={`Preview ${project.images[0]?.title ?? project.title}`}
                    >
                      {project.images[0] && (
                        <img
                          src={project.images[0].url}
                          alt={project.images[0].title}
                          className="h-auto max-h-[390px] w-full object-contain"
                        />
                      )}
                    </button>
                    <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                        {project.mediaOnly ? "Image + Video" : `${project.images.length} Screenshots`}
                      </span>
                      <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0d7a66] shadow-lg">
                        {project.stackLabel ?? "Project"}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl space-y-12 px-6 py-20">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
            Education & <span className="text-[#0d7a66]">Certificates</span>
          </h2>
          <p className="text-sm text-slate-500">
            Academic background, diplomas, and official credentials
          </p>
        </div>

        <div className="relative ml-4 space-y-10 border-l-2 border-[#0d7a66]/30 pl-8 md:ml-32">
          {educationData.map((edu, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-[#0d7a66] bg-white transition duration-300 group-hover:scale-125" />
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#0d7a66]/50 hover:shadow-md">
                <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
                  <div className={`${edu.images?.length ? "md:col-span-7" : "md:col-span-12"} space-y-3`}>
                    <span className="inline-block rounded-md bg-[#0d7a66] px-3 py-1 text-xs font-bold text-white">
                      {edu.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{edu.title}</h3>
                    <p className="text-sm font-semibold text-[#0d7a66]">{edu.institution}</p>
                    {edu.details && (
                      <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                        {edu.details}
                      </p>
                    )}
                  </div>

                  {edu.images && edu.images.length > 0 && (
                    <div className="space-y-2 border-t border-slate-100 pt-4 md:col-span-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                      <p className="text-xs font-semibold text-slate-500">
                        Attached Credentials:
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {edu.images.map((img, imgIdx) => (
                          <button
                            type="button"
                            key={imgIdx}
                            onClick={() => openImagePreview(edu.images ?? [img], imgIdx)}
                            aria-label={`Preview ${img.title}`}
                            className="group/img relative h-20 w-32 cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition hover:border-[#0d7a66]"
                          >
                            <img
                              src={img.url}
                              alt={img.title}
                              className="h-full w-full object-cover transition duration-300 group-hover/img:scale-105"
                            />
                            <span className="absolute inset-0 flex items-center justify-center gap-1 bg-[#0d7a66]/70 p-1 text-center text-[11px] font-medium text-white opacity-0 transition duration-300 group-hover/img:opacity-100">
                              <Eye size={13} />
                              Preview
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE PREVIEW MODAL */}
      {selectedImage && !selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={closeImagePreview}
        >
          <div
            className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0d7a66]">
                  Preview
                </p>
                <h4 className="text-sm font-bold text-slate-800 md:text-base">
                  {selectedImage.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={closeImagePreview}
                aria-label="Close image preview"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative flex max-h-[78vh] items-center justify-center overflow-hidden bg-slate-50 p-4">
              {previewGallery.length > 1 && (
                <button type="button" onClick={showPreviousImage} aria-label="Previous screenshot" className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-lg transition hover:bg-[#0d7a66] hover:text-white sm:left-5">
                  <ChevronLeft size={24} />
                </button>
              )}
              <img src={selectedImage.url} alt={selectedImage.title} className="h-auto max-h-[72vh] w-auto max-w-full rounded-lg object-contain shadow-md" />
              {previewGallery.length > 1 && (
                <button type="button" onClick={showNextImage} aria-label="Next screenshot" className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-lg transition hover:bg-[#0d7a66] hover:text-white sm:right-5">
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
            {previewGallery.length > 1 && <p className="border-t border-slate-100 py-2 text-center text-xs font-semibold text-slate-500">{previewIndex + 1} / {previewGallery.length}</p>}
          </div>
        </div>
      )}

      {/* CONTACT */}
      <section id="contact" className="bg-[#0d7a66] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl space-y-10 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-black md:text-4xl">
              Contact <span className="text-emerald-200">Me</span>
            </h2>
            <p className="text-sm text-emerald-100">
              Feel free to reach out for collaborations or developer positions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <a
              href={`mailto:${contactDetails.email}`}
              className="group flex flex-col items-center space-y-3 rounded-2xl border border-emerald-600/40 bg-[#0a6353] p-6 transition hover:bg-[#085244]"
            >
              <Mail size={24} className="text-emerald-200 transition group-hover:scale-110" />
              <span className="w-full truncate text-xs font-medium">{contactDetails.email}</span>
            </a>

            <a
              href={`tel:${contactDetails.phone}`}
              className="group flex flex-col items-center space-y-3 rounded-2xl border border-emerald-600/40 bg-[#0a6353] p-6 transition hover:bg-[#085244]"
            >
              <Phone size={24} className="text-emerald-200 transition group-hover:scale-110" />
              <span className="text-xs font-medium">{contactDetails.phone}</span>
          </a>

            <a
              href={contactDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-3 rounded-2xl border border-emerald-600/40 bg-[#0a6353] p-6 transition hover:bg-[#085244]"
            >
              <Github size={24} className="text-emerald-200 transition group-hover:scale-110" />
              <span className="flex items-center gap-1 text-xs font-medium">
                GitHub Profile <ExternalLink size={12} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#085244] py-6 text-center text-xs font-medium text-emerald-200">
        © {new Date().getFullYear()} Myo Naing Win. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;