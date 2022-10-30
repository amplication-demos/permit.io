import { Injectable } from "@nestjs/common";
import { Permit } from "permitio";
import { UserRead } from "permitio/build/main/openapi";

@Injectable()
export class PermitIoService {
  private permit;

  constructor() {
    this.permit = new Permit({
      pdp: process.env.PERMIT_PDP,
      token: process.env.PERMIT_API_KEY,
    });
  }

  async check(
    user: string,
    action: string,
    resource: string
  ): Promise<boolean> {
    console.log(user, action, resource);
    const result = await this.permit.check(user, action, resource);
    console.log(result);
    return result;
  }

  userCreate(
    key: string,
    first_name: string = "",
    last_name: string = ""
  ): Promise<UserRead> {
    return this.permit.api
      .syncUser({
        key,
        first_name: first_name ? first_name : key,
        last_name,
      })
      .then((user) => {
        this.permit.api.assignRole({
          user: user.id,
          role: process.env.PERMIT_DEFAULT_ROLE ?? "",
          tenant: process.env.PERMIT_DEFAULT_TENANT ?? "",
        });
        return user;
      });
  }

  userDelete(key: string): Promise<any> {
    return this.permit.api.deleteUser(key);
  }
}
