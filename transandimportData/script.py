import json
import twint
import pymongo
import datetime

with open("sneakernew.json", 'w') as f:
    f.truncate()

today = datetime.date.today()
day = today - datetime.timedelta(days=1)
print(day)
c = twint.Config()
c.Username = "SneakerNews"
c.Since = str(day)
c.Store_json = True
c.Output = "sneakernew.json"

twint.run.Search(c)

news = []

with open("sneakernew.json", 'r') as f:
    for line in f:
        news.append(json.loads(line))

for i in news:
    tw = i['tweet']
    print(tw[:-53])
    i['tweet'] = tw[:-53]


newsjson = json.dumps(news, indent=4, separators=(',', ':'))


with open("sneaker.json", 'w', encoding='utf-8') as f:
    f.write(newsjson)


# newsjson = json.dumps(news, indent=4, separators=(',', ':'))
# ff = open("perfectData.json", 'w')
# ff.write(newsjson)
# ff.close()

# newsjson = json.dumps(news, indent=4, separators=(',', ':'))
# print(type(newsjson))
# ff = open("perfectData.json", 'w')
# ff.write(newsjson)
# ff.close()


client = pymongo.MongoClient(
    "mongodb+srv://root:jmvjII4YHyVpFzZa@cluster0-tkywk.mongodb.net/test?retryWrites=true&w=majority")
db = client.root
collection = db.news
with open('sneaker.json') as f:
    file_data = json.load(f)
    # file_data = json.dumps(data)
print(type(file_data))
x = collection.delete_many({})
print(x.deleted_count, "个文档已删除")
y = collection.insert_many(file_data)
print(len(y.inserted_ids), "doucuments inserted")
client.close()
