"use client";

import { useEffect, useRef, useState } from "react";
import { Workflow as WorkflowIcon } from "@/components/Icons";
import type { OperationBlock, PipelineStage, PlatformIcon, WorkflowConfig } from "@/lib/workflow-types";
import { getPlatformLogoSrc } from "@/lib/workflow-types";

type WorkflowDiagramProps = {
  workflow: WorkflowConfig;
};

function PlatformLogos({ platforms }: { platforms?: PlatformIcon[] }) {
  if (!platforms?.length) {
    return null;
  }

  return (
    <div className="wf-logos">
      {platforms.map((platform) => (
        <span className="wf-logo" key={platform.id} title={platform.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getPlatformLogoSrc(platform)}
            alt={platform.name}
            className={platform.wide ? "is-wide" : undefined}
            loading="lazy"
            decoding="async"
          />
        </span>
      ))}
    </div>
  );
}

function TagList({ items }: { items?: string[] }) {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className="wf-tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function StageNode({
  stage,
  index,
  isHub,
  isLast,
}: {
  stage: PipelineStage;
  index: number;
  isHub: boolean;
  isLast: boolean;
}) {
  return (
    <li className="wf-node" style={{ "--i": index } as React.CSSProperties}>
      <div className="wf-rail">
        <span className="wf-dot">{String(index + 1).padStart(2, "0")}</span>
        {!isLast ? <span className="wf-line" /> : null}
      </div>

      <article className={`wf-card ${isHub ? "is-hub" : ""}`.trim()}>
        <div className="wf-card-head">
          <h4>{stage.title}</h4>
          {isHub ? <span className="wf-hub-badge">Orchestrator</span> : null}
        </div>
        <p>{stage.subtitle}</p>
        <PlatformLogos platforms={stage.platforms} />
        <TagList items={stage.items} />
      </article>
    </li>
  );
}

function OperationCard({ block, index }: { block: OperationBlock; index: number }) {
  return (
    <article className="wf-op" style={{ "--i": index } as React.CSSProperties}>
      <div className="wf-op-head">
        <span className="wf-op-idx">{String.fromCharCode(65 + index)}</span>
        <h4>{block.title}</h4>
      </div>
      <PlatformLogos platforms={block.platforms} />
      <TagList items={block.items} />
    </article>
  );
}

export default function WorkflowDiagram({ workflow }: WorkflowDiagramProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [live, setLive] = useState(false);
  const { pipelineStages, operationBlocks, hubStageId } = workflow;

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const columns = operationBlocks.length;

  return (
    <div className={`wf ${live ? "is-live" : ""}`.trim()} ref={ref}>
      <span className="wf-aurora" aria-hidden="true" />
      <span className="wf-grid" aria-hidden="true" />

      <div className="wf-bar">
        <span className="wf-bar-title mono">
          <WorkflowIcon size={15} />
          Pipeline · {pipelineStages.length} stages
        </span>
        <span className="pill pill-live">
          <span className="dot" aria-hidden="true" />
          Live flow
        </span>
      </div>

      <ol className="wf-pipeline">
        {pipelineStages.map((stage, index) => (
          <StageNode
            key={stage.id}
            stage={stage}
            index={index}
            isHub={stage.id === hubStageId}
            isLast={index === pipelineStages.length - 1}
          />
        ))}
      </ol>

      <div className="wf-fork" aria-hidden="true">
        <span className="wf-fork-stem" />
        <span className="wf-fork-bar" />
        <div className="wf-fork-drops" style={{ "--cols": columns } as React.CSSProperties}>
          {operationBlocks.map((block, index) => (
            <span key={block.id} style={{ "--d": index } as React.CSSProperties} />
          ))}
        </div>
      </div>

      <div className="wf-ops" style={{ "--cols": columns } as React.CSSProperties}>
        {operationBlocks.map((block, index) => (
          <OperationCard key={block.id} block={block} index={index} />
        ))}
      </div>
    </div>
  );
}
