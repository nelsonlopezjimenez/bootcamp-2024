import { pb } from '@data/pocketbase'


export async function sendResetPasswordLink(email: string) {
  await pb.collection('users').requestPasswordReset(email)
}


export async function createUser(email: string, password: string){
  console.log(email + " " + password + "========= auth.ts line 4")
  return await pb.collection('users').create({
    email: email,
    password: password,
    passwordConfirm: password,
    emailVisibility: true,
  })
}
// example create data only admings can perform this action
// const data = {
//   "username": "test_username",
//   "email": "test@example.com",
//   "emailVisibility": true,
//   "password": "12345678",
//   "passwordConfirm": "12345678",
//   "name": "test"
// };

// const record = await pb.collection('users').create(data);

export async function createUser1(email: string, password: string){
  console.log(email + " " + password + "========= auth.ts line 4")
  return await pb.collection('users').create({
    'email': email,
    'password': password,
    'passwordConfirm': password,
    'emailVisibility': true,
  })
}
export async function loginUser(email:string, password: string){
  console.log(email + '=================== auth.ts line13')
  return await pb.collection('users').authWithPassword(email, password)
}
export function setCookieAndRedirectToDashboard() {
  return new Response(null, {
    status: 301,
    headers: {
      Location: '/app/dashboard',
      //set secure false on localhost for Safari compatibility
      'Set-Cookie': pb.authStore.exportToCookie({
        secure: import.meta.env.DEV ? false : true,
      }),
    },
  })
}


export async function getUserUsername(request: Request) {
  pb.authStore.loadFromCookie(
    request.headers.get('Cookie') || '',
    'pb_auth',
  )
  console.log('auth.ts ==========  line 56')
  console.log(pb.authStore.model?.username)
  return pb.authStore.model?.username
}

export async function isLoggedIn(request: Request) {
  if (!request.headers.get('Cookie')) {
    return false
  }
  pb.authStore.loadFromCookie(
    request.headers.get('Cookie') || '',
    'pb_auth'
  )
  try {
    // get an up-to-date auth store state by veryfing and refreshing the loaded auth model (if any)
    if (
      pb.authStore.isValid &&
      (await pb.collection('users').authRefresh())
    ) {
      return true
    }
  } catch (_) {
    // clear the auth store on failed refresh
    pb.authStore.clear()
  }
  return false
}

export const isValidEmail = (email: string) => {
  if (typeof email !== 'string') return false
  if (email.length > 255) return false
  const regex = /^.+@.+$/
  return regex.test(email)
}

export const isValidPassword = (password: string) => {
  if (typeof password !== 'string') return false
  if (password.length > 255) return false
  if (password.length < 4) return false
  return true
}

export function isValidData(
  email: string,
  password: string
) {
  if (!isValidEmail(email)) {
    return false
  }

  if (!isValidPassword(password)) {
    return false
  }

  return true
}
// ====== IN MODULE 5
// NOTE: we could write this logic in our app, passing the user id to PocketBase and using it as a filter for the created_by field. This is what generally you do with databases. PocketBase however has a super useful authorization rules set, we can use to avoid writing our own rules in code. The less code we have, the less bugs.