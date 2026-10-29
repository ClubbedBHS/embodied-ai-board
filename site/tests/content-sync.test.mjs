import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const script = fileURLToPath(new URL("../scripts/sync-content.mjs", import.meta.url));

test("board update date follows content changes, not publication or rebuild time", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "board-sync-test-"));
  try {
    const site = path.join(root, "site");
    const paper = path.join(root, "papers", "sample");
    await mkdir(path.join(site, "app"), { recursive: true });
    await mkdir(paper, { recursive: true });
    const metadata = {
      id: "sample",
      dates: { first_publication: "2026-07-01" },
      ai_generation: { generated_at: "2026-10-28" },
    };
    await writeFile(path.join(paper, "summary.zh.md"), "> 测试摘要\n");
    const sync = async () => {
      await writeFile(path.join(paper, "metadata.json"), JSON.stringify(metadata));
      execFileSync(process.execPath, [script], {
        env: { ...process.env, EMBODIED_SITE_ROOT: site },
      });
      return JSON.parse(await readFile(path.join(site, "app/board.generated.json"), "utf8"));
    };
    assert.deepEqual(await sync(), { updatedAt: "2026-10-28", paperCount: 1 });
    assert.deepEqual(await sync(), { updatedAt: "2026-10-28", paperCount: 1 });
    metadata.editorial = { updated_at: "2026-10-29T12:30:00Z" };
    assert.deepEqual(await sync(), { updatedAt: "2026-10-29", paperCount: 1 });
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
