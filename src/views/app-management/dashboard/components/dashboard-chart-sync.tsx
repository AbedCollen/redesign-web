/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import { ResponsivePie } from '@nivo/pie';

import { ArrowUPCircle, CheckCircle, HelpCircle } from '@nxweb/icons/feather';

import { CHART_LABEL, CHART_MARGIN } from '../constants';

type Position =
  | 'absolute'
  | 'fixed'
  | 'inherit'
  | 'relative'
  | 'static'
  | 'sticky';

enum FlexDirection {
  Row = 'row',
  Column = 'column'
}

enum TextAlign {
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify'
}

enum PointerEvents {
  None = 'none',
  Auto = 'auto',
  All = 'all',
  Visible = 'visible'
  // Add other values as needed
}

const styles = {
  root: {
    fontFamily: 'consolas, sans-serif',
    textAlign: TextAlign.Center,
    position: 'relative' as Position,
    width: 350,
    height: 280
  },
  overlay: {
    position: 'absolute' as Position,
    top: 0,
    right: CHART_MARGIN.right,
    bottom: 0,
    left: CHART_MARGIN.left,
    display: 'flex',
    flexDirection: FlexDirection.Column,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 96,
    color: '#000000',
    // Background: "#FFFFFF33",
    textAlign: TextAlign.Center,
    // This is important to preserve the chart interactivity
    pointerEvents: PointerEvents.None
  },
  available: {
    fontSize: 24,
    color: '#C2C2C2'
  }
};

const data1 = [
  {
    id: 'Unknown',
    label: 'Unknown',
    value: 2
  },
  {
    id: 'Synced',
    label: 'Synced',
    value: 15
  },
  {
    id: 'OutOfSync',
    label: 'OutOfSync',
    value: 8
  }
];

const DashboardChartSync: React.FC = () => {
  return (
    <div className="d-flex justify-content-center py-2">
      <div style={styles.root}>
        <ResponsivePie
          colors={['#9E9E9E', '#5DE15F', '#FFB72B']}
          cornerRadius={45}
          data={data1}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          innerRadius={0.8}
          margin={CHART_MARGIN}
          padAngle={1}
          startAngle={-100} />
        <div style={styles.overlay}>
          <span className="fw-bold fs-1">CPU</span>
          <span style={styles.available}>Available</span>
        </div>
      </div>
      <div className="text-dark pt-1">
        <div className={CHART_LABEL}>
          <HelpCircle color="#9E9E9E" size={24} />
          <div className="fs-5">Unknown ({data1[0].value})</div>
        </div>
        <div className={CHART_LABEL}>
          <CheckCircle color="#5DE15F" size={24} />
          <span className="fs-5">Synced ({data1[1].value})</span>
        </div>
        <div className={CHART_LABEL}>
          <ArrowUPCircle color="#FFB72B" size={24} />
          <span className="fs-5">OutOfSync ({data1[2].value})</span>
        </div>
      </div>
    </div>
  );
};

DashboardChartSync.displayName = 'DashboardChartSync';

export default DashboardChartSync;
