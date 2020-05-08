export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5eb55be11dedb3cdfe9ae23f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5eqpqhe9',
                  apiId: '727a02e0-d2a4-4bd1-9069-b6fafa02c75b'
                },
                {
                  buildHookId: '5eb55be29f639111ffab4034',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-55zurkbu',
                  apiId: '9ccf6e6c-275f-46d1-97d8-fd0e3b6680ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lembris/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-55zurkbu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
