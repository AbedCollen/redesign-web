/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { CustomDataTable } from '@components/custom/custom-data-table';
import { StoreCommand, useStore } from '@models/store';

import { Columns } from './columns';
import { FilterByTag } from './components/filter-by-tag';
import { TracesChartLayout } from './components/traces-chart-layout';
import { TracesFilters } from './components/traces-filters';
import { DistributionTracingHeader } from '../components/distribution-tracing-header';

const TracesMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.distributionTracing?.traces?.main
  );

  useEffect(() => {
    dispatch(StoreCommand.app.distributionTracing.traces.GetMainData());
  }, [dispatch]);

  const [selectedFilter, setSelectedFilter] = useState<string>('Last 5 min');
  const [openConfirm, setOpenConfirm] = useState(false);
  const toggleModal = () => setOpenConfirm(!openConfirm);

  const handleFilterViews = (eventKey: string | null) => {
    if (eventKey === 'Custom') {
      setOpenConfirm(true);
    } else if (eventKey !== null) {
      setSelectedFilter(eventKey);
    }
  };

  const [tags, setTags] = useState<string[]>([]);
  const handleTagsChange = (index: number, value: string) => {
    const updatedTags = [...tags];

    tags[index] = value;
    setTags(updatedTags);
  };
  const addTags = () => {
    setTags([...tags, '']);
  };
  const removeTags = (index: number) => {
    const updatedTags = [...tags];

    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };
  const removeAllTags = () => {
    setTags([]);
  };

  const navigate = useNavigate();
  const detailTraces = (index: number) => {
    navigate(`./detail/${index}`);
  };
  const detailTracesTime = (index: number) => {
    navigate(`./detail/time/${index}`);
  };

  return (
    <div>
      <div className="element-wrapper">
        <div className="shadow-sm p-2 d-flex justify-content-between">
          <DistributionTracingHeader
            handleFilterViews={handleFilterViews}
            openConfirm={openConfirm}
            selectedFilter={selectedFilter}
            title="Traces"
            toggleModal={toggleModal} />
        </div>
      </div>
      <div className="p-2 gap-2">
        <Row className="mb-2">
          <FilterByTag
            addTags={addTags}
            handleTagsChange={handleTagsChange}
            removeAllTags={removeAllTags}
            removeTags={removeTags}
            tags={tags} />
        </Row>
        <Row>
          <Col className="element-wrapper text-center justify-content-center" sm={3}>
            <div className="border rounded p-1">
              <TracesFilters />
            </div>
          </Col>
          <Col className="gap-2 d-flex row">
            <Row className="element-wrapper">
              <div className="border rounded">
                <TracesChartLayout />
              </div>
            </Row>
            <Row className="element-wrapper">
              <div className="border rounded p-1">
                <Form>
                  <CustomDataTable
                    columns={Columns(detailTraces, detailTracesTime)}
                    data={store?.data || []}
                    totalRows={store?.total} />
                </Form>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

TracesMain.displayName = 'TracesMain';
export { TracesMain };
