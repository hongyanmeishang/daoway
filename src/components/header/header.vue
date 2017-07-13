<template>
  <header id="header">
    <div id="sticky-wrapper">
      <div class="logo">
        <a href="/"><img src="../../imgs/logo.png" alt="logo"></a>
      </div>
      <ul class="nav-list" id="nav-list">
        <li id="position">
          <a href="/position">
            <img src="../../imgs/citypoint.png" >
            <span id="showCity" >北京</span>
            <span id="city">切换城市</span>
          </a>
        </li>
        <li><a href="/">首页</a></li>
        <li><a href="/downloadAPP">下载APP</a>
        </li>
        <li><a href="/service">服务商</a></li>
        <li><a href="/information">商家入驻</a></li>
        <li><a href="/aboutus">关于我们</a></li>
        <li><a class="enter" href="#">商家登录</a></li>

      </ul>
    </div>
  </header>
</template>

<script>
    export default {}
</script>

<style>
  body,ul,li,i{
    list-style:none;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  p,span,div,b{
    font-size: 16px;
    font-weight: normal;
    line-height: 1;
  }
  /*导航样式*/
  #header{
    border-bottom: 1px solid #e5e5e5;
    background: white;
  }
  #header #sticky-wrapper{
    width: 1200px;
    height: 70px;
    margin: 0 auto;
  }
  #header .logo{
    float: left;
    line-height: 70px;
  }
  #header .logo a img{
    background: #fbfbfb;
    vertical-align: middle;
  }
  #header #nav-list{
    float: right;
  }
  #header #nav-list li{
    font-weight: bold;
    float: left;
    margin-right: 30px;
    line-height: 70px;
  }
  #header #nav-list li>a{
    color: #121212;
    text-decoration: none;
    font-size: 16px;
    vertical-align: middle;
  }

  #showCity,#city{
    font-weight: bold;
  }
  #header #nav-list li>a:hover{
    color: #e94840;
  }
  #header #nav-list #position{
    margin-right: 80px;
  }
  #header #nav-list .enter{
    display: inline-block;
    width: 76px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background: #e94840;
    border-radius: 5px;
    color: #fff!important;
  }
</style>
