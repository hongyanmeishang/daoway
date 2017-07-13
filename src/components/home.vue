<template>
    <div>
      <daoH></daoH>
      <div id="banner">
        <div class="inner-banner">
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src="../imgs/banner1.1.jpg" alt="...">
              </div>
              <div class="item">
                <img src="../imgs/banner2.1.jpg" alt="...">
              </div>
              <div class="item">
                <img src="../imgs/banner3.1.jpg" alt="...">
              </div>
            </div>
          </div>
        </div>
        <div id="banner-nav">
          <ul id="list">
            <li>
              <a href="#">家庭保洁</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../imgs/right.png">
              <!--<ul class="second">-->
              <!--<li></li>-->
              <!--</ul>-->
            </li>
            <li>
              <a href="#">上门按摩</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../imgs/right.png" alt="">
            </li>
            <li>
              <a href="#">上门维修</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../imgs/right.png" alt="">
            </li>
            <li>
              <a href="#">家电清洗</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../imgs/right.png" alt="">
            </li>
            <li>
              <a href="#">衣物洗护</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../imgs/right.png" alt="">
            </li>
            <li>
              <a href="#">搬家速运</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../imgs/right.png" alt="">
            </li>
            <li>
              <a href="#">美容美妆</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../imgs/right.png" alt="">
            </li>
            <li>
              <a href="#">鲜花绿植</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../imgs/right.png" alt="">
            </li>
            <li>
              <a href="#">上门医护</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../imgs/right.png" alt="">
            </li>
            <li>
              <a href="#">养车用车</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="../imgs/right.png" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="box box1">
        <div class="fff">
          <div class="navigation">
            <span class="serviceIndex">家庭保洁</span>
            <span class="serviceType">小时工/开荒保洁/擦玻璃/深度保洁/家居养护/杀虫灭鼠</span>
          </div>
          <div class="servicetags">
            <div class="tagsListHeader">
                <span class="lookMore">
                    <a href="#">更多服务></a>
                </span>
            </div>
            <div class="row-server">
              <a href="#">
                <div class="ServiceBorder">
                  <img src="../imgs/card/1.1.jpg" alt="">
                  <div class="serviceName">家庭保洁</div>
                  <div class="description">服务内容：
                                家庭保洁服务，2小时起订。（云家政暂时不提供带保...
                            </div>
                  <div class="price">
                    <span class="number">35</span>元/小时
                                <span class="server-btn">查看详情</span>
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="ServiceBorder">
                  <img src="../imgs/card/1.2.jpg" alt="">
                  <div class="serviceName">室内保洁</div>
                  <div class="description">服务内容：
                                1.室内保洁服务，2小时起订，服务商携带清洁装备...
                            </div>
                  <div class="price">
                    <span class="number">29</span>元/小时
                                <span class="server-btn">查看详情</span>
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="ServiceBorder">
                  <img src="../imgs/card/1.3.jpg" alt="">
                  <div class="serviceName">家庭保洁</div>
                  <div class="description">服务内容：
                                1.家庭保洁服务，2小时起订，服务商携带清洁装备...
                            </div>
                  <div class="price">
                    <span class="number">35</span>元/小时
                                <span class="server-btn">查看详情</span>
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="ServiceBorder">
                  <img src="../imgs/card/1.4.jpg" alt="">
                  <div class="serviceName">金牌保洁＋全屋清洁消毒杀菌</div>
                  <div class="description">温馨提示：若需要女保洁员请在备注上标明，谢谢
                                服务内容：
                                1...
                            </div>
                  <div class="price">
                    <span class="number">149</span>元/3小时
                                <span class="server-btn">查看详情</span>
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="ServiceBorder">
                  <img src="../imgs/card/1.5.jpg" alt="">
                  <div class="serviceName">日常保洁  小时工</div>
                  <div class="description">服务内容：
                                日常保洁，2个小时起订，阿姨携带工具包括，毛巾，...
                            </div>
                  <div class="price">
                    <span class="number">35</span>元/小时
                                <span class="server-btn">查看详情</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <daoF></daoF>
    </div>
</template>

<script>

  import Header from './header/header.vue'
  import Footer from './footer/footer.vue'
    export default {
      components: {
        daoH: Header,
        daoF: Footer
      }
    }
</script>

<style>
  /*横幅轮播*/
  #banner{
    padding: 0;
    height: 420px;
    position: relative;
  }
  #banner .inner-banner{
    width: 1360px;
    margin: 0 auto;
  }
  #banner #banner-nav #list{
    position: absolute;
    top: 0;
    left: 105px;
    width: 180px;
    height: 100%;
    background: #757881;
  }
  #banner #banner-nav li{
    width: 100%;
    height: 42px;
    display: block;
    line-height: 42px;
    text-align: center;
    position: relative;
  }
  #banner #banner-nav li>a{
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  #banner #banner-nav li img{
    position: absolute;
    right: 30px;
    top: 15px;
  }

  /*服务导航样式*/
  .box{
    width: 100%;
    height: 566px;
    /*margin: 0px auto;*/
    /*background: yellow;*/
    line-height: 1;
  }
  .fff{
    padding: 60px 0;
    width: 1200px;
    margin: 0 auto;
  }
  .box .navigation{
    text-align: center;
    color: #3d3838;
  }
  .box .serviceIndex{
    display: block;
    font-weight: 800;
    font-size: 28px;
    font-family: "Microsoft YaHei";
  }
  .box .serviceType{
    display: block;
    font-family: "幼圆";
    font-size: 22px;
    margin-top: 15px;
  }
  .servicetags .tagsListHeader{
    text-align: right;
  }
  .servicetags .lookMore a{
    color: #898989;
    font-size: 18px;
    font-family: "幼圆";
    line-height: 20px;
  }
  .box .servicetags .row-server{
    display: flex;
    margin-top: 10px;
  }
  .box .row-server a{
    text-decoration: none;
  }
  .box .row-server a img{
    width: 210px;
    height: 210px;
  }

  .box .row-server a .ServiceBorder {
    padding: 10px;
    width: 230px;
    border: 1px solid #eaeaea;
    margin: 0 5px;
    background: #fff;
    cursor: pointer;
    height: 345px;
  }
  .box .serviceName{
    font-size: 16px;
    padding: 10px 0;
    font-weight: 800;
    color: #000;
    height: 28px;
    width: 100%;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
  }
  .box .description{
    color: #929292;
    padding: 5px 0;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    font-size: 13px;
    line-height: 18px;
    height: 58px;
  }
  .ServiceBorder .price{
    font-size: 14px;
    padding: 5px 5px;
    font-weight: 600;
    height: 20px;
    line-height: 20px;
    color: #fb474f;
  }
  .price .number{
    font-size: 20px;
  }
  .price .server-btn{
    float: right;
    padding: 0;
    width: 76px;
    height: 24px;
    line-height: 22px;
    text-align: center;
    background: #fb474f;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
  }
  .box2{
    /*background: #fbf8f8;*/
    /*background: yellowgreen;*/
  }
</style>
