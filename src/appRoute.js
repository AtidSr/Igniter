import { FrontPageComponent, PageIndexComponent } from "./pages";

export const routePath = [
  {
    path: "/",
    getComponent: () => <FrontPageComponent />,
  },
  {
    path: "/browse",
    getComponent: () => <PageIndexComponent />,
  },
  {
    path: "/detail/:slug",
    getComponent: () => <PageIndexComponent />,
  },
];
