// eslint-disable-next-line import/no-unresolved
import noEventsImage from 'assets/app-management/no-events.png';

const textStyle = 'mb-2 text-center';

const ProjectsEvents = () => {
  return (
    <div className="p-2">
      <div className="mb-2 d-flex justify-content-center">
        <img alt="No Events" className="w-25" src={noEventsImage} />
      </div>
      <div className={`${textStyle} fw-bold`}>No Events Available</div>
      <div className={textStyle}>
        Check back later for events update!
      </div>
    </div>
  );
};

ProjectsEvents.displayName = 'ProjectsEvents';

export default ProjectsEvents;
