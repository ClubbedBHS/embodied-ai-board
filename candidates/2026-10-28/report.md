# 2026 年 9—10 月具身智能回扫：首轮重点候选

**收录更新（2026-10-28）：用户已确认收录以下 13 篇，现已生成正式 metadata.json 与中文长摘要。下文保留扫描当时的候选判断。后续扫描结果单独保存在 batch-02/。**

扫描截至 **2026-10-28**。范围为 2026-09-01 至 2026-10-28。

## 覆盖与边界

- 已检查 arXiv cs.RO 九月、十月全部分页，含跨类投稿：九月 2,187 条、十月 2,058 条，共 4,245 个唯一编号。
- 宽松标题规则召回 1,146 条；这是发现队列，不代表全部读过摘要。
- 本轮挑选 20 条线索阅读官方摘要，其中 13 篇完成方法、实验与结论/局限的 HTML 全文重点复核；7 篇暂缓评分。
- 同时检查 Physical Intelligence 官方博客与 NVIDIA GEAR publication 页面。GEAR 页面为动态列表，本次静态提取没有获得完整条目，因此不把它计为已完整覆盖。
- 这是两个月补扫的第一轮重点名单，尚未完成 1,146 条候选的逐篇筛查，不应称为两个月“全部 backfill 完成”。
- 正式论文库当前 355 篇；此前 9 月上旬五篇（TacPAC 等）已在本地正式整理。本轮 13 篇保存在候选区，尚未转入 papers/ 或上线。

## 这两个月最值得关注的变化

1. **从前向想象走向部署闭环。** LoopWAM 保留混合质量 rollout，Rollback 在世界模型中回退分支，再以真实经验校准模型。核心问题从“预测未来”推进到“这些预测能否持续改善策略”。
2. **人类视频需要可控制的统一接口。** RynnVLA/RynnWorld 用 3D 潜动作，Ropedia 用相机与骨架，VioLA 用身体和手的运动潜变量。三个方向不能只按视频小时数比较。
3. **模型 scaling 开始连接控制能力。** RoboJEPA 同时检验预测误差外推和规划收益，比只展示视频质量更有说服力。
4. **高成功率需要更严格的评测。** RoboTwin-Phys 揭示物理参数变化这一独立失败维度；VioLA 的任务内“无需微调”也不应被写成未见任务泛化。

## 重点名单

分数沿用 selection-rubric v0.1，是可修订的编辑判断。80 分以上的 featured 是候选建议，首页仍使用近 30 天且 90 分以上的标准。9 月回补工作不会因高分自动进入当前首页。

