import { Link } from "react-router-dom";

interface ProjectLinkProps {
  id: number;
  project_name: string;
  project_date: string;
  project_thumbnail: string;
  project_index: number;
}

const ProjectLink = (props: ProjectLinkProps) => {
  const { id, project_name, project_date, project_thumbnail, project_index } =
    props;
  const project_index_padded = (project_index + 1).toString().padStart(4, "0");
  const dateWithoutDay = project_date.slice(0, -3);

  return (
    <div className="text-left project-card relative p-2 w-auto group">
      <Link to={`project-page/${id}`} className="hover:underline">
        <div className="relative inline text-left ">
          <h2 className="hidden md:inline text-sm  font-light text-gray-400 tracking-[0.4rem]">
            {"[" + project_index_padded + "]"}
          </h2>
          <h2 className="text-sm md:ml-1 inline text-left md:text-lg font-light tracking-[0.2rem]">
            {project_name}
            <p className="inline text-xs ml-1 md:text-sm text-left text-gray-400 tracking-[0.2rem]">
              {dateWithoutDay}
            </p>
          </h2>
        </div>
      </Link>
      <img
        className="border-[8px] border-neutral-50 rounded-[4px] border-b-[26px] fixed z-10 top-1/2 left-1/2 object-contain max-w-lg h-auto transform -translate-x-1/2 -translate-y-1/2 hidden md:group-hover:block md:group-hover:opacity-100 max-h-[70dvh] transition-all duration-300"
        src={project_thumbnail}
        alt={project_name}
      />
    </div>
  );
};

export default ProjectLink;
