export default {
  name: 'works',
  title: 'works',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'slides',
      title: 'list of works',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'works',
              title: 'Works',
              type: 'object',
              fieldsets: [
                {
                  name: 'twin_images',
                  title: 'Twin Images in the works section for the carousel',
                },
              ],
              fields: [
                {
                  name: 'Project_title',
                  title: 'Project Title',
                  type: 'string',
                },
                {
                  name: 'Project_description',
                  title: 'Project description',
                  type: 'text',
                },
                {
                  name: 'first_image',
                  title: 'First Image',
                  type: 'image',
                },
                {
                  name: 'second_image',
                  title: 'Second Image',
                  type: 'image',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
