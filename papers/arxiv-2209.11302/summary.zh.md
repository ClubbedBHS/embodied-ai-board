---
paper_id: arxiv-2209.11302
summary_version: "0.2"
language: zh
status: ai-draft
---

# ProgPrompt：基于大语言模型的具身机器人任务规划

> 提出程序化 Prompt 结构，将环境状态、机器人动作能力与示例程序编码为 Python 代码格式，让 LLM 直接生成可执行的机器人任务规划，并在仿真和真实机器人上验证。

## 研究问题

机器人任务规划需要大量领域知识：物体可供性（affordance）、动作逻辑顺序、任务相关性，以及环境状态反馈。此前利用 LLM 做任务规划的方法主要分为两类：一是让 LLM 对枚举的动作候选进行评分（如 SayCan），在动作空间大时计算开销高；二是让 LLM 自由生成文本再映射到动作（如 Language Models as Zero-Shot Planners），但生成的文本可能包含当前环境中不存在或不可执行的动作。这两种方法都缺少对环境状态的闭环感知。

## 核心方法

ProgPrompt 的核心思想是将任务规划问题转化为程序补全问题。作者设计了一种 Pythonic 的 Prompt 结构，包含三个关键组件：

1. **导入语句（Import Statements）**：以 Python import 的形式列出机器人可执行的所有动作原语及其参数，约束 LLM 只生成可执行的动作调用。
2. **环境对象列表（Object List）**：以 Python 列表形式提供当前场景中所有可用物体，确保生成的动作参数不会引用不存在的物体。
3. **示例任务程序（Example Programs）**：提供少量完整可执行的任务程序作为 few-shot 示例，展示任务名（函数名）到动作序列的映射关系。

此外，ProgPrompt 引入两个增强机制：(a) **注释（Comments）**：在代码中用自然语言注释拆分子任务目标，类似 chain-of-thought，辅助 LLM 推理；(b) **断言（Assertions）**：在动作前插入前置条件断言，执行时若断言失败则触发恢复动作，实现闭环状态反馈。生成的任务计划是一个 Python 函数，由解释器逐行动态执行并与环境交互。

## 主要贡献

1. 提出 ProgPrompt 这一程序化 LLM Prompt 方案，使 LLM 生成可在具身环境中直接执行的任务计划。
2. 通过消融实验系统验证了 Prompt 中各组件（注释、断言反馈、导入语句、对象列表）的贡献（Table I）。
3. 在 VirtualHome 仿真环境中达到 SOTA 成功率，并在 Franka Panda 真实机器人上验证了方法的可行性和灵活性。

## 数据与训练

ProgPrompt 本身不需要训练——它直接使用预训练的 GPT-3（davinci 等变体）和 Codex 作为 LLM 骨干进行 few-shot 推理。VirtualHome 实验使用了作者收集的 70 个家庭任务（如 "microwave salmon"、"wash the plate"），每个任务标注了从初始状态到目标状态的动作序列真值。评估使用了 10 个测试任务，每个任务运行 5 次。真实机器人实验使用了 4 个桌面操控任务（如 "put the banana in the bowl"、"sort the fruits on the plate"），并测试了加入干扰物（distractor objects）的鲁棒性。

## 实验与结果

**仿真实验（VirtualHome）**：使用 3 个不同的 VirtualHome 场景（Env-0 至 Env-2），每个场景含 115 个物体实例和 11 种动作原语。以 GPT-3 为骨干时，ProgPrompt 平均成功率为 0.34（Table I, Row 3），显著优于基线方法 Huang et al. 的 0.00（Table I, Row 8）。使用 Codex 骨干时成功率进一步提升至 0.40（Table I, Row 1）。消融实验表明：移除注释导致成功率从 0.34 降至 0.30（Table I, Row 5），移除断言反馈降至 0.28（Table I, Row 4），两者均移除降至 0.18（Table I, Row 6）。可执行率（Exec）在完整方案下达到 0.84。跨场景泛化实验中（Table III），Env-1 和 Env-2 的成功率分别达到 0.56 和 0.56，三场景平均 SR 为 0.48。

**真实机器人实验**：使用 Franka-Emika Panda 机械臂执行桌面操控任务，结合 ViLD 开放词汇检测和 Contact-GraspNet 抓取系统。在 "put the banana in the bowl" 等 4 个任务中，几乎所有任务执行成功（Table IV），可执行率 Exec=1.0。加入干扰物后仅在 sort 任务上因将罐头误认为瓶子而失败一次。

## 局限性

1. **环境特殊性**：VirtualHome 中存在环境特有限制（如坐姿下无法抓取、某些物体不可交互），ProgPrompt 未显式建模这些约束（Section V-B）。
2. **恢复策略不完整**：断言恢复模块无法覆盖所有可能的失败情况（如物体在柜子中需要先开门）（Section V-B）。
3. **动作反馈缺失**：系统不向 LLM 反馈动作是否真正成功，可能导致级联失败（Section V-B）。
4. **生成截断**：部分长任务计划因 LLM API token 限制被截断（Section V-B）。
5. **严格目标状态匹配**：评估仅与单一真值目标状态比较，对存在多种合理完成方式的任务（如 "make dinner"）评判过于严苛（Section V-B）。

## 为什么值得关注

ProgPrompt 是较早将 LLM 的代码理解能力与机器人任务规划结合的工作。它展示了用程序化 Prompt 约束 LLM 输出空间的有效性——不需要微调、不需要枚举动作空间，即可让 LLM 生成与当前环境兼容的可执行计划。该方法启发了后续一系列将 LLM 作为规划器的工作（如 Code as Policies、Voyager 等），是 Embodied AI 中 "LLM for planning" 方向的重要里程碑。

## 适合谁阅读

- 研究 LLM 与机器人结合的具身 AI 研究者
- 关注任务规划（Task Planning）与 symbolic planning 的工程师
- 对 Prompt Engineering 和 LLM 推理能力感兴趣的研究者

## 关键资源

- 论文：https://arxiv.org/abs/2209.11302
- 项目主页：https://progprompt.github.io
- 代码：未公开
- 数据：未公开
- 模型：未公开（使用 OpenAI GPT-3 / Codex API）

## 事实核验记录

- [x] 标题、作者和机构已核验
- [x] 日期和发表状态已核验
- [x] 代码与项目链接已核验
- [x] 实验平台已核验
- [x] 关键结果数字已核验（ar5iv 全文核对 Table I, II, III, IV）
- [x] 真实机器人/仿真结论已核验
- [x] ar5iv 全文核验完成（2026-07-22）