| 分数 | 工作 | 首次公开 | 核心价值 | 资源状态 |
|---:|---|---|---|---|
| 95 | [RoboJEPA](https://arxiv.org/abs/2610.10515) | 2026-10-07 | 将潜空间世界模型从 22M 扩展到 8B，在 12 类机器人数据上建立预测误差与训练算力、下游规划之间的关系。 | 代码可访问 |
| 94 | [LoopWAM](https://arxiv.org/abs/2610.18873) | 2026-10-13 | 保留成功、次优与失败 rollout 的视频监督，同时用质量条件和加权动作监督避免模仿差动作，直接验证多轮部署改进。 | 代码可访问 |
| 93 | [RynnVLA-Latent](https://arxiv.org/abs/2610.34356) | 2026-10-25 | 用 3D-grounded 连续潜动作把 30.1K 小时异构视频变成策略预训练监督，降低对统一原生机器人动作标签的依赖。 | 代码＋权重可访问 |
| 92 | [Ropedia W0](https://arxiv.org/abs/2610.26855) | 2026-10-19 | 用 10K 小时人类与 3K 小时机器人数据，将移动和操作统一到第一视角世界模型，并提供权重与推理实现。 | 代码＋权重可访问 |
| 91 | [Rollback](https://arxiv.org/abs/2610.36068) | 2026-10-26 | 把世界模型的回退能力用于关键决策点分支搜索，以同状态兄弟分支结果产生动作级相对监督，并用真实 rollout 更新模型。 | 未找到官方核心资产 |
| 90 | [DATAFARM](https://arxiv.org/abs/2609.12316) | 2026-09-11 | 指出原始 TAMP 轨迹即使完成任务也可能不适合微调 VLA；通过对齐预训练分布中的关节配置、运动风格和时序提高数据效用。 | 代码可访问 |
| 90 | [OpenWAM (Stanford)](https://arxiv.org/abs/2610.07922) | 2026-10-06 | 提供可配置视频—动作交互程序，比较联合、先视频、先动作和解耦生成，并用反事实数据研究可复用动力学模块。 | 代码＋权重可访问 |
| 89 | [RynnWorld-Latent](https://arxiv.org/abs/2610.36791) | 2026-10-27 | 用与 RynnVLA 共享的潜动作条件化视频世界模型，支持数字遥操作与从人类视频合成机器人数据。 | 代码＋权重可访问 |
| 88 | [FACT / EgoForce](https://arxiv.org/abs/2610.19155) | 2026-10-13 | 从人类力觉示范预训练，让视觉规划与力—动作修正协同；EgoForce 约 2K 小时、40K episodes、1K 任务和示范者。 | 未找到官方核心资产 |
| 87 | [VioLA](https://arxiv.org/abs/2610.12435) | 2026-10-08 | 让人形通用策略预测身体与手的运动潜变量，由冻结控制器执行，使人类运动可以直接监督策略输出。 | 代码 coming soon |
| 87 | [X-WBC](https://arxiv.org/abs/2609.15213) | 2026-09-14 | 将人类运动语义与机器人执行分开，共享 Transformer 在九类人形身体上联合训练，以轻量本体模块适配状态和动作。 | 仓库只有 README/docs |
| 84 | [RoboTwin-Phys](https://arxiv.org/abs/2609.26292) | 2026-09-22 | 把质量、摩擦、质心和关节动力学等 13 种物理属性变化纳入操作评测，揭示视觉随机化以外的性能缺口。 | 未找到官方核心资产 |
| 84 | [EmbodiedSmith](https://arxiv.org/abs/2610.07969) | 2026-10-06 | 联合生成并迭代修复资产、场景和任务程序，扩展到移动操作、人形、灵巧手、变形物与流体。 | 未找到官方核心资产 |

## 审阅笔记

### RoboJEPA — 95

- 团队：FAIR at Meta；Chandar Research Lab；Mila；Polytechnique Montréal。
- 方法：冻结 V-JEPA 2.1 编码器，训练动作条件 JEPA 预测器；在潜空间用 CEM/MPC 朝单张目标图规划，解码器仅用于可视化。
- 证据：以 22M–2B 拟合规模曲线，再外推检验 4B/8B；在 RoboCasa 和真实 Franka 上测试规划。二阶幂律对预测误差的外推优于普通幂律（§3.1–3.4）。
- 看板增量：相较现有 GE-Act 2.0 的端到端 WAM scaling，本工作专门量化潜空间预测器及其规划能力的 scaling。
- 主要限制：潜空间误差是本文数据与任务内的代理指标，不能当作通用物理理解评分。 简单任务较早饱和，复杂物体交互需要更大计算量。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2610.10515)；[项目页](https://robojepa.github.io)；[代码](https://github.com/facebookresearch/robo_jepa)。

### LoopWAM — 94

- 团队：Tsinghua University；Dexmal；Loopeva。
- 方法：并行去噪中联合视频与动作；按专家/rollout 来源采样噪声，用轨迹质量调节动作学习，各质量视频均用于世界建模。
- 证据：真实 Table30-V2 三轮由 23.67% 到 43.33%；RoboTwin 2.0 为 94.5%，RoboCasa365 为 49.5%；衬衫折叠由 13.20% 到 55.56%（§4，Tables 1–4）。
- 看板增量：相较 RaC 和 RePO-VLA，从混合质量部署经验同时学习动作后果与高质量行为，给出多轮闭环证据。
- 主要限制：质量标注依赖人工/VLM，粗标注还包含人为平滑度判断。 多轮训练和数据量同时增长，需要结合消融解释因果贡献。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2610.18873)；[项目页](https://loop-wam.github.io/)；[代码](https://github.com/loop-wam/LoopWAM)。

### RynnVLA-Latent — 93

- 团队：DAMO Academy, Alibaba Group；Hong Kong Embodied AI Lab；The Chinese University of Hong Kong；Hupan Lab。
- 方法：RynnLAM 结合残差未来特征、相机补偿 3D flow 与相机运动解耦；VLA 先预测潜动作，再做本体专属动作后训练。
- 证据：4B 在 LIBERO 为 98.8%，LIBERO-Plus 为 84.7%，VLABench 五轨平均 51.9%；六项真实任务跨灵巧手与移动夹爪（§4，Tables 4–9）。
- 看板增量：相较 GE-Act 的显式动作和 VioLA 的运动编码器，提供从视觉转移学习统一潜动作的替代接口。
- 主要限制：公开权重是第一阶段潜动作预训练模型，仍需第二阶段本体适配后才能闭环控制。 正文与结论中的 RoboTwin 汇总数字存在 88.6/88.3 不一致，发布摘要前应复核版本。 部分比较提升很小，不能据此宣称统计显著。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2610.34356)；[项目页](https://alibaba-damo-academy.github.io/RynnVLA-Latent.github.io)；[代码](https://github.com/alibaba-damo-academy/RynnVLA-Latent)；[权重](https://huggingface.co/Alibaba-DAMO-Academy/RynnVLA-Latent-4B)。

### Ropedia W0 — 92

- 团队：Nanyang Technological University；Ropedia；Duke University；University of California San Diego；Tsinghua University。
- 方法：把移动编码为相机位姿射线图，把操作编码为投影骨架；先人类预训练，再人机联合训练和目标机器人后训练。
- 证据：覆盖 DreamDojo、Ψ0、ω-HOME、Xp-Teleop、AgiBot；策略评估进度相关性 r≥0.98，蒸馏后 21.3 fps；真实 G1 的任务进度由 33.3% 到 56.7%（§Experiments，项目页）。
- 看板增量：相较桌面操作世界模型，显式覆盖视角随身体移动和全身操作，连接人类第一视角数据与机器人。
- 主要限制：任务进度不等同于整项任务成功率。 照片级视频预测并不能单独证明动力学正确。 公开权重与完整 13K 小时训练语料应分开表述。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2610.26855)；[项目页](https://ropedia.github.io/ropedia-w0/)；[代码](https://github.com/Ropedia/ropedia-w0)；[权重](https://huggingface.co/ropedia-ai/Ropedia-W0)。

### Rollback — 91

- 团队：AgiBot；Beihang University；National University of Singapore。
- 方法：MCTS 搜索已保存的世界模型决策状态；树结构估计相对价值；异步真实执行、策略训练、LoRA 世界模型适配与蒸馏协同运行。
- 证据：真实积木抽取、投球、桌面冰壶成功率 69.33%、40.00%、64.44%；相对同世界模型的 RISE 复现分别增加 10.67、11.11、11.85 个百分点（Table 1）；一台机器人与 48 张 H200 用于改进。
- 看板增量：与此前 Related Work 中的回退—分支—训练路线高度相关；比纯前向想象更直接研究反事实动作监督。
- 主要限制：回退对象是学习型世界模型状态，不能混同物理模拟器快照。 48 张 H200 和任务专属暖启动让复现成本很高。 超过人类平均仅对应三名参与者的两个小游戏。 官方项目页未提供代码入口。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2610.36068)；[项目页](https://rollback-wm.github.io/)。

### DATAFARM — 90

- 团队：Stanford University；Princeton University。
- 方法：从 DROID 拟合关节配置密度与轨迹潜空间密度，再优化 IK 端点、规划路径和 retiming。
- 证据：三项真机桌面任务各 20 条示范、20 次测试，平均成功率 56.7%，原始 TAMP 8.3%，人类遥操作 61.7%；未参与微调的折布保持 85%（§V）。
- 看板增量：直接补充 GSWorld、MOSAIC 等规划数据路线的缺口：任务可行性与训练分布兼容性是两项不同要求。
- 主要限制：目标任务只有三项，并依赖可规划的几何状态。 样本量小，且结论针对特定预训练策略与参考数据。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2609.12316)；[项目页](https://prpl-group.com/datafarm/)；[代码](https://github.com/SamratSahoo/DATAFARM)。

### OpenWAM (Stanford) — 90

- 团队：Stanford University。
- 方法：在 10K+ 小时视频上做因果机器人视频预训练，再用共享 MoT 组合动作专家；局部上下文 IDM/FDM 用反事实转移训练。
- 证据：LIBERO-Long VTA 从 68.4% 到 97.8%；只适配视频预测器时，冻结局部 IDM 在四项留出任务平均 84.0%，仅示范训练局部 IDM 21.5%（§4）。
- 看板增量：为 WAM 的架构比较和模块化研究提供统一实验基础，降低不同系统同时改变多个因素的混淆。
- 主要限制：10 月是论文首次上 arXiv；正文注明项目页和代码于 6 月 4 日先行发布。 已公开视频预训练权重，但策略 checkpoints、反事实数据集仍在准备。 与 2609.07398 的同名工作是不同论文。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2610.07922)；[项目页](https://openwam.stanford.edu)；[代码](https://github.com/OpenWAM/OpenWAM)；[权重](https://huggingface.co/OpenWAM-Stanford/OpenWAM-Pretraining)。

### RynnWorld-Latent — 89

- 团队：DAMO Academy, Alibaba Group；Hong Kong Embodied AI Lab；The Chinese University of Hong Kong；Hupan Lab。
- 方法：全局动作 token 与局部帧对齐条件路径结合；目标本体后训练后以原生机器人动作生成视频，并通过编辑初帧合成数据。
- 证据：约 800 小时合成语料；π0 的 LIBERO-Plus 从 53.6% 到 79.4%，π0.5 从 84.4% 到 84.8%；两类真机平台每任务 35 次测试（Tables 4–6）。
- 看板增量：与 RynnVLA 共同组成同一潜动作接口下的策略学习和世界建模闭环，但应分别计数、共享脉络。
- 主要限制：数据与额外优化算力的贡献尚未分离。 合成视频与重定向动作分别生成，过滤不能保证物理一致。 仓库 README 与论文描述的训练数据规模不一致，需要进一步核对。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2610.36791)；[项目页](https://alibaba-damo-academy.github.io/RynnWorld-Latent.github.io)；[代码](https://github.com/alibaba-damo-academy/RynnWorld-Latent)；[权重](https://huggingface.co/Alibaba-DAMO-Academy/RynnWorld-Latent)。

### FACT / EgoForce — 88

- 团队：University of Michigan；Stanford University；Microsoft Research。
- 方法：粗规划器联合预测动作、未来视频和视觉轨迹；细化器读取触觉及缓存计划，联合预测未来力并修正动作。
- 证据：十项真机任务包括工具、乐器和移液器；用 10 条机器人加 90 条人类轨迹微调，部分任务比 T-Rex 高最多 60 个百分点（Tables I–II）。
- 看板增量：相较 TacPAC，新增大规模人类力觉预训练和视觉轨迹监督，但独立复现资产尚不足。
- 主要限制：每项二值任务仅 10 次评测，乐器用音符数、移液器用误差，不能混成统一平均成功率。 项目页没有直接代码、数据或权重入口。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2610.19155)；[项目页](https://fact-1-0.github.io/)。

### VioLA — 87

- 团队：Vesoma；ETH Zürich；Max Planck Institute for Intelligent Systems；University of Tübingen；ELLIS Institute。
- 方法：共享人类/机器人运动编码器建立潜动作标签；模拟跟踪补出人类视频缺少的机器人本体状态。
- 证据：140.6M 帧中 93.2% 来自人类；一台 G1 上 30/30 移动姿态、31/35 操作；人类单独训练为 12/30 移动成功；robot-only 操作反而 33/35（§4）。
- 看板增量：在人形动作表示上比直接关节预测更有信息增益；对人类数据价值提供了正反两面证据。
- 主要限制：zero-shot 仅指无需任务专属微调，任务家族在训练中存在。 每任务 5 次试验，额外抓瓶行走为 0/5。 人类混合训练并非全面优于 robot-only。 代码 coming soon。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2610.12435)；[项目页](https://viola.is.tue.mpg.de/)。

### X-WBC — 87

- 团队：Shanghai Innovation Institute；Tongji University；Fudan University；Logos Intelligence Lab。
- 方法：全人体运动、重定向参考和五点 VR 输入对齐到相同命令 token；多机器人混合 PPO 更新。
- 证据：九个仿真本体、四类真实机器人；10 月 25 日版增加外部 100STYLE 冻结测试，800 clips 中 729 成功（91.13%），SONIC 93.00%（§4）。
- 看板增量：提供共享全身控制骨干的实证，和 VioLA 的高层指令到潜动作路线互补。
- 主要限制：仓库只有 README 和 docs，不能算方法实现开放。 真实部署主要定性，不是未见本体零样本迁移。 不同外部系统保留各自输入接口，不能把比较视为完全等条件。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2609.15213)；[项目页](https://logosintelligencelab.github.io/x-wbc/)。

### RoboTwin-Phys — 84

- 团队：Peking University；Advanced Institute of Information Technology, Peking University；Memo。
- 方法：在任务相关可行物理区间连续采样，提供 5000+ 带物理真值的专家示范。
- 证据：五种 WAM/VLA 在 Physical Random 下成功率约 31.60%–44.24%，逐任务 100 rollouts；视觉 clean/random 对照使用既有公开结果（Table 1、Appendix D）。
- 看板增量：对看板中不断提高的视觉 benchmark 成功率形成关键检验：物理变化鲁棒性仍是独立维度。
- 主要限制：clean/random 结果从既有公开评测引入，不能把全部下降归因于同条件重测。 论文声明资源发布，但本轮未发现可确认的直接仓库或数据地址。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2609.26292)。

### EmbodiedSmith — 84

- 团队：Hong Kong University of Science and Technology (Guangzhou)；Xiaomi Robotics；Southeastern University；Tsinghua University；Zhejiang University；Westlake University；Symbiosis Robotics；Peking University；Xi’an Jiaotong University；Beijing Academy of Artificial Intelligence。
- 方法：用场景—任务相互反馈和物理/运动可行性验证筛选可执行数据；失败触发定向修复和重验证。
- 证据：20 类场景规格、每类每方法三次生成；与 EmbodiedGen V2、SceneSmith 等比较几何与感知指标；等 20 小时 clean/mixed 数据做下游策略测试（§4）。
- 看板增量：直接延伸用户重视的 EmbodiedGen V2/Agentic Real2Sim 方向，价值在可执行任务生成而不仅是场景外观。
- 主要限制：部分感知质量由 VLM 评分，物理可用性需与几何测量分开解读。 部分变形物恢复仍是已知限制；完整生成器集成仍有后续工作。 未找到官方实现入口。
- 一手全文：[arXiv HTML](https://arxiv.org/html/2610.07969)。

## 与此前 Related Work 方向的直接关系

**Rollback 应优先精读。** 它明确执行保存世界模型状态、回退到关键决策点、分支尝试替代动作、将结果蒸馏为动作级监督。这与此前讨论的“回退—搜索—训练”部署契约高度接近。不过它的环境是学习型视频/状态世界模型，而非严格物理模拟器；这一区别需要保留，同时不能据此忽略其先验工作地位。

**DATAFARM 对数据生成方案尤其有启发。** 完成目标的 planner 轨迹仍可能因为关节配置、风格和时序偏离 VLA 的预训练分布而几乎无效。后续若做自动恢复数据，需要同时验证任务可行性和训练分布兼容性。

**EmbodiedSmith 值得后续追踪。** 它直接接续 EmbodiedGen V2/SceneSmith，重点是场景与任务的反复修复、物理可用性和可执行轨迹，但目前资产与部分验证尚不足以进入 90 分精选。

## 资源核验发现

- GitHub API 确认含实现：RoboJEPA、Stanford OpenWAM、DATAFARM、LoopWAM、Ropedia W0、RynnVLA-Latent、RynnWorld-Latent。
- Hugging Face API 确认模型文件存在：Ropedia W0、RynnVLA-Latent-4B、RynnWorld-Latent、OpenWAM 视频预训练模型。
- RoboJEPA 仓库列出分规模 checkpoint 和下载地址；本次没有下载大权重文件。
- Stanford OpenWAM 的策略 checkpoints 与 counterfactual dataset 仍在准备，公开视频预训练权重不等于公开全部策略权重。
- X-WBC 仓库 API 只列出 README/docs，不记作已开放方法实现。
- VioLA 官方明确标为 code coming soon。
- FACT 的项目页没有直接代码、数据和权重入口；EgoForce 数据规模不等于已开放的数据规模。
- Rollback 项目页暂未提供代码入口。

## 待下一轮全文复核

- [OpenWAM (September, different team)](https://arxiv.org/abs/2609.07398)：Official HTML unavailable; retry ar5iv/PDF before scoring.
- [Pelican-Sim 1.0](https://arxiv.org/abs/2609.12036)：Abstract reviewed; full text pending.
- [WorldContact](https://arxiv.org/abs/2609.19600)：Abstract reviewed; full text pending.
- [Magic-W0](https://arxiv.org/abs/2609.39870)：Abstract reviewed; full text pending.
- [3DROID](https://arxiv.org/abs/2610.01744)：Abstract reviewed; full text and dataset reliability review pending.
- [HuGe](https://arxiv.org/abs/2610.34186)：Abstract reviewed; full text pending.
- [RoboDoctor](https://arxiv.org/abs/2610.35604)：Abstract reviewed; full text pending; abstract itself says controlled trials are needed to isolate cross-episode experience.

另有 Physical Intelligence 在 **10 月 13 日**宣布 Pi API beta。这是产品/基础设施信号，先记入更新日志，不用产品公告代替论文评分。来源：[官方博客索引](https://www.pi.website/blog)。

## 建议阅读与整理顺序

1. 通用优先：RoboJEPA、LoopWAM、RynnVLA-Latent、Ropedia W0。
2. 对当前研究路线优先：Rollback、DATAFARM。
3. 基建补充：Stanford OpenWAM。
4. 再补 FACT、VioLA、X-WBC、RoboTwin-Phys、EmbodiedSmith，并逐一处理资源和评测范围限制。

评分分项与证据见同目录 candidates.json。当前只保存候选审阅结果；没有创建正式内容、修改网页索引、push 或部署。
