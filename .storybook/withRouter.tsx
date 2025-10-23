import type { PartialStoryFn, StoryContext } from '@storybook/types'
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'

export function withRouter(Story: PartialStoryFn, { parameters }: StoryContext) {
  const { initialEntries = ['/'], initialIndex } = parameters?.router || {}

  const rootRoute = createRootRoute({
    component: () => <Story />,
  })

  const router = createRouter({
    routeTree: rootRoute,
    history: createMemoryHistory({
      initialEntries,
      initialIndex,
    }),
  })

  declare module '@tanstack/react-router' {
    interface Register {
      router: typeof router
    }
  }

  return <RouterProvider router={router} />
}