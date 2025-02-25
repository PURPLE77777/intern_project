import { createRepositoryProvider } from 'share/lib';
import { Report } from './report.entity';

export const REPORT_REPOSITORY_TOKEN = 'REPORT_REPOSITORY';

export const reportProviders = [
  createRepositoryProvider(Report, REPORT_REPOSITORY_TOKEN),
];
