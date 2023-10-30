

export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'username',
        title: 'Username',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'text',
      },
      {
        title: 'Image URL',
        name: 'imageUrl',
        type: 'url',
      },
    ],
  };