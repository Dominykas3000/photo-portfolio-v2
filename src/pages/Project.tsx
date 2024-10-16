import { useEffect, useState } from "react";
import { Project } from "../../types/Project";
import ImageSlider from "../components/ImageSlider";
import { ProjectPageSkeleton } from "../components/skeleton/ProjectPageSkeleton";
import { useParams } from "react-router-dom";
import axios from "axios";

const getItemById = async (id: number) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  };

  try {
    const request = await axios.get(
      `http://127.0.0.1:1337/api/projects/${id}?populate=*`,
      reqOptions,
    );
    const data = request.data;
    if (data && data.data) {
      return data.data;
    } else {
      console.error("Invalid response format:", data);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

const ProjectPage = () => {
  const [project, setProject] = useState<Project | null>(null);
  const router = useParams();
  const id = router.id;

  useEffect(() => {
    if (id) {
      getItemById(Number(id)).then(setProject);
    }
  }, [id]);

  let projectYear = "";

  if (!project) {
    return <ProjectPageSkeleton />;
  } else {
    projectYear = project.attributes.project_date.slice(0, 4);
  }

  return (
    <>
      <section>
        <article className="flex gap-4 justify-center items-center flex-col mt-4 mb-8">
          <h1 className="text-3xl font-light tracking-[0.4rem]">
            {project.attributes.project_name}
          </h1>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-center text-sm text-gray-400 tracking-[0.2rem]">
              {projectYear}
            </p>
          </div>
        </article>

        <div className="flex justify-center">
          <ImageSlider images={project.attributes.project_images.data} />
        </div>

        <article className="w-full flex items-center justify-center mb-20">
          <p className="text-balance text-md w-3/4 tracking-[0.05rem] text-center">
            {project.attributes.project_description}
          </p>
        </article>
      </section>
    </>
  );
};

export default ProjectPage;
