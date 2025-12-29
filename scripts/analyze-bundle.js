import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function analyzeBundle() {
  try {
    console.log('Analyzing bundle size...');

    // Run the build which will generate stats.html
    const { stdout } = await execAsync('npm run build');
    console.log('Build completed successfully!');

    console.log(
      'Bundle analysis completed. Check the dist/stats.html file for details.'
    );
    console.log('Opening bundle analysis report...');

    // Open the stats file in the browser (Windows specific)
    await execAsync('start dist/stats.html');
  } catch (error) {
    console.error('Error during bundle analysis:', error);
  }
}

analyzeBundle();
