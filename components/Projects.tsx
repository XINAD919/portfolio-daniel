import React from "react";
import LinkIcon from "./icons/LinkIcon";
import GitHub from "./icons/GitHub";
import Image from "next/image";
import styled, { useTheme } from "styled-components";

export interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  homepage: string;
  topics: string[];
}

const Projects = ({
  projects,
  error,
}: {
  projects: Project[];
  error?: String;
}) => {
  const theme = useTheme();

  const CardProject = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0.75rem;
    border: ${(props) => props.theme.border};
    border-radius: 0.375rem;
  `;

  return (
    <div className='grid grid-cols-3 gap-4'>
      {projects &&
        projects.map((p: Project) => (
          <CardProject key={p.id}>
            <h3 className='text-xl capitalize text-center '>{p.name}</h3>

            {p.description && p.description.length >= 57 ? (
              <p>{p.description.slice(0, 57)}...</p>
            ) : (
              <p>{p.description}</p>
            )}
            {p.topics && (
              <div className='flex gap-4 mt-4 px-3'>
                {p.topics.map((el) =>
                
                  el === "typescript" ? (
                    <Image
                      src='typescript.svg'
                      alt='TypeScript icono'
                      width={25}
                      height={25}
                    />
                  ) : el === "javascript" ? (
                    <Image
                      src='javascript.svg'
                      alt='JavaScript icon'
                      width={25}
                      height={25}
                    />
                  ) : el === "mongodb" ? (
                    <Image
                      src='mongodb.svg'
                      alt='mongodb icon'
                      width={30}
                      height={30}
                    />
                  ) : el === "nextjs" ? (
                    <Image
                      src='nextjs.svg'
                      alt='nextjs icon'
                      width={25}
                      height={25}
                    />
                  ) : el === "reactjs" ? (
                    <Image
                      src='react.svg'
                      alt='react icon'
                      width={25}
                      height={25}
                    />
                  ) 
                  : el === "scss" ? (
                    <Image
                      src='scss.svg'
                      alt='scss icon'
                      width={25}
                      height={25}
                    />
                  ) : el === "express" ? (
                    <Image
                      src='express.svg'
                      alt='express icon'
                      width={25}
                      height={25}
                    />
                  ) : null
                )}
              </div>
            )}
            <div className='flex gap-4 items-end justify-center h-full'>
              <GitHub link={`${p.html_url}`} width={28} height={28} />
              {p.homepage && (
                <LinkIcon height={22} width={22} link={`${p.homepage}`} />
              )}
            </div>
          </CardProject>
        ))}
      {!error ? null : <span>{error}</span>}
    </div>
  );
};

export default Projects;
