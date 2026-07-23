---
paper_id: arxiv-2607.18016
summary_version: "0.2"
language: zh
status: ai-draft
---

# 面向可验证人形机器人移动操控的持久化 3D 对象 Token

> 用持续更新的 3D 对象记录同时条件化 humanoid 动作，并以几何谓词验证执行结果。

## 研究问题

长程 humanoid loco-manipulation 中，任务对象会在移动、遮挡、接触和恢复过程中不断变化。若动作生成和成功判断使用的对象状态不一致，机器人容易抓错、放错或把失败误判为完成。

## 核心方法

Persistent Object Tokenization（POT）维护角色化的 3D 对象记录，包括目标、目的地、支撑物和交接对象等。POT-VLA 把这些记录投影为 action expert 的输入；每个短动作 chunk 后重新观察，并用 containment、support、距离和位移等几何谓词决定继续、重试、重观察、重新 grounding 或重规划。

## 主要贡献

1. 把 3D 对象状态同时用于动作生成与执行结果验证。
2. 构建短动作 chunk、刷新感知、谓词检查和结构化恢复组成的闭环。
3. 在真实 Unitree G1 上测试对象变化、遮挡和执行中扰动。

## 数据与训练

实验使用 Unitree G1、Dex3-1 dexterous hand 和头戴 RGB-D，相机与对象记录处理运行在桌面工作站。策略 backbone 为 GR00T-N1.7；POT-token 变体使用加入对象 token 的微调 checkpoint。

## 实验与结果

八类真实任务中，POT-VLA 为 71/80，matched direct baseline 为 39/80（Table 1）。四任务消融为 Direct 15/40、Verifier only 22/40、POT tokens only 31/40、完整系统 34/40（Table 2）。Being-0 的 44/50 对 37/50 不是本地复现，因此只作为外部参考。

## 局限性

1. 只测试一台 Unitree G1 和单一办公环境，每项任务 10 次。
2. 依赖 SAM3/RGB-D、相机标定、对象记录质量和人工定义的几何谓词。
3. 方法更接近系统集成，尚未证明可跨 embodiment 或复杂人机交互泛化。

## 为什么值得关注

这是一篇值得收录的 humanoid VLA 闭环系统案例，尤其展示对象 token 与 verifier 的分工。但其通用性和复现资产不足，因此定位为常规收录而非本周重点。

## 适合谁阅读

Humanoid VLA、3D grounding、移动操控、执行监控与机器人安全系统研究者。

## 关键资源

- 论文：https://arxiv.org/abs/2607.18016
- 项目主页：未确认
- 代码：未确认公开
- 数据：未确认公开或沿用公开数据集
- 模型：未确认公开

## 事实核验记录

- [x] 标题、作者和公开日期已通过 arXiv 摘要页核验
- [ ] 作者机构尚未全部规范化核验
- [ ] 代码、数据和模型资产需继续检查
- [x] 方法、实验和结论/局限已通过 arXiv 官方 HTML 全文核验
- [x] 摘要中的关键数字已对应到正文实验或表格
- [ ] 图像与视频演示未逐帧核验
