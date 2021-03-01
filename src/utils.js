const getCorrectPhone = phone => 
    !phone.match(/\+7\-\d{3}\-\d{3}\-\d{2}-\d{2}/g) && !phone.match(/\+7\d{10}/g) || phone.match(/[a-z]/gi) 
        ? null
        : phone.replace(/\D/g,'');

module.exports.getCorrectPhone = getCorrectPhone;