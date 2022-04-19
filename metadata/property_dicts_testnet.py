# 1 MetaData Reference
NAME = "TreeFT"
TYPE = "mp4"


DAMN_IT = {
    "property_group": "Bee",
    "bitmask": 0b11,
    "shift": 0,
    "number": 1,
    "property": (
        "Buzz",
        "Buzzing",
    ),
}
LOSS_OF_SIGNAL = {
    "property_group": "Flower",
    "bitmask": 0b11111,
    "shift": 2,
    "number": 1,
    "property": (
        "Red",
        "Yellow",
        "green",
        "blue",
        "black",
    ),
}
SKY = {
    "property_group": "stem",
    "bitmask": 0b11111,
    "shift": 7,
    "number": 1,
    "property": (
        "red",
        "yellow",
        "green",
        "blue",
        "black",
    ),
}
DISTANT_TOPOLOGY = {
    "property_group": "Distant Topology",
    "bitmask": 0b11111,
    "shift": 12,
    "number": 1,
    "property": (
        "Skyline",
        "Evergreen Forest",
        "Monument Valley",
        "Snowy Mountains",
        "Eruption",
    ),
}
TIME_OF_DAY = {
    "property_group": "Time of Day",
    "bitmask": 0b111,
    "shift": 17,
    "number": 1,
    "property": (
        "Day",
        "Dusk",
        "Night",
    ),
}
ED_B = {
    "property_group": "Bee Bee",
    "bitmask": 0b1111111111,
    "shift": 20,
    "number": 1,
    "property": (
        "Midnight Buzzer",
        "Anxious Bee",
        "Cheesing Buzzer",
        "Frantic bomber",
        "Super Bee",
        "Anxious Buzzer",
        "Cheesing Buzzer",
        "Frantic Bomber",
        "Super Buzz light",
        "Sunny Bee",
    ),
}
FLAT_DISTANT_OBJ = {
    "property_group": "2D Distant Object",
    "bitmask": 0b1111,
    "shift": 30,
    "number": 1,
    "property": (
        "Birb",
        "rock",
        "moose",
        "plane",
    ),
}
FLAT_FOREGROUND_OBJ = {
    "property_group": "2D Foreground Object",
    "bitmask": 0b1111,
    "shift": 34,
    "number": 1,
    "property": (
        "bomba",
        "dino",
        "qbone",
        "moose",
    ),
}
PLANET = {
    "property_group": "Celestial Body",
    "bitmask": 0b11,
    "shift": 38,
    "number": 1,
    "property": (
        "Moon",
        "Sun",
    ),
}
WEATHER = {
    "property_group": "Weather",
    "bitmask": 0b111,
    "shift": 40,
    "number": 1,
    "property": (
        "Rain",
        "Snow",
        "Wind",
    ),
}
MUSIC = {
    "property_group": "Music",
    "bitmask": 0b1111,
    "shift": 43,
    "number": 1,
    "property": (
        "Bounce",
        "Smooth And Deep",
        "Cinematic",
        "Scared",
    ),
}

# 2 Metadata Reference
FOREGROUND_OBJ = {
    "property_group": "Foreground Objects",
    "bitmask": 0b1111,
    "shift": 0,
    "number": 2,
    "property": (
        "Evergreen",
        "Deciduous",
        "City",
        "Signs",
    ),
}
ROAD = {
    "property_group": "Road",
    "bitmask": 0b1111,
    "shift": 4,
    "number": 2,
    "property": (
        "Sand",
        "Red Carpet",
        "Asphalt",
        "Concrete",
    ),
}
GROUND = {
    "property_group": "Ground",
    "bitmask": 0b11111,
    "shift": 8,
    "number": 2,
    "property": (
        "Grass",
        "Snow",
        "Desert",
        "Purple Rock",
        "Football Field",
    ),
}

# 2 Metadata Reference
COLOR = {
    "property_group": "Treatment",
    "bitmask": 0b1,
    "shift": 0,
    "number": 3,
    "property": ("Retro",),
}
