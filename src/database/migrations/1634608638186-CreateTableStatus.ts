import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableStatus1634608638186 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'status',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: 'int',
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar(30)',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status');
  }
}
