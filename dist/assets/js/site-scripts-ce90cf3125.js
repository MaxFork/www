function F3_scroll_to_ID(o,t){$("html,body").stop().animate({scrollTop:$(o).offset().top-t},700)}function F2_remove_preloader(){var o=500;$("#preloader .panel_l").delay(500+o).animate({width:"0%"},700),$("#preloader .panel_r").delay(500+o).animate({width:"0%"},700),$("#preloader img").delay(200+o).animate({opacity:"0.0"},300),$("#preloader").delay(500+o).animate({opacity:"0.0"},700),$("#preloader").delay(0+o).animate({opacity:"0.0"},700,function(){$("#preloader").hide()})}function F4_add_sticky_header(){$(window).scrollTop()>100&&$(window).width()>767?$("#header_container .header").addClass("header_sticky"):$("#header_container .header").removeClass("header_sticky")}function F3_toggle_mobile_nav(){$("#header_container ul.navigation").stop(!0,!0).slideToggle("slow",function(){})}function F5_hide_navigation_mobile(){$(window).width()>767&&$(".header ul.navigation").css({display:"none"})}function F4_CTA_modal_init(){$(window).scrollTop()>2*$(window).height()&&F4_CTA_modal("open")}function F4_CTA_modal(o){"close"==o&&$("#modal_cta form").stop().animate({opacity:"0.0",top:"0%"},500,function(){$("#modal_cta").stop().animate({opacity:"0.0"},200,function(){$("#modal_cta").stop().hide()})}),"open"==o&&1!=F4_modal_was_open&&(F4_modal_was_open=1,$("#modal_cta").stop().show().animate({opacity:"1.0"},500,function(){}),$("#modal_cta form").stop().show().animate({top:"40%"},200,function(){}))}function F5_size_section_cta_top(){$("#section_cta_top").css({height:$("#site_container").width()/1.333-70+"px"}),$("#section_cta_top").css({"max-height":$(window).height()-20}),$(".index #section_cta_top .slideshow .slides").css({left:-($(".index #section_cta_top .slideshow .slides").width()-$("#site_container").width())/2})}function F2_slideshow_play(o){(o="next"&&F2_max>F2_current_image)?$("#slide_"+F2_current_image).stop().animate({opacity:"0.0"},F2_transition,function(){F2_current_image+=1,timer=window.setTimeout(function(){F2_slideshow_play("next")},F2_delay)}):F2_slideshow_rewind()}function F2_slideshow_rewind(o){$("#slide_1").stop().animate({opacity:"1.0"},F2_transition,function(){$(".slideshow .slides").each(function(o){$(this).css("opacity","1.0")}),F2_current_image=1,timer=window.setTimeout(function(){F2_slideshow_play("next")},F2_delay)})}function F7_change_color(o){$("#section_how").removeClass("color_1"),$("#section_how").removeClass("color_2"),$("#section_how").removeClass("color_3"),$("#section_how").removeClass("color_4"),$("#section_how").removeClass("color_5"),$("#section_what .circle").removeClass("active"),$(".simulator #option_1_1").stop(!0,!0).fadeOut(500,function(){}),$(".simulator #option_1_2").stop(!0,!0).fadeOut(500,function(){}),$(".simulator #option_1_3").stop(!0,!0).fadeOut(500,function(){}),$(".simulator #option_1_4").stop(!0,!0).fadeOut(500,function(){}),$(".simulator #option_1_5").stop(!0,!0).fadeOut(500,function(){}),"c1"==o&&($("#section_how").addClass("color_1"),$(".simulator #option_1_1").stop(!0,!0).delay(0).fadeIn(1e3,function(){}),$(".simulator #option_1_gif").attr("src",animation_1.src),$("#section_what #circle_1").addClass("active")),"c2"==o&&($("#section_how").addClass("color_2"),$(".simulator #option_1_2").stop(!0,!0).delay(0).fadeIn(1e3,function(){}),$(".simulator #option_1_gif").attr("src",animation_1.src),$("#section_what #circle_2").addClass("active")),"c3"==o&&($("#section_how").addClass("color_3"),$(".simulator #option_1_3").stop(!0,!0).delay(0).fadeIn(1e3,function(){}),$(".simulator #option_1_gif").attr("src",animation_1.src),$("#section_what #circle_3").addClass("active")),"c4"==o&&($("#section_how").addClass("color_4"),$(".simulator #option_1_4").stop(!0,!0).delay(0).fadeIn(1e3,function(){}),$(".simulator #option_1_gif").attr("src",animation_1.src),$("#section_what #circle_4").addClass("active")),"c5"==o&&($("#section_how").addClass("color_5"),$(".simulator #option_1_5").stop(!0,!0).delay(0).fadeIn(1e3,function(){}),$(".simulator #option_1_gif").attr("src",animation_1.src),$("#section_what #circle_5").addClass("active"))}$(document).ready(function(){F2_remove_preloader(),F5_size_section_cta_top();var o;o=window.setTimeout(function(){F2_slideshow_play("next")},F2_delay),$(window).resize()}),$(window).scroll(function(){F4_add_sticky_header(),F4_CTA_modal_init()}),$(window).resize(function(){F5_size_section_cta_top(),F5_hide_navigation_mobile()}),$(window).bind("orientationchange",function(o){F5_size_section_cta_top(),F3_override_home_link()});var F4_modal_was_open=0;$("#modal_cta form a.close").click(function(){F4_CTA_modal("close")}),$("#modal_cta .background").click(function(){F4_CTA_modal("close")}),$("#modal_cta .background").click(function(){F4_CTA_modal("close")});var F2_current_image=1,F2_max=3,F2_delay=2e3,F2_transition=3e3,animation_2=new Image;animation_2.src="http://rack.3.mshcdn.com/media/ZgkyMDEyLzEwLzE5LzExXzMzXzMzXzE3Nl9maWxlCnAJdGh1bWIJMTIwMHg5NjAwPg/462b8072",$(".simulator #option_1_gif").click(function(){$(this).attr("src",animation_2.src)});