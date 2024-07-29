/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Button, Col, Form, InputGroup } from 'react-bootstrap';

import { Search, XCircle } from '@nxweb/icons/feather';

import {
  DASHBOARD_SEARCH_FILTER,
  DASHBOARD_SEARCH_PLACEHOLDER
} from '../constants';

const spanStyle = 'rounded px-75 py-25 rounded-5';

const SearchCard = () => {
  const [isClicked, setIsClicked] = useState(true);
  const toggleClicked = () => setIsClicked(!isClicked);

  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {DASHBOARD_SEARCH_PLACEHOLDER.map((key) => (
        <Col eventKey={key.placeholder}>
          <div>
            <div className="fw-bold">
              <InputGroup>
                <InputGroup.Text className="pe-0 py-1">
                  <Search size={24} />
                </InputGroup.Text>
                <Form.Control
                  className="border-start-0"
                  placeholder={`Search ${key.placeholder}`} />
              </InputGroup>
            </div>
            <div className="border rounded-bottom border-top-0 p-1">
              <div className="pb-1 fs-5">Showed data</div>
              {DASHBOARD_SEARCH_FILTER.map((key) => (
                <div className="d-flex pb-1 justify-content-between align-items-center">
                  <Button
                    className="p-0 border-0"
                    variant="none"
                    onClick={toggleClicked}
                  >
                    {isClicked === true
                      ? (
                      <span className={`${spanStyle} border-secondary bg-light-secondary`}>
                        {key.filter}
                      </span>
                      )
                      : (
                      <span className={`${spanStyle} border-primary bg-light-primary`}>
                        {key.filter}
                      </span>
                      )}
                  </Button>
                  <Button className="p-0 border-0" variant="none">
                    <XCircle
                      color="white"
                      fill="black"
                      size={24}
                      strokeWidth={2} />
                  </Button>
                </div>
              )).slice(0, expanded ? undefined : 2)}
              {DASHBOARD_SEARCH_FILTER.length > 2 && ( // Only show the expand button if there are more than 2 items
                <div className="d-flex justify-content-center">
                  <Button
                    className="text-secondary"
                    variant="link"
                    onClick={toggleExpansion}
                  >
                    {expanded ? 'Show less data' : 'See more data'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

SearchCard.displayName = 'SearchCard';

export default SearchCard;
