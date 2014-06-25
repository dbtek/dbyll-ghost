# Dbyll
Port of the open source Jekyll theme [dbyll](https://github.com/dbtek/dbyll) for Ghost platform.

![Screenshot](https://raw.github.com/dbtek/dbyll-ghost/master/screenshot.png)

## Features
###Customized Colors
Dbyll provides flexibilty to have customized colors. You can customize text colors, headers and sidebar background color.
You will have it just the way you love <i class="fa fa-heart"></i>
For more, take a look at [configuration document](#configuration).

###Logo and Cover Images
Dbyll supports Ghost logo and cover images. You can set blog's logo and sidebar cover image (background) just with a few clicks on Ghost settings.

###Disqus Comments
**Usage**

- Create a disqus account if you don't have one.  
- Set your disqus short name on ***options.js***. Check [configuration document](#configuration).
- That's it.

###Google Code Prettify
**Usage**

Add codes in posts like one added below:

&#96;&#96;&#96;prettyprint  
  #code  
&#96;&#96;&#96;  
 
 
###Icons <i class="fa fa-flag"></i>

Dbyll is packed with Bootstrap and FontAwesome icons. You can use all Glyphicon and FontAwesome icon sets in your posts.

**Usage**

- Add this line in your post for flag icon:
```html
<i class="fa fa-flag"></i>
```
- Take a look at [FontAwesome](http://fontawesome.io/icons/) and [Glyphicon](http://getbootstrap.com/components/#glyphicons) sets.

##Configuration
Dbyll provides some additional features such as customizable colors, social links with pretty sidebar buttons and disqus comment system.

You can configure theme options on *options.js* file. This file can be found on ***/content/themes/dbyll/options.js***

###options.js

Sample configuration bundled with theme:

```js
  var site = {
    
    sidebar: {
      textColor: '#fff',
      backgroundColor: '#34495e',
    },
  
    headerColor: '#e74c3c',
  
    author: {
      email: "your@email",
      github: "abc123",
      twitter: "abc123",
      pinterest: "abc123",
      linkedin: "abc123"
    },
  
    disqus: {
      shortname: 'dbyll-ghost'
    },
  
    analyticsTrackId: ''
  }
```


###Sidebar
Sidebar part can be customized to have personal colors. Blog title and description text color is set with *textColor* option in *sidebar*. Background color is also can be set with *backgroundColor* option. If you set a blog cover with Ghost settings this background option will be ignored.

###Section & Post Titles
You can customize section and post title colors. Option *headerColor* is used to set desired color for titles.

###Social Links
There are pretty buttons on sidebar to let visitors reach you on social media.
You can just remove corresponding social account option if you don't want to display it. You should set them with your account names in order to direct visitors to your accounts.

###Disqus Comments
To enable comments go to [disqus](http://disqus.com), get your disqus short name and set it on ***options.js***.

###Google Analytics
To activate Google Analytics tracking just create a property and set your tracking id with option *analyticsTrackId*.

##Author

Ismail Demirbilek [@dbtek](http://twitter.com/dbtek)
