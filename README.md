# Guide to some of the functions in the CDN

## diviFunction.js

### 1. To remove Divi class from the tags, call the following function with jQuery

"selector" can be just the tag, class or ID name.

All Divi class starts with either 'et*' or 'et-', the only one making a real difference is 'et*' which is under the code below

Place the code in your custom.js file and make sure jQuery and the [/js/diviFunction.js](/js/diviFunction.js) file is loaded before the custom.js file.

The function can be used to remove any classes (runs wildcard checking for classes starting with) on any criteria.

```
$("selector").removeClassStartingWith('et_');
```

### 2. Add three dots to Divi breadcrumbs that are not the home or current page

```
const childBreadcrumb = document.querySelector(
        ".lwp-breadcrumbs a:not(.home) span[property='name']"
);
if (childBreadcrumb) {
    childBreadcrumb.innerHTML = ". . .";
}
```

### 3. Show link preview when a Divi module is linked

```
divi_link_preview()
```

### 4. Customise Divi's project slug to a unique slug

```
function et_projects_custom_slug( $slug ) {
    $slug = array( 'slug' => 'custom-slug' );
    return $slug;
}
add_filter( 'et_project_posttype_rewrite_args', 'et_projects_custom_slug', 10, 2 );
```

After saving in functions.php, refresh the permalinks in Settings > Permalinks.

## Templates

### 1. Filterable portfolio dynamic number

For filterable portfolio, making changes to the appearance such as adding HTML tags go to [/divi-child/includes/custom-FilterablePortfolio.php](/divi-child/includes/custom-FilterablePortfolio.php) line 679 and wrap %2$s with the tag and line 686 wrap %3$s with the tag.

For the dropdown function to work, add the following

JavaScript

```
/* Project Dropdown Option */
$('.project_dropdown').on('change', function(){
  var sval = $('option:selected', this).attr('data-category-slug');
  $('a[data-category-slug='+sval+']').click();
});
```

And the following in SCSS

```
sup.floating_number{
    font-size: 1rem;
}

@media(max-width:980px){
    .project_list{
        display: none !important;
    }
    .project_dropdown{
        display: block;
        padding: unset !important;
        border: none !important;
        border-bottom: 1px solid $black !important;
        font-size: 2.25rem;
        width: 100%;
        height: 50px;
    }
}

@media(min-width:981px){
    .project_list{
        display: block;
    }
    .project_dropdown{
        display: none;
    }
}
```

For reference on overriding templates on the divi-child theme, see the following link:
[https://help.elegantthemes.com/en/articles/3192155-moving-filterable-portfolio-module-to-child-theme](https://help.elegantthemes.com/en/articles/3192155-moving-filterable-portfolio-module-to-child-theme)
