


// 从react框架中导入，react核心库，必备，否则jsx语法报错
//useState，React的状态钩子，用于组件内定义自定义变量
import React, { useState } from 'react';

// 导入第三矿库，用于向后端发送http请求. 
//  React默认没有，必须单独安装
import axios from "axios";


//定义一个叫App的函数组件，每次页面加载，自动执行
//每次页面加载，都会自动执行这个函数.这是主页函数
function App()
{
    //创建一个响应式变量 result，初始值为空字符串 ""
    //这个变量值变了，页面会自动刷新
    const [result, setResult] = useState("");

    // 定义一个异步函数 pingBackend，点击按钮后会执行它
    // async 表示里面可以写 await，用于请求后端
    const pingBackend = async () => 
        {
            try
            {
                // 使用 axios 向后端发 GET 请求，目标是 http://127.0.0.1:8000/
                // 这个地址是你本地FastAPI服务器的默认地址
                const res = await axios.get("http://127.0.0.1:8000/");


                // 把后端返回的 JSON 数据转成字符串后，放入 result 状态变量里
                // JSON.stringify(..., null, 2) 会美化显示（缩进2空格）
                setResult(JSON.stringify(res.data, null, 2));

            }

            //请求失败，就捕获错误信息，然后后续打印出来
            catch(err)
            {
                // 如果请求失败，就把错误信息写入 result
                // 注意这里要用 ` 反引号 才能拼接变量（模板字符串）
                setResult(`❌ 无法连接后端：${err.toString()}`);
            }

        };

        // 这个组件要 return 一个页面结构（JSX）
        // React 要求每个组件返回一个唯一的根节点，这里是 <div>
        return
        (
            <div style={{ padding: '2rem', fontFamily: 'Arial' }}>

            {/* 页面主标题 */}
            <h1>📊 参数训练工具</h1>
            
            {/* 点击按钮时会执行 pingBackend 函数，这里就会绑定按钮 */}
            <button onClick={pingBackend}>🔗 连接后端（Ping）</button>
            
            {/* 展示后端返回的结果，如果 result 为空就显示提示 */}
            <pre style={{ marginTop: '1rem', background: '#f5f5f5', padding: '1rem' }}>
            
                {result || '← 点击上方按钮测试连接'}
            
            </pre>
            
            </div>
        )


};



//导出这个主要模块，供其它模块调用
export default App;