var player1 = 0
var player2 = 0
var tie = 0
var turn = 1


$('.box').click(function(){
    if(turn === 1){
        $(this).text('X')
        $(this).addClass('X')
        turn = 2
        $('#turn').text('O')
        checkWin()
    }
    else {
        $(this).text('O')
        $(this).addClass('O')
        turn = 1
        $('#turn').text('X')
        checkWin()
    }
})

$('#btn1').click(function(){
    $('.box').empty()
})


function checkWin(){
    if($(".row-1 .box.X").length === 3 || $(".row-2 .box.X").length === 3 || $(".row-3 .box.X").length ===3 || $(".col-1.X").length ===3 || $(".col-2.X").length === 3 || $(".col-3.X").length ===3 || $('#b1').hasClass('X') && $('#b5').hasClass('X') && $('#b9').hasClass('X') || $('#b3').hasClass('X') && $('#b5').hasClass('X') && $('#b7').hasClass('X')){
        console.log('test')
        player1 += 1
        $('#p1-score').text(player1)
        $('.box').removeClass('X O')
    }
    else if($(".row-1 .box.O").length === 3 || $(".row-2 .box.O").length === 3 || $(".row-3 .box.O").length ===3 || $(".col-1.O").length ===3 || $(".col-2.O").length === 3 || $(".col-3.O").length ===3 || $('#b1').hasClass('O') && $('#b5').hasClass('O') && $('#b9').hasClass('O') || $('#b3').hasClass('O') && $('#b5').hasClass('O') && $('#b7').hasClass('O')){
        console.log('test2')
        player2 += 1
        $('#p2-score').text(player2)
        $('.box').removeClass('X O')
    }
}



