width, height = 1920, 1080
x, y = input("Write x and y: ").split()
vw = int(x)/width
vh = int(y)/height
print(f"X: {vw};\nY: {vh}")
print(f"(px) X: {vw*float(x)};\n(px) Y: {vh*float(y)}")