// import { isLoggedIn } from '@lib/auth'

// if (!(await isLoggedIn(Astro.request))) {
//   Astro.cookies.delete('pb_auth')
//   return Astro.redirect('/login')
// }

// previous code could be on each route to be protected. Too many
// BETTER....
import { defineMiddleware } from 'astro/middleware'
import { isLoggedIn, isUserVerified } from '@lib/auth'

export const onRequest = defineMiddleware(
  async (context, next) => {
    if (!(await isLoggedIn(context.request))) {
      if (context.url.pathname.startsWith('/app/api')) {
        return new Response('Unauthorized', {
          status: 401,
        })
      }

      if (context.url.pathname.startsWith('/app')) {
        return context.redirect('/login')
      }
    }


    if (await isLoggedIn(context.request)) {
        const verified = await isUserVerified()
        if (!verified) {
          if (context.url.pathname.startsWith('/app')) {
            return context.redirect('/verify')
          }
        } else {
          if (context.url.pathname === '/verify') {
            return context.redirect('/app/dashboard')
          }
        }
      }

    return next()
  }
)