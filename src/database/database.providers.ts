import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.TYPEORM_HOST,
        port: 5432,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: false,
        logging: true,
        entities: ['src/entities/*.entity{.ts,.js}'],
        migrations: ['src/database/migrations/*.js'],
        cli: {
          entitiesDir: 'src/entities',
          migrationsDir: 'src/database/migrations',
        },
        // extra: {
        //   ssl: {
        //     rejectUnauthorized: true,
        //   },
        // },
      }),
  },
];
