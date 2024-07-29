// @ts-expect-error no declaration
import ThundraTraceChart from 'thundra-trace-chart';

const TundraTraceChart = () => {
  const trace = [
    {
      color: '#4065E9',
      duration: 200,
      id: '9400a8a9-9650-4312-9514-d4bbc1114a97',
      name: 'user-get-lambda-java-es',
      parentId: '',
      serviceName: 'Simple Storage Service v0.1',
      tags: {
        error: true
      },
      timestamp: 1557761782905000,
      traceId: '52729a9d-23c5-6641-241d-c77c9c21ca4a'
    },
    {
      color: '#FFB72B',
      duration: 32, // Adjust duration as needed
      id: 'child-trace-id-1',
      name: 'child-function-1',
      parentId: '9400a8a9-9650-4312-9514-d4bbc1114a97', // Parent ID
      serviceName: 'Simple Storage Service v0.1',
      tags: {
        error: true
      },
      timestamp: 1557761782905020, // Adjust timestamp as needed
      traceId: '52729a9d-23c5-6641-241d-c77c9c21ca4a'
    },
    {
      color: '#21C032',
      duration: 32, // Adjust duration as needed
      id: 'child-trace-id-2',
      name: 'Simple Storage Service v0.1',
      parentId: '9400a8a9-9650-4312-9514-d4bbc1114a97', // Parent ID
      serviceName: 'Simple Storage Service v0.1',
      tags: {
        error: true
      },
      timestamp: 1557761782905040, // Adjust timestamp as needed
      traceId: '52729a9d-23c5-6641-241d-c77c9c21ca4a'
    }
  ];

  return (
    <div id="tundra_traces_chart">
      <ThundraTraceChart
        traceId="52729a9d-23c5-6641-241d-c77c9c21ca4a"
        traceSummary={trace} />
    </div>
  );
};

TundraTraceChart.displayName = 'TundraTraceChart';

export default TundraTraceChart;
