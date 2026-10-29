# 9—10 月补扫第二批（2026-10-28）

**收录更新（2026-10-28）：用户已批准本批 10 篇可收录候选，现均生成正式 metadata.json 与中文长摘要；RoboDoctor 保留 watch，HGWM 与九月 OpenWAM 保留 defer。下文保留扫描时的判断。**

## 结果

- 本批候选 13 篇：12 篇读取官方 HTML 方法、实验和结论/局限；九月 OpenWAM 正文仍不可用。
- 10 篇达到常规/重点收录候选标准，1 篇保留观察，2 篇暂缓。
- 达到 90 分的为 RepresentNav；其代码当前仍是占位仓库。
- 本批尚未转入 papers/。此前用户确认的第一批 13 篇已经生成正式内容；网页本地索引共有 368 篇，静态构建通过。

## 候选一览

| 分数 | 工作 | 判断 |
|---:|---|---|
| 90 | [RepresentNav](https://arxiv.org/abs/2610.31762) | 让导航目标自己构建视觉表示，再在同一潜空间预测未来；覆盖多类导航、跟踪基准与两类真实机器人。 |
| 89 | [LocoManiLab](https://arxiv.org/abs/2610.30876) | 统一人形移动操作的数据、策略、控制器、任务和部署接口，为跨模型评估提供系统化基础。 |
| 88 | [Magic-W0](https://arxiv.org/abs/2609.39870) | 用当前三维几何、三维运动与未来语义组织结构化世界转移，与连续动作在多层交互。 |
| 88 | [HuGe](https://arxiv.org/abs/2610.34186) | 用人类第一视角与机器人数据的分阶段训练，把三种 VLA 架构接到共同的人形运动潜空间。 |
| 87 | [3DROID](https://arxiv.org/abs/2610.01744) | 为 DROID 的可渲染三维场景附上标定与逐场景可靠性证据，强调视觉真实感不等于机器人坐标正确。 |
| 87 | [RoboFolDeX](https://arxiv.org/abs/2609.10243) | 面向真实长程衣物操作的数据复用与统一实体评测，明确区分恢复、任务、场景、本体四条研究轴。 |
| 87 | [Ariadne](https://arxiv.org/abs/2610.08863) | 不训练完整专家轨迹分布，只从状态观测学习可行流形，并沿流形构造连接新起终点的路径。 |
| 87 | [Pelican-Sim 1.0](https://arxiv.org/abs/2609.12036) | 以统一动作向量和 URDF 动作视频结合，训练跨来源动作条件世界模型，并检验数据、评估、选择和策略改进用途。 |
| 84 | [WorldContact](https://arxiv.org/abs/2609.19600) | 用显式接触特征学习变形袋体状态动力学，以较大时间步生成数据并改善真机 VLA 适配。 |
| 81 | [SWIM](https://arxiv.org/abs/2610.36662) | 用离线动作预测学习状态各坐标的行为相关性，再用加权状态距离校准 JEPA 潜空间。 |
| 61 | [RoboDoctor](https://arxiv.org/abs/2610.35604) | 冻结策略和语言模型，借执行诊断、选择干预与外部经验记录调整控制方式；当前证据主要为历史归档分析。 |
| — | [HGWM](https://arxiv.org/abs/2610.32554) | 暂缓：方法和实现可读，但未取得可复核的逐回合基准记录，暂不做正式推荐。 |
| — | [OpenWAM (September)](https://arxiv.org/abs/2609.07398) | 暂缓：官方 HTML 返回 404，ar5iv 35 秒超时；后续需 PDF/其他正文入口读取后评分。与 Stanford 2610.07922 不同。 |

## 重点发现

**RepresentNav（90）**：用任务目标从多种视觉模型各层构建表示，再用 JEPA 预测未来表示。除了模拟导航与跟踪，还给出 40 项真机测试。同编码器与表示拼接消融有说服力；但当前代码只有 README，不能称为实现已开放。

**LocoManiLab（89）**：234 个任务、51.5 小时仿真遥操作、12 种策略与 5 类控制器，能补足看板的人形基建。代码和数据都仍标注 coming soon。三项硬件实验分别用真实示范训练，不是模拟策略零样本部署。

**Ariadne（87）**：Yaqi Xie、Guanya Shi 观察名单命中；已标记 NeurIPS 2026 接收。方法只从状态观测学习流形，构造连接新起终点的路径。仓库 API 当前只显示 README、论文和 teaser，不给开源实现加分。名单命中也不加质量分。

**3DROID（87）**：114 个 DROID 静态场景附带标定和几何可靠性度量，数据 API 确认可访问。它不是交互仿真器，也未展示下游操作成功率提升，但对 Real2Sim 资产质量控制很有价值。

## 逐篇方法、结果与局限

### RepresentNav — 90 / featured

- 团队：Peking University；University College London；DataCanvas。
- 方法：三层 Representation Residuals 从多个冻结视觉基础模型的不同深度读取特征；四个连续潜变量预测未来表示，规划头输出未来航点。
- 结果：VLNVerse fine-grained 成功率 83.80%；真机 20 项 VLN 完成 14 项、20 项跟踪完成 18 项，Uni-NaVid 分别 7/20、8/20；有同编码器比较和两阶段训练消融（Table 1、Appendix）。
- 看板信息增益：看板目前偏操作；本工作把 JEPA 与任务驱动视觉表示具体连接到导航和跟踪。
- 限制：代码仓库当前只有 README；项目页明确 code coming soon。 部分对手分数来自既有文献，观察设置不同应分组解释。 真机总共 40 测试用例，仍需更广环境验证。
- 来源：[论文 HTML](https://arxiv.org/html/2610.31762)；[项目页](https://wang-yinxi.github.io/representnav/)。

### LocoManiLab — 89 / featured

- 团队：TeleAI, China Telecom；University of Science and Technology of China；The University of Hong Kong；Zhejiang University；Shanghai Jiao Tong University；ShanghaiTech University；Gamma Robotics。
- 方法：构建 234 个原子与组合任务及 51.5 小时仿真遥操作；共享控制器比较 12 个策略，并用两种策略比较五个控制器。
- 结果：五类家庭场景；三项真实 G1 任务、三类策略，每模型每任务 10 次真机试验；平均排名相似，但个别任务排序逆转（§4，Table 6）。
- 看板信息增益：与独立人形算法不同，重点补齐数据—高层策略—低层控制器之间的可比较接口。
- 限制：代码和数据均为 coming soon，不能算已开放基建。 真实策略分别用真实示范训练，不是仿真训练策略直接零样本迁移。 真机仅三任务，不能以平均排名一致推断任意策略 sim-to-real 排名一致。
- 来源：[论文 HTML](https://arxiv.org/html/2610.30876)；[项目页](https://locomanilab.github.io/)。

### Magic-W0 — 88 / featured

- 团队：Magiclab Robotics Inc.。
- 方法：将 Current State–Transition–Future State 的几何、运动和语义表征接入动作流，双方在去噪层中交换信息；通过动作替换和连接遮蔽分析信息路径。
- 结果：五项真实任务每项每方法 100 次，Magic-W0 平均 94.6%，π0.5 为 91.8%；RoboDojo 正文版本总分 36.75，但摘要入口仍有 27.10 的旧值（§6）。
- 看板信息增益：相较 TacPAC 的触觉反馈与 Rynn 潜动作，明确研究三维结构化世界信息如何参与动作生成。
- 限制：摘要入口、正文和项目页的 RoboDojo 汇总值不一致，需要发布前统一版本。 真机收益平均为 2.8 个百分点，不应只强调最高单项或最高排名。 公开代码不等同于全部预训练数据和模型开放。
- 来源：[论文 HTML](https://arxiv.org/html/2609.39870)；[项目页](https://embodied.magiclab.top/works/wam/magic-w0/index.html)；[代码](https://github.com/MagiclabRobotics/Magic-W0)。

### HuGe — 88 / featured

- 团队：Westlake University；Zhejiang University；Shanghai Innovation Institute；Hebei University of Technology；Beijing University of Posts and Telecommunications；Southwest University of Finance and Economics；University of Science and Technology of China；University of Sussex；Xi’an Jiaotong University；Shanghai Jiao Tong University。
- 方法：冻结 SONIC 全身控制器；模拟回放补人类数据的伪本体状态，经历第一视角预训练、人形适配、任务微调；真实微调用重渲染适配手臂外观。
- 结果：超过 2000 小时预训练经验；七项 HumanoidArena 任务每任务 60 回合；HuGe-GR00T / Pi 平均 66.67% / 65.00%；真机主要 pick-and-drop 实验（§4）。
- 看板信息增益：为 VioLA 的人体运动迁移路线提供独立训练方案和骨干比较；公开实现包含训练配置。
- 限制：与 VioLA 一样需要共享运动接口，但 HuGe 真实结果包含任务微调，不能直接对比 VioLA 无任务微调分数。 真实任务覆盖有限。 项目页作者和部分机构比当前 HTML 更完整，正式制作时需按作者版本核对。
- 来源：[论文 HTML](https://arxiv.org/html/2610.34186)；[项目页](https://yliu-cs.github.io/HuGe)；[代码](https://github.com/yliu-cs/HuGe)。

### 3DROID — 87 / featured

- 团队：Seoul National University；KAIST。
- 方法：在 pose-conditioned 3DGS 前验证外参，分别以机器人几何投影、覆盖率和经典立体深度一致性评估重建；不把 stereo 当作几何真值。
- 结果：发布 114 个场景；110 个可评估场景中 YoNoSplat / ZipSplat PSNR 联合改善约 3.24 / 3.52 dB，但该比较同时改变外参与 pose conditioning（Tables 2–4）。
- 看板信息增益：对 GSWorld/Real2Sim 路线补充关键质量控制：渲染外观、真实尺度和机器人参考几何应分别检验。
- 限制：只有静态快照，不是时序交互模拟器。 不声称完整场景几何真值或下游操作成功率改善。 几何评估只覆盖可获得机器人表面或 stereo 支持的区域。
- 来源：[论文 HTML](https://arxiv.org/html/2610.01744)；[数据](https://huggingface.co/datasets/wonguen/3DROID)。

### RoboFolDeX — 87 / featured

- 团队：Fudan University；AI Research Center, Midea Group (Shanghai) Co., Ltd.；Carnegie Mellon University。
- 方法：以标准化任务、留出衣物、受控初态和统一执行协议评估外部策略；同时比较多任务/专用训练、RTC 和 DAgger 恢复数据。
- 结果：2000+ 小时、20+ 任务、10+ 本体；主要衣物类别每类 30 次真机评测；RTC 多任务平均成功率 80.75%，标准多任务 72.50%，专用 RTC 为 82.50%（Table 2）。
- 看板信息增益：将先前 RaC/LoopWAM 的恢复数据问题放入真实变形物任务中，且把成功、质量和时间分别度量。
- 限制：全文对外部平台地址和匿名评审隐藏地址的描述并存，需要按最终版本确认资源。 完整训练数据的直接下载入口尚未验证。 四条 track 是初步协议与结果，不是穷尽方法比较。
- 来源：[论文 HTML](https://arxiv.org/html/2609.10243)；[项目页](https://ai.midea.com/#/fold-challenge)。

### Ariadne — 87 / featured

- 团队：Carnegie Mellon University；National University of Singapore；DEVCOM Army Research Laboratory；Harvard University。
- 方法：从状态扩散模型 score 的 Jacobian 获取多维法向信息，用流形投影与端点约束设计 ODE 路径构造。
- 结果：Maze2D 与机器人运动规划任务验证未见起终点；高维双臂与 Diffuser 等轨迹监督方法和经典规划器比较；NeurIPS 2026 接收（Experiments）。
- 看板信息增益：Yaqi Xie / Guanya Shi 观察名单命中；与 DATAFARM 生成示范不同，它研究如何在没有轨迹监督时做规划。
- 限制：需要足够的可行状态覆盖；状态分布本身不是动态可执行性保证。 离散积分、score 估计和非连通流形仍可能造成路径偏离。 论文链接仓库当前只有 README、论文和 teaser，没有实现。
- 来源：[论文 HTML](https://arxiv.org/html/2610.08863)。

### Pelican-Sim 1.0 — 87 / featured

- 团队：Beijing Innovation Center of Humanoid Robotics (X-Humanoid), WFM System Group。
- 方法：28 维数值动作与相机对齐的动作渲染双路注入稀疏 MoE 视频模型；因果适配和四步蒸馏支持高频想象。
- 结果：约 1M 轨迹、8000 小时交互；同数据重训预测基线；五项 RoboTwin 任务三种子策略改善达 75.4%，初始 SFT 62.7%（Table 14）；五 checkpoint 评价是较窄设置。
- 看板信息增益：补齐世界模型作为训练环境和评估代理的实证；需要把模型、judge 和优化算法的贡献分开解释。
- 限制：项目页实际作者仓库只有 LICENSE/README；论文中的组织仓库为 404。 权重 coming soon。 摘要 70%→93% 与正文 Table 8 的 70%→72% 对应设置不一致，不能混用。 关键下游应用依赖另行微调的 VLM evaluator。
- 来源：[论文 HTML](https://arxiv.org/html/2609.12036)；[项目页](https://zoushilong1024.github.io/Pelican-Sim1.0/)。

### WorldContact — 84 / featured

- 团队：University of British Columbia；Westlake University；Style3D Research。
- 方法：contact-centric 顶点 tokenizer 编码局部几何与接触，结合全局上下文预测形变；再渲染状态轨迹构造策略示范。
- 结果：16 项购物袋仿真任务；H100 状态 rollout 比源模拟器快 10 倍（不含渲染/I/O）；25 条源轨迹扩到 150 条，单项真机提袋从 13/20 到 19/20（§IV）。
- 看板信息增益：与纯视频想象不同，提供接触感知状态空间世界模型，适合检验变形物模拟数据的可靠性。
- 限制：真实策略证据仅一项提袋任务、每设置 20 次。 10 倍加速只计算状态预测。 对象材料与模拟器参数相对固定，跨材料泛化有限。 未找到官方代码、模型或数据。
- 来源：[论文 HTML](https://arxiv.org/html/2609.19600)。

### SWIM — 81 / featured

- 团队：Boston University；Unity Technologies。
- 方法：门控逆动力学模型从当前状态和未来位移预测动作，所得相对权重进入 SCALE 状态距离；推理时仍只用图像潜规划，不增加状态输入。
- 结果：五项 OGBench 仿真任务、CEM 与 iCEM；较统一状态权重增加约 0.9–1.0 个百分点，报告 p<0.05；结构化干扰状态消融支持抑制无关维度（Experiments）。
- 看板信息增益：与 RoboJEPA 的 scaling 互补：不仅要增加模型大小，也要检验潜空间规划距离是否反映任务相关变化。
- 限制：增益较小，不能表述为显著跨越能力边界。 依赖训练时提供的状态变量与离线行为覆盖。 只有仿真，通过 SCALE 展示，尚无真机和其他目标验证。 没有发现官方实现。
- 来源：[论文 HTML](https://arxiv.org/html/2610.36662)。

### RoboDoctor — 61 / watch

- 团队：Tsinghua University；New York University；Northwestern University。
- 方法：控制器路由、选择性替换动作、局部物理方法修订三个层次相连；记录决策理由、尝试、结果与适用条件。
- 结果：54 项 RoboDojo-Sim 归档条目，精选结果平均分 57.10、原生成功率 49.44%；模型版本、预算和覆盖不一致，长程维度下降（§4，Tables 1–2）。
- 看板信息增益：保留为执行期经验机制线索，但按看板规则不生成正式推荐长摘要。
- 限制：回顾性结果选择和不等预算不能隔离经验机制的因果收益。 不能据此声称超过公开榜单方法或证明跨 episode 自我改进。 无对应当前论文的官方实现。
- 来源：[论文 HTML](https://arxiv.org/html/2610.35604)。

## 保留观察与暂缓理由

- **RoboDoctor：61 / watch。** 回顾性筛选、版本/预算不匹配的 54 项任务归档，可以说明执行修订案例，不能隔离跨 episode 经验的因果收益。不要用其总分直接宣称超过榜单方法，也不生成正式推荐长摘要。
- **HGWM：defer。** 有方法与实现，但缺少 episode-level rerun 记录；修复实现通过离线测试不能替代重跑基准。项目页与 arXiv 元数据也未同步。
- **九月 OpenWAM：defer。** 官方 HTML 返回 404、ar5iv 超时；未读到正文，不评分。它与已经正式收录的 Stanford OpenWAM 是不同论文。

## 资产扫描再次暴露的问题

1. Pelican-Sim 论文写的组织仓库为 404；项目页作者仓库可访问，但只有 LICENSE 和极短 README。保留两条证据，而非简单写“无 GitHub”。
2. RepresentNav、Ariadne 都有公开仓库，但没有方法实现，不能记入 labels.assets.code。
3. LocoManiLab 的 code/dataset coming soon 不计已开放资源。
4. 3DROID 的 Hugging Face 数据 API 返回文件清单，包含 manifest、pipeline、evaluation 和许可证。
5. Magic-W0、HuGe 和 HGWM 的 API 均确认 src/config/scripts 等实现目录存在。
6. Magic-W0 的 arXiv 摘要入口与正文 RoboDojo 分数不同；Pelican-Sim 摘要和正文不同实验的数字也不能混合。正式内容生产前需指定版本及表格。

## 补扫进度

两轮累计全文重点复核 **25 篇**：第一轮 13 篇已获批准收录；第二轮 12 篇，其中 10 篇为可收录候选、1 篇观察、1 篇证据暂缓。另有九月 OpenWAM 尚未读取全文。

这仍不代表两个月全部 backfill 完成。下一轮继续检查：HIL-UMI、SeeQ、Whole-Body UMI、ACCRUE、Embodied Playground、RoboCasa-Shift、OpenJaws 等，优先补齐非桌面操作和评测/数据板块。所有下一轮线索仍需去重、全文和资产核验后才能评分。
