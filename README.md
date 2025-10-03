<!-- git commands-->

git clone <!-- for cloning project  -->


 git init
 git config --global user.name write_git_username
 git config --global user.email write_git_emailid


 now inside .gitignore file add files and folders which you have to ignore from upload in git like example 

 node_modules
 dist
 .parcel-cache


git status
git add . or git add -A
git status
git commit -m "write initial commit"


git rest --hard HEAD   <!-- কমান্ডটি বর্তমান ব্রাঞ্চকে সর্বশেষ কমিটে ফিরিয়ে আনে এবং সব পরিবর্তন (স্টেজড ও আনস্টেজড) মুছে দেয়। -->

git branch branchname  <!-- for create new branch -->
git chekout branchname  <!-- for enter in this branch  -->

git merge origin fromthebranch <!--fromthebranch is that branch from where i want to marge-->

git push 

git pull origin branchname

