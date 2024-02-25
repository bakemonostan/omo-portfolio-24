export default {
  name: 'dna_section',
  title: 'dna_section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'dna_image',
      type: 'image',
      title: 'Image for this section of the page',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'subtext',
      title: 'subtext',
      type: 'text',
    },
  ],
}
