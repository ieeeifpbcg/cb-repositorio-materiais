import os
import json

matriz_json = open("matriz_n_acentuada.json")
disciplinas = json.load(matriz_json)

for i in range(1,11):
  os.system("mkdir periodo-"+str(i))

os.system("mkdir optativas")

for disciplina in disciplinas:
  print(disciplina["id"])
  if("op" in disciplina["id"]):
    os.system("mkdir ./optativas/"+disciplina["nome"])
    os.system("echo \"#"+disciplina["nome"]+"\" >> ./optativas/"+disciplina["nome"]+"/readme.md")
  else:
    if(len(disciplina["id"]) == 3):
      os.system("mkdir ./periodo-10/"+disciplina["nome"])
      os.system("echo \"#"+disciplina["nome"]+"\" >> ./periodo-10/"+disciplina["nome"]+"/readme.md")

    else:
      os.system("mkdir ./periodo-"+disciplina["id"][0]+"/"+disciplina["nome"])
      os.system("echo \"#"+disciplina["nome"]+"\" >> ./periodo-"+disciplina["id"][0]+"/"+disciplina["nome"]+"/readme.md")