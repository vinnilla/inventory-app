exports.up = (pgm) => {
  pgm.createTable('item', {
    id: 'id',
    name: { 
      type: 'varchar(1000)', 
      notNull: true 
    },
    quantity: {
      type: 'integer',
      notNull: true
    },
    unit: {
      type: 'varchar(20)',
      notNull: true
    },
    price: {
      type: 'money',
      notNull: true
    },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
  // pgm.createTable('posts', {
  //   id: 'id',
  //   userId: {
  //     type: 'integer',
  //     notNull: true,
  //     references: '"users"',
  //     onDelete: 'cascade',
  //   },
  //   body: { type: 'text', notNull: true },
  //   createdAt: {
  //     type: 'timestamp',
  //     notNull: true,
  //     default: pgm.func('current_timestamp'),
  //   },
  // });
  // pgm.createIndex('posts', 'userId');
};