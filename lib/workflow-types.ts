export type PlatformIcon = {
  id: string;
  name: string;
  slug?: string;
  color?: string;
  local?: string;
  wide?: boolean;
};

export type PipelineStage = {
  id: string;
  title: string;
  subtitle: string;
  platforms?: PlatformIcon[];
  items?: string[];
};

export type OperationBlock = {
  id: string;
  title: string;
  platforms?: PlatformIcon[];
  items: string[];
};

export type WorkflowConfig = {
  pipelineStages: PipelineStage[];
  operationBlocks: OperationBlock[];
  hubStageId?: string;
};

export function getPlatformLogoSrc(platform: PlatformIcon) {
  if (platform.local) {
    return platform.local;
  }

  return `https://cdn.simpleicons.org/${platform.slug}/${platform.color}`;
}
