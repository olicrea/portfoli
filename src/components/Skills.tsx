interface SkillsProps {
    title: string;
    description: string;
    tools: string[];
    imageUrl: string;
}

const skills: SkillsProps[] = [
    {
        title: 'Frontend Development',
        description: 'Construcción de aplicaciones web responsivas y amigables para el usuario.',
        tools: ['React', 'TypeScript', 'Tailwind CSS'],
        imageUrl: '/images/desktop-solid-full.svg'
    },
    {
        title: 'Backend Development',
        description: 'Experiencia en la creación de APIs backend utilizando diversas tecnologías del lado del servidor. Modelado de datos.',
        tools: ['Node.js', 'Python', 'PostgreSQL'],
        imageUrl: '/images/robot-solid-full.svg'
    },
    {
        title: 'UX/UI Design',
        description: 'Diseño de experiencias intuitivas a través de la investigación exhaustiva, la interacción y la elaboración de prototipos funcionales.',
        tools: ['Figma', 'Adobe XD', 'Canva'],
        imageUrl: '/images/pencil-solid-full.svg'
    },
    {
        title: 'Softskills',
        description: 'Liderazgo estratégico y visión de negocio. Habilidad para alinear equipos técnicos con los objetivos organizacionales.',
        tools: ['Creatividad', 'Adaptabilidad', 'Empatía'],
        imageUrl: '/images/people-arrows-solid-full.svg'
    },

]

export const Skills = () => {
  return (
    <div className="flex flex-col gap-8 mt-[30px] px-4 border-1 border-Navy-800 rounded-3xl p-6">
        <h1 className="text-LightBlue text-center text-2xl font-Raleway font-semibold px-4">Mis habilidades</h1>
        {
            skills.map(({ title, description, tools, imageUrl }: SkillsProps) => (
                <div className="flex flex-col items-center text-center bg-Navy-800 rounded-3xl p-6">
                    <img src={imageUrl} alt={title} style={{ width: '70px', height: 'auto' }}/>
                    <h3 className="text-LightMint font-Raleway font-bold mb-2 mt-2">{title}</h3>
                    <p className="text-sm">{description}</p>
                    <ul className="flex flex-row font-Raleway font-semibold gap-4 mt-2 text-LightMint">
                        {tools.map(tool => (
                            <li key={tool}>{tool}</li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </div>
  )
}
