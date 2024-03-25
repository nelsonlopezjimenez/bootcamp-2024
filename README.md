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
1) app, empty, yes to dependencies, yes to typescript, strict, git
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

## 2. Create a dashboard

1) ./pocketbase serve
1) access it at 4321/_/
1) create new users
1) create new projects: complete the bootcamp, learn htmx, create a blog
1) create new project mine: edit README, create a blog


## 3 Start fetching data from pocketbase

1. npm install pocketbase
1. in src/pages/app/Dashboard.astro:  import pocketbase
1. getfullList() method shows in the terminal app is running.

## 4. Show the project list

1. project.map( i => '<li>{i.name}</li>')
1. 5 = Create layout for the app LayoutApp.astro
1. 6 -  Show projects nicely: one card content
1. at /src/components/app/project/ProjectCard.astro
1. import ProjectCard into Dashboard
1. 7 - Show the project's status
1. in ProjectCard add status, style with the anchor tag pointing to /app/project/${project.id}
1. PROBLEM: a statically generated HTML can not change if database changes, 
1. In order to update the html a new build should be generated. We need to
1. 9 - Enable server side rendering to update data in the html when data is updated in the database
```
npx astro add node
npm install dotenv
```

## 11 - Add a way to create a new project from the app

1. at src/components/app/projects/AddNewProjectCard.asto to add new project
1. import AddNewProjectCard into Dashboard
1. 12 - Create a modal container
1. Add dialog element to LayoutApp
1. In order to reuse modal create at src/pages/app/modals/project/new.astro

## 13 - HTMX

1. Use HTMX
```
npm install htmx.org
```
1. add script to LayoutApp.astro to import htmx.org
1. 14 - show the modal
1. at src/components/app/modals/ModalLayout.astro 
1. use it (import) at src/pages/app/modals/new.astro
1. 15 - Add the form to the modal
1. We need an input field for the name, and cancel/add buttons
1. Each one on its separated files

# SRC/PAGES folder

```
pages
|_app
  |_api
  | |_projects.astro
  | |
  | |_project
  |   |_[project_id].astro
  |   |_[project_id]
  |     |_task.astro
  |     |
  |     |_task
  |       |_[task_id].astro
  |
  |_modals
  | |_project
  |   |_new.astro
  |   |
  |   |_[project.id]
  |     |_edit.astro
  |     |_task
  |       |_task.astro
  |       |_new.astro
  |
  |_project
    |_[project_id].astro

```
## 15 - Add the form to the modal\

1. in ModalLayout.astro
1. import pages/app/modals/new.astro
1. in src/components/app/modal: buttons and inputField
1. import pages/app/modals/project/new.astro

## 16 - Close modal when outside of it
```
npm install alpine
npm install --dev @types/alpinejs
```
1. import in src/layouts/LayoutApp Alpine.start()
1. use in ModalLayout.astro

## 17 - Create new project
1. move db to ~/data/pocketbase.ts
```
npm install --save-dev @typas/node
```
1. edit in pocketbase.js getProjects(), use in dashboard.astro
1. 18 - Single project page: display one project
1. in pages/app/project/[project_id].astro => URL route /app/project/:project_id
1. add getProject(id) => getOneProject(id)
1. 19 - Button to add task to a project
1. in [project_id].astro
1. in components/app/tasks ButtonAddTask.astro
1. import to [project_id].astro
1. page route /modals/project/${project_id}/task/new
1. Create the file src/pages/app/modals/project/[project_id]/task/new.astro
1. ROUTE:  hx-post={`/app/api/project/${project_id}/task`}> as src/pages/app/api/project/[project_id]/task.astro
1. in pocketbase.ts edit addTask()

## 20 - List all tasks from a project

1. edit getTasks(project_id) in pocketbase.ts
1. use this in src/pages/app/project/[project_id].astro
1. conditional rendering "no tasks" OR list of tasks. The color is white, so item not seen right away.

## MOD4

1. .
1. v
1.
```
C:\USERS\CREEPERPANDATREX\DOCUMENTS\2024\_MYGITHUB\BOOTCAMP-2024\SRC
├───components
│   ├───app
│   │   ├───modals
│   │   ├───projects
│   │   └───tasks
│   └───site
│       ├───common
│       └───homepage
│           └───FeaturesIcons
├───content
│   └───blog
├───data
├───layouts
└───pages
    ├───app
    │   ├───api
    │   │   └───project
    │   │       └───[project_id]
    │   │           └───task
    │   ├───modals
    │   │   └───project
    │   │       └───[project_id]
    │   │           └───task
    │   └───project
    └───blog
```
1. / 
1. .```
C:\USERS\CREEPERPANDATREX\DOCUMENTS\2024\_MYGITHUB\BOOTCAMP-2024\SRC
│   app.css
│   env.d.ts
│   site.css
│
├───components
│   ├───app
│   │   │   HamburgerMenuButton.astro
│   │   │   Sidebar.astro
│   │   │
│   │   ├───modals
│   │   │       ButtonCancel.astro
│   │   │       ButtonSubmit.astro
│   │   │       InputField.astro
│   │   │       ModalLayout.astro
│   │   │
│   │   ├───projects
│   │   │       AddNewProjectCard.astro
│   │   │       ProjectCard.astro
│   │   │       ProjectStatus.astro
│   │   │
│   │   └───tasks
│   │           ButtonAddNewTask.astro
│   │
│   └───site
│       ├───common
│       │       Footer.astro
│       │       TopBar.astro
│       │
│       └───homepage
│           │   FAQ.astro
│           │   Features.astro
│           │   Hero.astro
│           │   Pricing.astro
│           │   Screenshot.astro
│           │   Testimonial.astro
│           │
│           └───FeaturesIcons
│                   Fast.astro
│                   Multiplayer.astro
│                   Person.astro
│                   Team.astro
│
├───content
│   │   config.ts
│   │
│   └───blog
│           hello-world.md
│
├───data
│       pocketbase-types.ts
│       pocketbase.ts
│
├───layouts
│       LayoutApp.astro
│       LayoutSite.astro
│       MarkdownLayout.astro
│
└───pages
    │   blog.astro
    │   index.astro
    │
    ├───app
    │   │   dashboard.astro
    │   │
    │   ├───api
    │   │   │   projects.astro
    │   │   │
    │   │   └───project
    │   │       │   [project_id].astro
    │   │       │
    │   │       └───[project_id]
    │   │           │   task.astro
    │   │           │
    │   │           └───task
    │   │                   [task_id].astro
    │   │
    │   ├───modals
    │   │   └───project
    │   │       │   new.astro
    │   │       │
    │   │       └───[project_id]
    │   │           │   edit.astro
    │   │           │
    │   │           └───task
    │   │                   new.astro
    │   │                   task.astro
    │   │
    │   └───project
    │           [project_id].astro
    │
    └───blog
            [slug].astro



# GIT SYNTAX
1. # Start a new feature
git checkout -b new-feature main
# Edit some files
git add <file>
git commit -m "Start a feature"
# Edit some files
git add <file>
git commit -m "Finish a feature"
# Merge in the new-feature branch
git checkout main
git merge new-feature
git branch -d new-feature
