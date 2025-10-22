import { Button } from "./Button";

interface Project {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    demoUrl: string;
}

const projects: Project[] = [
    {
        id: 1,
        imageUrl: '/images/taxis.jpg',
        title: 'Fleet-management-api',
        description: 'Fleet Management Software para consultar las ubicaciones de los vehículos de una empresa de taxis. Permite gestionar flotas, conductores y rutas en tiempo real.',
        technologies: ['TypeScript', 'Prisma', 'Postman'],
        githubUrl: 'https://github.com/olicrea/Fleet-management-api/tree/main',
        demoUrl: 'https://github.com/olicrea/Fleet-management-api/tree/main'
    },
    {
        id: 2,
        imageUrl: '/images/pantalla-ordenes-hamburguesas.png',
        title: 'Burger-queen-api',
        description: 'Un restaurante de hamburguesas necesita un sistema para tomar pedidos usando tablets, y enviarlos a la cocina para que se preparen eficientemente.',
        technologies: ['Node.js', 'MongoDB', 'Express', 'JavaScript'],
        githubUrl: 'https://github.com/olicrea/Burger-queen-api',
        demoUrl: 'https://github.com/olicrea/Burger-queen-api'
    },
        {
        id: 3,
        imageUrl: '/images/dataverse-chat.png',
        title: 'Dataverse Chat',
        description: 'SPA (Single Page Application) desarrollada para gestionar y explorar una colección de películas. La aplicación permite visualizar, filtrar y ordenar títulos, así como interactuar con ellos a través de un sistema de chat impulsado por la API de OpenAI',
        technologies: ['Javascript', 'Css', 'OpenAI'],
        githubUrl: 'https://github.com/olicrea/Dataverse-chat',
        demoUrl: 'https://dev-013-dataverse-chat-jvsl-2nyxj2bj7-oli-developer.vercel.app/'
    }
]



export const CardProject = () => {
    return (
        <section className="mb-20 px-4 bg-Navy-800 py-6 rounded-3xl">
            <h2 className="text-LightLavender text-center text-2xl font-Raleway font-semibold px-4">Mis proyectos</h2>
            
            <div className="grid gap-10 mt-10">
                {projects.map((project: Project) => (
                    <article 
                        key={project.id} 
                        className="flex flex-col justify-between bg-gray-200 text-Navy-850 p-4 rounded-3xl"
                    >
                        <div className="flex-shrink-0 w-full flex items-center justify-center">
                            <img 
                                className="rounded-2xl object-cover w-[70%] max-w-md"
                                src={project.imageUrl} 
                                alt={`Vista previa de ${project.title}`} 
                            />
                        </div>
                        
                        <div className="flex flex-col p-4">
                            <h3 className="font-Raleway font-bold text-lg text-center">{project.title}</h3>
                            <p className="text-sm mt-4 text-center">{project.description}</p>
                            <div className="mt-2">
                                <p className="text-xs text-center">{project.technologies.join(', ')}</p>
                            </div>
                            <div className="flex gap-4 justify-center mt-auto pt-4">
                                <Button 
                                    text="GitHub" 
                                    url={project.githubUrl} 
                                />
                                <Button 
                                    text="Demo" 
                                    url={project.demoUrl} 
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

