/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';

import { StoreCommand, useStore } from '@models/store';

import { DistributionTracingHeader } from '@src/views/distribution-tracing/components/distribution-tracing-header';

import SearchingBar from './component/searching-bar';
import { TableSection } from './component/table-section';
import { FilterByTag } from '../../components/filter-by-tag';

const TracesDetailTimeMain = () => {
  const [store, dispatch] = useStore(
    (state) => state?.app?.distributionTracing?.traces?.detail
  );

  useEffect(() => {
    dispatch(StoreCommand.app.distributionTracing.traces.GetDetailData());
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

  return (
    <div className="d-flex flex-column gap-3">
      <div className="shadow-sm p-2 d-flex justify-content-between">
        <DistributionTracingHeader
          handleFilterViews={handleFilterViews}
          openConfirm={openConfirm}
          selectedFilter={selectedFilter}
          title={store?.service || ''}
          toggleModal={toggleModal} />
      </div>
      <div className="d-flex flex-column gap-2">
        <div>
          <FilterByTag
            addTags={addTags}
            handleTagsChange={handleTagsChange}
            removeAllTags={removeAllTags}
            removeTags={removeTags}
            tags={tags} />
        </div>

        <div className="p-2 border rounded m-2">
          <SearchingBar />
        </div>

        <div className="border rounded p-2 m-2">
          <TableSection />
        </div>
      </div>
    </div>
  );
};

TracesDetailTimeMain.displayName = 'TracesDetailTimeMain';
export { TracesDetailTimeMain };
