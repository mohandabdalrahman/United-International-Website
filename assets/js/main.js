 (function($) {

	"use strict";
		$(document).ready(function() {
			
			//Js code for Preloader
			jQuery(window).load(function(){
				jQuery('#loading').remove('#loading');
				$("#loading").delay(2000).fadeOut(500);
				$("#loading-center").click(function() {
				$("#loading").fadeOut(500);
				});
			});
			
			//Js code for Header Top 
			var $sohag = $("#sohag"),
			$clone = $sohag.after($sohag.clone().addClass("clone"));
			$(window).on("scroll", function() {
				var fromTop = $(window).scrollTop();
				$("body").toggleClass("down", (fromTop > 250));
			});

			//js for Light Menu Style
			if(jQuery("header").attr("id") == "header-style-two")
			{
				var sticky_relocate = function() {
					var window_top = jQuery(window).scrollTop();
					var div_top = jQuery('#sticky-anchor').offset().top;
					if (window_top > div_top) {
						jQuery('.mainmenu-area').removeClass('light-menu');
						//This is for when div in top         
					} else {
						jQuery('.mainmenu-area').addClass('light-menu');
						//This is for when div in not top
					}
				};

				jQuery(function () {
					jQuery(window).scroll(sticky_relocate);
					sticky_relocate();
				}); 
			}
			
			//Js code for Responsive multiple Munu 
			$('.dropdown>.dropdown-menu>.dropdown a.dropdown-toggle').on('click', function(e) {
				var $el = $(this);
				var $parent = $(this).offsetParent(".dropdown-menu");
				$(this).parent("li").toggleClass('open');

				$('.nav li.open').not($(this).parents("li")).removeClass("open");

				return false;
			});
			  
			//js for scroll to Top Button
			//Check to see if the window is top if not then display button
			$(window).scroll(function(){
				if ($(this).scrollTop() > 900) {
					$('.scrollToTop').fadeIn();
				} else {
					$('.scrollToTop').fadeOut();
				}
			});
			
			//Click event to scroll to top
			$('.scrollToTop').click(function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
			});
			
			//Js code for search box 
			$(".first_click").click(function(){
				$(".first_click").hide();
				$(".second_click").css('display','block');
				$(".mainmenu-area").addClass("sohag_box");	 
			});
			$(".second_click").click(function(){
				$(".second_click").hide();
				$(".first_click").css('display','block');
				$(".mainmenu-area").removeClass("sohag_box"); 
			});	


			//One Page Nav

			// Cache selectors
			var lastId,
				topMenu = $("ul.one-page-nav"),
				topMenuHeight = topMenu.outerHeight()+0,
				// All list items
				menuItems = topMenu.find("a"),
				// Anchors corresponding to menu items
				scrollItems = menuItems.map(function(){
				  var item = $($(this).attr("href"));
				  if (item.length) { return item; }
				});

			// Bind click handler to menu items
			// so we can get a fancy scroll animation
			menuItems.click(function(e){
			  var href = $(this).attr("href"),
				  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
			  $('html, body').stop().animate({ 
				  scrollTop: offsetTop
			  }, 1000, 'easeInOutExpo');
			  e.preventDefault();
			});

			// Bind to scroll
			$(window).scroll(function(){
			   // Get container scroll position
			   var fromTop = $(this).scrollTop()+topMenuHeight;
			   
			   // Get id of current scroll item
			   var cur = scrollItems.map(function(){
				 if ($(this).offset().top < fromTop)
				   return this;
			   });
			   // Get the id of the current element
			   cur = cur[cur.length-1];
			   var id = cur && cur.length ? cur[0].id : "";
			   
			   if (lastId !== id) {
				   lastId = id;
				   // Set/remove active class
				   menuItems
					 .parent().removeClass("active-menu")
					 .end().filter("[href='#"+id+"']").parent().addClass("active-menu");
			   }                   
			});
			
		});
})(jQuery);	  
			

	


