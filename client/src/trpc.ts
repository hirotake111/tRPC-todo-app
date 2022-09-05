import { createReactQueryHooks } from "@trpc/react";
// サーバー側の router.ts からエクスポートされた AppRouter をインポート
import type { AppRouter } from "../../server/router";

export const trpc = createReactQueryHooks<AppRouter>();
