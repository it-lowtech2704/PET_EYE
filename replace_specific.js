const fs = require('fs');

const filesToUpdate = [
    'c:\\Users\\kjt\\Desktop\\EXE2\\Peteye\\src\\pages\\LandingPage.tsx',
    'c:\\Users\\kjt\\Desktop\\EXE2\\Peteye\\src\\pages\\Register.tsx',
    'c:\\Users\\kjt\\Desktop\\EXE2\\Peteye\\src\\pages\\Profile.tsx',
    'c:\\Users\\kjt\\Desktop\\EXE2\\Peteye\\src\\pages\\Payment.tsx',
    'c:\\Users\\kjt\\Desktop\\EXE2\\Peteye\\src\\pages\\Login.tsx',
    'c:\\Users\\kjt\\Desktop\\EXE2\\Peteye\\src\\pages\\ClinicDetail.tsx',
    'c:\\Users\\kjt\\Desktop\\EXE2\\Peteye\\index.html',
    'c:\\Users\\kjt\\Desktop\\EXE2\\Peteye\\metadata.json'
];

filesToUpdate.forEach(filePath => {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content.replace(/Carevia/g, 'Peteye').replace(/carevia/g, 'peteye');
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated', filePath);
        }
    } catch (e) {
        console.error('Failed to update', filePath, e);
    }
});
