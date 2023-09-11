import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/darklab/__docusaurus/debug',
    component: ComponentCreator('/darklab/__docusaurus/debug', '9d4'),
    exact: true
  },
  {
    path: '/darklab/__docusaurus/debug/config',
    component: ComponentCreator('/darklab/__docusaurus/debug/config', '568'),
    exact: true
  },
  {
    path: '/darklab/__docusaurus/debug/content',
    component: ComponentCreator('/darklab/__docusaurus/debug/content', 'b3e'),
    exact: true
  },
  {
    path: '/darklab/__docusaurus/debug/globalData',
    component: ComponentCreator('/darklab/__docusaurus/debug/globalData', 'bde'),
    exact: true
  },
  {
    path: '/darklab/__docusaurus/debug/metadata',
    component: ComponentCreator('/darklab/__docusaurus/debug/metadata', '995'),
    exact: true
  },
  {
    path: '/darklab/__docusaurus/debug/registry',
    component: ComponentCreator('/darklab/__docusaurus/debug/registry', '559'),
    exact: true
  },
  {
    path: '/darklab/__docusaurus/debug/routes',
    component: ComponentCreator('/darklab/__docusaurus/debug/routes', '384'),
    exact: true
  },
  {
    path: '/darklab/blog',
    component: ComponentCreator('/darklab/blog', 'fbd'),
    exact: true
  },
  {
    path: '/darklab/blog/archive',
    component: ComponentCreator('/darklab/blog/archive', 'ff2'),
    exact: true
  },
  {
    path: '/darklab/blog/first-blog-post',
    component: ComponentCreator('/darklab/blog/first-blog-post', 'f18'),
    exact: true
  },
  {
    path: '/darklab/blog/long-blog-post',
    component: ComponentCreator('/darklab/blog/long-blog-post', '44f'),
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
    component: ComponentCreator('/darklab/blog/tags/docusaurus', '613'),
    exact: true
  },
  {
    path: '/darklab/blog/tags/hello',
    component: ComponentCreator('/darklab/blog/tags/hello', '922'),
    exact: true
  },
  {
    path: '/darklab/blog/tags/hola',
    component: ComponentCreator('/darklab/blog/tags/hola', '684'),
    exact: true
  },
  {
    path: '/darklab/blog/Welcome',
    component: ComponentCreator('/darklab/blog/Welcome', '679'),
    exact: true
  },
  {
    path: '/darklab/markdown-page',
    component: ComponentCreator('/darklab/markdown-page', '28d'),
    exact: true
  },
  {
    path: '/darklab/docs',
    component: ComponentCreator('/darklab/docs', '8b7'),
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
        path: '/darklab/docs/tutorials/headscale',
        component: ComponentCreator('/darklab/docs/tutorials/headscale', '448'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorials/linux',
        component: ComponentCreator('/darklab/docs/tutorials/linux', '2c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/tutorials/wireguard',
        component: ComponentCreator('/darklab/docs/tutorials/wireguard', '306'),
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
