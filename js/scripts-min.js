// Amp Custom made
//set equal height for blocks plugin
    equalheight = function(container){			
	var currentTallest = 0,
		 currentRowStart = 0,
		 rowDivs = new Array(),
		 $el,
		 topPosition = 0;
	$(container).each(function() {	
	   $el = $(this);
	   $($el).height('auto')
	   topPostion = $el.position().top;
	
	   if (currentRowStart != topPostion) {
		 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
		   rowDivs[currentDiv].height(currentTallest);
		 }
		 rowDivs.length = 0; // empty the array
		 currentRowStart = topPostion;
		 currentTallest = $el.height();
		 rowDivs.push($el);
	   } else {
		 rowDivs.push($el);
		 currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
	  }
	   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
		 rowDivs[currentDiv].height(currentTallest);
	   }
	 });
	}	
	
    //set equal height for blocks plugin
// Amp custom made
/*
if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;
}

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = (event.wheelDelta) / 120;
    else if (event.detail) delta = -(event.detail) / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(sentido) {
    var inicial = document.body.scrollTop;
    var time = 1000;
    var distance = 200;
    animate({
        delay: 0,
        duration: time,
        delta: function(p) {
            return p;
        },
        step: function(delta) {
            window.scrollTo(0, inicial - distance * delta * sentido);
        }
    });
}

function animate(opts) {
    var start = new Date();
    var id = setInterval(function() {
        var timePassed = new Date() - start;
        var progress = (timePassed / opts.duration);
        if (progress > 1) {
            progress = 1;
        }
        var delta = opts.delta(progress);
        opts.step(delta);
        if (progress == 1) {
            clearInterval(id);
        }
    }, opts.delay || 10);
}

*/

