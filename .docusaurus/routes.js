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
    component: ComponentCreator('/darklab/blog', '608'),
    exact: true
  },
  {
    path: '/darklab/blog/archive',
    component: ComponentCreator('/darklab/blog/archive', 'ff2'),
    exact: true
  },
  {
    path: '/darklab/blog/sobre',
    component: ComponentCreator('/darklab/blog/sobre', '28d'),
    exact: true
  },
  {
    path: '/darklab/blog/tags',
    component: ComponentCreator('/darklab/blog/tags', 'e5a'),
    exact: true
  },
  {
    path: '/darklab/blog/tags/darklab',
    component: ComponentCreator('/darklab/blog/tags/darklab', 'd77'),
    exact: true
  },
  {
    path: '/darklab/blog/tags/documentation',
    component: ComponentCreator('/darklab/blog/tags/documentation', '232'),
    exact: true
  },
  {
    path: '/darklab/blog/tags/docusaurus',
    component: ComponentCreator('/darklab/blog/tags/docusaurus', 'b80'),
    exact: true
  },
  {
    path: '/darklab/docs',
    component: ComponentCreator('/darklab/docs', '777'),
    routes: [
      {
        path: '/darklab/docs/category/tutorials',
        component: ComponentCreator('/darklab/docs/category/tutorials', 'e30'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/darklab/docs/home',
        component: ComponentCreator('/darklab/docs/home', 'd1c'),
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
        path: '/darklab/docs/tutorials/github',
        component: ComponentCreator('/darklab/docs/tutorials/github', '7c1'),
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
