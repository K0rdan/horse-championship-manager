import { assign } from "lodash";

export const routes = {
  home: "/",
  login: "/login"
};

export const router = assign({}, routes);

export default router;
