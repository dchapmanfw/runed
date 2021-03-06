import argparse
from property import Property
import property_dicts as property_dicts
import json


class Metadata:

    property_list_ = (
        Property(property_dicts.DAMN_IT),
        Property(property_dicts.LOSS_OF_SIGNAL),
        Property(property_dicts.SKY),
        Property(property_dicts.DISTANT_TOPOLOGY),
        Property(property_dicts.TIME_OF_DAY),
        Property(property_dicts.ED_B),
        Property(property_dicts.FLAT_DISTANT_OBJ),
        Property(property_dicts.FLAT_FOREGROUND_OBJ),
        Property(property_dicts.PLANET),
        Property(property_dicts.WEATHER),
        Property(property_dicts.MUSIC),
        Property(property_dicts.FOREGROUND_OBJ),
        Property(property_dicts.ROAD),
        Property(property_dicts.GROUND),
        Property(property_dicts.COLOR),
    )

    def __init__(
        self,
        serial_number,
        serial_number_two,
        serial_number_three,
        html="test.gov",
        image_html="test",
        token_id="1",
        file_name = "",
    ):
        self.serial_number_ = serial_number
        self.serial_number_two_ = serial_number_two
        self.serial_number_three_ = serial_number_three
        self.html_ = html
        self.image_html_ = image_html
        self.token_id_ = token_id
        self.file_name_ = file_name


    def get_property_list(self):
        return self.property_list_

    def generate_json(self, test=False):
        attribute_list = list()

        for prop in self.property_list_:
            if prop.get_property_number() == 1:
                trait_dict = {
                    "trait_type": prop.get_property_group(),
                    "value": prop.get_trait(self.serial_number_),
                }
            elif prop.get_property_number() == 2:
                trait_dict = {
                    "trait_type": prop.get_property_group(),
                    "value": prop.get_trait(self.serial_number_two_),
                }
            elif prop.get_property_number() == 3:
                trait_dict = {
                    "trait_type": prop.get_property_group(),
                    "value": prop.get_trait(self.serial_number_three_),
                }
            else:
                raise "Invalid serial number selection in property"
            attribute_list.append(trait_dict)
        json_dict = {
            "name": f"{property_dicts.NAME} #{self.token_id_}",
            "image": f"{self.image_html_}/{self.file_name_}.jpg",
            "description": property_dicts.DESCRIPTION,
            "animation_url": f"{self.html_}/{self.file_name_}.mp4",
            "attributes": attribute_list,
        }
        if not test:
            # json_object = json.dumps(json_dict, indent=4)
            with open(f"{self.token_id_}", "w") as f:
                json.dump(json_dict, f, indent=4)
        return json_dict


def print_metadata_breakdown(master_list):
    m = Metadata(0, 0, 0, "", 0)
    property_list = m.get_property_list()

    p_dict = {}
    for property in property_list:
        pg_dict = {}
        for pg in property.get_property():
            pg_dict[pg] = 0
        p_dict[property.get_property_group()] = pg_dict

    for nft in master_list:
        for attribute in nft["attributes"]:
            if attribute["value"] not in p_dict[attribute["trait_type"]]:
                p_dict[attribute["trait_type"]]["None"] = 0
            p_dict[attribute["trait_type"]][attribute["value"]] += 1

    for key in p_dict:
        print(key)
        count = 0
        for k in p_dict[key]:
            print(f"\t{k} : {p_dict[key][k] / 50}")
            count += p_dict[key][k]


if __name__ == "__main__":

    parser = argparse.ArgumentParser(description="Generate NFT metadata")
    parser.add_argument("file", type=argparse.FileType("r"))
    args = parser.parse_args()

    json_file_count = 0
    video_ipfs = "https://arweave.net/ahlV0avN05uzx7eFnZo25mepNOmALTKIBeAXhUwBBX0"
    image_ipfs = "https://ipfs.io/ipfs/Qme74CVQqthWbKAF8UnYoMGBdrXZvS2Y3EnxXXPtwt9p48"

    master_list = list()

    for line in args.file.readlines():
        splits = line.split("_")
        serial_number_3 = int(splits[0])
        serial_number_2 = int(splits[1])
        serial_number_1 = int(splits[2].split(".")[0])
        m = Metadata(
            serial_number_1,
            serial_number_2,
            serial_number_3,
            video_ipfs,
            image_ipfs,
            json_file_count,
            # TODO[dchapman] : make sure that the final has no \nm
            line.split("\n")[0].split(".mp4")[0],
        )
        master_list.append(m.generate_json(False))
        json_file_count += 1

    print_metadata_breakdown(master_list)
