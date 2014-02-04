siteOptions = {

    setStyles: function(){
      $('#dbyll-options').text(
        '.section-title, .post-title, .post-title a { color: ' + site.headerColor + ' !important; }' +
        '.sidebar { background-color: ' + site.sidebar.backgroundColor + '; }' +
        '.sidebar .title a, .sidebar #bio { color: ' + site.sidebar.textColor + ' !important; }'
      );
    },

    setHeights: function(){
      var documentHeight = $(document).height();
      var footerHeight = $('.site-footer').height();

      /* Sidebar height set */
      $('.sidebar').css('min-height', documentHeight);

      /* Content height set */

      $('.content').css('min-height', documentHeight - 2*footerHeight - 80);
    },

    socialLinks: {

      fill: function(){
        contact_list = $('#contact-list');
        contact_list_primary = $('#contact-list-primary');
        contact_list_secondary = $('#contact-list-secondary');
        mobile_contact_list = $('#mobile-contact-list');
        // Fill contact lists

        if(site.author.github){
          contact_list_primary.append('<li><a class="btn btn-default btn-sm" href="http://github.com/'+site.author.github+'"><i class="fa fa-github fa-lg"></i></a></li>');
          mobile_contact_list.append('<a class="navbar-toggle nav-link" href="http://github.com/'+site.author.github+'"><i class="fa fa-github"></i></a>');
        }

        if(site.author.twitter){
          contact_list_primary.append('<li><a class="btn btn-default btn-sm" href="http://twitter.com/'+site.author.twitter+'"><i class="fa fa-twitter fa-lg"></i></a></li>');
          mobile_contact_list.append('<a class="navbar-toggle nav-link" href="http://twitter.com/'+site.author.twitter+'"><i class="fa fa-twitter"></i></a>');
        }

        if(site.author.email){
          contact_list_primary.append('<li><a class="btn btn-default btn-sm" href="mailto:'+site.author.email+'"><i class="fa fa-envelope fa-lg"></i></a></li>');
          mobile_contact_list.append('<a class="navbar-toggle nav-link" href="mailto:'+site.author.email+'"><i class="fa fa-envelope"></i></a>');
        }

        if(site.author.linkedin)
          contact_list_secondary.prepend('<li><a class="btn btn-default btn-sm" href="https://linkedin.com/in/'+site.author.linkedin+'"><i class="fa fa-linkedin fa-lg"></i></a></li>');

        if(site.author.pinterest)
          contact_list_secondary.prepend('<li><a class="btn btn-default btn-sm" href="https://pinterest.com/'+site.author.pinterest+'"><i class="fa fa-pinterest fa-lg"></i></a></li>');
      },

      struct: function(){
        contact_list = $('#contact-list');
        contact_list_secondary = $('#contact-list-secondary');

        // hide secondary links
        contact_list_secondary.hide();

        // set mouse events
        contact_list.mouseenter(function(){ contact_list_secondary.fadeIn(); });
        contact_list.mouseleave(function(){ contact_list_secondary.fadeOut(); });
      }

    }
  }
