"use strict";(self.webpackChunkdarklab=self.webpackChunkdarklab||[]).push([[159],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:2,sidebar_label:"GIT"},i="GIT",o={unversionedId:"tutorials/git",id:"tutorials/git",title:"GIT",description:"Git Configuration",source:"@site/docs/tutorials/git.md",sourceDirName:"tutorials",slug:"/tutorials/git",permalink:"/darklab/docs/tutorials/git",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/git.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"GIT"},sidebar:"tutorialSidebar",previous:{title:"LINUX",permalink:"/darklab/docs/tutorials/linux"},next:{title:"WIREGUARD",permalink:"/darklab/docs/tutorials/wireguard"}},s={},p=[{value:"Git Configuration",id:"git-configuration",level:2},{value:"1. Install Git",id:"1-install-git",level:3},{value:"2. Configure Git",id:"2-configure-git",level:3},{value:"3. Create Directory",id:"3-create-directory",level:3},{value:"4. Initialize Repository",id:"4-initialize-repository",level:3},{value:"5. Run Git",id:"5-run-git",level:3},{value:"6. Branches",id:"6-branches",level:3}],c={toc:p},u="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"git"},"GIT"),(0,n.kt)("h2",{id:"git-configuration"},"Git Configuration"),(0,n.kt)("h3",{id:"1-install-git"},"1. Install Git"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update \nsudo apt-get install git-all\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Check git version:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,n.kt)("h3",{id:"2-configure-git"},"2. Configure Git"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Username:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "name-user"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Email:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.email "user@domain.com"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Editor:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global core.editor nano\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Default branch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global init.defaultBranch <new-branch>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Check settings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git config --list\n")),(0,n.kt)("h3",{id:"3-create-directory"},"3. Create Directory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /home/user/<directory-name>\n")),(0,n.kt)("h3",{id:"4-initialize-repository"},"4. Initialize Repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/user/<directory-name>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git init\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone <address/repository>\n")),(0,n.kt)("h3",{id:"5-run-git"},"5. Run Git"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Check for changes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git status\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Adding and changing a file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git add <file-name>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Add all files:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Commit:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "<message>"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Push files to the official repository:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin <branch-name>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Update local repository with remote:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git pull <remote-branch> <branch-name>\n")),(0,n.kt)("h3",{id:"6-branches"},"6. Branches"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Create new branch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b <new-branch>\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," List local branch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git branch\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," List remote branch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -r\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," List all branches:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -a\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Delete local branch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -d <branch-name> \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u21b3")," Delete remote branch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin --d <branch-name>\n")))}g.isMDXComponent=!0}}]);