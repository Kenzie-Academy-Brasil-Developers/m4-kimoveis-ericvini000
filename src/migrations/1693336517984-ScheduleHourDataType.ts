import { MigrationInterface, QueryRunner } from "typeorm";

export class ScheduleHourDataType1693336517984 implements MigrationInterface {
    name = 'ScheduleHourDataType1693336517984'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "hour" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "hour" TIMESTAMP NOT NULL`);
    }

}