$(function() {
    $('.dropdown-min-toggle').click(function() {
        console.log("ss");
        $('.dropdown-min').hide();
        $(this).next('.dropdown-min').toggle();
    });
    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown-min-toggle') && !$(target).parents().is('.dropdown-min-toggle')) {
            $('.dropdown-min').hide();
        }
    });
});
$(document).ready(function() {

    $("#init-tabs").one("click", function(e) {
        e.stopPropagation();
        $(this).remove();

        $("#example-tabs").show().steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            enableFinishButton: false,
            enablePagination: false,
            enableAllSteps: true,
            titleTemplate: "#title#",
            cssClass: "tabcontrol"
        });
    });
    $(window).on("resize", function(e) {
        pageHeight = $(window).height();
		
        pageHomeHeight = pageHeight - 230;
	
        screenWidth = $(window).width();
        changeHeight();
    });
	
    var pageHeight = $(window).height();
	var homebancontentheight = $('.coda-slider-t-c').outerHeight();
	var pagenegHeight = 0-$(window).height();
	var pageminHeight = $(window).height() +100;
	if ($("body").hasClass("iphone")) {
		//pageHeight= pageHeight-150;
	}
	var slideHeight = $(window).height() + $('.texture-overlay').height() - 10;
    var pageHomeHeight = pageHeight - 230;
		var pageHomeslideHeight = pageHeight +  $('.texture-overlay').height() - 10;
	var pageoneandhalf = pageHeight + pageHeight/2;
	var pageoneandquater = pageHeight + pageHeight/4;
    var demorequestHeight = pageHeight - 200;
	var heroCaptionHeight = $('.hero-caption').height() - 35;
    var screenWidth = $(window).width();
    changeHeight();
	//check resize blocks for responsive using window resize

    function changeHeight() {
		 equalheight('.hgtout .hgtin');
		 
		  $('#homebannercontent').css({
            'margin-top': pageHeight/2 -homebancontentheight/2
        })
		$('.stable').css({
            height: pageHeight
        })
        $('.fheight').css({
            height: pageHeight
        })
		$('.fslheight').css({
           height: pageHomeslideHeight
        })
		$('.fnqheight').css({
            height: pageoneandquater
        })
		
		$('.fmheight').css({
            'min-height': pageminHeight
        })
		$('.fmbb2height').css({
            'min-height': pageminHeight/2
        })
		$('.homeslideshow').css({
            height: slideHeight
        })
        $('.hero-content').css({
            "min-height": pageHomeHeight
        })
        $('.request-demo-slider').css({
            "min-height": pageHomeHeight
        })
        $('.demo-request').css({
            "min-height": demorequestHeight
        })
        $('.contact-success').css({
            "min-height": demorequestHeight
        })
        $('.container-fluid.products').css({
            "min-height": demorequestHeight
        })
		$('.top-col-btn-grp').css({
            "padding-top": heroCaptionHeight
        })


    }



    $(".wp1").waypoint(function() {
        $(".wp1").addClass("animated fadeInLeft")
    }, {
        offset: "75%"
    });
     $(".wp2").waypoint(function() {
        $(".wp2").addClass("animated fadeInRight")
    }, {
        offset: "75%"
    });
	$(".wp3").waypoint(function() {
        $(".wp3").addClass("animated fadeInLeft")
    }, {
        offset: "75%"
    });
	  $(".wp4").waypoint(function() {
        $(".wp4").addClass("animated fadeInRight")
    }, {
        offset: "75%"
    });
	$(".wp5").waypoint(function() {
        $(".wp5").addClass("animated fadeInLeft");
		$(".wp6").addClass("animated fadeInRight")
    }, {
        offset: "75%"
    });
	
   
     $('#serviceSlider').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        autoPlay: 6000,
        freeScroll: false,
        wrapAround: true
    });
	
	/*$('#topSlider').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        autoPlay: 10000,
        freeScroll: false,
        wrapAround: true,
		pageDots: false,
		friction: 0.6, 
		prevNextButtons: false,
		draggable: false
    });*/

    /***************** Flickity ******************/
    var $demoRequestSliding = $('#demoRequestSlider').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: false,
        freeScroll: false,
        draggable: false

    });
	 var demoRequestSlidingflkty = $demoRequestSliding.data('flickity');
    $('.request-slider-previous').on('click', function() {
        $demoRequestSliding.flickity('previous');
    });
    // next
    $('.request-slider-next').on('click', function() {
        $demoRequestSliding.flickity('next');
    });
    $('#aboutOther').click(function() {

        if ($('#input-about-other').hasAttr("disabled")) {
            $('#input-about-other').removeAttr("disabled");
        } else {
            //$('#input-about-other').attr("disabled");
        }

    });
    $('#techOther').click(function() {

        if ($('#input-tech-other').hasAttr("disabled")) {
            $('#input-tech--other').removeAttr("disabled");
        } else {
            //$('#input-tech--other').attr("disabled");
        }

    });
    $("body").on("focus", "input#input-about-other", function() {
        //alert('d');
        $('#reqDemoArrRight').removeClass("dnone");
        $('#aboutOther').attr('checked', 'checked');
    });
    $("body").on("focus", "input#input-tech-other", function() {
        //alert('d');
        $('#reqDemoArrRight').removeClass("dnone");
        $('#techOthers').attr('checked', 'checked');
    });


    $('#demoRequestSlider input:radio').click(function() {
        $('#reqDemoArrRight').removeClass("dnone");
    });
    $('#demoRequestSlider input:checkbox').click(function() {
        $('#reqDemoArrRight').removeClass("dnone");
    });


    $('#reqDemoArrRightBtn').click(function() {
		if (demoRequestSlidingflkty.selectedIndex == 3){
			
       // $('#reqDemoArrRight').addClass("dnone");
		console.log ("flkty.selectedIndex "+demoRequestSlidingflkty.selectedIndex)
		}
		//else { $('#reqDemoArrRight').removeClass("dnone");}
    });

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }
    $("#requestCustomDemoBtn").click(function(event) {
		 event.preventDefault();
        $('#requestSubmit').validator('validate')
		if (!$("#requestCustomDemoBtn").hasClass("disabled")) {
			$demoRequestSliding.flickity('next');
            $('#reqDemoArrLeft').removeClass("dnone");
			$('#reqDemoArrRight').removeClass("dnone");
			}
		
        var reqC = 2;
        var nameC = $('#inputName').val();
        var emailC = $('#inputEmail').val();
        if ((nameC == null) || (nameC == "") || (nameC == undefined)) {
            reqC--;
        }
        if ((emailC != null) || (emailC != "") || (emailC != undefined)) {
            if (!validateEmail(emailC)) {
                reqC--;
            }
        }


        console.log("reqC " + reqC);
        if (reqC == 2) {
           // $demoRequestSliding.flickity('next');
            //$('#reqDemoArrLeft').removeClass("dnone");
        }
		
    });



    var menuYpos = $('#dynMenu').offset().top;
    var towerYpos = $('#liners').offset().top - 50;
    var fadehalfYpos = $('.liner').offset().top - 200;
	
	if ($("body").hasClass("iphone")) {
			/*$('#home').on('scroll', function() {
				if($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight) {
					$("body").animate({scrollTop: $('#tower').offset().top}, 2000);
					$('#home').addClass("passed");
					console.log("HOMEIN");
							
				}
			});*/
			$(window).bind('scroll', function() {
					if($(window).scrollTop() >= $('#home').offset().top + $('#home').outerHeight() - window.innerHeight) {
						if (!$("#home").hasClass("passed")) {
							$("body").animate({scrollTop: $('#tower').offset().top}, 1200);
							$('#home').addClass("passed");
							$('.tower-overlay').queue(function() {   $(this).css('background','url(img/Building-Finals.gif) 50% 100% no-repeat').dequeue();  });
						}
					}
					if($(window).scrollTop() <= $('#home').offset().top ) {
						if ($("#home").hasClass("passed")) {
							$('#home').removeClass("passed");
						}
					}
					if($(window).scrollTop() >= $('#tower').offset().top + $('#tower').outerHeight() - window.innerHeight) {
						if (!$("#tower").hasClass("passed")) {
							$("body").animate({scrollTop: $('#ampPlat').offset().top}, 1000);
							$("#tower").addClass("passed");
						}
					}
					if($(window).scrollTop() <= $('#tower').offset().top ) {
						if ($("#tower").hasClass("passed")) {
							$('#tower').removeClass("passed");
						}
					}
					if($(window).scrollTop() >= $('#ampPlat').offset().top + $('#ampPlat').outerHeight() - window.innerHeight) {
						if (!$("#ampPlat").hasClass("passed")) {
							$("body").animate({scrollTop: $('#mobHomprod').offset().top}, 1000);
							$("#ampPlat").addClass("passed");
						}
					}
					if($(window).scrollTop() <= $('#ampPlat').offset().top ) {
						if ($("#ampPlat").hasClass("passed")) {
							$('#ampPlat').removeClass("passed");
						}
					}
					if($(window).scrollTop() >= $('#mobHomprod').offset().top + $('#mobHomprod').outerHeight() - window.innerHeight) {
						if (!$("#mobHomprod").hasClass("passed")) {
							$("body").animate({scrollTop: $('#amp-mobile').offset().top}, 1000);
							$("#mobHomprod").addClass("passed");
						}
					}
					if($(window).scrollTop() <= $('#mobHomprod').offset().top ) {
						if ($("#mobHomprod").hasClass("passed")) {
							$('#mobHomprod').removeClass("passed");
						}
					}
					if($(window).scrollTop() >= $('#amp-mobile').offset().top + $('#amp-mobile').outerHeight() - window.innerHeight) {
						if (!$("#amp-mobile").hasClass("passed")) {
							$("body").animate({scrollTop: $('#services').offset().top}, 1000);
							$("#amp-mobile").addClass("passed");
						}
					}
					if($(window).scrollTop() <= $('#amp-mobile').offset().top ) {
						if ($("#amp-mobile").hasClass("passed")) {
							$('#amp-mobile').removeClass("passed");
						}
					}
					
						
			});
			
		   
			
				
		}
	
    $(window).scroll(function() {
        // For Scroll Top Button
        if ($(window).scrollTop() + $(window).height() > $('#tower').offset().top - 100) {

           // $('.firsthalf').addClass("fillhalf");

        } else {
           // $('.firsthalf').removeClass("fillhalf");
        }
        var docheight = $(document).height() - $(window).height();
        if ($(window).scrollTop() > docheight - 100) {
            $('#dynMenu').addClass("navbar-fixed-top-fade");
            $('.foothide').addClass("navbar-fixed-top-fade");
        } else {
            $('#dynMenu').removeClass("navbar-fixed-top-fade");
            $('.foothide').removeClass("navbar-fixed-top-fade");
        }
        var towertop = $('#dynMenu').offset().top;


        $('#scrollParallax').click(function(ev) {
            ev.stopPropagation();
            ev.preventDefault();
        });
		if (!$("body").hasClass("iphone")) {
		   if ($(window).scrollTop() > 100) {

				$('.scroll-top').fadeIn();
				$('#nav-right').addClass("small");
			} else {
				$('.scroll-top').fadeOut();
				$('#nav-right').removeClass("small");
			}
		}
		
		

        
        // For Scroll Top Button

        if (($(window).scrollTop() > menuYpos + 15)) {
            $('#dynMenu').addClass("navbar-fixed-top");


        } else {
            $('#dynMenu').removeClass("navbar-fixed-top");

            //$('#dynMenu').animate({ opacity: 0 }, 0);
        }
        if (($(window).scrollTop() > menuYpos - 180)) {
            $('.navicon').addClass("navbar-fixed-top-fade");
        } else {

            $('.navicon').removeClass("navbar-fixed-top-fade");
            //$('#dynMenu').animate({ opacity: 0 }, 0);
        }
        // For Menu Button 
        if ($(window).scrollTop() > $(window).height()) {

            $('.navicon').addClass("inverse");
        } else {
            $('.navicon').removeClass("inverse");
        }


    });

});
$("#trigger-overlay").click(function() {
    $(this).toggleClass("active");
    $(".overlay-boxify").toggleClass("open")
});
$(".overlay ul li a").click(function() {
    $(".nav-toggle").toggleClass("active");
    $(".overlay-boxify").toggleClass("open")
});




$(".overlay").click(function() {
    $(".nav-toggle").toggleClass("active");
    $(".overlay-boxify").toggleClass("open")
});



$("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var e = $(this.hash);
            e = e.length ? e : $("[name=" + this.hash.slice(1) + "]");
            if (e.length) {
                $("html,body").animate({
                    scrollTop: e.offset().top
                }, 2e3);
                return false
            }
        }
    });
    // Clickable Dropdown


/***************** Flexsliders ******************/

$(window).load(function() {



    $("#partnersListingScroll").flexisel({
        visibleItems: 5,
        animationSpeed: 4000,
        autoPlay: true,
        autoPlaySpeed: 100,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3
            }
        }
    });

});

$.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined;
};
