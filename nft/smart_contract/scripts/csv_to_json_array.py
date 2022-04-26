import csv
from curate_waitlist import Waitlist_Entry
from curate_waitlist import WaitlistManager
file_name_list = list()
file_name_list.append("Robotos X The Run Ed Collection PREMINT List.csv")
file_name_list.append("TOKYO PUNKS X The Run Ed Collection PREMINT List.csv")

# file_name_list = (
#   "Cool Cats X The Run Ed Collection PREMINT List.csv",
#   "Cryptoon Goonz X The Run Ed Collection PREMINT List.csv",
#   "Robotos X The Run Ed Collection PREMINT List.csv",
#   "TOKYO PUNKS X The Run Ed Collection PREMINT List.csv",
#   "Deadfellaz X The Run Ed Collection PREMINT List.csv",
#   "DourDarcels X The Run Ed Collection PREMINT List (1).csv",
#   "DourDarcels X The Run Ed Collection PREMINT List.csv",
#   "Letters  X The Run Ed Collection PREMINT List (1).csv",
#   "Loser Club X The Run Ed Collection PREMINT List.csv",
#   "Lucky Ducky  X The Run Ed Collection PREMINT List (1).csv",
#   "Lucky Ducky  X The Run Ed Collection PREMINT List.csv",
#   "Quantum Art X The Run Ed Collection PREMINT List.csv",
#   "RUN ED the Generative Project PREMINT List.csv",
#   "Smilesss X The Run Ed Collection PREMINT List.csv",
#   "Starcatchers X The Run Ed Collection PREMINT List.csv",
#   "WarpSound X The Run Ed Collection PREMINT List.csv",
#   "World of Women X The Run Ed Collection PREMINT List.csv",
# )

def generate_mintlist(filename):

    wait_list_ = list()
    number_to_mint_ = 1

    FIRST_ROW = True
    dict_keys = list()

    script_dict = {}

    with open(filename, newline="",encoding="utf-8") as csvfile:
        spamreader = csv.reader(csvfile, delimiter=",", quotechar="|")
        for row in spamreader:
            if not FIRST_ROW:
              wait_list_.append(Waitlist_Entry(row[0], row[11], row[2]))
            elif FIRST_ROW:
                FIRST_ROW = False

    # count = 0
    # with open(f"wait_list_array.txt", "w") as f:
    #     f.write("let wait_list = [")
    #     for id in wait_list_:
    #         f.write(f'\'{id.split(",")[0]}\',')
    #         count += 1
    #     f.write("];")

    # with open(f"mint_count_array.txt", "w") as f:
    #     f.write("let mint_count = [")
    #     for x in range(count):
    #         f.write(f"{number_to_mint_},")
    #     f.write("];")
    # print(f"added {count} addressses")
    return wait_list_


if __name__ == "__main__":
    filename = "DourDarcels X The Run Ed Collection PREMINT List.csv"

    for filename in file_name_list:
      print(60*'~')
      print(filename)
      print(30*'-')
      try:
        entry_list = generate_mintlist(filename)    
        manager = WaitlistManager(entry_list, filename)
        manager.reset_lists()
        manager.generate_winner_and_looser_waitlist()
        print(f'winner count :{manager.get_winner_count()}\nlooser count :{manager.get_loser_count()}')
        winner_list = manager.curate_waitlist(True)
        looser_list = manager.curate_waitlist(False)
        print('final counts')
        print(f'winner_list {len(winner_list)}')
        print(f'looser_list {len(looser_list)}')
        
        with open(f"WINNER_{filename.split('.csv')[0]}.txt", "w") as f:
          for element in winner_list:
            f.write(element.wallet_addres_ + '\n')

        with open(f"LOOSER_{filename.split('.csv')[0]}.txt", "w") as f:
          for element in looser_list:
            f.write(element.wallet_addres_ + '\n')
      except:
        print(f'FAILED for {filename}')
        raise
      print(60*'~')