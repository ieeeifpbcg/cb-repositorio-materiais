import os
import json


def leJson(arquivo):
    # Função que lê o JSON da matriz e salva em uma lista.

    disciplinasJson = open(arquivo, "r")
    disciplinas = json.load(disciplinasJson)
    disciplinasJson.close()

    return disciplinas


def criaReadmeMd(disciplina, periodo, cargaHoraria, ementa):
    # Função que cria os readme.md de cada disciplina com seu nome, periodo, CH e ementa.

    return (
        """
# :mortar_board: """ + disciplina + """
### :date: """ + periodo + """º Período - """ + cargaHoraria + """ horas

### :scroll: Ementa

""" + ementa + """

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
- [Livro 5]()
""")



def criaPastasCurso(curso, caminhoJson, numPeriodos):
    # Função que cria as pastas de cada disciplina na pasta correspondente ao seu periodo juntamente com seu readme.md. Só é possivel utilizar este script em sistemas Unix.

    disciplinas = leJson(caminhoJson)[curso]
    caminho = "../cursos/"

    optativas = list(
        filter(lambda disciplina: disciplina["id"][0] == "0", disciplinas))
    disciplinas = list(
        filter(lambda disciplina: disciplina["id"][0] != "0", disciplinas))

    os.system("mkdir " + caminho + curso)
    os.system("mkdir " + caminho + "optativas")

    for i in range(1, numPeriodos + 1):
        os.system(
            "mkdir "
            + caminho
            + curso
            + "/periodo-"
            + str(i)
            + "/")

    for disciplina in disciplinas:
        for i in range(0, numPeriodos + 1):
            if disciplina["id"][0] == str(i):
                md = criaReadmeMd(disciplina["nome"],
                                  disciplina["id"][0],
                                  disciplina["ch"],
                                  "ementa")

                os.system(
                    "mkdir "
                    + caminho
                    + curso
                    + "/periodo-"
                    + str(i)
                    + "/"
                    + disciplina["nome"]
                    + "/"
                )
                os.system(
                    'echo "'
                    + md
                    + '" >> '
                    + caminho
                    + curso
                    + "/periodo-"
                    + str(i)
                    + "/"
                    + disciplina["nome"]
                    + "/readme.md"
                )

    for disciplina in optativas:
        md = criaReadmeMd(disciplina["nome"],
                          disciplina["id"][0],
                          disciplina["ch"],
                          "ementa")

        os.system(
            "mkdir "
            + caminho
            + "optativas/"
            + disciplina["nome"]
        )

        os.system(
            'echo "'
            + md
            + '" >> '
            + caminho
            + "optativas/"
            + disciplina["nome"]
            + "/readme.md"
        )


criaPastasCurso(curso="telematica",
                caminhoJson="./matrizTelematica.json", 
                numPeriodos=6)
criaPastasCurso(curso="engenharia-de-computacao",
                caminhoJson="./matrizEngComputacao.json", 
                numPeriodos=10)
