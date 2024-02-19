import os
import json

alowed_types = [".jpg", ".png", ".webp", ".jpeg"]
files = []
i = 1
my_path = os.getcwd()+"\\images\\gallery"

for file in os.listdir(my_path):
    if os.path.isfile(os.path.join(my_path, file)):
        if file.endswith(".jpg") or file.endswith(".png") or file.endswith(".webp") or file.endswith(".jpeg"):
            files.append({
                "id":i,
                "path":"./images/gallery/"+file
            })
            i += 1

print(files)

with open('images\\gallery\\images.json', 'w') as file:
    json.dump(files, file)

print("Done!")