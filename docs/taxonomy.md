# 受控标签词表 v0.1

标签是多维度的，一篇论文可以同时属于多个板块和主题。所有正式标签必须来自以下词表。

## 板块 sections

```text
algorithms
data
simulators
infrastructure
surveys
```

## 算法主题 topics

```text
vla
world-model
behavior-cloning
reinforcement-learning
imitation-learning
diffusion-policy
foundation-model
representation-learning
planning
control
sim-to-real
```

WAM 暂不直接固化。试运行中可使用 `world-model`，并通过 `suggested_new_tags` 记录是否有必要新增 `world-action-model`。

## 任务 tasks

```text
manipulation
navigation
locomotion
mobile-manipulation
humanoid-control
generalist-control
```

## 平台 platforms

```text
robot-arm
mobile-robot
humanoid
quadruped
dexterous-hand
multi-robot
platform-agnostic
```

## 模态 modalities

```text
vision
language
proprioception
action
depth
point-cloud
tactile
audio
```

## 实验环境 environments

```text
real-world
simulation
mixed
```

只包含真实实验时使用 `real-world`，只包含仿真实验时使用 `simulation`，两者均有时使用 `mixed`。

## 发布资产 assets

```text
code
dataset
model-weights
simulator
benchmark
```

只有确认资源已经公开且链接可以访问时才能填写。论文中“计划开源”不算已发布资产。

## 特性 properties

```text
open-source
closed-source
real-robot-evaluation
simulation-only
large-scale-data
multi-robot
zero-shot
few-shot
```

未确认开源状态时，`open-source` 和 `closed-source` 均不填写。

## 标签维护规则

- 使用稳定的英文 slug 存储，展示层可以提供中英文名称。
- 同义词通过 alias 映射，不创建重复标签。
- 新标签必须有清晰定义、至少一个证据示例，以及不能被现有标签表达的理由。
- 试运行结束后统计标签使用次数：从未使用的标签考虑删除，频繁被建议的新标签考虑纳入。
- 机构名称单独规范化，不作为自由文本标签。
