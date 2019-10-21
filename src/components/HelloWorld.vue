

<template>  
    <Row class="container" id="print">     
      <Col span="24">  
        <Row>
          <Col span="18" class="heard">
            <h2>姓名</h2>
            <p>电话：13426046047 <font>|</font> 邮箱：24393124@qq.com</p>
            <p>求职意向：前端工程师</p>
          </Col>
          <Col span="6">
            <div class="photo"><img src="@/assets/photo.jpg"></div>
          </Col>
       </Row>  
        <List>
           <h3>教育背景</h3>
           <hr class="hr">  
            <ListItem>
                <ListItemMeta  title="学校名称" description="长春工业大学" />
                <ListItemMeta  title="专业" description="艺术设计" />
                <ListItemMeta  title="学历" description="大专" />
                <ListItemMeta  title="住址" description="北京朝阳区花家地南里" />
            </ListItem>
            <h3>专业技能</h3>
            <hr class="hr">  
            <ListItem class="pro">
                <ul>
                  <li><Icon type="ios-checkmark" class="icon" />熟悉掌握HTML5/CSS3/JavaScript/jQuery/Vue2.0开发，能熟练应用 Webpack+Vue2.0+主流UI框架布局设计,并通过Ajax/vue-resource/Axios/Promise异步加载进行数据请求,实现对页面即点即改和数据的双向绑定等逻辑处理;</li>
                  <li><Icon type="ios-checkmark" class="icon" />熟悉掌握Vue-router页面之间的传值和跳转,全局组件的调用,与组件之间的相互通信;</li>
                  <li><Icon type="ios-checkmark" class="icon" />熟悉掌握数据统计图表库,如Echarts/highcharts的运用;</li>
                  <li><Icon type="ios-checkmark" class="icon" />熟悉微信小程序制作,运用小程序自身软件或mpvue进行开发与设计;</li>                   
                  <li><Icon type="ios-checkmark" class="icon" />熟悉使用JQuery Mobile进行移动端的页面设计，可以和产品同事协同完成网页的设计工作</li>
                  <li><Icon type="ios-checkmark" class="icon" />熟练掌握Photoshop，能设计网页原型，将UI设计转化为符合W3C规范的静态页面 </li>
                  <li><Icon type="ios-checkmark" class="icon" />熟悉使用Git、SVN工具进行协同开发，团队配合意识良好，能进行前端代码的敏捷开发 </li>
                  <li><Icon type="ios-checkmark" class="icon" />熟练掌握PHP+MYSQL网站后台开发，数据库的导入导出及维护技术，MVC编程思想和OOP，了解微信接口和lamp环境搭建;</li>
                </ul>
            </ListItem>
            <h3>工作经历</h3>
            <hr class="hr">  
            <ListItem class="company">
              <div class="title"><h4>公司名称：零壹财经网</h4> <span><a href="https://www.01caijing.com" target="_blank"><Icon type="ios-link" />公司网站</a></span></div>              
               <ul>
                  <li><Icon type="ios-radio-button-off" /> 负责零壹财经官网开发工作，使用技术有webpack打包、jQuery(校验、UI、DOM操作)、captcha顶象滑块验证、swiper轮播、flex布局等</li>
                  <li class="con-sub"> <Icon type="ios-remove" />主要功能实现：1.封装ajax请求,加载更多。2.前端页面的权限控制。3.页面的标签筛选交互。4.各个浏览器的兼容（最低兼容IE9）</li>
                  <li><Icon type="ios-radio-button-off" /> 负责微站开发工作，使用的技术有SUI Mobile UI库、Zepto.js <a href="https://m.01caijing.com" target="_blank" style="float: right;"><Icon type="ios-link" />手机版</a></li>
                  <li class="con-sub"> <Icon type="ios-remove" />主要功能实现：菜单切换记录访问过的页面后退不刷新,交互效果比较好。</li>
                  <li><Icon type="ios-radio-button-off" /> 负责小程序开发工作（新金融报告、零壹新金融快讯、p2p网贷日报）,使用的技术mpvue开发、 wx.request 、Promise、页面跳转与传值、使用wxParse处理后台返回的带标签数据</li>
              </ul> 
               <div class="title"><h4>FINDs·新金融网 </h4> <span><a href="https://www.01caijing.com/finds/home.htm" target="_blank"><Icon type="ios-link" />零壹FINDs</a></span></div>              
               <ul>
                  <li><Icon type="ios-radio-button-off" /> 负责零壹FINDs网站开发工作，使用技术有adminLTE框架自适应、Echarts图表的生成、Flex弹性盒自适应布局、前端登录的权限控制</li>
                  <li class="con-sub"> <Icon type="ios-remove" />主要功能实现：1.跟随浏览器屏幕自适应布局。2.通过后台接口地址生成Echarts各种图表数据。</li>
              </ul>   
              <div class="title"><h4>零壹智库Pro </h4> <span><a href="https://www.01caijing.com/report/index.htm" target="_blank"><Icon type="ios-link" />零壹智库Pro</a></span></div>              
               <ul>
                  <li><Icon type="ios-radio-button-off" /> 负责零壹智库Pro网站开发工作，使用技术有Flex弹性盒制作卡片样式、QRCode生成二维码</li>
                  <li class="con-sub"> <Icon type="ios-remove" />主要功能实现：1.点击立即订购以弹窗方式，选择支付方式如（微信支付、支付宝支付）并通过后台提供的微信支付接口动态生成二维码，整个支付流程体检较好。</li>
              </ul>
               <div class="title"><h4>公司名称：阳光媒体集团</h4> <span><a href="http://www.chinasunmedia.com/" target="_blank"><Icon type="ios-link" />公司网站</a></span></div>    
              <ul>
                  <li><Icon type="ios-radio-button-off" /> 负责阳光媒体集团网站开发工作，使用技术有php、mySQL、Animate</li>
                  <li class="con-sub"> <Icon type="ios-remove" />主要功能实现：1.基于MVC模式，实现信息添加、信息修改、信息删除、信息查询、分页等功能，业务逻辑主要使用jQuery，数据库使用MySQL</li>
              </ul>                 
            </ListItem>
            
           
        </List>
      </Col>    
    </Row> 
</template>
<style  lang='less' scoped>
body {
  margin: 0;
  padding: 0;
}
.container { 
  width: 794px;
  margin: 0 auto;
  height: auto;
  border:1px solid #ececec;
  padding: 5rem;
  margin-bottom:2rem;
  h2{
    margin-bottom:0.5rem; 
  }
  h3{
    margin-top:1rem; 
    padding-bottom:0.5rem; 
  }
  hr{
    border: 1px solid #aeaeae;
  }
  hr.hr{
  border-bottom:1px solid #eee;
  }
  p{
    padding:0.1rem;
    font{
      margin: 0 0.2rem;      
    }
  }  
  .photo{
    width: 80px;
    height: 96px;
    border: 1px solid #ececec;
    float: right;
    img{
      width: 80px;
      height: 96px;
    }
  }
  .pro{
    ul
     li{
       list-style: none;
       margin: 0.5rem; 
       .icon{
         font-size: 25px;
       }      
     }     
  }
  .ivu-list-split .ivu-list-item{
    border: none;
  }
  .company{
    flex-flow: column;      
    .title{
      width: 100%;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
    }
    ul{
      width: 100%;
      margin-top:0.5rem; 
      li{
        list-style: none;
        margin: 0.5rem;
      }
      li.con-sub{
        margin-left:1.7rem;
      } 
    }
  }
  

}
</style>

<script>
export default {};
</script>
