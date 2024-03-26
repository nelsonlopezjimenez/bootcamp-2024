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

## MOD3 CONTENT
```
1:	Introduction to the module
2:	Create a dashboard
3:	Start fetching data from PocketBase
4:	Show the projects list on the page
5:	Create a layout for the app
6:	Show projects nicely
7:	Show the project status
8:	The problem we’re facing with static site rendering
9:	Enable SSR mode in Astro
10:	SSR vs SSG mode
11:	Add a way to create a new project from the app
12:	Create a modal container
13:	Time to introduce htmx
14:	Show the modal
15:	Add the form to the modal
16:	Close the modal when we click outside of it
17:	Create the new project
18:	Create the single project page
19:	Add a way to add tasks to a project
20:	List the project tasks
21:	Troubleshooting
22:	Wrapping up
```

## MOD4

1. Add a sidebar: 
1. ![add sidebar](/public/_image.webp)
1. @component Sidebar.astro, include in LayoutApp.astro. Fixt titles in dashboard.astro
1. fix in single project view at pages/app/project/[project_id].astro
1. 3 - List projects in sidebar
1. 4 - Add hamburguer menu using Alpine x-data='{showMenu:false}'
1. set autocancellation off. Create a button in @components, include it in dashboard.astro
1. 5 - Add x-cloak to prevent flickering
1. 6 - create app.css styles tag from LayoutApp.astro
1. 9 - fix typescript error. Done with node 20.11 in cmd because gitbash was 18.16 with no change
1. 11 - Delete a project: BUTTON tag hx-delete={'/app/api/project/${project_id}'}; hx-confirm=''
1. 12 - Edit project status @component/project/status.astro: hx-put, hx-swap, hx-vals; used in page/app/project/[project_id].astro
1. 13 - PUT project name
1. 14 - Delete a task
1. 15 - Add a way to mark task as done: IconCheck.astro; BUTTON in FORM 
1. 16 - Show done taks in a different list: one list task-todo, another task-done
1. 17 - Star a task: BUTTON starTask in FORM hx-trigger='click' 
1. 18 - Show starred tasks in dashboard

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
1. 
```
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
```

1. CONTENT
```
1:	Introduction to the module
2:	Add a sidebar
3:	List projects in the sidebar
4:	Add hamburger menu to show projects list on mobile
5:	Add x-cloak to prevent flicker
6:	Moving styles to app.css
7:	Use hx-boost to smooth navigation
8:	Sort projects by status
9:	Fix the TS errors
10:	Use the logo font for the pages title
11:	Delete a project
12:	Allow to edit the project status
13:	Let people edit the project’s name.
14:	Delete a task
15:	Add a way to mark tasks as done
16:	Show “done” tasks in a different list
17:	Star a task
18:	Show starred tasks in the dashboard
19:	Edit the task text
20:	Wrapping up
```
1. 17 - Star a task.
1. 18 - show starred tasks in dashboard
1. First tried to create a ProjectCard only for starred but the starred tasks repeated the same number of projects. The original uses TaskList but passing a starred boolean flag together with completed flag as a prop
1. 19 - Edit the task text: it is not working, even with mod4 downloaded from flaviocopes github account
1. Modified the package.json file to add "npm run dev --host" so the server is available over the network.

# MOD5

1. 
```
1:	Introduction to the module
2:	Add signup page
3:	Implement logout
4:	Redirect /app to /app/dashboard
5:	Login protect all routes and APIs
6:	List user-specific data
7:	New data will be associated with the current user
8:	Forgot password
9:	Email validation
10:	Adding a “captcha” to auth forms with Cloudflare Turnstile
```
1. .