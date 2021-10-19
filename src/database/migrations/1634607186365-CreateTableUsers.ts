import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsers1634607186365 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: 'int',
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar(60)',
          },
          {
            name: 'email',
            type: 'varchar(120)',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
