import ELK from 'elkjs/lib/elk.bundled';
import React, { useCallback, useLayoutEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Panel,
  useNodesState,
  useEdgesState,
  useReactFlow,
  getRectOfNodes,
  getTransformForBounds,
} from 'reactflow';
import { Button } from 'antd';
import { toPng } from 'html-to-image';
import PropTypes from 'prop-types';

import 'reactflow/dist/style.css';

const elk = new ELK();

// Elk has a *huge* amount of options to configure. To see everything you can
// tweak check out:
//
// - https://www.eclipse.org/elk/reference/algorithms.html
// - https://www.eclipse.org/elk/reference/options.html
const elkOptions = {
  'elk.algorithm': 'layered',
  'elk.layered.spacing.nodeNodeBetweenLayers': '100',
  'elk.spacing.nodeNode': '80',
};

const getLayoutedElements = (nodes, edges, options = {}) => {
  const isHorizontal = options?.['elk.direction'] === 'RIGHT';
  const graph = {
    id: 'root',
    layoutOptions: options,
    children: nodes.map(node => ({
      ...node,
      // Adjust the target and source handle positions based on the layout
      // direction.
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',

      // Hardcode a width and height for elk to use when layouting.
      width: 150,
      height: 50,
    })),
    edges,
  };

  return elk
    .layout(graph)
    .then(layoutedGraph => ({
      nodes: layoutedGraph.children.map(node => ({
        ...node,
        // React Flow expects a position property on the node instead of `x`
        // and `y` fields.
        position: { x: node.x, y: node.y },
      })),

      edges: layoutedGraph.edges,
    }))
    .catch(console.error);
};

function LayoutFlow({ initialNodes, initialEdges }) {
  //   console.log(initialNodes);
  //   console.log(initialEdges);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { fitView } = useReactFlow();

  const onConnect = useCallback(
    params => setEdges(eds => addEdge(params, eds)),
    [],
  );
  const onLayout = useCallback(
    ({ direction, useInitialNodes = false }) => {
      const opts = { 'elk.direction': direction, ...elkOptions };
      const ns = useInitialNodes ? initialNodes : nodes;
      const es = useInitialNodes ? initialEdges : edges;

      getLayoutedElements(ns, es, opts).then(
        ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
          setNodes(layoutedNodes);
          setEdges(layoutedEdges);

          window.requestAnimationFrame(() => fitView());
        },
      );
    },
    [nodes, edges],
  );
  const imageWidth = 1024;
  const imageHeight = 768;

  const { getNodes } = useReactFlow();

  function downloadImage(dataUrl) {
    const a = document.createElement('a');

    a.setAttribute('download', 'reactflow.png');
    a.setAttribute('href', dataUrl);
    a.click();
  }

  const onClick = () => {
    // we calculate a transform for the nodes so that all nodes are visible
    // we then overwrite the transform of the `.react-flow__viewport` element
    // with the style option of the html-to-image library
    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2,
    );

    toPng(document.querySelector('.react-flow__viewport'), {
      backgroundColor: '#1a365d',
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth,
        height: imageHeight,
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${
          transform[2]
        })`,
      },
    }).then(downloadImage);
  };

  // Calculate the initial layout on mount.
  useLayoutEffect(() => {
    onLayout({ direction: 'DOWN', useInitialNodes: true });
  }, []);

  return (
    <div style={{ width: '1000px', height: '1000px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        style={{ backgroundColor: '#090B13', borderRadius: '7px' }}
      >
        <Panel position="top-right">
          <Button
            onClick={() => onLayout({ direction: 'DOWN' })}
            style={{
              color: 'white',
              marginRight: '15px',
              backgroundColor: '#4d186e',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Vertical Layout
          </Button>

          <Button
            onClick={() => onLayout({ direction: 'RIGHT' })}
            style={{
              color: 'white',
              marginRight: '15px',
              backgroundColor: '#4d186e',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Horizontal Layout
          </Button>
          <Button
            className="download-btn"
            onClick={onClick}
            style={{
              color: 'white',
              backgroundColor: '#4d186e',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Download Image
          </Button>
        </Panel>
      </ReactFlow>
    </div>
  );
}

const MindMap = ({ initialNodes, initialEdges }) => (
  <ReactFlowProvider>
    <LayoutFlow initialNodes={initialNodes} initialEdges={initialEdges} />
  </ReactFlowProvider>
);

LayoutFlow.propTypes = {
  initialNodes: PropTypes.array.isRequired,
  initialEdges: PropTypes.array.isRequired,
};

MindMap.propTypes = {
  initialNodes: PropTypes.array.isRequired,
  initialEdges: PropTypes.array.isRequired,
};

export default MindMap;
