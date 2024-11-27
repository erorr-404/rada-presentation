import os
import json

# images size: 1280x960

allowed_types = [".jpg", ".png", ".webp", ".jpeg"]
files = []
i = 1
my_path = os.getcwd() + "\\assets\\gallery"
print(f"my_path: {my_path}")


# Function to check if a file object has an allowed file type
def is_allowed_file(filepath):
    _, ext = os.path.splitext(filepath)  # Extract file extension
    return ext.lower() in allowed_types  # Check if in allowed_types


for file in os.listdir(my_path):
    if os.path.isfile(os.path.join(my_path, file)):
        if is_allowed_file(file):
            print(f"file:{file}")
            files.append({
                "id": i,
                "path": "./assets/gallery/"+file})
            i += 1

files.reverse()
print(files)

with open('assets\\gallery\\images.json', 'w') as file:
    json.dump(files, file)

print("Done!")
