import os
import json

matriz_json = open("engenharia-de-computacao/matriz_n_acentuada.json")
disciplinas = json.load(matriz_json)

for i in range(0,7):
    os.system("mkdir periodo-"+str(i))


for disciplina in disciplinas:
    for i in range(0,7):
        if disciplina["id"][0] == str(i):
            os.system("mkdir ./periodo-"+str(i)+"/"+disciplina["nome"])
      os.system("echo \"#"+disciplina["nome"]+"\" >> ./periodo-"+str(i)+"/"+disciplina["nome"]+"/readme.md")
      print("mkdir ./p"+str(i)+"/"+disciplina["nome"])
      print("echo \"#"+disciplina["nome"]+"\" >> ./p"+str(disciplina)+"/"+disciplina["nome"]+"/readme.md")

os.system("mv periodo-0 optativas")
