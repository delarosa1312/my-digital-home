// src/utils/generateRoutes.ts
import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

// Static imports for pages
// const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Skills = lazy(() => import("../pages/Skills"));

const generateRoutes = (): RouteObject[] => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      ),
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      ),
    },
    {
      path: "/skills",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
      ),
    },
  ];

  return routes;
};

export default generateRoutes;
