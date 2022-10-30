import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserServiceBase } from "./base/user.service.base";
import { PasswordService } from "../auth/password.service";
import { PermitIoService } from "../permit-io/permit-io.service";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService,
    protected readonly permitIoService: PermitIoService
  ) {
    super(prisma, passwordService, permitIoService);
  }
}
