import os
import json

json_file = open("matriz_n_acentuada.json")
data = json.load(json_file)

for i in range(0,7):
  os.system("mkdir periodo-"+str(i))
   

for i in data:
  for j in range(0,7):
    if i["id"][0] == str(j):
      os.system("mkdir ./periodo-"+str(j)+"/"+i["nome"])
      os.system("echo \"#"+i["nome"]+"\" >> ./periodo-"+str(j)+"/"+i["nome"]+"/readme.md")
      print("mkdir ./p"+str(j)+"/"+i["nome"])
      print("echo \"#"+i["nome"]+"\" >> ./p"+str(j)+"/"+i["nome"]+"/readme.md")

os.system("mv periodo-0 optativas")