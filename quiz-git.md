# Git 的使用

## Q1

Git 是一个广泛使用的版本管理工具，适合团队开发。  
如果你用过 Git，那么请回忆一下，  
我们在确认开发需求之后，从写代码到提交进团队的代码仓库。  
这个过程中大概会用到哪几条命令？

请直接在这里作答。

答：clone代码：           git  clone 'http://blog.csdnXXXXX'
    查看所有的分支：      git   branch -a  
    在git上建个自己的分支，然后切换分支：   git  checkout -b fangqianwen  origin/fangqianwen
    拉去dev分支的代码      git  pull   origin  dev 
    修改代码后保存代码记录   git  commit  -m "fix: 修改bug#2367"
    合并dev分支的代码     git  merge   origin  dev 
    保存修改记录          git  commit  -m "other: 合并代码"
    提交到远程代码仓库     git  push  origin   fangqianwen

## Q2

你知道和用过哪些 Git 的方法论和技巧

答：  一、可以使用可视化工具 TortoiseGit来操作git ，他是一个图形化的软件，功能很丰富。
      二、 代码提交 时先pull 后commit此时如果有冲突，先解决冲突，合并最新代码后再pull。
      三、多人合作开发的项目，每人建一个自己的分支，方便协作开发。
      四、eslint配合git使用，在进行git commit 的时候验证eslint规范，如果 eslint 验证不通过，则不能提交。