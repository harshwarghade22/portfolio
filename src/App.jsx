import React, { useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
// import {cibil} from '../src/assets/cibil.'
import image from "./assets/image.png"

// App Component
const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <TestimonialsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="py-4 px-6 md:px-16 flex items-center justify-between">
      <div className="text-lg font-medium">Harsh'S</div>
      <nav className="hidden md:flex space-x-8">
        <NavLink href="#" label="Home" active />
        <NavLink href="#case-studies" label="Case Studies" />
        <NavLink href="#testimonials" label="Testimonials" />
        {/* <NavLink href="#recent-work" label="Recent work" /> */}
        <NavLink href="#contact" label="Get In Touch" />
      </nav>
      <div className="flex space-x-4">
        <SocialIcon type="linkedin" />
        <SocialIcon type="dribbble" />
        <SocialIcon type="twitter" />
      </div>
    </header>
  );
};

const NavLink = ({ href, label, active }) => {
  return (
    <a 
      href={href} 
      className={`hover:text-green-500 transition-colors ${active ? 'text-green-500' : 'text-gray-300'}`}
    >
      {label}
    </a>
  );
};

const SocialIcon = ({ type }) => {
  return (
    <a href="#" className="hover:text-green-500 transition-colors">
      {type === 'linkedin' && <div className="w-5 h-5">In</div>}
      {type === 'dribbble' && <div className="w-5 h-5">Dr</div>}
      {type === 'twitter' && <div className="w-5 h-5">T</div>}
    </a>
  );
};


// Hero Component
const Hero = () => {
  return (
    <section className="py-16 px-6 md:px-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Harsh Warghade</h1>
        <p className="text-gray-300 mb-8">
          With expertise in both front-end and back-end technologies, I specialize in creating amazing digital experiences from concept to deployment. My skill set includes React, Django, Firebase, and I thrive on tackling complex problems with elegant solutions.
        </p>
        <Button label="Let's get started" icon={<ChevronRight size={18} />} />
      </div>
      <div className="mt-10 md:mt-0">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800">
          <img 
            src={image}
            alt="Harsh Warghade" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};


// Button Component
const Button = ({ label, icon, variant = "primary", href = "#", onClick }) => {
  const baseClasses = "flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors";
  const variantClasses = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "bg-orange-500 hover:bg-orange-600 text-white",
    outlined: "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
  };

  return (
    <a 
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <span>{label}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </a>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      id: 1,
      category: "Fintech",
      title: "CIBIL Predictor",
      description: "Developed a risk score app with AI integration for personalization of CIBIL score based on users transactions and current score.",
      image: "https://savemax.in/blogs/wp-content/uploads/2024/06/Credit-Information-Bureau-India-Limited-CIBIL-Score.jpg",
      caseStudyUrl: "https://github.com/harshwarghade22/cibil_score"
    },
    {
      id: 2,
      category: "Edtech",
      title: "AcuLearn",
      description: "Developed an application leveraging AI to enhance learning for public school students by identifying skill gaps and recommending tailored content.",
      image: "https://matthewrenze.com/wp-content/uploads/2022/06/best-free-resources-to-learn-ai.jpg",
      caseStudyUrl: "https://github.com/siddhiK30/IIIT_EduTech"
    },
    {
      id: 3,
      category: "Healthcare",
      title: "ArogyaMann",
      description: "Developed a full-stack web application using Django and React to provide essential mental health resources. Application has features including mood and sleep tracking, self-guided support, online awareness resources, and a community forum.",
      image: "https://cdn-icons-png.freepik.com/512/8382/8382745.png",
      caseStudyUrl: "https://github.com/harshwarghade22/ArogyaMann"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-16 bg-black" id="recent-work">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-3">Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Working on a variety of projects over the last 10+ years, 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
      <div className="space-y-20">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            reversed={index % 2 !== 0} 
          />
        ))}
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, reversed }) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center justify-between`}>
      <div className="w-full md:w-1/3">
        <div className="bg-gray-800 p-1 rounded-md">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto rounded"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="mb-2">
          <span className="text-sm px-3 py-1 rounded-full bg-gray-800 text-green-500">
            {project.category}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-6">{project.description}</p>
        <Button 
          label="GitHub Repo" 
          icon={<ChevronRight size={18} />} 
          variant={project.category === "Fintech" ? "secondary" : 
                  project.category === "Healthcare" ? "outlined" : "primary"}
          href={project.caseStudyUrl}
        />
      </div>
    </div>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Client Name",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 2,
      quote: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Client Name",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 3,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Client Name",
      avatar: "/api/placeholder/80/80"
    },
    {
      id: 4,
      quote: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Client Name",
      avatar: "/api/placeholder/80/80"
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-6 md:px-16 bg-black">
      <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-center mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      <div className="text-3xl text-green-500 mb-4">"</div>
      <p className="text-gray-400 mb-6">{testimonial.quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{testimonial.name}</p>
        </div>
      </div>
    </div>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-16 bg-black">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-center mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      
      <div className="max-w-xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    // For now we'll just log it
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your email"
        />
      </div>
      
      <div>
        <label htmlFor="mobile" className="block text-sm font-medium text-gray-400 mb-2">Mobile</label>
        <input
          type="tel"
          id="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter mobile"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your message"
        ></textarea>
      </div>
      
      <div 
        onClick={handleSubmit}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center cursor-pointer"
      >
        Submit <ChevronRight size={18} className="ml-2" />
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-6 px-6 text-center text-gray-500 text-sm">
      Made with ❤️
    </footer>
  );
};

export default App;