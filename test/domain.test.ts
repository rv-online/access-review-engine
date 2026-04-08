import assert from "node:assert/strict";
import test from "node:test";
import { AccessReviewEngineStore, seedAccessReviewEngine } from "../src/domain.js";

test("summarizes reviews", () => {
  const store = new AccessReviewEngineStore();
  store.seed(seedAccessReviewEngine);
  const summary = store.summary();
  assert.equal(summary.total, 3);
  assert.ok(Object.keys(summary.states).length >= 1);
});

test("lists seeded reviews", () => {
  const store = new AccessReviewEngineStore();
  store.seed(seedAccessReviewEngine);
  assert.equal(store.list().length, 3);
});
