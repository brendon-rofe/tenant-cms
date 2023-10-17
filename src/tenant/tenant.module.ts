import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantService } from './tenant.service';
import { TenantController } from './tenant.controller';
import { TenantEntity } from './tenant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TenantEntity])],
  providers: [TenantService],
  controllers: [TenantController]
})
export class TenantModule {}
