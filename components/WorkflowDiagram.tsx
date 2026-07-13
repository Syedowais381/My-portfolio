"use client";

import { useEffect, useRef, useState } from "react";
import type { OperationBlock, PipelineStage, PlatformIcon, WorkflowConfig } from "@/lib/workflow-types";
import { getPlatformLogoSrc } from "@/lib/workflow-types";

type WorkflowDiagramProps = {
  workflow: WorkflowConfig;
};

function PlatformLogo({ platform }: { platform: PlatformIcon }) {
  return (
    <div className="arch-platform" title={platform.name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={getPlatformLogoSrc(platform)}
        alt={platform.name}
        width={platform.wide ? 88 : 36}
        height={36}
        loading="lazy"
        className={platform.wide ? "arch-platform-wide" : undefined}
      />
    </div>
  );
}

function FlowArrow({ index }: { index: number }) {
  return (
    <div className="arch-flow-arrow" style={{ "--flow-index": index } as React.CSSProperties} aria-hidden="true">
      <span className="arch-flow-line" />
      <svg className="arch-flow-chevron" viewBox="0 0 12 12" fill="none">
        <path
          d="M1.5 2.5L6 9.5L10.5 2.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function PipelineCard({ stage, hubStageId, index }: { stage: PipelineStage; hubStageId?: string; index: number }) {
  const isHub = stage.id === hubStageId;

  return (
    <article
      className={`arch-card arch-card-pipeline ${isHub ? "arch-card-hub" : ""}`.trim()}
      style={{ "--stage-index": index } as React.CSSProperties}
    >
      <div className="arch-card-head">
        <h3>{stage.title}</h3>
        <p>{stage.subtitle}</p>
      </div>
      {stage.platforms?.length ? (
        <div className="arch-platform-row">
          {stage.platforms.map((platform) => (
            <PlatformLogo key={platform.id} platform={platform} />
          ))}
        </div>
      ) : null}
      {stage.items?.length ? (
        <ul className="arch-tag-list">
          {stage.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function OperationCard({ block, index }: { block: OperationBlock; index: number }) {
  return (
    <article className="arch-card arch-card-operation" style={{ "--ops-index": index } as React.CSSProperties}>
      <h3>{block.title}</h3>
      {block.platforms?.length ? (
        <div className="arch-platform-row">
          {block.platforms.map((platform) => (
            <PlatformLogo key={platform.id} platform={platform} />
          ))}
        </div>
      ) : null}
      <ul className="arch-tag-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function FlowFork({ branchCount }: { branchCount: number }) {
  return (
    <div
      className="arch-flow-fork"
      style={{ "--fork-branches": branchCount } as React.CSSProperties}
      aria-hidden="true"
    >
      <span className="arch-flow-fork-stem" />
      <span className="arch-flow-fork-bar" />
      <div className="arch-flow-fork-branches">
        {Array.from({ length: branchCount }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}

export default function WorkflowDiagram({ workflow }: WorkflowDiagramProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
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
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`arch-overview ${visible ? "is-animated" : ""}`.trim()}>
      <div className="arch-overview-glow" aria-hidden="true" />

      <div className="arch-pipeline">
        {pipelineStages.map((stage, index) => (
          <div key={stage.id} className="arch-pipeline-step">
            <PipelineCard stage={stage} hubStageId={hubStageId} index={index} />
            {index < pipelineStages.length - 1 ? <FlowArrow index={index} /> : null}
          </div>
        ))}
      </div>

      <FlowFork branchCount={operationBlocks.length} />

      <div
        className="arch-operations"
        style={{ "--ops-columns": operationBlocks.length } as React.CSSProperties}
      >
        {operationBlocks.map((block, index) => (
          <OperationCard key={block.id} block={block} index={index} />
        ))}
      </div>
    </div>
  );
}
