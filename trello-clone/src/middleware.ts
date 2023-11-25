import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

function redirectAfterAuth(url: string, base: string) {
  return NextResponse.redirect(new URL(url, base));
}

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ['/'],
  afterAuth(auth, req) {
    // 로그인을 하지 않았고 public route가 아닐때
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // 로그인을 하였고, organization을 선택하지 않았는데 '/select-org'로 이동하지 않으면
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== '/select-org') {
      return redirectAfterAuth('/select-org', req.url);
    }

    // 로그인을 하였고, public route로 이동한다면
    if (auth.userId && auth.isPublicRoute) {
      const path = auth.orgId ? `/organization/${auth.orgId}` : '/select-org';
      return redirectAfterAuth(path, req.url);
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
