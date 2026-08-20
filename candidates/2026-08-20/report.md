# 最新具身智能论文扫描（截至 2026-08-20）

## 结论

本轮覆盖 **2026-08-13 至 2026-08-20**。arXiv cs.RO 官方列表实际包含 8 月 14、17、18、19、20 日公告，共 253 条；宽松标题初筛命中 84 条，第一批完成 12 篇 HTML 全文复核。

本周最值得关注的不是单一模型榜单，而是三种更强信号：

1. **长时序真机系统**：τ0-VLA 把世界模型与 test-time compute 放在子任务决策边界。
2. **可审计安全评测**：ManiGuard 把安全规格与任务成功分离，用形式化监控评估策略。
3. **新数据与仿真基础**：SoftVTBench、HumanoidVLN、LabDex 和 PRISM 填补触觉、人形导航、实验室与工业接触数据空白。

## 漏斗

| 阶段 | 数量 |
|---|---:|
| arXiv cs.RO 官方条目 | 253 |
| 标题级宽松命中 | 84 |
| 第一批全文复核 | 12 |
| featured | 10 |
| include | 2 |

当前还有 72 条未进入第一批全文复核；候选池已完整保留。

## 90 分以上

| 分数 | 论文 | 为什么重要 | 主要限制 |
|---:|---|---|---|
| 94 | [τ0-VLA](https://arxiv.org/abs/2608.16885) | 40,115 小时真实数据；子任务级世界模型搜索、反思和可修正记忆；三种真机 | 长任务每项仅 10 次；外部复现成本极高 |
| 93 | [ManiGuard](https://arxiv.org/abs/2608.17386) | 200 基础任务、1,000 锁定场景；LTLf 安全规格和自动机监控；代码/数据开放 | 主要是仿真，依赖可观测安全谓词 |
| 90 | [SoftVTBench](https://arxiv.org/abs/2608.18701) | 4,000 示范、50+ 资产；用 FEM 真值分开任务成功与形变安全成功 | 触觉完全仿真，未做真实传感器 sim-to-real |

这三篇均达到当前 90 分月度精选线。

## 其他 Featured

| 分数 | 论文 | 核心判断 |
|---:|---|---|
| 89 | [LabDex](https://arxiv.org/abs/2608.18618) | 原子技能—组合任务—长流程的实验室灵巧操作层次基准；真机与仿真统一 |
| 89 | [Hydra-0](https://arxiv.org/abs/2608.18077) | 用 action flow 统一跨 embodiment 世界建模、策略评测和逆向动作生成 |
| 88 | [HumanoidVLN](https://arxiv.org/abs/2608.12860) | 4 种人形、87 场景、933 路线、20 条配对真机验证；代码/数据尚未发布 |
| 87 | [PRISM](https://arxiv.org/abs/2608.17962) | 25+ 工业接触任务、5,000+ 轨迹、45 小时力/触觉/RGB-D 数据 |
| 86 | [FetchMan](https://arxiv.org/abs/2608.17027) | 证明扩大合成 BC 仍有上限，Flow-GRPO 从 67% 提至 83% 并零样本上 G1 |
| 86 | [H2R-Bench](https://arxiv.org/abs/2608.13049) | 诊断人类视频转机器人视频的功能接触、事件和 embodiment 正确性 |
| 81 | [Reflex](https://arxiv.org/abs/2608.14379) | 将动态操作、未来预测和实测推理延迟放在同一基准与轻量 VLA 中 |

## Include

- **LIBERO-VIFO（78）**：授权与未授权视觉提示安全评测有新意，但目前只有 LIBERO 仿真、无资产。
- **DreamX-Phi 1.0（78）**：WorldArena 排名强，但下游只验证 Adjust Bottle，缺乏匹配消融和真机，不因排行榜名次自动升为 featured。

## 资产核验

GitHub API 已确认以下仓库可访问：

- [SoftVTBench](https://github.com/TuojingAI/SoftVTBench)
- [H2R-Bench](https://github.com/Rongdingyi/H2R-Bench)
- [LabDex](https://github.com/Zhipeng-Tang/LabDex)（仓库存在，但项目页仍写 Code Coming Soon）
- [ManiGuard](https://github.com/NU-IDEAS-Lab/ManiGuard)
- [PRISM](https://github.com/Tengbo-Yu/PRISM)

需要区分三类状态：

- **已验证**：上述 GitHub API 返回可访问。
- **官方页面已链接但 API 重试异常**：τ0-VLA、DreamX-Phi，发布前再试。
- **官方页面链接但 GitHub API 404**：FetchMan；不能当作已开源。

此外，H2R-Bench 的数据按钮仍被注释，URL 是 `ORG/H2R-Bench` 占位符，不能记录为已发布；HumanoidVLN 明确写 Code/Dataset soon。

## 观察名单

本轮 84 条标题候选没有命中当前 14 位作者观察名单。没有因作者或机构声誉加分。

## 需要人工重点审核

1. **τ0-VLA（94）**：研究含金量最高，但 40,115 小时数据与多团队系统很难外部复现；建议人工核对数据组成和模型发布内容是否足以支撑 9 分复现性。
2. **ManiGuard（93）**：检查 Hugging Face 六个任务族的数据是否均实际可下载，而非只有 collection 页面。
3. **SoftVTBench（90）**：必须在摘要中醒目标注“模拟触觉”，避免用户误解为真实 GelSight 数据。
4. **Hydra-0（89）**：开放环策略评测相关性很强，但不能把 r=0.96 写成已经证明可做闭环真实仿真器。
5. **Featured 比例偏高**：第一批是从 84 条中按信息增益挑选的头部样本，不代表整周论文整体质量；第二批预计明显下降。

## 校验

- `candidate-pool.json` 与 `candidates.json` 可解析。
- 所有评分由七项加总。
- 硬门槛、决策阈值和资产状态遵循现有规范。
- 未修改 `papers/` 与网页内容。
