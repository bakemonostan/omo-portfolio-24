export default {
    name: 'blogs',
    title: 'blogs',
    type: 'document',
    fields:[
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            
        }, 
        {
            name: 'blog_article',
            title: 'Blog Article',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'blog',
                            title: 'Blog',
                            type: 'string',
                        }, 
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'string',
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
                        }
                    ]
                }
            ]
        }
    ]
}