
window.jQuery = function(nodeOrselector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

window.jQuery.ajax = function(options){

    //实现Ajax函数对应两种类型的参数
    let url
    if(arguments.length === 1){
        url = options.url
    }
    else if(arguments.length === 2){
        url = arguments[0]
        options = arguments[1]
    }
    // let method = options.method
    // let body = options.body
    // let successFn = options.successFn
    // let failFn = options.failFn
    // let headers = options.headers
    ///////////ES6解构赋值
    let {method,body,successFn,failFn,headers} = options

    let request = new XMLHttpRequest()
    request.open(method,url) 
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status <300){
                successFn.call(undefined,request.responseText)
            }
            else if(request.status >= 400){
                failFn.call(undefined,request)
            }
        }
    }
    for(let key in headers){
        let value = headers[key]
        request.setRequestHeader(key,value)
    }
    //request.setRequestHeader('xue','18')
    //request.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    request.send(body) 
}
//存同一个地址
window.$ = window.jQuery
myButton.addEventListener('click',function(e){
    window.jQuery.ajax({
        url:'/xxx',
        method:'post',
        body:'这是第四部分的内容',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'xue':'18'
        },
        //回调函数
        successFn:(x)=>{
            console.log(x)
        },
        failFn:(x)=>{
            console.log(x)
        }
    })
})
