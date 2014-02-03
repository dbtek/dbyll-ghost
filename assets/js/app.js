$( document ).ready(function() {

  var documentHeight = $(document).height();
  var footerHeight = $('.site-footer').height();

  /* Sidebar height set */
  $('.sidebar').css('min-height', documentHeight);

  /* Content height set */

  $('.content').css('min-height', documentHeight - 2*footerHeight - 80);

  /* Secondary contact links */
  var scontacts = $('#contact-list-secondary');
  var contact_list = $('#contact-list');

  scontacts.hide();

  contact_list.mouseenter(function(){ scontacts.slideDown(); });

  contact_list.mouseleave(function(){ scontacts.slideUp(); });

});
