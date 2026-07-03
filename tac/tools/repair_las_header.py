import laspy
from pathlib import Path
src = Path(r"C:/Users/stcbu/Downloads/Tac_Website/tac/public/projects/cloudR.las")
dst = src.with_name("cloudR_fixed.las")
las = laspy.read(src)
las.update_header()
las.write(dst)
print(dst)
print(las.header.mins, las.header.maxs)
