# MY SECRET PLAN

## WEEK01

1) Folder structure: 
```
/dev/
    |_bootcamp-2024
        |_pocketbase (binary)
        |_app
            |_README.md
            |_node_modules
            |_astro.config.ms
            |_biome.json
            |_package.json
            |_tailwind.config.mis
            |_.gitignore
            |_tsconfig.json
            |_public
            |   |_favicon.svg; logo.svg; screenshot.png
            |_src
                |_env.css
                |_site.css
                |_pages
                |   |_index.astro
                |   |_blog.astro
                |   |_blog
                |      |_[slug].astro
                |
                |_layouts
                |   |_LayoutSite.astro    
                |   |_MarkdownLayout.astro    
                |_content
                |   |_blog
                |       |_hello-world.md   
                |_layouts
                |   |_LayoutSite.astro    
                |   |_MarkdownLayout.astro    
                |component
                |   |_site
                |       |_common  
                |       |  |_Footer.astro
                |       |  |_TopBar.astro
                |       |_homepage  
                |       |  |_FAQ.astro
                |       |  |_Feature.astro
                |       |  |_Hero.astro
                |       |  |_Pricing.astro
                |       |  |_Screenshot.astro
                |       |  |_Testimonial.astro
                |       |  |_FeaturesIcons
                |       |       |_Fast.astro
                |       |       |_Multiplayer.astro
                |       |       |_Person.astro
                |       |       |_Team.astro
         
```
1) Download pocketbase
1) setup admin account
1) Default collection: user
1) Collection API rules: CRUD operations
1) User collection: email/password; options enabled
1) API preview button
1) Logs: api/settings
1) System settings
1) Fake SMTP server: https://mailtrap.io
    1) create account
    1) start testing
    1) show credentials
    1) paste credentials
    1) send test email

1) create new collection: projects, tasks
1) new field => plain text => name
    1) nf => select => status => not started, started, in progress, etc
    1) nf => Relation => created_by (user); gear: cascade delete true
    1) nf => Bool => completed
    1) nf => DateTime => completed_on
    1) nf => Bool started
    1) nf => DateTime => started_on
    1) nf => File => images => select format, select multiple, max 10, thumbsize 0x800, imax 5 242 880
    1) nf => Relation => created_by
1) Editing the API rules
    1) users => gear => API rules
    1) switch to projects: no rule is set. Remove all API rules for both projects and tasks collection
1) ./pocketbase update

## week 02 - Astro

### Pocketbase:

1) SQLite
1) provide model
1) provide API
1) provide authentication
1) provide file upload functionality

### Astro

1) as jsx format
1) render from markdown
1) handle authenticated requests
1) provide a customized dashboard
1) it is the application server

### file structure

1) done

### installation steps

1) go to /flavio/dev/bootcamp-2024
1) npm create astro@latest
1) app, empty, yes to dependencies, yes to typescript, stric, git
1) cd ./app
1) npm run dev
1) pretty extension, settings, user:
    1) editor: format on save
    1) Prettier: single attribute per line
    1) Prettier: single quote
1) Install the Astro tailwind
    1) control C
    1) npx astro add tailwind
    1) npx to run an npm package without installing it first
    1) npm run dev
1) The Feature List
1) git clone https://flavio 

# week03 

## Create a dashboard

1) ./pocketbase serve
1) access it at 4321/_/
1) create new users
1) create new projects: complete the bootcamp, learn htmx, create a blog
1) create new project mine: edit README, create a blog
1) npm install pocketbase