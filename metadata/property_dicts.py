# 1 MetaData Reference
NAME = "Run Ed"
TYPE = "mp4"

DAMN_IT = {
    "property_group": "Damn it",
    "bitmask": 0b11,
    "shift": 0,
    "number": 1,
    "property": (
        "High Fists",
        "Low Fists",
    ),
}
LOSS_OF_SIGNAL = {
    "property_group": "Loss of Signal",
    "bitmask": 0b11111,
    "shift": 2,
    "number": 1,
    "property": (
        "Classic Snow",
        "Linear Rotation",
        "Tshirt Lines",
        "VHS",
        "Vibrant Snow",
    ),
}
SKY = {
    "property_group": "Sky",
    "bitmask": 0b11111,
    "shift": 7,
    "number": 1,
    "property": (
        "Glossy Yellow",
        "Deep Blue",
        "Rose Colored",
        "Purple Haze",
        "Volcanic",
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
    "property_group": "Ed B",
    "bitmask": 0b1111111111,
    "shift": 20,
    "number": 1,
    "property": (
        "Midnight Runner",
        "Anxious Biker",
        "Cheesing Biker",
        "Frantic Runner",
        "Super Ed",
        "Anxious Biker",
        "Cheesing Biker",
        "Frantic Runner",
        "Super Ed",
        "Sunny Runner",
    ),
}
FLAT_DISTANT_OBJ = {
    "property_group": "2D Distant Object",
    "bitmask": 0b1111,
    "shift": 30,
    "number": 1,
    "property": (
        "Bird",
        "Meteor",
        "Plane",
        "UFO",
    ),
}
FLAT_FOREGROUND_OBJ = {
    "property_group": "2D Foreground Object",
    "bitmask": 0b1111,
    "shift": 34,
    "number": 1,
    "property": (
        "Balloon",
        "TRex",
        "Night",
        "Day",
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
    "property": (
        "Retro",
    ),
}