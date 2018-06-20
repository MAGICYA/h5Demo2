var ROOT_URL, //页面地址
    API_BASE_URL, //接口地址
    isPublishEnv; //是否生产环境

if(location.href.indexOf("http://wmall.nutriunion.com")>=0){
    ROOT_URL = "http://wmall.nutriunion.com/";
    API_BASE_URL = "http://api.wmall.nutriunion.com";
    isPublishEnv=true;
} else if(location.href.indexOf("twmall.nutriunion.com")>=0){
    ROOT_URL = "http://twmall.nutriunion.com/";
    API_BASE_URL = "http://api.twmall.nutriunion.com";
    isPublishEnv=false;
}else{
    ROOT_URL = "http://"+window.location.host+"/";
    API_BASE_URL = "http://api.twmall.nutriunion.com";
    isPublishEnv=false;
}