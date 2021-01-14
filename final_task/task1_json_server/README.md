# 题目一说明文档

###　题目内容

使用`json-server`提供后端api实现学生信息的简单增删改查功能。

### 项目结构

> + final_task（期末作业总目录，包含题目一和题目一和题目二的代码）
>
>   > + task1_json_server（题目一所在目录）
>   >
>   >   > + index.html（网站首页文件，用于导航到各个api所在页面，并展示了部分项目说明）
>   >   > + add.html（实现了信息增添用户接口的页面文件）
>   >   > + update.html（实现了信息修改用户接口的页面文件）
>   >   > + query.html（实现了信息查询用户接口的页面文件）
>   >   > + delete.html（实现了信息删除用户接口的页面文件）
>   >   > + db.json（用于构建json-server的json数据文件）
>   >
>   > + task2_node_express_mysql（题目二所在目录）

### 如何启动该项目？

1. 在本地使用 `npm` 安装 `json-server`，控制台输入命令 <code>npm install json-server -g</code>；
2. 进入当前目录为 `task1_json_server`，控制台输入命令 <code>json-server --watch db.json</code> 启动后端服务；
3. 第二步完成服务启动后，即可通过api进行交互，具体使用方法见下面部分；
4. 使用`VSCode`打开该项目所在目录，进入`index.html`文件，使用<kbd>Alt</kbd> + <kbd>L</kbd> + <kbd>O</kbd>快捷键启动前端服务器（默认使用本地服务器5500端口），若没有反应，请先在`VSCode`中安装`live server`插件后再启动，安装方法略。

###　关于后端api

后端使用`json-server`搭建虚拟服务器，并存有一批学生信息供前端进行服务请求，支持添加、修改、查询和删除四种服务，具体如下：

+ 学生数据结构

  > 学生假数据使用`json`存储，包含四个字段：
  >
  > <code>id:</code> 学生学号；
  >
  > <code>name:</code> 学生姓名；
  >
  > <code>age:</code> 学生年龄；
  >
  > <code>classId:</code> 学生所在班；

+ 添加学生信息接口

  | 作用描述 | 使用 <code>$.ajax</code> 将封装为`json`的表单数据传送给后端，并添加到后端数据集中。 |
  | :------- | :----------------------------------------------------------- |
  | URL      | <code>http://localhost:3000/students</code>                  |
  | 请求方式 | <code>POST</code>                                            |
  | 传入参数 | <code>{ "id": "学生学号", "name": "学生姓名", "age": "学生年龄", "classId": "学生所在班号" }</code> |
  | 返回数据 | \                                                            |

+ 修改学生信息接口

  | 作用描述 | 使用 <code>axios</code> 将封装为`json`的表单数据传送给后端，并通过`url`中附带的`id`参数匹配后端数据并进行修改。 |
  | :------- | :----------------------------------------------------------- |
  | URL      | <code>http://localhost:3000/students/:id</code>              |
  | 请求方式 | <code>PUT</code>                                             |
  | 传入参数 | <code>{ "id": "学生学号", "name": "学生姓名", "age": "学生年龄", "classId": "学生所在班号" }</code> |
  | 返回数据 | \                                                            |

+ 查询学生信息接口

  | 作用描述 | 使用 <code>$.ajax</code> 将封装为`json`的表单数据传送给后端，并通过`url`中附带的`id`参数查询匹配项。 |
  | :------- | :----------------------------------------------------------- |
  | URL      | <code>http://localhost:3000/students/:id</code>              |
  | 请求方式 | <code>GET</code>                                             |
  | 传入参数 | <code>{ "id": "学生学号" }</code>                            |
  | 返回数据 | <code>{ "id": "学生学号", "name": "学生姓名", "age": "学生年龄", "classId": "学生所在班号" }</code> |

+ 删除学生信息接口

  | 作用描述 | 使用 <code>axios</code> 将id附加到`url`上，并从后端数据集中删除匹配项。 |
  | :------- | :----------------------------------------------------------- |
  | URL      | <code>http://localhost:3000/students/:id</code>              |
  | 请求方式 | <code>DELETE</code>                                          |
  | 传入参数 | <code>id（非json）</code>                                    |
  | 返回数据 | \                                                            |

+ 现有数据

  ``` json
  [
    {
      "id": 1,
      "name": "ZHANG",
      "age": 18,
      "classId": 1
    },
    {
      "id": 2,
      "name": "WANG",
      "age": 19,
      "classId": 2
    },
    {
      "id": 3,
      "name": "Lee",
      "age": 20,
      "classId": 1
    },
    {
      "id": "4",
      "name": "Ming",
      "age": "16",
      "classId": "2"
    },
    {
      "id": "5",
      "name": "Sun",
      "age": "18",
      "classId": "1"
    },
    {
      "id": "6",
      "name": "Qian",
      "age": "17",
      "classId": "1"
    }
  ]
  ```

  

