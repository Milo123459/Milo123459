try {
    console.log(require('child_process').execSync('git config user.name github-actions && git config user.email github-actions@github.com && npx git-go update with stats').toString());
} catch {};