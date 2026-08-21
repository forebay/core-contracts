import { defineConfig } from "vitest/config";

/**
 * @remarks
 * The long timeout is load-bearing: the drift gate shells out to Gradle, and a cold annotation-
 * processor run takes several times vitest's 5s default. Without it the gate times out on every
 * clean checkout and reports a failure that reads as drift.
 */
export default defineConfig({
  test: {
    include: ["src/**/*.test.ts", "src/__tests__/**/*.test.ts"],
    testTimeout: 600000,
  },
});
