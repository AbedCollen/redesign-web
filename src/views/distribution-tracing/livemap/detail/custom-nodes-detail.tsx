/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import type { FC } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

import { Database, Globe, Share2, X } from '@nxweb/icons/feather';

interface CustomNodesDetailProps {
  readonly error: number
  readonly latency: number
  readonly name: string
  readonly request: number
  readonly type: string
}

const CustomNodesDetail: FC<CustomNodesDetailProps> = ({
  error,
  latency,
  name,
  request,
  type
}) => {
  return (
    <div className="d-flex">
      <OverlayTrigger
        overlay={
          <Popover>
            <Popover.Body className="d-flex border rounded gap-2 justify-content-between align-items-center">
              <div>
                <div className="text-black card-subtitle-2">Request</div>
                <div className="text-secondary">{request} req/s</div>
              </div>
              <div>
                <div className="text-black text-sm">Latency</div>
                <div className="text-secondary">{latency} ms</div>
              </div>
              <div>
                <div className="text-black text-sm">Error</div>
                <div className="text-secondary">{error}%</div>
              </div>
            </Popover.Body>
          </Popover>
        }
        placement="right"
        trigger="hover"
      >
        <div className="d-flex align-items-center gap-1">
          <div>
            {type === 'Request'
              ? <Globe size={35} />

              : type === 'Incoming'
                ? <Database size={35} />

                : type === 'Variable'
                  ? <X size={35} />

                  : type === 'Share'
                    ? <Share2 size={35} />

                    : 'null'}
          </div>
          <div className="text-start">
            {name}
          </div>
        </div>
      </OverlayTrigger>
    </div>
  );
};

CustomNodesDetail.displayName = 'CustomNodesDetail';
export { CustomNodesDetail };
