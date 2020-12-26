$(function(){
    load();
    $(".dataInput").on("keydown",function(event){
        if(event.keyCode === 13){
            var local = getData();
            // console.log(local);
            // 更新local数组，把最新数据追加到loacl中
            local.push({ title: $(this).val(), done: false});
            // 存储数据
            saveData(local);
            // console.log(local);
            // 渲染加载数据
            load();
            
        }
    });
    // 先读取本地数据
    function getData(){
        var data = localStorage.getItem("todolist");
        if(data !== null){
            // 本地存储的数据是字符串格式 需要使用JSON转换
            return JSON.parse(data);
        }else{
            return [];
        }
    };

    // 保存本地存储数据
    function saveData(data){
       localStorage.setItem("todolist",JSON.stringify(data))
    };

    // 渲染加载界面
    function load(){
        var data = getData();
        var todoCount = 0;
        var doneCount = 0;
        // console.log(data);
        // 遍历之前需要清空元素
        $(".todolist").empty();
        $(".donelist").empty();
        $.each(data,function(index,n){
            if(n.done){
                doneCount++;
                $(".donelist").prepend("<li><input type='checkbox' checked='checked'> <p>"+n.title+"</p> <a href='javascript:;' id="+index+"></li>")
            }else{
                todoCount++;
                $(".todolist").prepend("<li><input type='checkbox' > <p>"+n.title+"</p> <a href='javascript:;' id="+index+"></li>")
            }
           
        })
        $(".todo-count").html(todoCount);
        $(".done-count").html(doneCount);
    };

    // 删除按钮
    $(".todolist,.donelist").on("click","a",function(){
        // 先获取本地存储
        var data = getData();
        // 修改数据
        var index = $(this).attr("id"); //通过属性获取值
        data.splice(index,1);
        // 保存本地存储
        saveData(data);
        // 重新渲染页面
        load();
    });

    //勾选进行的活动，将其加入到完成队列
    $(".todolist,.donelist").on("click","input",function(){
        var data = getData();
        var index = $(this).siblings("a").attr("id");
        data[index].done=$(this).prop("checked");
        // console.log(data);
        
        saveData(data);
        load();
    });


})