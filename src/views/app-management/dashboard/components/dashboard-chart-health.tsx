/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import { ResponsivePie } from '@nivo/pie';

import { Circle, Heart, HelpCircle, Slash } from '@nxweb/icons/feather';

import { IconDegraded, IconMissing } from '@components/icon';

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
    value: 1
  },
  {
    id: 'Missing',
    label: 'Missing',
    value: 2
  },
  {
    id: 'Degraded',
    label: 'Degraded',
    value: 2
  },
  {
    id: 'Healthy',
    label: 'Healthy',
    value: 6
  },
  {
    id: 'Suspend',
    label: 'Suspend',
    value: 1
  },
  {
    id: 'Progressing',
    label: 'Progressing',
    value: 5
  }
];

const DashboardChartHealth: React.FC = () => {
  return (
    <div className="d-flex justify-content-center py-2">
      <div style={styles.root}>
        <ResponsivePie
          colors={[
            '#DFDFDF',
            '#FFDB95',
            '#FC838A',
            '#21C032',
            '#A0A0A0',
            '#4065E9'
          ]}
          cornerRadius={45}
          data={data1}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          innerRadius={0.8}
          margin={CHART_MARGIN}
          padAngle={1} />
        <div style={styles.overlay}>
          <span className="fw-bold fs-1">CPU</span>
          <span style={styles.available}>Available</span>
        </div>
      </div>
      <div className="text-dark pt-1">
        <div className={CHART_LABEL}>
          <HelpCircle color="#DFDFDF" size={24} />
          <div className="fs-5">Unknown ({data1[0].value})</div>
        </div>
        <div className={CHART_LABEL}>
          <Circle color="#4065E9" size={24} />
          <span className="fs-5">Progressing ({data1[5].value})</span>
        </div>
        <div className={CHART_LABEL}>
          <Slash color="#A0A0A0" size={24} />
          <span className="fs-5">Suspend ({data1[4].value})</span>
        </div>
        <div className={CHART_LABEL}>
          <Heart fill="#21C032" size={24} strokeWidth={0} />
          <span className="fs-5">Healthy ({data1[3].value})</span>
        </div>
        <div className={CHART_LABEL}>
          <IconDegraded fill="#FC838A" />
          <span className="fs-5">Degraded ({data1[2].value})</span>
        </div>
        <div className={CHART_LABEL}>
          <IconMissing fill="#FFDB95" />
          <span className="fs-5">Missing ({data1[1].value})</span>
        </div>
      </div>
    </div>
  );
};

DashboardChartHealth.displayName = 'DashboardChartHealth';

export default DashboardChartHealth;
