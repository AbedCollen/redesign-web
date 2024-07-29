import { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';

import { NxCircularProgressbar } from '@components/custom';
import { StoreCommand, useStore } from '@models/store';

import { EventRowData } from './components/event-row-data';

import 'react-circular-progressbar/dist/styles.css';

const EventsMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.clusterManagement?.eventAlert?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.clusterManagement.eventAlert.GetMainData());
  }, [dispatch]);

  const calculateChartValue = (value: number) => {
    const total = store?.data ? store?.data.length : 1;
    const result = (value / total) * 100;

    return result;
  };

  return (
    <div className="p-2 element-wrapper">
      <h4 className="fw-bold mb-2 text-black">Events</h4>
      {/* Event Summary */}
      <div className="mb-2">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Events Summary</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex mx-3 mt-1">
                <div className="d-flex justify-content-center">
                  <div className="w-50 fw-bold">
                    <NxCircularProgressbar
                      styles={{
                        path: {
                          stroke: '#FF404C'
                        },
                        text: {
                          color: '#646464',
                          fontSize: '12px'
                        },
                        trail: {
                          stroke: '#FFECED'
                        }
                      }}
                      text="Error"
                      value={calculateChartValue(
                        store?.data.filter((event) => event.condition === 'E')
                          .length as number
                      )} />
                  </div>

                  <div className="ms-2 mt-5">
                    <div className="fw-bold d-flex">
                      <div
                        className="me-1 mb-1 rounded"
                        style={{
                          background: '#FF404C',
                          height: 20,
                          width: 40
                        }} />
                      Events
                    </div>
                    <div>
                      {
                        store?.data.filter((event) => event.condition === 'E')
                          .length
                      }{' '}
                      Events
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="w-50 fw-bold">
                    <NxCircularProgressbar
                      styles={{
                        path: {
                          stroke: '#FFB72B'
                        },
                        text: {
                          color: '#646464',
                          fontSize: '12px'
                        },
                        trail: {
                          stroke: '#FFF8EA'
                        }
                      }}
                      text="Warning"
                      value={calculateChartValue(
                        store?.data.filter((event) => event.condition === 'W')
                          .length as number
                      )} />
                  </div>

                  <div className="ms-2 mt-5">
                    <div className="fw-bold d-flex">
                      <div
                        className="me-1 mb-1 rounded"
                        style={{
                          background: '#FFB72B',
                          height: 20,
                          width: 40
                        }} />
                      Events
                    </div>
                    <div>
                      {
                        store?.data.filter((event) => event.condition === 'W')
                          .length
                      }{' '}
                      Events
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="w-50 fw-bold">
                    <NxCircularProgressbar
                      styles={{
                        path: {
                          stroke: '#21C032'
                        },
                        text: {
                          color: '#646464',
                          fontSize: '12px'
                        },
                        trail: {
                          stroke: '#E9F9EB'
                        }
                      }}
                      text="Info"
                      value={calculateChartValue(
                        store?.data.filter((event) => event.condition === 'i')
                          .length as number
                      )} />
                  </div>

                  <div className="ms-2 mt-5">
                    <div className="fw-bold d-flex">
                      <div
                        className="me-1 mb-1 rounded"
                        style={{
                          background: '#21C032',
                          height: 20,
                          width: 40
                        }} />
                      Events
                    </div>
                    <div>
                      {
                        store?.data.filter((event) => event.condition === 'i')
                          .length
                      }{' '}
                      Events
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Events */}
              <div className="my-1">
                <div className="d-flex justify-content-center">
                  <div
                    className="me-1 rounded"
                    style={{
                      background: '#EDEDED',
                      height: 20,
                      width: 40
                    }} />
                  {store?.data.length} Events Total
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <EventRowData data={store?.data || []} />
    </div>
  );
};

EventsMain.displayName = 'EventsMain';
export { EventsMain };
