import { motion } from 'framer-motion';

// Node positions (relative to 500x500 viewBox)
const nodes = [
  { id: 'route53', label: 'Route53', x: 250, y: 40 },
  { id: 'elb', label: 'ELB', x: 250, y: 120 },
  { id: 'eks', label: 'EKS', x: 140, y: 210 },
  { id: 'ecs', label: 'ECS', x: 360, y: 210 },
  { id: 'pod1', label: 'Pod', x: 80, y: 300 },
  { id: 'pod2', label: 'Pod', x: 200, y: 300 },
  { id: 'fargate', label: 'Fargate', x: 360, y: 300 },
  { id: 'jenkins', label: 'Jenkins', x: 140, y: 390 },
  { id: 'docker', label: 'Docker', x: 310, y: 390 },
  { id: 's3', label: 'S3', x: 180, y: 460 },
  { id: 'cw', label: 'CloudWatch', x: 340, y: 460 },
];

// Connections between nodes
const connections = [
  { from: 'route53', to: 'elb' },
  { from: 'elb', to: 'eks' },
  { from: 'elb', to: 'ecs' },
  { from: 'eks', to: 'pod1' },
  { from: 'eks', to: 'pod2' },
  { from: 'ecs', to: 'fargate' },
  { from: 'pod2', to: 'jenkins' },
  { from: 'jenkins', to: 'docker' },
  { from: 'jenkins', to: 's3' },
  { from: 'docker', to: 'cw' },
];

function getNode(id) {
  return nodes.find((n) => n.id === id);
}

function BlueprintNode({ node, index }) {
  const w = node.label.length * 9 + 20;
  const h = 28;
  const isPrimary = ['eks', 'route53', 'ecs'].includes(node.id);

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8 + index * 0.08, duration: 0.5, ease: 'easeOut' }}
    >
      {/* Pulse ring for primary nodes */}
      {isPrimary && (
        <motion.rect
          x={node.x - w / 2 - 3}
          y={node.y - h / 2 - 3}
          width={w + 6}
          height={h + 6}
          rx={8}
          fill="none"
          stroke="rgba(59,130,246,0.15)"
          strokeWidth={1}
          animate={{ opacity: [0.3, 0.08, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
        />
      )}

      {/* Node box */}
      <rect
        x={node.x - w / 2}
        y={node.y - h / 2}
        width={w}
        height={h}
        rx={6}
        fill="none"
        stroke={isPrimary ? 'rgba(59,130,246,0.25)' : 'rgba(59,130,246,0.12)'}
        strokeWidth={1}
        strokeDasharray={isPrimary ? 'none' : '4 3'}
      />

      {/* Label */}
      <text
        x={node.x}
        y={node.y + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={isPrimary ? 'rgba(59,130,246,0.35)' : 'rgba(59,130,246,0.20)'}
        fontSize={10}
        fontFamily="'JetBrains Mono', monospace"
        fontWeight={isPrimary ? 600 : 400}
      >
        {node.label}
      </text>
    </motion.g>
  );
}

function BlueprintConnection({ conn, index }) {
  const from = getNode(conn.from);
  const to = getNode(conn.to);
  if (!from || !to) return null;

  // Calculate start/end points at node edges
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const angle = Math.atan2(dy, dx);
  const fromH = 14;
  const toH = 14;

  const x1 = from.x + Math.cos(angle) * 20;
  const y1 = from.y + fromH;
  const x2 = to.x - Math.cos(angle) * 20;
  const y2 = to.y - toH;

  // Create a slight curve
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const offset = (x2 - x1) * 0.1;
  const path = `M ${x1} ${y1} Q ${midX + offset} ${midY} ${x2} ${y2}`;

  return (
    <g>
      {/* Connection line */}
      <motion.path
        d={path}
        fill="none"
        stroke="rgba(59,130,246,0.10)"
        strokeWidth={1}
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
        className="blueprint-dash"
      />

      {/* Flowing data dot */}
      <motion.circle
        r={1.5}
        fill="rgba(59,130,246,0.30)"
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={{
          delay: 2 + index * 0.3,
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ offsetPath: `path("${path}")` }}
      />
    </g>
  );
}

export default function AwsBlueprint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <motion.svg
        viewBox="0 0 500 500"
        className="w-full h-full max-w-[600px] max-h-[600px]"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* VPC boundary */}
        <motion.rect
          x={30}
          y={15}
          width={440}
          height={470}
          rx={16}
          fill="none"
          stroke="rgba(59,130,246,0.06)"
          strokeWidth={1}
          strokeDasharray="8 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 2, ease: 'easeOut' }}
        />
        <motion.text
          x={50}
          y={35}
          fill="rgba(59,130,246,0.10)"
          fontSize={9}
          fontFamily="'JetBrains Mono', monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          VPC
        </motion.text>

        {/* Connections (render first so nodes are on top) */}
        {connections.map((conn, i) => (
          <BlueprintConnection key={`${conn.from}-${conn.to}`} conn={conn} index={i} />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <BlueprintNode key={node.id} node={node} index={i} />
        ))}
      </motion.svg>
    </motion.div>
  );
}
