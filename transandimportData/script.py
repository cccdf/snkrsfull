# -- coding: utf-8 --
import json
import twint
import pymongo
import datetime

today = datetime.date.today()
day = today - datetime.timedelta(days=1)
print(day)
c = twint.Config()
c.Username = "SneakerNews"
c.Since = str(day)
c.Output = "sneakernew.json"

twint.run.Search(c)

with open("sneaker.json", 'r') as f:
    news = json.loads(f.read())

newsjson = json.dumps(news, indent=4, separators=(',', ':'))
ff = open("perfectData.json", 'w')
ff.write(newsjson)
ff.close()


client = pymongo.MongoClient("mongodb+srv://root:jmvjII4YHyVpFzZa@cluster0-tkywk.mongodb.net/test?retryWrites=true&w=majority")
db = client.root
collection = db.news
with open('perfectData.json') as f:
    file_data = json.load(f)
    # file_data = json.dumps(data)
print(type(file_data))
collection.insert_many(file_data)  
client.close()


# newList = []

# with open("sneaker.json", 'r') as f:
#     news = json.loads(f.read())
#     for new in news:
#         # tmp.append(new['date'])
#         tmp = new['date'] + ' ' +  new['time']
#         # tmp.append(new['time'])
#         # tmp.append(new['tweet']) 
#         # tmp.append(new['photos'])
#         newList.append(tmp)

#     json_str = json.dumps(newList,ensure_ascii=False)
#     print(json_str)
#     ff = open("perfectData.json", 'w')
#     ff.write(json_str)
#     ff.close()