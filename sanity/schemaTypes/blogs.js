export default {
  name: 'blogs',
  title: 'blogs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug for your blog article',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'main_image',
      title: 'Main Image',
      type: 'image',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
  ],
}
