export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e085fc530331e4f937dbb33',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5xj1tqgm',
                  apiId: 'a987bb61-bfe1-465a-a77b-45d90e241230'
                },
                {
                  buildHookId: '5e085fc530331e4f937dbb34',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-unaoo4mh',
                  apiId: '7b0ec868-ee82-476d-96d6-782762d56ecf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Arogyaraj/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-unaoo4mh.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
