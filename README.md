### 1. git规范和changelog

#### 1.1 良好的git commit好处

- 可以加快code review 的流程
- 可以根据git commit 的元数据生成changelog
- 可以让其它开发者知道修改的原因

#### 1.2 良好的commit

- [commitizen](https://www.npmjs.com/package/commitizen)是一个格式化commit message的工具

- [validate-commit-msg](https://www.npmjs.com/package/validate-commit-msg) 用于检查项目的 `Commit message` 是否符合格式

- [conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)可以从`git metadata`生成变更日志

- 统一团队的git commit 标准

- 可以使用 `angular` 的 `git commit` 日志作为基本规范

  - 提交的类型限制为 feat、fix、docs、style、refactor、perf、test、chore、revert等
  - 提交信息分为两部分，标题(首字母不大写，末尾不要加标点)、主体内容(描述修改内容)

- 日志提交友好的类型选择提示 使用commitize工具

- 不符合要求格式的日志拒绝提交 的保障机制

  - 需要使用`validate-commit-msg`工具

- 统一changelog文档信息生成

  - 使用`conventional-changelog-cli`工具

```js
cnpm i commitizen  validate-commit-msg conventional-changelog-cli -D
commitizen init cz-conventional-changelog --save --save-exact
git cz
```

#### 1.3 .gitignore

.gitignore

```js
node_modules
.vscode
dist
```

#### 1.4 提交的格式

```js
<type>(<scope>):<subject/>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- 代表某次提交的类型，比如是修复bug还是增加feature
- 表示作用域，比如一个页面或一个组件
- 主题 ，概述本次提交的内容
- 详细的影响内容
- 修复的bug和issue链接

| 类型     | 含义                                                 |
| :------- | :--------------------------------------------------- |
| feat     | 新增feature                                          |
| fix      | 修复bug                                              |
| docs     | 仅仅修改了文档，比如README、CHANGELOG、CONTRIBUTE等  |
| style    | 仅仅修改了空格、格式缩进、偏好等信息，不改变代码逻辑 |
| refactor | 代码重构，没有新增功能或修复bug                      |
| perf     | 优化相关，提升了性能和体验                           |
| test     | 测试用例，包括单元测试和集成测试                     |
| chore    | 改变构建流程，或者添加了依赖库和工具                 |
| revert   | 回滚到上一个版本                                     |
| ci       | CI 配置，脚本文件等更新                              |

#### 1.5 husky

- `validate-commit-msg`可以来检查我们的commit规范
- husky可以把`validate-commit-msg`作为一个`githook`来验证提交消息

```js
cnpm i husky  validate-commit-msg --save-dev
  "husky": {
    "hooks": {
      "commit-msg": "validate-commit-msg"
    }
  }
```

#### 1.6 生成CHANGELOG.md

- `conventional-changelog-cli` 默认推荐的 commit 标准是来自angular项目
- 参数`-i CHANGELOG.md`表示从 `CHANGELOG.md` 读取 `changelog`
- 参数 -s 表示读写 `CHANGELOG.md` 为同一文件
- 参数 -r 表示生成 changelog 所需要使用的 release 版本数量，默认为1，全部则是0

```js
cnpm i conventional-changelog-cli -D
"scripts": {
    "changelogs": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
}
```