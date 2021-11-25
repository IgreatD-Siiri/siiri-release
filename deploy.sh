#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd release/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git config user.email "dinglei0916@outlook.com"
git config user.name "dinglei"

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:IgreatD-Siiri/siiri-release.git master:gh-pages

cd -
