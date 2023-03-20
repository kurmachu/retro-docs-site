# retro-docs-site
Viewer for the Retro Gadgets community documentation (https://github.com/NexTre-dev/retro-gadgets-docs)  
Accessable online at https://kurmachu.github.io/retro-docs-site/  
Syncs at automatically at ~12:30am PST via GitHub Actions

## Install
First, make sure node.js is up to date, and [install gulp to your system](https://gulpjs.com/docs/en/getting-started/quick-start):
```shell
npm install --global gulp-cli
```
Then, install the modules locally. From the cloned repository:
```shell
npm install
```
## Build and run
VSCode is recommended as a **Live Server** config is used to properly preview the site.
 - To build everything once, use `gulp` or `gulp default`.
 - To build everything and auto-build on changes to static files and existing themes, use `gulp watch`. *\*may be broken*
 - To see other possible tasks, use `gulp --tasks`.

Once built, launch Live Server with the **Go Live** button and navigate into the `docs` folder to preview the site.

## Themes

## ⚠️ We are not accepting contributions at this time.

Themes are placed in catagories in the themes folder and automatically added to the list on full build, you can copy [Arithm](https://github.com/kurmachu/retro-docs-site/blob/master/themes/default/arithm.css) for commented properties and examples.

Please ensure themes are accessible (using devtools, or [WebAIM](https://webaim.org/resources/contrastchecker/)), unless you specifically opt-out of accessibility with the `"accessibility":"ignore"` meta property.  
If you are making a theme specifically meant to be accessible, you may use the `"accessibility":"optimized"` tag.  
> Accessibility optimized themes are reviewed to a higher standard than the default accessibility level. They should be free of all accessibility issues (up to AAA) on all states (hover, active, etc).

Of course, you can add any css to the themes! You aren't just limited to the variables.

If you feel it appropriate, you can create a new catagory by simply making a new folder. _Folders cannot be nested at this time._
