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

    def __init__(self, serial_number,serial_number_two,serial_number_three, html="test.gov", token_id="1"):
        self.serial_number_ = serial_number
        self.serial_number_two_ = serial_number_two
        self.serial_number_three_ = serial_number_three
        self.html_ = html
        self.token_id_ = token_id

    def generate_json(self):
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
            "image": f"{self.html_}/{self.token_id_}.{property_dicts.TYPE}",
            "attributes": attribute_list,
        }
        #json_object = json.dumps(json_dict, indent=4)
        with open(f'{self.token_id_}', 'w') as f:
            json.dump(json_dict, f,indent=4)


if __name__ == "__main__":

    parser = argparse.ArgumentParser(description='Generate NFT metadata')
    parser.add_argument('file', type=argparse.FileType('r'))
    args = parser.parse_args()

    json_file_count = 0
    image_ipfs = 'https://ipfs.io/ipfs/QmQpVSAaggX9Cy1vFygjrtjq46DGFEivU8oY3G4Ci3H8q4'

    for line in args.file.readlines():
        splits = line.split('_')
        serial_number_3 = int(splits[0])
        serial_number_2 = int(splits[1])
        serial_number_1 = int(splits[2].split('.')[0])
        m = Metadata(serial_number_1,serial_number_2, serial_number_3, image_ipfs,json_file_count)
        m.generate_json()
        json_file_count += 1

