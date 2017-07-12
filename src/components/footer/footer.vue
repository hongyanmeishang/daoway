<template>
  <div class="foot">
    <div class="safeguard">
      <h2>到位<span>服务</span>保障</h2>
      <p>到位平台担保交易安全，交易未成功100%退款</p>
    </div>
    <div class="merit">
      <ul class="list">
        <li><img src="../../imgs/circle.png"><br>服务多</li>
        <li><img src="../../imgs/circle.png"><br>上门快</li>
        <li><img src="../../imgs/circle.png"><br>有保障</li>
      </ul>
    </div>
    <div class="footer">
      <dl>
        <dt>热门城市</dt>
        <dd>
          <span>北京</span><span>上海</span><span>广州</span><span>深圳</span><span>成都</span><span>天津</span><span>南京</span><span>杭州</span><span>重庆</span><span>苏州</span><span>武汉</span><span>长沙</span><span>济南</span><span>郑州</span><span>西安</span><span>沈阳</span><span>福州</span><span>厦门</span><span>南昌</span><span>合肥</span><span>宁波</span><span>无锡</span><span>青岛</span><span>大连</span><span>东莞</span><span>佛山</span><span>石家庄</span><span>哈尔滨</span><span>太原</span><span>昆明</span><span>贵阳</span><span>南宁</span><span>温州</span>
        </dd>
      </dl>
    </div>
    <div class="copyright-wrapper">
      <div class="copyright">
        <p>©2015 版权所有  到位 daoway.com 京ICP备15001471号-1</p>
        <p class="last">北京邻家科技有限公司  </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style>
  /*保障*/
  .safeguard{
    text-align: center;
    width: 100%;
    padding-top: 60px;
  }
  .safeguard h2{
    font-size: 28px;
    font-family: "微软雅黑";
    font-weight: 800;
    line-height: 1;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .safeguard h2 span{
    color: #fb474f;
    font-size: 28px;
    font-weight: 800;
  }
  .safeguard p{
    font-size: 20px;
    line-height: 1;
    color: #3d3838;
  }
  .merit{
    width: 1200px;
    margin: 0 auto;
    padding-top: 68px;
    font-family: "微软雅黑";
  }
  .merit .list{
    display: flex;
  }
  .merit .list li{
    flex: 1;
    text-align: center;
    color: #1d1515;
    font-size: 18px;
  }
  .merit .list li img{
    margin-bottom: 10px;
  }

  /*footer*/
  .footer{
    width: 1200px;
    clear: both;
    padding-top: 50px;
    height: 160px;
    background: #fff;
  }
  .footer dl dt{
    float: left;
    font-family: " 微软雅黑";
    font-weight: 700;
  }
  .footer dl dd {
    margin-left: 40px;
    width: 1100px;
    line-height: 30px;
    float: left;
  }
  .footer dl dd span{
    font-size: 16px;
    color: #898989;
    display: inline-block;
    width: 9%;
    text-align: center;
    font-weight: 200;
    cursor: pointer;
    font-family: "微软雅黑";
  }

  .footer{
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
    height: 160px;
    background: #fff;
  }
  .footer dl dt{
    float: left;
    font-family: " 微软雅黑";
    font-weight: 700;
    font-size: 14px;
  }
  .footer dl dd {
    margin-left: 40px;
    width: 1100px;
    line-height: 30px;
    float: left;
  }
  .footer dl dd span{
    font-size: 16px;
    color: #898989;
    display: inline-block;
    width: 9%;
    text-align: center;
    font-weight: 200;
    cursor: pointer;
    font-family: "微软雅黑";
  }
  .copyright-wrapper{
    width: 100%;
    background: #fbf8f8;
    height: 130px;
  }
  .copyright{
    padding-top: 45px;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .copyright p{
    font-size: 15px;
    line-height: 1;
    margin-bottom: 21px;
    color: #898989
  }
</style>
