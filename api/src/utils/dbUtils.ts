import { execSync } from 'child_process';

export function runSeed(): void {
  try {
    execSync('npm run seed', { stdio: 'inherit' });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to run seed: ${error.message}`);
    }
  }
}

// next monday 10:30, Albert
