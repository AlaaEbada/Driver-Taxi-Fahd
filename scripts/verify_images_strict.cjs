const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Colors for console output
const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m'
};

const projectRoot = path.join(__dirname, '..');
const srcDir = path.join(projectRoot, 'src');
const publicDir = path.join(projectRoot, 'public');

// Recursively get all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, file));
        }
    });

    return arrayOfFiles;
}

// Get actual file path with correct casing
function getActualPath(startPath, filePath) {
    const parts = filePath.split(/[/\\]/);
    let currentPath = startPath;

    for (const part of parts) {
        if (!part) continue;

        try {
            const files = fs.readdirSync(currentPath);
            const found = files.find(f => f.toLowerCase() === part.toLowerCase());

            if (found) {
                if (found !== part) {
                    return { found: true, correct: false, actual: found, expected: part };
                }
                currentPath = path.join(currentPath, found);
            } else {
                return { found: false };
            }
        } catch (e) {
            return { found: false };
        }
    }
    return { found: true, correct: true, fullPath: currentPath };
}

console.log(`${colors.yellow}Starting strict image path verification...${colors.reset}\n`);

// 1. Scan source code for image usages
const sourceFiles = getAllFiles(srcDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.js'));
const imageRegex = /['"](\/assets\/[^'"]+)['"]/g;

let issuesFound = 0;

sourceFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
        const imagePath = match[1]; // e.g., /assets/img.png
        const relativePath = imagePath.substring(1); // assets/img.png

        // check if file exists in public
        const result = getActualPath(publicDir, relativePath);

        if (!result.found) {
            console.log(`${colors.red}[MISSING]${colors.reset} ${imagePath}`);
            console.log(`  in ${path.relative(projectRoot, file)}`);
            issuesFound++;
        } else if (!result.correct) {
            console.log(`${colors.yellow}[CASE MISMATCH]${colors.reset} ${imagePath}`);
            console.log(`  Expected: ${result.expected}`);
            console.log(`  Actual:   ${result.actual}`);
            console.log(`  in ${path.relative(projectRoot, file)}`);
            issuesFound++;
        }
    }
});

if (issuesFound === 0) {
    console.log(`\n${colors.green}No image issues found!${colors.reset}`);
} else {
    console.log(`\n${colors.red}Found ${issuesFound} issues.${colors.reset}`);
}
