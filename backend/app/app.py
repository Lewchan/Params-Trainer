



# 导入 FastAPI 主类，用于创建 Web 应用
# from import 是python 导入语法，意思是从一个叫fastapi的库里拿出一个叫FastAPI的工具
# fastapi 是python 的web框架，是第三方库,FastAPI 是框架的类，可以一键搭建web服务
from fastapi import FastAPI

# 创建 FastAPI 实例 - 名字叫app, 
# title 只是个标识，和身份验证无关
app = FastAPI()
app.title = "参数训练器"





# ======================== 路由区域 ========================

# 声明 GET 接口，路径为 /v1/ping，只要别人在访问地址输入这个/v1/ping，就会执行下面的函数。
# @app.get 相当于宏，给下面的函数做装饰，1对1关系
@app.get("/v1/ping")
async def ping():   # 异步函数，处理来自客户端的请求
    #如果想让一个函数执行一堆逻辑，就把这个函数当大函数，里面写一堆子函数即可。
    return{"msg":"pong"}    # 返回 JSON 响应，前端拿到 {"msg": "pong"} 即表示后端在线




    
# ======================== 本地启动入口 ====================

# 只有当 “python app.py” 直接运行本文件时才会执行下面代码；
# 如果把 app.py 当模块被其它脚本导入，则不会重复启动服务器    
# 如果是直接运行这个文件，name = __main__, 那么下面的函数就会启动，
# 如果是别人导入这个文件，name = app, 那么下面的函数就不会启动。
if __name__ == "__main__":

    #导入第三方库 uvicorn，用于启动web服务
    import uvicorn

    # 启动 uvicorn：
    #   "app:app"  => 模块名app就是文件名，这个文件刚好叫app、变量名app就是上面的app实例，名字刚好也叫app
    #   host       => 0.0.0.0 监听全部网卡, 所有ip都可以访问，0.0.0.0 代表所有ip
    #   port       => 8000    默认端口
    #   reload     => 代码改动后自动重启（开发期必开）
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)    

