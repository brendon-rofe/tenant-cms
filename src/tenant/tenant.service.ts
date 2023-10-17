import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TenantEntity } from './tenant.entity';

@Injectable()
export class TenantService {

  constructor(@InjectRepository(TenantEntity) private repo: Repository<TenantEntity>) {}

  async findByName(name: string): Promise<TenantEntity> {
    return await this.repo.findOne({ where: { name } });
  }

}
