import property_dicts
import math


class Property:
    property_dict_ = None

    def __init__(self, property_dict):
        self.property_dict_ = property_dict

    def get_trait(self, serial_number):
        trait_index = (
            serial_number
            & (self.property_dict_["bitmask"] << self.property_dict_["shift"])
        ) >> self.property_dict_["shift"]
        if trait_index == 0:
            return "None"
        trait_index = math.log(trait_index) / math.log(2)
        return self.property_dict_["property"][int(trait_index)]

    def get_property_group(self):
        return self.property_dict_["property_group"]
    
    def get_property_number(self):
        return self.property_dict_["number"]


if __name__ == "__main__":
    p = Property(property_dicts.LOSS_OF_SIGNAL)
    print(p.get_trait(71469330866450))
    p = Property(property_dicts.WEATHER)
    print(p.get_trait(71469330866450))
