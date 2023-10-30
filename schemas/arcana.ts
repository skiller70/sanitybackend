export default {
    name: 'arcanas',
    title: 'Arcana',
    type: 'document',
    fields: [
      {
        name: 'arcana',
        title: 'addArcana',
        type: 'string',
      },
      {
        title: 'Launch Scheduled At',
        name: 'launchAt',
        type: 'datetime'
      },
      {
        title: 'Arcana Price',
        name: 'price',
        type: 'number'
      }
    ],
  };