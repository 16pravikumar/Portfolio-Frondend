import React from 'react';

export default function Projects() {
  const projectList = [
    {
      name: "Portfolio Backend",
      tech: "Spring Boot, MySQL, JWT",
      link: "https://github.com/yourusername/portfolio-backend"
    },
    {
      name: "Kafka Messaging App",
      tech: "Spring Boot + Kafka",
      link: "https://github.com/yourusername/kafka-app"
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="space-y-4">
        {projectList.map((project, index) => (
          <li key={index} className="border p-4 rounded">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.tech}</p>
            <a href={project.link} target="_blank" className="text-blue-500">GitHub</a>
          </li>
        ))}
      </ul>
    </div>
  );
}