/*
Template Name: Nazox -  Admin & Dashboard Template
Author: Themesdesign
Contact: themesdesign.in@gmail.com
File: Sweetalert Js File
*/

!function ($) {
    "use strict";

    var SweetAlert = function () {
    };

    //examples
    SweetAlert.prototype.init = function () {

        //Basic
        $('#sa-basic').on('click', function () {
            Swal.fire(
                {
                    title: 'Any fool can use a computer',
                    confirmButtonColor: '#0065de',
                }
            )
        });

        //A title with a text under
        $('#sa-title').click(function () {
            Swal.fire(
                {
                    title: "The Internet?",
                    text: 'That thing is still around?',
                    icon: 'question',
                    confirmButtonColor: '#0065de'
                }
            )
        });

        //Success Message
        $('#sa-success').click(function () {
            Swal.fire(
                {
                    title: 'Good job!',
                    text: 'You clicked the button!',
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#0065de',
                    cancelButtonColor: "#ff3d60"
                }
            )
        });






       //Parameter
       $('#sa-papa').click(function () {
        Swal.fire({
            title: 'Are you sure?',
            text: "CAUTION! This is for OFFLINE applications ONLY. Data will not be forwarded to the Server and a Server Connection will not be established. Do not enable unless you plan to use the Raspberry Shake without an Internet connection.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, sure',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success mt-2',
            cancelButtonClass: 'btn btn-danger ms-2 mt-2',
            buttonsStyling: false
        }).then(function (result) {
            if (result.value) {
                Swal.fire({
                  title: 'Success!',
                  text: 'Offline Mode Activated',
                  icon: 'success'
                })
              } else if (
                // Read more about handling dismissals
                result.dismiss === Swal.DismissReason.cancel
              ) {
                Swal.fire({
                  title: 'Cancelled',
                  text: 'No changes have been made',
                  icon: 'error'
                })
              }
        });
    });

        //Warning Message
        $('#sa-warning').click(function () {
            Swal.fire({
                title: "Are you sure?",
                text: "Password Confirmation Here",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#1cbb8c",
                cancelButtonColor: "#ff3d60",
                confirmButtonText: "Yes"
              }).then(function (result) {
                if (result.value) {
                  Swal.fire("Saved!", "Rebooting system", "success");
                }
            });
        });

        //Parameter
        $('#sa-params').click(function () {
			Swal.fire({
                title: 'Are you sure?',
                text: "All changes are ok?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, Save',
                cancelButtonText: 'No, cancel!',
                confirmButtonClass: 'btn btn-success mt-2',
                cancelButtonClass: 'btn btn-danger ms-2 mt-2',
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    Swal.fire({
                      title: 'Reboot!',
                      text: 'All changes made.',
                      icon: 'success'
                    })
                  } else if (
                    // Read more about handling dismissals
                    result.dismiss === Swal.DismissReason.cancel
                  ) {
                    Swal.fire({
                      title: 'Cancelled',
                      text: 'Your imaginary file is safe :)',
                      icon: 'error'
                    })
                  }
            });
        });

        //Custom Image
        $('#sa-image').click(function () {
            Swal.fire({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: 'assets/images/logo-dark.png',
                imageHeight: 20,
                confirmButtonColor: "#0065de",
                animation: false
            })
        });
		
        //Auto Close Timer
        $('#sa-close').click(function () {
            var timerInterval;
            Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <strong></strong> seconds.',
            timer: 2000,
            confirmButtonColor: "#0065de",
            onBeforeOpen:function () {
                Swal.showLoading()
                timerInterval = setInterval(function() {
                Swal.getContent().querySelector('strong')
                    .textContent = Swal.getTimerLeft()
                }, 100)
            },
            onClose: function () {
                clearInterval(timerInterval)
            }
            }).then(function (result) {
            if (
                // Read more about handling dismissals
                result.dismiss === Swal.DismissReason.timer
            ) {
                console.log('I was closed by the timer')
            }
            })
        });



        //custom html alert
        $('#custom-html-alert').click(function () {
            Swal.fire({
                title: '<i>HTML</i> <u>example</u>',
                icon: 'info',
                html: 'You can use <b>bold text</b>, ' +
                '<a href="//themesdesign.in/">links</a> ' +
                'and other HTML tags',
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger ml-1',
                confirmButtonColor: "#47bd9a",
                cancelButtonColor: "#ff3d60",
                confirmButtonText: '<i class="fas fa-thumbs-up me-1"></i> Great!',
                cancelButtonText: '<i class="fas fa-thumbs-down"></i>'
            })
        });

        //position
        $('#sa-position').click(function () {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        });

        //Custom width padding
        $('#custom-padding-width-alert').click(function () {
            Swal.fire({
                title: 'Custom width, padding, background.',
                width: 600,
                padding: 100,
                confirmButtonColor: "#0065de",
                background: '#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)'
            })
        });

        //Ajax
        $('#ajax-alert').click(function () {
            Swal.fire({
                title: 'Submit email to run ajax request',
                input: 'email',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                confirmButtonColor: "#0065de",
                cancelButtonColor: "#ff3d60",
                preConfirm: function (subject) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (subject === 'shakeme') {
                                reject('This email is already taken.')
                            } else {
                                resolve()
                            }
                        }, 2000)
                    })
                },
                allowOutsideClick: false
            }).then(function (subject) {
                Swal.fire({
                    icon: 'success',
                    title: 'Ajax request finished!',
                    confirmButtonColor: "#0065de",
                    html: 'Submitted email: ' + subject
                })
            })
        });

        //chaining modal alert
        $('#chaining-alert').click(function () {
            Swal.mixin({
                input: 'text',
                confirmButtonText: 'Verify and Save &rarr;',
                showCancelButton: true,
                confirmButtonColor: "#0065de",
                cancelButtonColor: "#74788d",
                progressSteps: ['1']
              }).queue([
                {
                  title: 'Security',
                  text: 'Enter your Password'
                },
               
              ]).then( function (result) {
                if (result.value) {
                  Swal.fire({
                    icon: 'success',
                    title: 'All done!',
                    html:
                      'The system will restart',
                    confirmButtonText: 'Done'
                  })
                }
              })
        });

        //Danger
        $('#dynamic-alert').click(function () {
            swal.queue([{
                title: 'Your public IP',
                confirmButtonColor: "#0065de",
                confirmButtonText: 'Show my public IP',
                text: 'Your public IP will be received ' +
                'via AJAX request',
                showLoaderOnConfirm: true,
                preConfirm: function () {
                    return new Promise(function (resolve) {
                        $.get('https://api.ipify.org?format=json')
                            .done(function (data) {
                                swal.insertQueueStep(data.ip)
                                resolve()
                            })
                    })
                }
            }]).catch(swal.noop)
        });


    },
        //init
        $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert
}(window.jQuery),









//initializing
    function ($) {
        "use strict";
        $.SweetAlert.init()
    }(window.jQuery);