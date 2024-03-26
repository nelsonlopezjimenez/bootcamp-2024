import PocketBase from 'pocketbase'
import type {
  TypedPocketBase,
  ProjectsResponse,
  ProjectsRecord,
  TasksRecord,
  TasksResponse,
} from '@src/data/pocketbase-types'
// Note: we’ll have to re-run the npx pocketbase-typegen command we used above any time we edit the collections, as they are not kept in sync automatically.

function getStatus(project: ProjectsResponse) {
  // function getStatus(project: ) {
  switch (project.status) {
    case "not started":
      return 7;
    case "on hold":
      return 6;
    case "started":
      return 5;
    case "in progress":

      return 3;
    case "ongoing":
      return 2;
    case "done":
      return 1;
    default:
      return 0;
  }
}
export const pb = new PocketBase(import.meta.env.POCKETBASE_URL ||
  process.env.POCKETBASE_URL) as TypedPocketBase


// globally disable auto cancellation
pb.autoCancellation(false)

export async function getProjects() {
  const projects = await pb
    .collection('projects')
    .getFullList()
  return projects.sort((a, b) => getStatus(a) - getStatus(b))
}

export async function addProject(name: string) {
  const newProject = await pb.collection('projects')
    .create({
      name,
      status: 'not started',
    })

  return newProject
}
export async function updateProject(
  id: string,
  data: ProjectsRecord
) {
  await pb.collection('projects').update(id, data)
}
export async function getProject(id: string) {
  const project = await pb.collection('projects').getOne(id)

  return project
}

export async function deleteProject(id: string) {
  await pb.collection('projects').delete(id)
}

export async function addTask(
  project_id: string,
  text: string
) {
  const newTask = await pb.collection('tasks').create({
    project: project_id,
    text,
  })

  return newTask
}
// export async function getStarredTasks() {
export async function getStarredTasks(): Promise<
  TasksResponse<TexpandProject>[]
> {
  const options = {
    sort: '-starred_on',
    filter: 'starred = true && completed = false',
    expand: 'project',
  }

  let tasks: TasksResponse<TexpandProject>[] = []
  tasks = await pb
    .collection('tasks')
    .getFullList(options)

  return tasks
}
export async function getStarredTasks1() {  // mine
  const options = { filter: '', }
  let filter = `starred = true`


  options.filter = filter
  const tasks = await pb.collection('tasks').getFullList(options)
  return tasks
}
export async function getTasks({ project_id = null, done = false, 
}): Promise<TasksResponse<TexpandProject>[]>  {
  const options = {
    // filter: `project = "${project_id}"`,
    filter: '',
  }
  let filter = `completed = ${done}`
  filter += ` && project = "${project_id}"`

  options.filter = filter
  let tasks: TasksResponse<TexpandProject>[] = []

  tasks = await pb
    .collection('tasks')
    .getFullList(options)

  return tasks
}
export async function deleteTask(id: string) {
  await pb.collection('tasks').delete(id)
}

export async function updateTask(id: string, data: TasksRecord) {
  console.log('pocketbase.ts line 95')
  console.log(data)
  await pb.collection('tasks').update(id, data)
}