// 单击标题内容 => 折叠 or 展开
function bindFoldOrExpendEvent(_this){
    let spanEle = $(_this).next();
    let arrow_span = $(_this).children()[0];

    let isFold = JSON.parse(spanEle.attr('isfold'));

    // console.log(isFold)

    if (isFold){
        // 当前为折叠; 设置为展开
        spanEle.attr('isfold', false)
        arrow_span.innerHTML = ''; // 不可见字符; 显示为 下箭头

        // 显示标题包含的内容
        $(spanEle).show();
    }else {
        // 当前为展开; 设置为折叠
        spanEle.attr('isfold', true)
        arrow_span.innerHTML = ''; // 不可见字符; 显示为 右箭头

        // 隐藏标题包含的内容
        $(spanEle).hide();
    }
}