# music

网易云音乐
ngrx
ng-zorro:ng add ng-zorro-antd
material/odk

ng-template,ng-container,ng-content
ng 模块化设计
proxy,http 拦截器
依赖注入
自定义指令和管道
自定义表单控件
动态组件
变更检测策略

api：
https://github.com/Binaryify/NeteaseCloudMusicApi
https://neteasecloudmusicapi.vercel.app/

ng g m core：当作根
@SkipSelf() 跳过自身，避免无限循环问题
@Optional() 允许不存在，没找到的时候赋值一个 null
ng g m share：公用的
ng g m pages：管理页面
ng g m services：调接口

ng g m pages/home --routing
ng g c pages/home
ng g s services/home
ng g c pages/home/components/wy-carousel
ng g m share/wy-ui
ng g c share/wy-ui/single-sheet
ng g p share/play-count
