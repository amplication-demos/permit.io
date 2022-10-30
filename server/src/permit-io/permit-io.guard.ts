import { CanActivate, ExecutionContext, mixin } from "@nestjs/common";
import { PermitIoService } from "./permit-io.service";

export const PermitIoGuard = (resource: string, action: string) => {
  const pio = new PermitIoService();

  class PermitIoGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getNext().req;
      const userId: string = request.user?.id || "";
      return pio.check(userId, action, resource);
    }
  }

  const guard = mixin(PermitIoGuardMixin);
  return guard;
};
