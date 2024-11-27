import os
import json

# Images size: 1280x960
allowed_types = [".jpg", ".png", ".webp", ".jpeg"]
image_metadata = []
i = 1
my_path = os.getcwd() + "\\assets\\gallery"
print(f"my_path: {my_path}")

# Get all files in the directory with their full paths
files = [os.path.join(my_path, f) for f in os.listdir(my_path) if os.path.isfile(os.path.join(my_path, f))]

# Sort files by modification time
files.sort(key=lambda x: os.path.getmtime(x))


# Function to check if a file object has an allowed file type
def is_allowed_file(filepath):
    _, ext = os.path.splitext(filepath)  # Extract file extension
    return ext.lower() in allowed_types  # Check if in allowed_types


for file in files:
    if is_allowed_file(file):
        print(f"file: {file} \n")
        image_metadata.append({
            "id": i,
            "path": "./assets/gallery/" + os.path.basename(file)  # Use only the filename
        })
        i += 1

image_metadata.reverse()
print(image_metadata)

# Save metadata to JSON
with open('assets\\gallery\\images.json', 'w') as json_file:
    json.dump(image_metadata, json_file, indent=4)

print("Done!")
