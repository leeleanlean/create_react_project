yarn build
echo -e "\033[42;30m DONE \033[0m 构建成功"
mv build/ docs/
echo -e "\033[42;30m DONE \033[0m 文件夹重命名为/docs成功"
git add .
read -p "Input commit message: " commit
git commit -m $commit
git push
echo -e "\033[42;30m DONE \033[0m 发布到github成功"