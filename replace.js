const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let files = [];
    try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
            if (item === 'node_modules' || item === '.git' || item === 'dist' || item === '.next') continue;
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                files = files.concat(walkDir(fullPath));
            } else if (/\.(tsx|ts|html|json)$/.test(item)) {
                files.push(fullPath);
            }
        }
    } catch (e) {
        console.error(e);
    }
    return files;
}

const dir = 'c:\\Users\\kjt\\Desktop\\EXE2\\Peteye';
const files = walkDir(dir);
files.forEach(filePath => {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content.replace(/Carevia/g, 'Peteye').replace(/carevia/g, 'peteye');
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated', filePath);
        }
    } catch (e) {
        console.error(e);
    }
});
