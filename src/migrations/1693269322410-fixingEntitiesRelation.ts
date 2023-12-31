import { MigrationInterface, QueryRunner } from "typeorm";

export class FixingEntitiesRelation1693269322410 implements MigrationInterface {
    name = 'FixingEntitiesRelation1693269322410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "UQ_c7a1c763ff260ac28674afa8c60" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_47ed1f0bbf85e8083bd390ef95c"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "UQ_c7a1c763ff260ac28674afa8c60"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "addressId"`);
    }

}
