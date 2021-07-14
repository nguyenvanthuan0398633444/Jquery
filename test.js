// closest lấy cha $(this).closest('tr')
// find lấy con
// next lấy trước
// prev lấy sau
// after thêm trước
// before thêm sau

var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
var a = p.replace('The', 'monkey')
console.log(a);

$('#tbody input').on("change", function(){
    let row = '';
    let col = '';
    var sumRow = 0;
    var sumCol = 0;
    var className = $(this).attr('class').split(" ");
    for(var name of className){
        if(name.indexOf("row") != -1){
            row = name;
        }
        if(name.indexOf("day") != -1){
            col = name;
        }
    }
    $('.' + row).each(function(){
        sumRow +=parseFloat($(this).val());
    });
    $('.sum' + row).html(sumRow);
    $('.' + col).each(function(){
        sumCol += parseFloat($(this).val());
    })
   $('.sum' + col).html(sumCol);   
})  
$('.delete-Theme').on('click',function(){
    $(this).closest('tr').remove();
})
$('#rightAdd').on('click', function(){
    var option = $('#NotSelect option:selected')
    for(var i=0 ; i< option.length;i++){
        $('#Select').append(`<option value='${option[i].value}'>${option[i].innerText}</option>`)
        option[i].remove();
              
    }   
});
$('#leftAdd').on('click', function(){
    var option = $('#Select option:selected')
    for(var i=0 ; i< option.length;i++){
        $('#NotSelect').append(`<option value='${option[i].value}'>${option[i].innerText}</option>`)
        option[i].remove();
              
    }       
});
$(".change-next button").on("click",function(){   
    var selectShow = $("#Select").find(":selected");
    var next = selectShow.next("option");
    next.after(selectShow);
})
$(".change").on("click",function(){     
    var selectShow = $("#Select").find(":selected");
    var next = selectShow.prev("option");
    next.before(selectShow);
})
