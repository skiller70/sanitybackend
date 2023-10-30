export default {
  name: 'arcanas',
  title: 'Arcana',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'addArcana',
      type: 'string',
    },
    {
      title: 'Launch Scheduled At',
      name: 'launchAt',
      type: 'datetime',
    },
    {
      title: 'Arcana Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
  ],
}
