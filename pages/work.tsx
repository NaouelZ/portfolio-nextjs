import ImageWithText from "@/components/ImageWithText";
import { fetchData } from '@/helpers/dataFetcher';

export interface Project {
    shortDescription: string;
    coverImage: string;
    color: string;
    title: string;
    description: string;
    technologies: string[];
    gihubLink: string;
    previewLink: string;
    detailedImages: string[];
  }


interface WorksProps {
    projects: Project[];
}

export default function Works({ projects }: WorksProps) {
    return (
    <div className="px-10 py-5">
        <div className="flex col-span-12 mt-2 mb-5">
            <div className="self-center w-5 h-5 bg-baby-blue"></div>
            <h1 className="ml-5 font-sans text-4xl font-bold text-baby-blue">Projects</h1>
        </div>
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
            {
                projects && projects.length > 0 && 
                projects.map((project, i) => (
                    <ImageWithText
                        key={i}
                        project={project}
                    />
                ))
            }
        </div>
    </div>
    );
  }
  
export async function getStaticProps() {
    const data = await fetchData();
    return { props: { projects: data } };
}