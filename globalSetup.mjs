import fs from 'fs';
import path from 'path';

export default async function globalSetup() {
  const testResultsPath = path.resolve('test-results');
  if (fs.existsSync(testResultsPath)) {
    fs.rmSync(testResultsPath, { recursive: true, force: true });
    console.log('✅ Cleaned up test-results folder');
  }
}