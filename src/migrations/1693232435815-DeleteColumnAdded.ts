import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteColumnAdded1693232435815 implements MigrationInterface {
    name = 'DeleteColumnAdded1693232435815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deletedAt" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "deletedAt" SET DEFAULT now()`);
    }

}
