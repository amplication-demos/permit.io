# permit.io

To run this project you'll need to have [Docker](https://www.docker.com/) installed on your machine as well as a [Permit.io](https://www.permit.io/) account/project.

## Permit.io

Create a Permit.io project and then in the Policy Editor create the following resources:

- User
- Order
- Customer
- Product
- Address

Set the `Admin`s resources' permissions to have access to all permission, and for `Viewer`s you can set it to read only for all of the resources.

Be sure to set up Permit.io locally, follow the quickstart directions [here](https://docs.permit.io/tutorials/quickstart).

Add the SDK secret key to the [`server/.env`](server/.env) file, under `PERMIT_API_KEY`.


## Set up project

In terminal, navigate into the `server` directory and run the following commands:

```bash
npm install
npm run prisma:generate
npm run docker:db
npm run db:init
```

Next, in the `admin-ui` folder, run: `npm install`.

## Run project

Run the command `npm run start` in the `admin-ui` and `server` folders. Navigate to [`localhost:3001`](http://localhost:3001/) to access the admin UI. Your password and username are both `admin`.