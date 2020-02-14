import os
import json


def leJson():
    disciplinasJson = open("matrizTelematica.json", "r")
    disciplinas = json.load(disciplinasJson)
    disciplinasJson.close()

    return disciplinas


def numeroPeriodos():
    periodos = []
    for i in disciplinas:
        periodos.append(i["id"])
    if len(max(periodos)) == 2:
        return int(max(periodos)[0])
    else:
        return int(max(periodos)[:2])


curso = "telematica"
disciplinas = leJson()[curso]
numPeriodos = numeroPeriodos()
caminho = "../cursos/"

optativas = list(
    filter(lambda disciplina: disciplina["id"][0] == "0", disciplinas))
disciplinas = list(
    filter(lambda disciplina: disciplina["id"][0] != "0", disciplinas))

os.system("mkdir "+caminho+curso)
os.system("mkdir "+caminho+"optativas")
for i in range(1, numPeriodos+1):
    os.system("mkdir "+caminho+curso+"/periodo-"+str(i)+"/")

def criaMd(disciplina, periodo, cargaHoraria, ementa):
    return (
"""
# :mortar_board: """+disciplina+"""
### :date: """+periodo+"""º Período - """+cargaHoraria+""" horas

### :scroll: Ementa

"""+ementa+"""

---

### :clipboard: Sumário

- [Livros](#books-livros)
- [Slides](#tv-slides)
- [Atividades](#pencil-atividades)

---

### :books: Livros

- [Livro 1]()
- [Livro 2]()
- [Livro 3]()
- [Livro 4]()
- [Livro 5]()

---

### :tv: Slides

- [Livro 1]()
- [Livro 2]()
- [Livro 3]()
- [Livro 4]()
- [Livro 5]()

---

### :pencil: Atividades

- [Livro 1]()
- [Livro 2]()
- [Livro 3]()
- [Livro 4]()
- [Livro 5]()""")


for disciplina in disciplinas:
    for i in range(0, numPeriodos+1):
        if disciplina["id"][0] == str(i):
            md = criaMd(disciplina["nome"], disciplina["id"][0], disciplina["ch"],"ementa")
            os.system("mkdir "+caminho+curso+"/periodo-" +
                      str(i)+"/"+disciplina["nome"]+"/")
            os.system("echo \""+md+"\" >> "+caminho+curso+"/periodo-"+str(i)+"/"+disciplina["nome"]+"/readme.md")