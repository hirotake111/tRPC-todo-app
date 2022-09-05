import { inferAsyncReturnType } from "@trpc/server";
import type { CreateExpressContextOptions as ExpressContext } from "@trpc/server/adapters/express";

export const createContext = ({ req, res }: ExpressContext) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return { req, res, user: null };
  }
  const token = authorization.split(" ")[1];
  if (!token || token !== "secret!!!") {
    return { req, res, user: null };
  }
  return { req, res, user: { id: 1, name: "alice" } };
};

export type Context = inferAsyncReturnType<typeof createContext>;
