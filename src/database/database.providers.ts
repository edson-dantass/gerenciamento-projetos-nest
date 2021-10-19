import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection()
        .then(() => console.log('Connection success'))
        .catch((error) => console.log('Erro connect in database', error)),
  },
];
