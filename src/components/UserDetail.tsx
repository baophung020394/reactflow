import React from 'react';
import { useParams } from 'react-router-dom';
import { Node, Edge, MarkerType } from 'reactflow';
import FlowComponent from './FlowComponent';

// Dữ liệu user flow
type UserFlowType = {
  [key: string]: {
    userName: string;
    nodes: Node[];
    edges: Edge[];
  };
};

const userFlows: UserFlowType = {
  // User 1
  '1': {
    userName: 'User 1',
    nodes: [
      { id: '1', type: 'custom', data: { label: 'Launch push notifications', description: 'Push notifications to encourage users to return.', status: 'Active', progress: '40%' }, position: { x: 0, y: 0 } },
      { id: '2', type: 'custom', data: { label: 'Social notifications', description: 'Improve user engagement through social features.', status: 'In progress', progress: '50%' }, position: { x: 400, y: 100 } },
      { id: '3', type: 'custom', data: { label: 'Premium trial users', description: 'Measure conversion rates from trial to premium.', status: 'Off-track', progress: '18%' }, position: { x: 800, y: 0 } },
      { id: '4', type: 'custom', data: { label: 'Average session duration', description: 'Monitor average session duration to identify user engagement.', status: 'Critical', progress: 'YTD: No change' }, position: { x: 400, y: 300 } },
      { id: '5', type: 'custom', data: { label: 'Time-based notifications', description: 'Automate notifications based on user behavior.', status: 'Done', progress: '100%' }, position: { x: 0, y: 300 } },
      { id: '6', type: 'custom', data: { label: 'ARR (Annual Recurring Revenue)', description: 'Monitor annual recurring revenue growth.', status: 'On track', progress: 'Past 12 months: -11.74%' }, position: { x: 800, y: 300 } },
      { id: '7', type: 'custom', data: { label: 'Monthly retention', description: 'Track retention rates to evaluate user engagement.', status: 'Average', progress: '81.02%' }, position: { x: 800, y: 500 } },
      { id: '8', type: 'custom', data: { label: 'Monthly premium subscriptions', description: 'Track premium subscriptions growth.', status: 'Average', progress: '291,932.35' }, position: { x: 800, y: 700 } },
      { id: '9', type: 'custom', data: { label: 'AI model for song recommendations', description: 'Enhance user experience with AI recommendations.', status: 'In progress', progress: '25%' }, position: { x: 0, y: 500 } },
      { id: '10', type: 'custom', data: { label: 'More prominent sharing prompts', description: 'Increase content sharing through improved prompts.', status: 'Done', progress: '50%' }, position: { x: 0, y: 700 } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', style: { stroke: '#F44336' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e3-4', source: '3', target: '4', type: 'step', style: { stroke: '#FFC107' }, markerEnd: { type: MarkerType.ArrowClosed } },
      { id: 'e4-5', source: '4', target: '5', type: 'straight', style: { stroke: '#9C27B0', strokeDasharray: '5,5' }, animated: true },
      { id: 'e5-6', source: '5', target: '6', type: 'smoothstep', style: { stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e6-7', source: '6', target: '7', type: 'smoothstep', style: { stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
      { id: 'e7-8', source: '7', target: '8', type: 'step', style: { stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e9-10', source: '9', target: '10', type: 'smoothstep', style: { stroke: '#FFC107' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    ],
  },
  // User 2
  '2': {
    userName: 'User 2',
    nodes: [
      { id: '1', type: 'custom', data: { label: 'New marketing campaign', description: 'Launch a new marketing campaign to boost user growth.', status: 'Finished', progress: '67%' }, position: { x: 0, y: 0 } },
      { id: '2', type: 'custom', data: { label: 'Avg. sessions per week', description: 'Measure weekly user sessions.', status: 'Off-track', progress: '25%' }, position: { x: 400, y: 100 } },
      { id: '3', type: 'custom', data: { label: 'Time spent listening to music', description: 'Increase average listening time.', status: 'High leverage', progress: '24%' }, position: { x: 800, y: 0 } },
      { id: '4', type: 'custom', data: { label: 'Avg. shares per session', description: 'Track the average number of shares per session.', status: 'Average', progress: '25%' }, position: { x: 400, y: 300 } },
      { id: '5', type: 'custom', data: { label: 'Social notifications', description: 'Enhance social interactions through notifications.', status: 'To do', progress: '50%' }, position: { x: 0, y: 200 } },
      { id: '6', type: 'custom', data: { label: 'AI model for song recommendations', description: 'Improve song recommendations with AI.', status: 'Off-track', progress: '25%' }, position: { x: 800, y: 300 } },
      { id: '7', type: 'custom', data: { label: 'Monthly retention', description: 'Measure monthly retention to ensure user engagement.', status: 'Average', progress: '81%' }, position: { x: 800, y: 500 } },
      { id: '8', type: 'custom', data: { label: 'Time-based notifications', description: 'Implement notifications based on user actions.', status: 'Done', progress: '100%' }, position: { x: 0, y: 400 } },
      { id: '9', type: 'custom', data: { label: 'Time to Premium', description: 'Measure time for trial users to upgrade to premium.', status: 'Critical', progress: '-18%' }, position: { x: 400, y: 500 } },
      { id: '10', type: 'custom', data: { label: 'More prominent sharing prompts', description: 'Increase sharing via more prominent prompts.', status: 'Done', progress: '50%' }, position: { x: 0, y: 700 } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', style: { stroke: '#FFC107' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e4-5', source: '4', target: '5', type: 'step', style: { stroke: '#9C27B0' }, markerEnd: { type: MarkerType.ArrowClosed } },
      { id: 'e5-6', source: '5', target: '6', type: 'smoothstep', style: { stroke: '#F44336' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e6-7', source: '6', target: '7', type: 'smoothstep', style: { stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed } },
      { id: 'e8-9', source: '8', target: '9', type: 'smoothstep', style: { stroke: '#FFC107' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e9-10', source: '9', target: '10', type: 'smoothstep', style: { stroke: '#9C27B0' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    ],
  },
  // User 3
  '3': {
    userName: 'User 3',
    nodes: [
      { id: '1', type: 'custom', data: { label: 'Experiment A', description: 'Test new UI layout for better engagement.', status: 'In progress', progress: '30%' }, position: { x: 0, y: 0 } },
      { id: '2', type: 'custom', data: { label: 'Measure user feedback', description: 'Collect feedback after UI change.', status: 'Pending', progress: 'Awaiting results' }, position: { x: 400, y: 100 } },
      { id: '3', type: 'custom', data: { label: 'Monthly active users', description: 'Track MAUs after change.', status: 'On track', progress: '10% increase' }, position: { x: 800, y: 0 } },
      { id: '4', type: 'custom', data: { label: 'Improve recommendations', description: 'Enhance recommendations based on user feedback.', status: 'Critical', progress: '-5%' }, position: { x: 400, y: 300 } },
      { id: '5', type: 'custom', data: { label: 'User engagement metrics', description: 'Track user engagement through new features.', status: 'Active', progress: '50%' }, position: { x: 0, y: 200 } },
      { id: '6', type: 'custom', data: { label: 'AI feedback processing', description: 'Implement AI to process user feedback.', status: 'In progress', progress: '20%' }, position: { x: 800, y: 300 } },
      { id: '7', type: 'custom', data: { label: 'Finalize new UI', description: 'Finalize UI updates based on testing.', status: 'Pending', progress: '0%' }, position: { x: 400, y: 500 } },
      { id: '8', type: 'custom', data: { label: 'Beta release', description: 'Release beta version for testing.', status: 'Planned', progress: 'Not started' }, position: { x: 0, y: 400 } },
      { id: '9', type: 'custom', data: { label: 'Analyze beta feedback', description: 'Collect and analyze feedback from beta release.', status: 'Planned', progress: 'Not started' }, position: { x: 400, y: 700 } },
      { id: '10', type: 'custom', data: { label: 'Launch full version', description: 'Launch full version based on beta feedback.', status: 'Planned', progress: 'Not started' }, position: { x: 800, y: 700 } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e2-3', source: '2', target: '3', type: 'step', style: { stroke: '#FFC107' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e3-4', source: '3', target: '4', type: 'smoothstep', style: { stroke: '#F44336' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e4-5', source: '4', target: '5', type: 'smoothstep', style: { stroke: '#9C27B0' }, markerEnd: { type: MarkerType.ArrowClosed } },
      { id: 'e5-6', source: '5', target: '6', type: 'straight', style: { stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e6-7', source: '6', target: '7', type: 'smoothstep', style: { stroke: '#FFC107' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e7-8', source: '7', target: '8', type: 'step', style: { stroke: '#9C27B0' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e8-9', source: '8', target: '9', type: 'smoothstep', style: { stroke: '#4CAF50' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
      { id: 'e9-10', source: '9', target: '10', type: 'smoothstep', style: { stroke: '#FFC107' }, markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
    ],
  },
};

const UserDetail: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>();

  const flowData = userId && userFlows[userId] ? userFlows[userId] : { userName: '', nodes: [], edges: [] };

  return (
    <div className="p-4">
      {userId ? (
        <>
          <h1 className="text-2xl font-bold mb-6 text-center">User Detail: {flowData.userName}</h1>
          <FlowComponent initialNodes={flowData.nodes} initialEdges={flowData.edges} />
        </>
      ) : (
        <p className="text-red-500">User ID not found!.</p>
      )}
    </div>
  );
};

export default UserDetail;
