from inspect import Attribute
import json

NAME = "NBAJAM"
IMAGE_HTML = "https://ipfs.io/ipfs/QmPr7iNcptu3xFfThRb5R9HaTXTRCsBgDfqvnwyMjfMb4e"
ATTRIBUTE = ({
    "trait_type" : "location",
    "value": "unknown"
},)
ATTRIBUTE_ED = ({"trait_type" : "location", "value": "unknown",}, {"trait_type" : "puppet", "value": "ed",})

for x in range(10):
    json_dict = {
    "name": f"{NAME} #{x}",
    "image": f"{IMAGE_HTML}",
    "attributes": ATTRIBUTE,
    }
    with open(f"{x}", "w") as f:
        json.dump(json_dict, f, indent=4)