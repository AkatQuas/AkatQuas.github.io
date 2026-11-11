/**
 * Created by weijin-pc on 2017/3/23.
 */


//create a new user on clicking the create button
$('#createUserForm').on('submit',function(){
    //take the advantage of html5 form validation
    //create a <tr> element to be appended in the user table
    var idCode = $('#createUserForm #inputIDCode3').val().trim(),
        username = $('#createUserForm #inputUsername3').val().trim(),
        birthday = $('#createUserForm #inputUserBirthday3').val().trim(),
        email = $('#createUserForm #inputEmail3').val().trim(),
        phone = $('#createUserForm #inputPhoneNumber3').val().trim();

    var $td0 = $('<td></td>').html('<input type="checkbox">');
    var $td1 = $('<td></td>').text(idCode);
    var $td2 = $('<td></td>').text(username);
    var $td3 = $('<td></td>').text(birthday);
    var $td4 = $('<td></td>').text(email);
    var $td5 = $('<td></td>').text(phone);
    var $newTr = $('<tr></tr>').append($td0,$td1,$td2,$td3,$td4,$td5);
    //close the modal after creating new one
    $('#createNewPopUp').modal('toggle');
    $('#userTable').append($newTr);
    // stop the form from submitting
    event.preventDefault();
});

//select all checkbox
 var flag=0;
$('#selectAll').on('click',function () {
    if (!flag) {

        $('#selectAll').removeClass('glyphicon-unchecked').addClass('glyphicon-check');
        $('#userTable').find('input[type=checkbox]').each(function () {
            $(this).attr('checked', 'true');
            flag = 1;
        });
    } else {
        $('#selectAll').removeClass('glyphicon-check').addClass('glyphicon-unchecked');
        $('#userTable').find('input[type=checkbox]').each(function () {
            $(this).removeAttr('checked');
            flag = 0;
        });
    }
});

//delete the user info when clicking the delete button???
$('#deleteUser').on('click',function(){
    $('#userTable').find('input[type=checkbox]').each(function () {
        //delete the checked user if it is checked
       if ( $(this).get(0).checked ) {
           $(this).parents('tr').remove();
       }

       //reset the allSelect button in case of checked
        if( $('#selectAll').hasClass('glyphicon-check') ) {
            $('#selectAll').removeClass('glyphicon-check').addClass('glyphicon-unchecked');
        }
    });
});


//reset the create form on closing or clicking the reset button
$.clearInput = function (formId) {
    $(formId).find('input[type=text], input[type=password], input[type=number],input[type=date], input[type=email], textarea').val('');
};
$('#createNewPopUp').on('hidden.bs.modal', function () {
    $.clearInput('#createUserForm');
});
$('#resetUserForm').on('click',function(){
    $.clearInput('#createUserForm');
});

//delete one of the users in the userTable


