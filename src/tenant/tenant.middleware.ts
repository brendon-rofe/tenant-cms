import { Injectable, NestMiddleware, NotFoundException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { TenantService } from "./tenant.service";

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly tenantService: TenantService) {}

  async use(req: Request, Response: Response, next: NextFunction) {
    const tenantName = req.headers['x-tenant'] as string;

    if(!tenantName) {
      throw new NotFoundException("Tenant not found.");
    }

    const tenant = await this.tenantService.findByName(tenantName);

    if(!tenant) {
      throw new NotFoundException("Tenant not found.");
    }

    req['tenant'] = tenant;

    next();
  }
}