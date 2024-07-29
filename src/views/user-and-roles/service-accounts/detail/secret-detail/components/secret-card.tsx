/* eslint-disable react/jsx-key */

import type { FC } from 'react';
import { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { CustomDataTable } from '@components/custom';
import { SearchFilter } from '@components/custom/search-filter';
import type { ServiceAccountDetailModel } from '@models/app/users-and-roles/service-accounts/types';

import { columns } from './secret-card-column';

interface SecretCardProps {
  readonly data: ServiceAccountDetailModel | null
}

const SecretCard: FC<SecretCardProps> = ({ data }) => {
  const [showAllItems, setShowAllItems] = useState<boolean[]>(
    new Array(data?.secrets[0].labels.length).fill(false)
  );

  const handleToggleItems = (index: number, show: boolean) => {
    const expandStatus = [...showAllItems];

    expandStatus[index] = show;
    setShowAllItems(expandStatus);
  };

  const navigate = useNavigate();
  const detailSecret = (index: number) => {
    navigate(`./secret-detail/${index}`);
  };

  const [search, setSearch] = useState('');
  const handleSearchChange = (text: string) => {
    setSearch(text);
  };
  const filteredData = data?.secrets.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Card className="shadow-none">
      <Card.Header className="border-5 border-primary-header rounded-top text-primary-header fw-bold">
        Secrets
      </Card.Header>
      <Card.Body className="pt-1 border rounded-bottom">
        <div className="d-flex flex-column gap-2">
          <Col xs={5}>
            <SearchFilter onSearchChange={handleSearchChange} />
          </Col>
          <Col>
            <CustomDataTable
              columns={columns(detailSecret, showAllItems, handleToggleItems)}
              data={filteredData || []} />
          </Col>
        </div>
      </Card.Body>
    </Card>
  );
};

SecretCard.displayName = 'SecretCard';
export { SecretCard };
