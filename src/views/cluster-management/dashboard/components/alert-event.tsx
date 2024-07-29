import type { FC } from 'react';

interface alertEventProp {
  date: string
  time: string
  status: string
  namespace: string
  description: string
  condition: string
}

interface RowTableProps {
  data: alertEventProp[]
}

const AlertEvent: FC<RowTableProps> = ({
  data
}) => {
  const getEventColor = (type: string) => {
    let color = '';
    switch (type) {
      case 'i':
        color = 'bg-info';
        break;
      case 'W':
        color = 'bg-warning';
        break;
      case 'E':
        color = 'bg-danger';
        break;

      default:
        color = 'bg-secondary';
        break;
    }

    return color;
  };

  return (
      <div>
      <div className="d-flex pt-1 flex-row justify-content-around rounded background bg-iwe border">
          <p className="d-flex flex-row align-items-center justify-content-center"><div className="me-1 bg-info text-center d-flex align-items-center justify-content-center rounded-circle alert-circle">i</div>{data.filter((event) => event.condition === 'i').length}</p>
          <p className="d-flex flex-row align-items-center justify-content-center"><div className="me-1 bg-warning text-center d-flex align-items-center justify-content-center rounded-circle alert-circle">W</div>{data.filter((event) => event.condition === 'W').length}</p>
          <p className="d-flex flex-row align-items-center justify-content-center"><div className="me-1 bg-danger text-center d-flex align-items-center justify-content-center rounded-circle alert-circle">E</div> {data.filter((event) => event.condition === 'E').length}</p>
      </div>
      <div className="d-grid gap-2 pt-1 pb-2">
        <div>
          {data.map((event, index) => (
          <div className="p-1 ps-2 border rounded d-flex flex-row mb-1" id="event_alert" key={index}>
            <div>
              <div
                className={`me-1 ${getEventColor(event.condition)} text-center d-flex align-items-center justify-content-center rounded-circle alert-circle icon`}
              >
                {event.condition}
              </div>
            </div>
            <div>
              <div className="d-flex flex-row align-items-center time">
                <div className="me-1">{event.date}</div>
                <div>{event.time}</div>
              </div>
                <text className="desc-container">{event.description}</text>
            </div>
          </div>
          ))}
        </div>
      </div>
      </div>
  );
};

AlertEvent.displayName = 'AlertEvent';

export { AlertEvent };
