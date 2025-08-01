// File System Tools
import { installListDirectoryTool } from "./tools/fs-list-directory";
import { installReadFileTool } from "./tools/fs-read-file";
import { installWriteFileTool } from "./tools/fs-write-file";
import { installDeleteFileTool } from "./tools/fs-delete-file";

// Advanced File Editing Tools
import { installStrReplaceEditorTool } from "./tools/str-replace-editor";

// Terminal Tools
import { installRunTerminalCommandTool } from "./tools/terminal-run-command";
import { installKillProcessTool, installReadTerminalTool, installWriteProcessTool } from "./tools/terminal-interaction";

// Process Management Tools
import { installLaunchProcessTool, installListProcessesTool, installReadProcessTool } from "./tools/process-management";

// Process Management Tools
// TODO: Implement interactive process management
// - installLaunchProcessTool: Launch processes with wait/background modes
// - installListProcessesTool: List all active processes with status
// - installReadProcessTool: Read output from specific process
// - installWriteProcessTool: Send input to interactive processes
// - installKillProcessTool: Terminate processes by ID
// Terminal Interaction Tools
// TODO: Implement advanced terminal capabilities
// - installReadTerminalTool: Read current terminal output/selected text
// - installTerminalSessionTool: Manage persistent terminal sessions
// Diagnostic Tools
// TODO: Implement development environment diagnostics
// - installDiagnosticsTool: Get IDE errors, warnings, type issues
// - installHealthCheckTool: System and environment health monitoring
// Codebase Intelligence Tools
// TODO: Implement semantic code understanding
// - installCodebaseRetrievalTool: AI-powered code search and context
// - installSymbolAnalysisTool: Deep symbol relationship analysis
// - installDependencyMapTool: Project dependency visualization
// Visualization Tools
// TODO: Implement rich content rendering
// - installRenderMermaidTool: Generate interactive diagrams
// - installOpenBrowserTool: Launch URLs in browser
// - installMarkdownRenderTool: Rich markdown preview
// Memory Management Tools
// TODO: Implement persistent context
// - installRememberTool: Store long-term memories across sessions
// - installContextManagerTool: Manage conversation context
// Code Analysis Tools
import { installAnalysisBasicContextTool } from "./tools/context-analyzer";
import { installGrepSearchTool } from "./tools/code-search-regex";
import { installSearchKeywordsTool } from "./tools/keyword-search";

// GitHub Tools
import { installGitHubAnalyzeIssueTool } from "./tools/github-analysis-issue";
import { installGitHubGetIssueWithAnalysisTool } from "./tools/github-issue-with-analysis";
import { installGitHubAddIssueCommentTool } from "./tools/github-issue-comment";
import { installGitHubListRepositoryIssuesTool } from "./tools/github-list-repository-issues";
import { installGitHubFindCodeByDescriptionTool } from "./tools/github-find-code-by-description";
import { installGitHubCreateNewIssueTool } from "./tools/github-issue-create";

// Web Tools
import { installExtractWebpageAsMarkdownTool } from "./tools/web-fetch-content";
import { installFetchContentWithSummaryTool } from "./tools/fetch-content-with-summary";
import { installWebSearchTool } from "./tools/web-search";
import { installProjectMemoryTool } from "./tools/project-memory";

// Tool Categories
export const FileSystemTools = [
  installListDirectoryTool,
  installReadFileTool,
  installWriteFileTool,
  installDeleteFileTool,
] as const;

export const AdvancedEditingTools = [
  installStrReplaceEditorTool,
] as const;

export const CodeAnalysisTools = [
  installAnalysisBasicContextTool,
  installSearchKeywordsTool,
  installGrepSearchTool,
] as const;

export const TerminalTools = [
  installRunTerminalCommandTool,
] as const;

export const TerminalInteractionTools = [
  installReadTerminalTool,
  installWriteProcessTool,
  installKillProcessTool,
] as const;

export const ProcessManagementTools = [
  installLaunchProcessTool,
  installListProcessesTool,
  installReadProcessTool,
] as const;

export const GitHubTools = [
  installGitHubGetIssueWithAnalysisTool,
  installGitHubCreateNewIssueTool,
  installGitHubAddIssueCommentTool,
  installGitHubListRepositoryIssuesTool,
  installGitHubFindCodeByDescriptionTool,
  installGitHubAnalyzeIssueTool,
] as const;

export const WebTools = [
  installExtractWebpageAsMarkdownTool,
  installFetchContentWithSummaryTool,
  installWebSearchTool,
] as const;

export const EnhancedIntelligenceTools = [
  installProjectMemoryTool,
] as const;

// Tool Collections
export const CoreTools = [
  ...FileSystemTools,
  ...AdvancedEditingTools,
  ...CodeAnalysisTools,
  ...TerminalTools,
] as const;

export const AdvancedTools = [
  ...TerminalInteractionTools,
  ...ProcessManagementTools,
  ...EnhancedIntelligenceTools,
] as const;

export const IntegrationTools = [
  ...GitHubTools,
  ...WebTools,
] as const;

// All Tools (excluding comment tool for remote agent)
export const AutoDevRemoteAgentTools = [
  ...CoreTools,
  ...GitHubTools.filter(tool =>
    tool !== installGitHubAddIssueCommentTool &&
    tool !== installGitHubFindCodeByDescriptionTool
  ),
  ...WebTools,
  ...EnhancedIntelligenceTools,
] as const;
