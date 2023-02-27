
// 单击标题内容 => 折叠 or 展开
function bindFoldOrExpendEvent(_this){
    let spanEle = $(_this).next();

    if( spanEle.css('display') === 'none' ){
        $(spanEle).show();

    }else if(spanEle.css('display') === 'inline'){
        $(spanEle).hide();

    }

}