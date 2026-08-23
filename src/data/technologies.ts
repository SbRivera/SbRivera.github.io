export interface TechnologyGroup {
  id: string;
  labelKey: string;
  /** Each item is an i18n key under technologies.items.<key> (proper nouns
   *  like "Python" map to themselves in both locales for consistent rendering). */
  items: string[];
}

export const technologyGroups: TechnologyGroup[] = [
  {
    id: 'ai-data',
    labelKey: 'technologies.groups.aiData',
    items: [
      'technologies.items.python',
      'technologies.items.llms',
      'technologies.items.langchain',
      'technologies.items.tensorflow',
      'technologies.items.machineLearning',
      'technologies.items.autonomousAgents',
      'technologies.items.dataAnalysis',
      'technologies.items.dataVisualization',
      'technologies.items.kpi',
    ],
  },
  {
    id: 'backend-automation',
    labelKey: 'technologies.groups.backendAutomation',
    items: [
      'technologies.items.fastapi',
      'technologies.items.laravel',
      'technologies.items.sql',
      'technologies.items.apis',
      'technologies.items.automation',
      'technologies.items.java',
      'technologies.items.javascript',
      'technologies.items.typescript',
      'technologies.items.angular',
    ],
  },
  {
    id: 'mobile',
    labelKey: 'technologies.groups.mobile',
    items: [
      'technologies.items.flutter',
      'technologies.items.dart',
      'technologies.items.firebase',
      'technologies.items.androidStudio',
      'technologies.items.uiDesign',
    ],
  },
  {
    id: 'tools',
    labelKey: 'technologies.groups.tools',
    items: [
      'technologies.items.git',
      'technologies.items.vscode',
      'technologies.items.debugging',
    ],
  },
];
