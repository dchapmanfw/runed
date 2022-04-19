import csv

wait_list_ = list()
number_to_mint_ = 1

with open('LGBTQ2IA Community BuIlding PREMINT List - LGBTQ2IA Community BuIlding PREMINT List.csv', newline='') as csvfile:
     spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
     for row in spamreader:
        wait_list_.append(row[0])

count = 0
with open(f"wait_list_array.txt", "w") as f:
  f.write('let wait_list = [')
  for id in wait_list_:
    f.write(f'\'{id.split(",")[0]}\',')
    count += 1
  f.write('];')

with open(f"mint_count_array.txt", "w") as f:
  f.write('let mint_count = [')
  for x in range(count):
    f.write(f'{number_to_mint_},')
  f.write('];')

print(f'added {count} addressses')

