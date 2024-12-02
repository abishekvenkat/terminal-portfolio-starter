import React from 'react';
import { BlogPost, Project, UserProfile } from '../types';

interface CommandOutputsProps {
  type: 'ls' | 'ls-a' | 'whoami' | 'netstat' | 'help';
  data: any;
}

export function CommandOutputs({ type, data }: CommandOutputsProps) {
  const renderSkills = (skills: string[]) => (
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={`skill-${skill}`} className="bg-gray-700 px-2 py-1 rounded text-sm">
          {skill}
        </span>
      ))}
    </div>
  );

  const renderTechStack = (tech: string[]) => (
    <div className="flex flex-wrap gap-2">
      {tech.map(item => (
        <span key={`tech-${item}`} className="bg-gray-700 px-2 py-1 rounded text-xs">
          {item}
        </span>
      ))}
    </div>
  );

  switch (type) {
    case 'ls':
      return (
        <div className="grid gap-1">
          {(data as BlogPost[]).map(post => (
            <div key={post.id}>{post.filename}</div>
          ))}
        </div>
      );

    case 'ls-a':
      return (
        <div className="grid gap-1">
          {(data as BlogPost[]).map(post => (
            <div key={post.id} className="flex justify-between">
              <span>{post.filename}</span>
              <span className="text-gray-400">{post.createdAt.toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      );

    case 'whoami':
      const profile = data as UserProfile;
      return (
        <div className="grid gap-2">
          <div className="font-bold text-green-400">{profile.name}</div>
          <div>{profile.role} • {profile.location}</div>
          <div>{profile.bio}</div>
          <div className="mt-2">
            <div className="font-bold">Skills:</div>
            {renderSkills(profile.skills)}
          </div>
        </div>
      );

    case 'netstat':
      return (
        <div className="grid gap-4">
          {(data as Project[]).map(project => (
            <div key={project.id} className="border border-gray-700 p-4 rounded">
              <div className="font-bold text-green-400">{project.name}</div>
              <div className="text-gray-300 my-2">{project.description}</div>
              {renderTechStack(project.tech)}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm mt-2 inline-block"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      );

    case 'help':
      return (
        <div className="grid gap-1">
          {Object.entries(data as Record<string, string>).map(([cmd, desc]) => (
            <div key={cmd} className="flex">
              <span className="w-20 text-green-400">{cmd}</span>
              <span className="text-gray-400">{desc}</span>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}