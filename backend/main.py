
from bottle import route, run, post,get, Request, request,response
import pathlib

@post('/aog/<day>/<task>')
def signal(day, task):
    with open("currentid.txt", "r") as f:
        currid = int(f.read()) + 1
    with open("currentid.txt", "w") as f:
        f.write(str(currid))
    with open("unread.txt", "a") as g:
        g.write(f"{currid}\n")
    with open(f"{currid}.txt", "w") as h:
        h.write(f"Question regarding AoG {day}.{task}:\n\n{request.forms.text}")
    return "Signal sent successfully! I will get to it as soon as I can."

@get('/aog/list/<status>/<key>')
def listids(status, key):
    with open(".key", "r") as f:
        sentkey = f.read()
        if sentkey.strip() != key.strip():
            print(key + "!=" + sentkey)
            response.status = 401
            return "Unauthorized"
    body = "<pre>"
    match status:
        case "unread":
            with open("unread.txt", "r") as g:
                for i in g.readlines():
                    body += f"""<a href="/aog/read/{i.strip()}/{key}">Signal {i.strip()}</a>"""
        case "all":
            with open("currentid.txt") as i:
                for j in range(int(i.read())):
                    body += f"""<a href="/aog/read/{j + 1}/{key}">Signal {j + 1}</a><br>"""
    body += "\nEnd</pre>"
    return body

@get('/aog/read/<signalid>/<key>')
def read(signalid, key):
    with open(".key", "r") as f:
        if f.read().strip() != key.strip():
            response.status = 401
            return "Unauthorized"
    try:
        with open(f"{signalid}.txt", "r") as g:
            content = g.read()
    except FileNotFoundError:
        response.status = 404
        return "Signal not found"
    with open("unread.txt", "r") as h:
        lines = h.readlines()
    with open("unread.txt", "w") as i:
        try:
            lines.remove(f"{signalid}")
            i.writelines(lines)
        except ValueError:
            pass
    return f"<pre>{content}</pre>"

if __name__ == '__main__':
    run(host='0.0.0.0', port=25551)