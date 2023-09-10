import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/darklab/blog',
    component: ComponentCreator('/darklab/blog', 'e50'),
    exact: true
  },
  {
    path: '/darklab/blog/archive',
    component: ComponentCreator('/darklab/blog/archive', 'ff2'),
    exact: true
  },
  {
    path: '/darklab/blog/first-blog-post',
    component: ComponentCreator('/darklab/blog/first-blog-post', 'd65'),
    exact: true
  },
  {
    path: '/darklab/blog/long-blog-post',
    component: ComponentCreator('/darklab/blog/long-blog-post', '0ae'),
    exact: true
  },
  {
    path: '/darklab/blog/mdx-blog-post',
    component: ComponentCreator('/darklab/blog/mdx-blog-post', '9bb'),
    exact: true
  },
  {
    path: '/darklab/blog/tags',
    component: ComponentCreator('/darklab/blog/tags', 'e5a'),
    exact: true
  },
  {
    path: '/darklab/blog/tags/docusaurus',
    component: ComponentCreator('/darklab/blog/tags/docusaurus', '5dc'),
    exact: true
  },
  {
    path: '/darklab/blog/tags/facebook',
    component: ComponentCreator('/darklab/blog/tags/facebook', '21c'),
    exact: true
  },
  {
    path: '/darklab/blog/tags/hello',
    component: ComponentCreator('/darklab/blog/tags/hello', 'a45'),
    exact: true
  },
  {
    path: '/darklab/blog/tags/hola',
    component: ComponentCreator('/darklab/blog/tags/hola', '724'),
    exact: true
  },
  {
    path: '/darklab/blog/welcome',
    component: ComponentCreator('/darklab/blog/welcome', '8d8'),
    exact: true
  },
  {
    path: '/darklab/markdown-page',
    component: ComponentCreator('/darklab/markdown-page', '28d'),
    exact: true
  },
  {
    path: '/darklab/docs',
    component: ComponentCreator('/darklab/docs', '0f4'),
    routes: [
      {
        path: '/darklab/docs/category/tutorial---basics',
        component: ComponentCreator('/darklab/docs/category/tutorial---basics', '108'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/category/tutorial---extras',
        component: ComponentCreator('/darklab/docs/category/tutorial---extras', '25a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/category/tutorials',
        component: ComponentCreator('/darklab/docs/category/tutorials', 'e30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/docs/tutorials/headscale',
        component: ComponentCreator('/darklab/docs/docs/tutorials/headscale', '1cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/docs/tutorials/wireguard',
        component: ComponentCreator('/darklab/docs/docs/tutorials/wireguard', 'a29'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/intro',
        component: ComponentCreator('/darklab/docs/intro', '458'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/darklab/docs/tutorial-basics/congratulations', '5ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/darklab/docs/tutorial-basics/create-a-blog-post', 'c9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/darklab/docs/tutorial-basics/create-a-document', 'eee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/darklab/docs/tutorial-basics/create-a-page', '0e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/darklab/docs/tutorial-basics/deploy-your-site', 'e0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/darklab/docs/tutorial-basics/markdown-features', '483'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/darklab/docs/tutorial-extras/manage-docs-versions', '460'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/darklab/docs/tutorial-extras/translate-your-site', '982'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorials/git',
        component: ComponentCreator('/darklab/docs/tutorials/git', '193'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorials/linux',
        component: ComponentCreator('/darklab/docs/tutorials/linux', '2c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/darklab/',
    component: ComponentCreator('/darklab/', '4cb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
