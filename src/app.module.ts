import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantModule } from './tenant/tenant.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "user",
      password: "password",
      database: "tenantcms",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }
  ), 
  TenantModule],
})
export class AppModule {}
