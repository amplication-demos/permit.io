import { Module } from "@nestjs/common";

import { PermitIoService } from "./permit-io.service";

@Module({
  providers: [PermitIoService],
  exports: [PermitIoService],
})
export class PermitIoModule {}
