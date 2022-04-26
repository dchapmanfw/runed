from inspect import Attribute
import json

NAME = "Run Ed."
IMAGE_HTML = "https://runed.mypinata.cloud/ipfs/QmYRLGvnNUgdRNDgCemd31irarTpVG1SjKP5PfiQiFkmiY"
FILE_NAME = "ED-B_FUCK-THE-METAVERSE"
ATTRIBUTE_ED = ({"trait_type" : "Location", "value": "Unknown"}, {"trait_type" : "Puppet", "value": "Ed"})

for x in range(5001):
    json_dict = {
    "name": f"{NAME} #{x}",
    "image": f"{IMAGE_HTML}/{FILE_NAME}.jpg",
    "animation_url": f"{IMAGE_HTML}/{FILE_NAME}.mp4",
    "attributes": ATTRIBUTE_ED,
    }
    with open(f"{x}", "w") as f:
        json.dump(json_dict, f, indent=4)