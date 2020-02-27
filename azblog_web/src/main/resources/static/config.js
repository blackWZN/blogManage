layui.use('jquery', function () {
    var $ = layui.jquery;
    //文章路由
    $('.layui-nav-tree li').eq(1).find('dl dd').eq(0).on('click', function () {
        $('#content iframe').attr('src', 'article/articleList.html');
    })
    $('.layui-nav-tree li').eq(1).find('dl dd').eq(1).on('click', function () {
        $('#content iframe').attr('src', 'article/category.html');
    })
    $('.layui-nav-tree li').eq(1).find('dl dd').eq(2).on('click', function () {
        $('#content iframe').attr('src', 'article/comment.html');
    })
    //问答路由
    $('.layui-nav-tree li').eq(2).find('dl dd').eq(0).on('click', function () {
        $('#content iframe').attr('src', 'problem/problemList.html');
    })
    $('.layui-nav-tree li').eq(2).find('dl dd').eq(1).on('click', function () {
        $('#content iframe').attr('src', 'problem/replyList.html');
    })
    //系统管理路由
    $('.layui-nav-tree li').eq(3).find('dl dd').eq(0).on('click', function () {
        $('#content iframe').attr('src', 'system/admin.html');
    })
    $('.layui-nav-tree li').eq(3).find('dl dd').eq(1).on('click', function () {
        $('#content iframe').attr('src', 'system/roles.html');
    })
    $('.layui-nav-tree li').eq(3).find('dl dd').eq(3).on('click', function () {
        $('#content iframe').attr('src', 'system/menu.html');
    })
    //友情链接
    $('.layui-nav-tree li').eq(4).on('click', function () {
        $('#content iframe').attr('src', 'link.html');
    })
    //网站设置
    $('.layui-nav-tree li').eq(5).on('click', function () {
        $('#content iframe').attr('src', 'config.html');
    })
    //断路监控
    $('.layui-nav-tree li').eq(6).on('click', function () {
        $('#content iframe').attr('src', 'http://localhost:9998/hystrix/');
    })
    //链路追踪
    $('.layui-nav-tree li').eq(7).on('click', function () {
        $('#content iframe').attr('src', 'http://localhost:9411/');
    })
    //接口文档
    $('.layui-nav-tree li').eq(8).on('click', function () {
        $('#content iframe').attr('src', 'http://localhost:8202/swagger-ui.html');
    })

})