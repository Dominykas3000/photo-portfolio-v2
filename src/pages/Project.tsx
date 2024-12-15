import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Project } from "../../types/Project";
import ImageSlider from "../components/ImageSlider";
import { ProjectPageSkeleton } from "../components/skeleton/ProjectPageSkeleton";

const getItemById = async (id: number) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  };

  try {
    const request = await axios.get(
      `${import.meta.env.VITE_STRAPI_URL}/api/projects/${id}?populate=*`,
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
          <h1 className="text-2xl font-medium md:text-3xl  tracking-[0.2rem]">
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

        <article className="mx-auto flex items-center w-3/4 justify-center mt-8 mb-20">
          <p className=" text-sm md:text-md  tracking-[0.05rem] text-left">
            {project.attributes.project_description}
          </p>
        </article>
      </section>
    </>
  );
};

export default ProjectPage;
