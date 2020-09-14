try {
    console.log(require('child_process').execSync('npx git-go update with stats').toString());
} catch {};