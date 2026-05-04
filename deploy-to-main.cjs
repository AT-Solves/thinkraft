#!/usr/bin/env node

/**
 * Deploy Thinkraft to AT-Website repository's gh-pages branch
 * under the /thinkraft/ folder
 */

const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const DIST_DIR = path.join(__dirname, 'dist');
const TEMP_DIR = path.join(__dirname, '.deploy-temp');
const MAIN_REPO_URL = 'https://github.com/AT-Solves/AT-Website.git';
const MAIN_REPO_BRANCH = 'gh-pages';
const TARGET_FOLDER = 'thinkraft';

console.log('🚀 Starting deployment to AT-Website gh-pages...\n');

try {
  // Step 1: Clean temp directory
  if (fs.existsSync(TEMP_DIR)) {
    console.log('📁 Cleaning temp directory...');
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }

  // Step 2: Clone main repo's gh-pages branch
  console.log(`📥 Cloning ${MAIN_REPO_URL} (${MAIN_REPO_BRANCH} branch)...`);
  execSync(`git clone -b ${MAIN_REPO_BRANCH} ${MAIN_REPO_URL} "${TEMP_DIR}"`, {
    stdio: 'inherit'
  });

  // Step 3: Clear or create target folder
  const targetPath = path.join(TEMP_DIR, TARGET_FOLDER);
  if (fs.existsSync(targetPath)) {
    console.log(`🗑️  Clearing ${TARGET_FOLDER}/ folder...`);
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
  
  console.log(`📂 Creating ${TARGET_FOLDER}/ folder...`);
  fs.mkdirSync(targetPath, { recursive: true });

  // Step 4: Copy dist to target folder
  console.log(`📋 Copying dist to ${TARGET_FOLDER}/...`);
  copyDir(DIST_DIR, targetPath);

  // Step 5: Git commit and push
  console.log('\n📝 Committing changes...');
  execSync(`cd "${TEMP_DIR}" && git add -A`, { stdio: 'inherit' });
  execSync(`cd "${TEMP_DIR}" && git commit -m "Deploy Thinkraft to ${TARGET_FOLDER}/ - $(date)"`, {
    stdio: 'inherit'
  });

  console.log('📤 Pushing to GitHub...');
  execSync(`cd "${TEMP_DIR}" && git push origin ${MAIN_REPO_BRANCH}`, {
    stdio: 'inherit'
  });

  console.log('\n✅ Deployment successful!');
  console.log(`🌐 Thinkraft is now available at: https://achieverthoughts.com/${TARGET_FOLDER}/\n`);

  // Step 6: Cleanup
  console.log('🧹 Cleaning up temp directory...');
  fs.rmSync(TEMP_DIR, { recursive: true, force: true });

} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  // Cleanup on error
  if (fs.existsSync(TEMP_DIR)) {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }
  process.exit(1);
}

/**
 * Recursively copy directory
 */
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}
