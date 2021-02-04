try {
    console.log(require('child_process').execSync('git config user.name github-actions && git config user.email github-actions@github.com && git add . && git commit -m "update with stats" && git pull && git push').toString());
} catch {};
