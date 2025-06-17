

REM 这是微软自带cmd命令，@echo off 表示不显示命令行，意为从现在开始，不要显示所有命令行，让界面清爽。
@echo off




REM Server.bat 作用：一键启动 backend 里的 FastAPI 后端服务器
REM 你只需在根目录下双击这个bat，就能自动切到 backend，激活虚拟环境，然后运行 app.py






REM 切换到 backend 文件夹
cd /d %~dp0backend




REM 激活 Python 虚拟环境（确保你已经在 backend 目录下用 python -m venv venv 创建过 venv 文件夹）
call venv\Scripts\activate






REM 启动后端服务器（app.py里有 if __name__ == "__main__" 代码块）
REM 注意：如果app.py里没有 if __name__ == "__main__" 代码块，那么这个命令会报错。
REM 启动服务器的核心就是这句话
REM python app.py



REM app是放在app文件夹之下的，所以要加app.

REM uvicorn 是一个阻塞进程，会一直站着窗口直到 ctrl + c
REM uvicorn app.app:app --host 127.0.0.1 --port 8000 --reload

REM 这样写，就可以启动服务器后，直接走后面 cmd/c是命令执行完关闭窗口
start cmd /c uvicorn app.app:app --host 127.0.0.1 --port 5334 --reload


REM 打开后直接启动地址
start http://127.0.0.1:5334/






REM 启动完成后窗口不会直接关闭，方便查看日志和报错信息
REM 干掉pause cmd窗口就会主动关闭。
REM pause

