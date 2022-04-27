from inspect import Attribute
import json

NAME = "Run Ed."
IMAGE_HTML = "https://runed.mypinata.cloud/ipfs/QmYRLGvnNUgdRNDgCemd31irarTpVG1SjKP5PfiQiFkmiY"
FILE_NAME = "ED-B_FUCK-THE-METAVERSE"
ATTRIBUTE_ED = ({"trait_type" : "Location", "value": "Unknown"}, {"trait_type" : "Puppet", "value": "Ed"})
DESCRIPTION = """EXT. WEB3 -- LOCATION UNKNOWN

     [Billy]   Hey Ed!

     [Ed B]   What's Good?

     [Billy]   What do you think of the Metaverse?

     [Ed B]   ...

     [Ed B]   ...

     [Ed B]   ... Fuck the Metaverse!

Run Ed. Reveal | 1080 x 1080 | H.264"""

for x in range(5000):
    json_dict = {
    "name": f"{NAME} #{x}",
    "image": f"{IMAGE_HTML}/{FILE_NAME}.jpg",
    "animation_url": f"{IMAGE_HTML}/{FILE_NAME}.mp4",
    "description": DESCRIPTION,
    "attributes": ATTRIBUTE_ED,
    }
    with open(f"{x}", "w") as f:
        json.dump(json_dict, f, indent=4)