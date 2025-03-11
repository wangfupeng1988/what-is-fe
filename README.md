# What is FE 前端 & 全栈 知识体系

作者：双越老师（[博客](https://juejin.cn/user/1714893868765373)），前百度、滴滴自身前端工程师，wangEditor 作者，PMP，慕课网金牌讲师，博客总流量 500w ，代表作品：

- [wangEditor](https://www.wangeditor.com/) Web 富文本编辑器
- [划水 AI](https://www.huashuiai.com/) Node 全栈 AIGC 知识库平台，AI 智能写作，多人协同编辑，复杂项目真实上线
- [前端面试派](https://www.mianshipai.com/) 系统专业的前端面试导航，大厂面试流程，多人共建，开源免费

## 计算机基础

本科或考研计算机专业的专业课。其中数据结构和算法下文单独写。

### 计算机组成原理

主要内容

- **冯诺依曼结构 Von Neumann Architecture** 一种计算机体系结构，它将存储程序、数据和指令都存放在同一内存中，通过中央处理器依次读取指令并执行，从而实现计算机的基本操作。
- **二进制 Binary** 一种数值表示方式，使用 0 和 1 两个数字，通过不同的组合表示各种数值和信息，是计算机内部数据存储和处理的基本方式。
- **中央处理器 CPU** 计算机的核心部件，负责执行指令和控制数据流。包含算术逻辑单元（ALU）、控制单元（CU）、寄存器等部分。
- **指令集架构 ISA** 指令集架构定义了计算机能够理解和执行的指令集合，包括指令格式、操作码、寻址模式等。
- **内存 Memory** 存储程序和数据，主要包括主存储器（RAM）和外部存储（硬盘、SSD）等，存储层次结构影响计算机的性能
- **缓存 Cache** 高速存储器，用于存储常用数据，以减少 CPU 对主存的访问延迟，提高处理效率
- **总线 Bus** 计算机内部用于数据传输的通道，分为数据总线、地址总线和控制总线，用于连接 CPU、内存和外部设备。
- **输入输出 I/O** 系统负责计算机与外部设备之间的数据交换，通常涉及 I/O 控制器、驱动程序和数据传输机制。

计算机组成原理帮助我们掌握计算机硬件的基本工作原理，为后续的操作系统、计算机网络等高级课程奠定基础。

### 操作系统

操作系统管理计算机的所有资源，进程控制，内存分配等。重要内容如下：

- **进程 Process** 正在执行的程序的实例，包含程序代码、数据、堆栈等执行状态。
- **线程 Thread** 线程是进程中的基本执行单元，同一个进程的多个线程共享进程的资源，但每个线程有自己的执行栈。
- **调度 Scheduling** 是操作系统管理多个进程或线程执行顺序的过程，常见的调度算法有先来先服务、时间片轮转、优先级调度等。
- **内存管理 Memory Management** 负责分配和回收内存资源，常用技术包括分页、分段和虚拟内存。
- **虚拟内存 Virtual Memory** 一种扩展内存容量的技术，通过将部分内存数据交换到磁盘，使程序能使用比物理内存更大的地址空间。
- **文件系统 File System** 用于管理存储设备上的文件，包括文件的创建、读取、删除及存储结构，如 FAT、NTFS、EXT 等
- **输入输出管理 I/O** 负责计算机与外部设备之间的数据传输，涉及设备驱动、缓存管理、中断处理等技术。

操作系统的核心概念（内存、进程、线程、文件等）对于前端开发都非常重要，例如 JS 是单线程的。深入理解基础概念才能让你成为优秀程序员，否则只能浮于表面开发 CRUD 。

### 编译原理

编译原理，主要讲解一个编译器如何设计和开发。

- **词法分析 lexical Analysis** 将源代码分解为基本的语法单元（词法单元，Token），如关键字、标识符、运算符等。
- **语法分析 Syntax Analysis** 将词法分析的输出（Token 流）根据语言的语法规则构建成语法树或抽象语法树（AST）。
- **抽象语法树 AST** 是对程序结构的抽象表示，去除了具体的语法细节，保留了程序的逻辑结构。
- **语义分析 Semantic Analysis** 检查程序的语义是否符合语言的规则，如类型检查、变量是否声明等。
- **中间代码 Intermediate Code** 是编译过程中的一种中间表示，它介于源代码和目标代码之间，便于优化和代码生成。
- **优化 Optimization** 是对中间代码或目标代码进行改进，以提高程序的运行效率或减少资源消耗，常见的有死代码消除、循环优化等。
- **代码生成 Code Generation** 将中间代码转换为目标代码（机器代码或汇编代码），是编译过程的最后阶段。

前端常见的编译器有 babel SWC vue-compiler 等，无论用什么语言，用 JS 还是 Rust，都是按照编译原理的过程开发的。

### 汇编语言

汇编语言是接近机器语言的低级编程语言，使用助记符表示机器指令，直接控制计算机硬件。

- **指令集 Intruction Set** 每种处理器都拥有一组特定的指令集，定义了处理器能执行的基本操作，如数据传输、算术运算等。
- **助记符 Mnemonic** 助记符是用来代表机器指令的符号，如 `MOV`（数据传输）、`ADD`（加法）等，简化了编程工作。
- **寄存器 Register** 寄存器是 CPU 内部的高速存储器，用于存储程序执行过程中临时数据或计算结果。
- **机器码 Machine Code** 机器码是计算机能够直接执行的二进制指令，每条汇编指令都对应一条机器码。
- **内存寻址 Memory Addressing** 内存寻址是指访问计算机内存中数据的位置，汇编语言中常用的寻址模式有直接寻址、间接寻址、基址寻址等。
- **堆栈模型 Stack and Heap** 一种数据结构模型，采用后进先出（LIFO）原则，数据项按顺序压入堆栈并从堆栈中弹出，用于存储临时数据、函数调用信息等。

前端开发不会用到，但学习它的指令集和堆栈模型，有助于我们深入理解编程语言的执行过程。

### 计算机网络

计算机网络讲解计算机之间的通讯原理和技术，有很多前端开发常见的概念。主要内容

- **OSI 模型 OSI Model** 开放系统互联模型，将计算机网络通信分为七层，分别是物理层、数据链路层、网络层、传输层、会话层、表示层和应用层。
- **TCP/IP 协议 TCP/IP Protocol** TCP/IP 协议是互联网的基础协议，主要包括传输控制协议（TCP）和网际协议（IP），定义了数据传输和路由机制。
- **IP 地址 IP Address** IP 地址是计算机网络中用于标识设备的唯一地址，分为 IPv4 和 IPv6 两种格式。
- **路由 Routing** 路由是数据包在网络中从源设备传输到目的设备的过程，涉及路由协议和路由算法。
- **域名 Domain** 互联网中用于标识和定位网站的文字地址，通常由字母、数字和符号组成，并与 IP 地址一一对应，便于用户访问网站。
- **DNS Domain Name System** 域名系统将域名，如 `www.example.com` 转换为 IP 地址，使用户可以通过易记的域名访问网站。
- **UDP User Datagram Protocol** 用户数据报协议是一种无连接的传输层协议，适用于对速度要求高而对可靠性要求低的应用。
- **TCP Transmission Control Protocol** 传输控制协议是一种面向连接的协议，提供可靠的数据传输，保证数据包按顺序到达并且无误。TCP 连接的“三次握手 四次挥手”是面试常考内容。
- **端口号 Port Number** 端口号是用于区分同一 IP 地址上不同服务或应用程序的标识符，通常由操作系统分配。
- **HTTP Hypertext Transfer Protocol** 超文本传输协议是用于客户端与服务器之间传输网页数据的协议，基于请求-响应模式。下文会再展开讲解。
- **FTP File Transfer Protocol** 文件传输协议用于在网络上进行文件传输，支持上传和下载文件。
- **CDN（内容分发网络）** 是通过在全球多个地点部署缓存服务器，将网站或应用的静态资源（如图片、视频、JS 文件等）分发到离用户更近的服务器，以提高访问速度和减少延迟。
- **边缘计算 Edge Compute** 在离数据源或用户更近的网络边缘设备上进行数据处理和分析，减少数据传输延迟，提高实时响应能力。现在很多云服务商 [Vercel](https://vercel.com/) 和 [Deno](https://deno.com/deploy) 都在推行 Edge 计算。

### 编码

编码主要讲解信息的表示、转换和传输，即我们所见的任何信息在计算机内部是如何表示的。例如

- **ASCII 编码** 是一种字符编码标准，用于表示英文字符、数字、标点符号以及一些控制字符。它使用 7 位二进制数（即 0 到 127 之间的整数）来表示各种字符，其中每个字符对应一个唯一的数字编码。例如
  - 字符 `A` 对应的 ASCII 编码是 `65`（二进制表示为 `01000001`）
  - 字符 `a` 是 `97`（二进制 `01100001`）
- **Unicode 编码** 是一个字符编码标准，用于统一表示世界上几乎所有的文字和符号。它为每个字符分配一个唯一的数字标识（称为**码点**），并支持多种语言、符号以及其他字符集，包括汉字、拉丁字母、数学符号、表情符号等。Unicode 包含了超过 137,000 个字符，覆盖了几乎所有的书写系统。Unicode 的设计目的是让全球的字符集标准统一，从而解决多种字符编码的兼容性问题。
- **UTF-8** Unicode 的一种编码方式，使用 1 到 4 个字节来表示一个字符，是目前最流行的 Unicode 实现，兼容 ASCII。
- **UTF-16** Unicode 的一种编码方式，使用 2 或 4 个字节来表示一个字符，适用于东亚语言。
- **GBK 编码** 是中国国家标准对简体和繁体中文字符集的一种扩展编码，继承了 GB2312 编码，并加入了更多的字符，广泛用于中文环境中的计算机系统、文本文件以及网络传输。随着 Unicode 的普及，GBK 逐渐被 Unicode 编码（如 UTF-8、UTF-16）所替代，但在一些旧系统和遗留应用中，GBK 编码仍然被使用。

## 数据结构和算法

### 常见数据结构

- **数组 Array** 数组是一种数据结构，用于存储具有相同数据类型的元素，元素在内存中是连续存储的。
- **链表 Linked List** 链表是一种线性数据结构，其中每个元素（节点）包含数据和指向下一个节点的指针。
- **栈 Stack** 栈是一种后进先出（LIFO）的数据结构，元素只能在一端进行插入和删除操作。
- **队列 Queue** 队列是一种先进先出（FIFO）的数据结构，元素从队列的一端插入，从另一端删除。
- **哈希表 Hash Table** 哈希表是一种通过哈希函数将键映射到对应值的查找结构，具有快速的插入、删除和查找操作。
- **树 Tree** 树是一种分层的数据结构，由节点组成，其中每个节点有一个父节点和多个子节点。
- **二叉树 Binary Tree** 二叉树是一种树形结构，每个节点最多有两个子节点，分别是左子节点和右子节点。
- **平衡二叉树 AVL Tree** 平衡二叉树是一种自平衡的二叉搜索树，保证左右子树的高度差不超过 `1`，从而保持操作的时间复杂度为`O(logn)`。
- **堆 Heap** 堆是一种特殊的完全二叉树，满足堆的性质（如最大堆或最小堆），广泛用于优先队列实现。
- **图 Grahp** 图是由节点和边组成的数据结构，可以表示一对多的关系，分为有向图和无向图。

### 常见算法

- **查找算法 Searching Algorithms** 查找算法用于在数据结构中查找特定元素，常见的查找算法包括线性查找、二分查找等。
- **排序算法 Sorting Algorithms** 排序算法用于将数据元素按某种顺序排列，常见的排序算法包括冒泡排序、快速排序、归并排序等。
- **深度优先搜索 DFS** 深度优先搜索是一种遍历图或树的算法，优先访问每个节点的子节点，直到访问到最深层才回溯。
- **广度优先搜索 BFS** 广度优先搜索是一种遍历图或树的算法，优先访问每一层的节点，再逐层向下扩展。
- **分治法 Divide and Conquer** 是一种将问题分解为多个子问题并递归解决的算法设计方法，常见于归并排序、快速排序等算法。
- **贪心算法 Greedy Algorithm** 是一种通过局部最优解推导全局最优解的算法策略，常见于最短路径、背包问题等。
- **回溯法 Backtracking** 是一种系统地寻找所有可能解的算法，通过递归逐步构造解并回退，以找到正确的解。
- **动态规划 Dynamic Programming** 是一种优化算法，用于解决具有重叠子问题的最优子结构问题，常见于求解最短路径、背包问题等。
- **最短路径算法 Shortest Path Algorithm** 最短路径算法用于在图中找到从一个节点到另一个节点的最短路径，常见的算法有 Dijkstra 算法、Bellman-Ford 算法等。
- **KMP 算法** 是一种用于字符串匹配的高效算法，通过预处理模式串来提高匹配效率，避免重复匹配。将时间复杂度由 `O(m*n)` 缩短为 `O(m+n)`。
- **双指针 Two Pointer** 是一种通过使用两个指针在数据结构（如数组或链表）上进行遍历来解决问题的算法技巧，通常用于查找、排序或优化操作，能够有效减少时间复杂度。

### 算法复杂度

- **时间复杂度 Time Complexity** 是衡量算法执行时间随输入规模变化的增长速度的指标，通常用大 O 符号表示，用来评估算法在最坏情况下的性能表现。
- **空间复杂度 Space Complexity** 是衡量算法在执行过程中所需内存空间随输入规模变化的增长速度，通常用大 O 符号表示，反映了算法对内存资源的需求。
- `O(1)` 无循环
- `O(n)` 一层循环
- `O(logn)` 分治
- `O(n*logn)` 一层循环 + 分治
- `O(n^2)` 两层嵌套循环

## 编程模式

### OOP 面向对象编程

面向对象编程是现代编程开发最重要的编程模式，常见的现代编程语言都支持。

- **类 Class** 用于定义对象的蓝图或模板，包含对象的属性和方法。
- **对象 Object** 类的实例，通过类创建，具有类定义的属性和方法。
- **继承 Inheritance** 通过继承，一个类可以继承另一个类的属性和方法，从而实现代码重用和扩展。
- **封装 Encapsulation** 将数据和操作数据的方法封装在一个类中，对外提供接口而隐藏实现细节，提高代码的安全性和可维护性。
- **多态 Polymorphism** 允许不同类的对象以相同的接口调用，从而实现不同的行为表现。
- **抽象 Abstraction** 是将复杂的现实世界问题简化为重要的特征，隐藏不必要的细节，提供简洁的接口。
- **方法 Mothod** 类中的函数，定义了对象能够执行的操作或行为。
- **属性 Attribute** 类的成员变量，用于存储对象的状态信息。
- **构造函数 Constructor** 用于在创建对象时初始化对象的特殊方法。
- **接口 Interface** 定义了类必须实现的方法的集合，用于提供不同类之间的协议或约定。

### 设计模式

SOLID 5 大设计原则（至少要能深刻理解前两个原则）

- **单一职责原则** 每个类应该只有一个职责，意味着一个类应该只有一个原因去改变。类应专注于一个功能，避免承担过多责任。
- **开放封闭原则** 软件实体（类、模块、函数等）应该对扩展开放，对修改封闭。即，允许在不修改现有代码的情况下，通过增加新代码来扩展功能。
- **里氏替换原则** 子类对象应该能够替换父类对象，并且程序的行为应该保持一致。换句话说，继承关系应该保证子类能够正确地替代父类。
- **接口隔离原则** 不应该强迫客户依赖于他们不需要的接口。一个类不应该实现它不使用的接口方法，而是将接口划分为更小、更专注的接口。
- **依赖倒置原则** 高层模块不应该依赖低层模块，二者应该依赖抽象；抽象不应该依赖于细节，细节应该依赖于抽象。这样可以减少模块之间的耦合度，提高系统的灵活性和可维护性。

传统设计模式有 23 个，前端最常见的有如下几个：

- **工厂模式** 封装实例的创建过程，解放 `new Class()` Vue React 内部都在用。
- **单例模式** 全局只允许有一个实例，多则出错。用 TS 语法实现更优雅。
- **观察者模式** 前端（及其他 UI 编程）最常用的设计模式，工作必用，面试必考。
- **迭代器模式** 遍历数据不仅仅是 `for` 和 `forEach` ，还有更高级的 Iterator ，JS 早已支持了。
- **装饰器模式** Decorator 现已是 JS 的标准语法，装饰器正在前端普及开来。
- **原型模式** 原型和原型链是 JS 必备的基础知识，还扩展了 JS 对象属性描述符。
- **代理模式** 编程处处有代理，无论开发环境还是线上环境。Vue3 也用 `Proxy` 实现数据响应式。

### FP 函数式编程

随着 React 的发展，函数式编程在前端开发被广泛使用，主要内容是：

- **纯函数 Pure Function** 指的是不依赖于外部状态且不修改外部状态的函数，对于相同的输入总是返回相同的输出。
- **不可变性 Immutability** 数据一旦创建后不可修改，任何变更都会生成新的数据。
- **副作用 Side Effect** 函数外部的状态改变，如修改全局变量、I/O 操作等，函数式编程尽量避免副作用，以保持函数的纯粹性。
- **高阶函数 Higher-Order Function** 可以接受一个或多个函数作为输入参数，或者返回一个函数的函数。
- **函数组合 Function Composition** 将多个小函数组合成一个新的函数，使得每个函数的输出作为下一个函数的输入
- **函数柯里化 Function Currying** 将一个多参数函数转化为一系列单参数函数的技术。将一个接收多个参数的函数，转化为每次只接收一个参数的函数，并返回接收下一个参数的函数，直到所有参数都被提供完毕。
- **惰性求值 Lazy Evaluation** 在需要结果时才计算，避免不必要的计算，提升效率。
- **递归 Recursion** 函数直接或间接调用自身，常用于替代迭代过程。PS. 递归太多可能会发生 stack overflow 栈溢出，或“爆栈”，常见的解决方式是尾递归，即递归放在函数最后，编译器则会优化这一操作。
- **声明式编程 Declarative Programming** 即描述“做什么”而不是“怎么做”，如 React 只需要描述组件的 UI 应该是什么样的，而不需要直接操作 DOM。

### AOP 面向切片编程

AOP 最广泛的应用是 Java Spring 框架。在前端最常见的是 Nestjs 框架，因为它就是参考 Spring 设计的。

### 软件层级设计

- **MVC** 它将应用程序分为三个主要部分：模型（Model）处理数据和逻辑，视图（View）显示用户界面，控制器（Controller）处理用户输入并更新模型和视图。
- **MVP** 一种变种的设计模式，其中模型（Model）处理数据，视图（View）负责显示界面，演示者（Presenter）作为中介，接收用户输入并更新视图和模型。
- **MVVM** 是一种设计模式，它将模型（Model）用于数据和业务逻辑，视图（View）用于显示用户界面，视图模型（ViewModel）通过数据绑定将模型数据转化为视图显示，通常在现代前端框架中使用。Vue 就是典型的 MVVM 设计方式。

## 前端基础

### HTML

- **Head 和 Meta** title charset link script style keyword description author 等
- **基础标签** div h1 h2 h3 p img ul ol li table 等
- **表单** form input button select 等
- **媒体** video audio 等
- **2D 3D** SVG Canvas 等

### CSS

- **选择器** 标签 class id 属性等
- **图文样式** 字号 行高 颜色等
- **布局**
  - inline block inline-block
  - 盒子模型
  - margin 相关：纵向合并，负 margin
  - flex 布局
  - grid 布局
  - float 布局
  - BFC
- **定位**
  - relative
  - absolute
  - fixed
  - 定位上下文
- **响应式** viewport rem vw vh
- **渐变和动画** transition animation
- **模块化**
  - css module
  - css-in-js
  - BEM
- **第三方库**
  - NormalizeCSS ResetCSS
  - PostCSS
  - AnimateCSS HoverCSS
  - TailwindCSS BootStrap
  - Sass Less Stylus
  - caniuse.com 检测浏览器兼容性

### JS 和 ES

- **变量和类型**
  - let const
  - undefined string number boolean object functioin symbol bigint
- **字符串**
- **数组**
- **对象**
- **函数**
- **class** 原型，原型链，继承
- **作用域** 作用链，自由变量，闭包
- **异步** Promise Async/await 微任务/宏任务 EventLoop
- **Map 和 Set**
- **Proxy 和 Reflect**
- **Generator** `*` yield
- **正则表达式**
- **日期和时间**
- **模块化** AMD CMD UMD CommonJS ES-Module
- **异常处理**
- **第三方库** lodash jQuery Axios day.js ECharts D3 Anime.js jsPDF UUID i18next ...

### JSX

- **语法糖** 本质是 JS 函数
- **插值和表达式** 写法 `{xxx}`
- **事件** 写法 `onClick={fn}`
- **自定义组件** 首字母大写
- **注视** `{/* This is a comment */}`

### TS

- **新增加的类型** any void never
- **类型定义和检查** 变量，函数参数，函数返回值，class 等
- **数组和元祖**
- **Enum 枚举**
- **自定义类型 type** 交叉类型 联合类型
- **接口 interface** 接口的扩展和继承
- **抽象类 Abstract class**
- **泛型 Generics**
- **装饰器 Decorator**
- **类型定义文件 `.d.ts`** 安装第三方的如 `npm install @types/lodash`
- `tsconfig.json` 配置

### JS Web API

- **DOM API** 查询 创建 修改 移动 DOM 节点，DOM 树，DocumentFragment
- **DOM 事件** 事件绑定，事件冒泡，Event 参数，事件代理
- **BOM API** window navigator screen location history 等
- **存储** cookie localStorage sessionStorage indexedDB
- **Ajax** XMLHTTPRequest fetch
- **通讯** postMessage，BroadcastChannel
- **WebWorker** 线程，sharedWorker，ServericeWorker，通讯
- **jsbridge** 如微信 jssdk

## 网络 HTTP 协议

- **URL** 组成
- **Header** Content-type, Accept, Authorization, User-Agent, Host, Referer, Cookie, Cache-control, Content-length, Connection ...
- **Method** GET, POST, PUT, DELETE, PATCH, RestfulAPI
- **Request** url params body
- **Response** status body set-cookie ...
- **Status code** 10x 20x 30x 40x 50x
- **cookie** 服务端 set-cookie，浏览器禁用第三方 cookie
- **Session** 服务端存储数据
- **JWT** 客户端存储数据，替换 token，OAuth 第三方登录，SSO 单点登录 ...
- **跨域** 浏览器同源策略，JSONP，CORS，跨域传递 cookie
- **浏览器缓存策略**
  - 强制缓存 Cache-Control
  - 协商缓存 Etag，If-None-Match，Last-Modified， If-Modified-Since
  - 缓存位置 Memory Cache, Dist Cache, Service worker Cache
- **HTTPS** SSL 协议，SSL 证书，加密过程（非对称和对称加密），通讯过程，options 请求
- **WebSocket**
- **GraphQL**
- **大文件上传** 切片上传，断点续传，秒传

## 服务端基础

服务端是一个很宽泛的概念，本文只讨论 JS 开发的服务端。

### JS 运行时

- **Nodejs** 生态成熟，应用广泛
- **Deno** 支持 TS，默认安全性，兼容 WebAPI
- **Bun** 极致性能，All-in-one

### Nodejs API

- **模块** CommonJS, ES-Module
- **命令行**
- **网络** HTTP HTTPS 服务
- **文件 fs** 读取 写入 创建 删除 文件...
- **流 stream** readline
- **进程 process**
- **集群 cluster** PM2
- **调试 debugger**
- **测试**

### 数据库

- **MySQL** 关系型数据库
- **PostgreSQL** 关系型数据库
- **MongoDB** No-SQL 数据库
- **Redis** 内存数据库，速度快
- **云数据库** Suspabase Cloudflare 等

### 存储

- **阿里云 OSS**
- **腾讯云 COS**
- **亚马逊 S3**

### 云服务器

各个云平台都有免费试用，或低价活动，如果是学习用，可以轮流“薅羊毛”。

- **Linux 登录** 创建账户
- **Linux 基础命令**
- **Vim 命令**
- **Nginx 配置**
- **安全组和防火墙**

### Docker

- **镜像 Image**
- **容器 Container**
- **DockerFile**
- **Docker Compose**
- **DockerHub**

### Serverless

- **阿里云 FC 函数计算**
- **亚马逊 Lambda**
- **其他中小型服务商** Vercel Netlify Railway Fly.io 等

### 微服务

## 框架/库

### React 使用

- **JSX 语法** 上文有介绍
- **函数组件 Functional Component**，纯函数，副作用，生命周期，组件通讯
- **属性 Props**
- **状态 State** 不可变数据，immer.js，“合并”更新，异步更新，表单受控组件
- **Hooks** useState, useEffect, useRef, useContext ... 自定义 Hook, react-use
- **Context** Provider, Consumer
- **性能优化** useMemo, useCallback, React.memo, React compiler ....
- **Suspense 和异步组件**
- **报错 ErrorBoundary**
- **服务端组件 RSC** 服务端渲染 SSR

### React 原理

- **Virtual DOM** React 使用的虚拟文档对象模型，通过对比更新来优化性能
- **Diff 算法** 对比新旧 vdom 并更新真实 DOM
- **Reconciliation** React 的更新算法，用于高效地比较虚拟 DOM 与旧虚拟 DOM 之间的差异，并决定最小化的更新操作
- **React Fiber** React 16 引入的重写的渲染引擎，提供更高效的渲染机制
- **React 合成事件** React 使用事件代理机制，将事件监听器挂载到根 DOM 节点上，而不是每个组件的 DOM 节点，减少了事件监听器的数量，提高了性能
- **React Concurrency** 是 React 18 引入的一项重要特性，使用时间分片和任务调度，用于提升应用的响应性和性能
- **React Batching Update** React 会对多次 state 更新进行批量处理，合并成一次更新，以减少不必要的重渲染和性能开销

### React 生态

- **框架** umijs, Next.js, Remix(react-router), Gatsby, React-Native
- **UI 组件库** AntD, MUI, ShadcnUI
- **状态管理** Redux, Zustand, MobX, Recoil
- **CSS 样式解决方案** TailwindCSS, Styled-components
- **表单和校验** Formik, React hook form
- **数据获取** React Query, SWR, Apollo Client
- **i18n** react-i18next
- **测试** Jest, Reat testing library, Storybook

### Vue 使用

- **脚手架**
- **模板语法** 类和样式，条件渲染，列表渲染，事件绑定，指令
- **响应式** ref，reactive，reactive 局限性
- **Computed**
- **watch** watchEffect
- **表单和 v-model**
- **组件** 生命周期，组件通讯，属性 props
- **插槽 slot**
- **异步组件**
- **动态组件**
- **KeepAlive**
- **组合式函数 Composable** 自定义 Composable，vue-use
- **Setup Script**

### Vue 原理

- **Virtual DOM** Vue 使用虚拟 DOM 来优化 DOM 操作，避免直接操作真实 DOM，从而提高性能
- **Diff 算法** 对比新旧 vdom 并更新真实 DOM
- **响应式原理** Vue 的核心特性之一，通过数据劫持（Object.defineProperty 或 Proxy）实现视图与数据的双向绑定
- **模板编译** Vue 将模板（HTML）编译成渲染函数，并通过虚拟 DOM 渲染 UI。编译过程将模板转换为可执行的 JavaScript 代码
- **异步渲染** NextTick

### Vue 生态

- **框架** Nuxt.js, VuePress
- **路由** Vue-router
- **UI 组件库** ElementPlus, AntDesignVue, VantUI, Vuetify ...
- **状态管理** Vuex, Pina
- **i18n** vue-i18n
- **测试** Vitest, Vue-test-utils, StoryBook

### 其他前端框架/库

- **Angular** 老牌全能框架
- **Selvte** 无 vdom，编译时框架，轻量高效
- **Solid** 无 vdom，响应式编程，高效渲染

### Node 服务端

- **Express** 老牌 Nodejs 服务端框架，简洁易用
- **Koa** 由 Express 的原班人马开发，Koa 提供了更精简和灵活的 API，利用现代 JavaScript 特性如 async/await，目标是创建更小、更优雅的框架
- **Egg** 由阿里巴巴开发，基于 Koa 构建的企业级框架，提供了完善的插件机制和企业级功能，适用于构建复杂和大规模的应用
- **Nest.js** Nodejs 开发的 Spring 框架

### Node 服务端生态

- **数据库 ORM** Prisma Drizzle
- **Auth 校验** NextAuth
- **tRPC 通讯**
- **i18n 多语言**
- **队列服务** RabbitMQ, Kafka
- **缓存**
- **日志**
- **AI 服务** ChatGPT （对中国地区停止 API 服务），DeepSeek 等
- **邮件服务** 各大邮箱网站都提供免费 SMTP 服务（会有限制）， resend 等付费服务商
- **短信服务** 腾讯云，阿里云
- **支付** 微信支付，支付宝，Stripe

> 想学习 Node 全栈生态，推荐我带队开发的 Node 全栈 AIGC 知识库项目 [划水 AI](https://juejin.cn/pin/7476067407129346111) `www.huashuiAI.com`
> 包括文档管理、富文本编辑、AI 智能写作、多人协同编辑等功能。复杂业务，真实上线，持续运维。
> 可免费加群围观，也可加入学习和参与开发。

### 小程序

- **框架** 如 **uni-app**、**Taro**、**WePY**，提供跨平台开发的工具和规范。
- **组件化** 小程序开发采用组件化方式，开发者可以创建自定义组件，提高代码的重用性和可维护性。
- **WXML** 小程序的标记语言，类似 HTML，用于定义页面的结构。
- **WXCC** 小程序的样式表语言，类似于 CSS，用于为 WXML 页面设置样式。
- **API** 小程序提供了大量的官方 API，如 **微信支付**、**位置服务**、**分享功能**等，供开发者在小程序中调用。
- **小程序路由** 使用 `wx.navigateTo`、`wx.redirectTo`、`wx.switchTab` 等 API 进行页面导航，支持页面栈管理。
- **小程序生命周期** 小程序的生命周期包括 **onLaunch**、**onShow**、**onHide** 等，开发者可以在不同的生命周期阶段执行相关操作。
- **小程序云开发** 提供云函数、云数据库、云存储等后端服务，简化开发者后端处理，提升开发效率。
- **发布和调试** 使用 **微信开发者工具** 进行本地调试和真机调试，确保小程序在各平台上正常运行，最终通过开发者工具上传并发布到微信平台。

### 移动端

- **React Native** 基于 React 的移动端框架。
- **Weex** 阿里巴巴开发，基于 Vue 的移动端框架。不维护了。
- **Flutter** Google 开发，使用 Dart 语言

### PC 客户端

- **Electron** 使用 **HTML、CSS、JavaScript** 开发跨平台桌面应用（支持 Windows、macOS 和 Linux）

### 微前端

- **Single-SPA** 是一个非常流行的微前端框架，允许多个前端框架（如 React、Vue、Angular 等）在同一个页面中并行运行。
- **Qiankun** 是阿里巴巴开源的微前端框架，基于 Single-SPA 开发，提供了更多的功能封装和优化。
- **Module Federation (webpack5)** 允许在运行时动态加载和共享模块。它可以帮助解决微前端中的共享库和组件的问题。

### PWA

## 工程化

### 代码库管理

- **Git** Github，Gitlab，git 命令，commits，pre-commit hook， Pull request
- **Monorepo** 单个仓库中管理多个项目

### 脚手架

- react vue 等各个框架的 cli 工具
- **AI 生成代码工具** v0, bolt.new

### 打包工具

- **Webpack** 老牌打包工具，使用广泛
- **Vite** 使用 ES Module 开发环境启动快
- **Parcel** 无需配置，开箱即用
- **esbuild** 使用 Go 语言开发，速度快，综合性编译和打包工具
- **Rspack** 同样使用 Go 语言开发，速度快，综合性编译和打包工具
- **Turbopack** Vercel 公司使用 Rust 开发 JS 打包工具，用于 Next.js 项目，也可以独立使用
- **Rollup** 老牌打包工具，使用 Tree-shaking 优化代码，Vite 内部使用
- **Rolldown** 新工具，Rust 开发，Vite 内部使用

### JS 编译器

babel SWC 等

- **Babel** 老牌 JS 编译工具，使用广泛
- **SWC** 使用 Rust 语言开发的 JS 编译器，速度是 Babel 的 20-70 倍（不同 CPU），而且原生支持 TS 和 JSX 语法，旨在替代 Babel 。Vite 内部使用的就是 SWC 。
- **Respack** 使用 Go 语言开发，速度快，综合性编译和打包工具
- **esbuild** 同样使用 Go 语言开发，速度快，综合性编译和打包工具

### 代码压缩

- **UglifyJS** 老牌 JS 压缩工具
- **Terser** 基于 UglifyJS 源码开发的，支持 ES6 新语法，对 tree-shaking 也做了优化。
- 很多 JS 编译和打包工具都集成了代码压缩功能，如 **SWC** **esbuild**

### CSS 处理

- **Sass/SCSS** 是 CSS 的一种扩展，提供了变量、嵌套规则、混合宏（mixins）、继承等功能。SCSS 是 Sass 的语法扩展，兼容普通的 CSS 语法。
- **Less** 是一个 CSS 预处理器，与 Sass 类似，提供了变量、函数、嵌套等功能，用来增强 CSS 的功能性。
- **PostCSS** 是一个 JavaScript 工具，允许开发者使用插件对 CSS 进行处理和转换。PostCSS 本身是一个工具平台，通过插件实现不同的功能。
- **Autoprefixer** 是 PostCSS 的一个插件，自动为 CSS 属性添加浏览器前缀。它基于 [can-i-use](https://caniuse.com/) 数据库，自动判断哪些属性需要添加前缀，并且在构建时进行处理。

### 编码规范和格式

- **eslint** 规范 Recommended Airbnb Google StandardJS
- **prettier**

### CD/CD

- **Github Action** 是 GitHub 提供的持续集成和持续交付（CI/CD）平台，允许用户在代码仓库中定义自动化工作流，自动化构建、测试和部署过程
- **Gitlab CI** 是 GitLab 提供的集成式 CI/CD 系统，允许开发者通过 `.gitlab-ci.yml` 配置文件自动化构建、测试和部署，并与 GitLab 仓库紧密集成。
- **Jenkins** 持续集成/持续交付工具，用于自动化构建和测试。

## 开发环境

### IED 编辑器

- **vscode** 可集成 github copilot 智能编码
- **webstorm**
- **Cursor** 集成 AI 智能编码，付费
- **codepen** 在线 IDE
- **stackblitz** 在线 IDE

### 调试

- **debugger 和断点**
- **chrome 控制台** Element, Console, Network, Performance, Memory ...

### 抓包

- **chrome 控制台 Network**
- **charles**
- **fiddler**

### mock

- **Mock.js**
- **Mock 在线服务**

## 测试

结合 CI/CD 自动化测试

### 单元测试

- **Jest** 是一个广泛使用的 JavaScript 测试框架，提供了丰富的功能，如断言、模拟、快照测试和覆盖率报告，广泛应用于 React 项目的单元测试。
- **Vitest** 是一个快速、轻量级的测试框架，兼容 Jest API，利用 Vite 构建工具进行高效的测试运行，适合现代前端开发和快速反馈的需求。
- **React Testing Library** 与 Jest 配合使用，专注于通过用户交互测试组件行为，而不是内部实现，鼓励测试组件的可访问性和用户体验。
- **Vue Test Utils** Vue 官方提供的测试工具，专门用于编写和运行 Vue 组件的单元测试，提供了诸如挂载组件、触发事件、访问组件实例等功能。

### E2E 测试

- **Cypress** 是一个端到端测试框架，专注于前端应用的自动化测试，提供快速、可靠的测试执行和调试功能。
- **Playwright** 是一个跨浏览器自动化工具，支持 Chromium、WebKit 和 Firefox，适用于多浏览器端到端测试。
- **Puppeteer** 是一个基于 Node.js 的库，用于控制 Chromium 浏览器进行自动化测试和网页抓取，适合进行浏览器操作和内容提取。

## 统计、监控、安全和优化

### 统计和监控

- **百度统计** PV UV 等
- **Sentry** 综合性的 APM 监控平台
  - 报错监控
  - 性能统计和监控

### 安全

- **跨站脚本攻击 XSS** 攻击者通过注入恶意脚本代码到网页中，从而窃取用户信息或执行未授权操作
- **跨站请求伪造 CSRF** 攻击者诱使用户在已经认证的站点上执行恶意操作，利用用户的认证信息发送不必要的请求
- **SQL 注入** 通过将恶意的 SQL 查询代码注入到应用程序的数据库查询中，攻击者能够篡改数据库。

### 性能优化

- **性能指标 Web vitals** TTFB, FCP, LCP, FID, CLS, INP
- **代码分割** 常用模块可以缓存
- **懒加载** JS 懒加载，图片懒加载
- **资源压缩** 代码，图片
- **渲染优化** 减少页面渲染次数，避免不必要的 reflow 和 repaint
- **CDN**
- **Edge 边缘计算**

## 项目管理

### 项目角色

- **Product Owner 产品负责人**
- **Product Manager 项目经理** 负责整体项目的规划、进度管理、资源协调和风险控制
- **FrontEnd Developer 前端开发**
- **BackEnd Developer 后端开发**
- **FullStack Developer 全栈开发**
- **UI/UX Designer UI/UX 设计师**
- **QA 测试工程师**

### Scrum 敏捷开发

- **Sprint** Scrum 中的迭代周期，通常持续 1 到 4 周。在每个 Sprint 中，团队会完成一定数量的任务，并交付一个可用的产品增量。
- **Backlog** 产品待办事项列表，包含所有待开发的功能、修复、改进等项，由产品负责人（Product Owner）管理和优先级排序。
- **Daily Standup** 团队每天举行的短会议，通常 15 分钟，成员讨论各自的工作进展、遇到的障碍和接下来的工作计划。
- **Sprint Review** Sprint 结束时，团队展示已完成的工作成果，和产品负责人、相关利益相关者一起评审进展并进行反馈。
- **Sprint Retrospective** Sprint 结束后，团队反思整个过程，讨论哪些方面做得好、哪些需要改进，以便在下一个 Sprint 中提升团队效率和协作。

### kanban 敏捷开发

类似于 Scrum 但更加灵活，没有固定的周期和角色，适合持续快速的交付。

### 软件研发过程

- 需求评审和 UI 设计
- 技术方案设计
- 开发过程：编码、调试、单元测试、自测、写注释和文档、代码走查等
- 联调
- 提测
- 上线
  - 全量
  - 小流量（灰度）
  - ABTest

### 项目管理常用工具

- **任务管理** Jira （综合性）, Github project
- **问题管理** Github/Gitlab Issues
- **知识库/文档平台** 语雀，Notion ...

## 非技术事项

- 持续学习，及时关注新技术
- 独立思考，凡事考虑本质和价值，多问为什么
- 低头做事，抬头看路，定期放空自己，闲下来
- 时间管理，有目标性和计划性，写出 todos 不要忘了
- 保持形象，可以个性但不能油腻，追求合适的衣服、鞋子和发型
- 定期体检，爱护头发、颈椎、腰椎，健康饮食和作息
