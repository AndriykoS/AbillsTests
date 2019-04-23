$('#exampleModal').on('show.bs.modal', function (event) {

})

function openDialogEdit() {
    var usercard;
    $('#editDataUser').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget);
        usercard = button.parent();
        $('#NameInput').val(usercard.find(".name").text());
        $('#AdressInput').val(usercard.find(".adress").text());
        $('#EmailInput').val(usercard.find(".email").text());
    })
    $('#save_btn').click(function(){
        usercard.find(".name").text($('#NameInput').val());
        usercard.find(".adress").text($('#AdressInput').val());
        usercard.find(".email").text($('#EmailInput').val());
    })
}

function f1(element) {
     var card = document.getElementById("name1");
     alert(card.text);
     alert(element);
}



