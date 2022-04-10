import property
from property import Property
import property_dicts
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
    )

    def __init__(self, serial_number,serial_number_two, html="test.gov", token_id="1"):
        self.serial_number_ = serial_number
        self.serial_number_two_ = serial_number_two
        self.html_ = html
        self.token_id_ = token_id

    def generate_json(self):
        attribute_list = list()

        for prop in self.property_list_:
            print(prop.get_property_group())
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
            else:
                raise "Invalid serial number selection in property"
            attribute_list.append(trait_dict)
        json_dict = {
            "name": f"Run Ed #{self.token_id_}",
            "image": f"{self.html_}/{self.token_id_}.mp4",
            "attribute": attribute_list,
        }
        json_object = json.dumps(json_dict, indent=4)
        with open(f'{self.token_id_}_{self.serial_number_two_}_{self.serial_number_}.json', 'w') as f:
            json.dump(json_object, f)


if __name__ == "__main__":
    m = Metadata(71469330866450, 272)
    m.generate_json()
