var triggerEmail = $('#btn-contact-email'),
    menuEmail = $('#email-btn');

    triggerEmail.click(()=> {
        if(triggerEmail.hasClass('active')) {
            menuEmail.slideUp()
            triggerEmail.removeClass('active')
        } else {
            menuEmail.slideDown()
            triggerEmail.addClass('active')
        }
    });

var triggerPhone = $('#btn-contact-phone'),
    menuPhone = $('#phone-btn');

    triggerPhone.click(()=> {
        if(triggerPhone.hasClass('active')) {
            menuPhone.slideUp()
            triggerPhone.removeClass('active')
        } else {
            menuPhone.slideDown()
            triggerPhone.addClass('active')
        }
    });
