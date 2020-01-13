import requests
import pprint
import json
import pandas as pd
import csv
from pandas import DataFrame

def helper_function(temp_tweet):
  return requests.post("https://language.googleapis.com/v1/documents:analyzeEntitySentiment?key=AIzaSyDvAU0oJbWm763SOJaTkmhneFY7hhoFP5I",
                            json = {"document":{"type":"PLAIN_TEXT","content": temp_tweet},"encodingType": "UTF8"})

data = pd.read_csv('analysis9.csv')

data['score'] = 0

scores = []

for i in range (200):
    response = helper_function(data.tweet[i])
    obj = response.json()
    pp = pprint.PrettyPrinter(indent=4)
    try:
        
        for g in range(len(obj['entities'])):
            if (obj['entities'][g]['sentiment']['score']) <= -0.5:
                print(obj['entities'][g]['name'])
                print(obj['entities'][g]['sentiment']['score'])
                scores.append(str(obj['entities'][g]['name']))
            
    except:
        i+=1

dic = {}
for row in scores:
    if str(row) in dic:
        dic[str(row)] += 1
    else:
        dic[str(row)] = 1

d = {'Entity':['Bank'], 'Occurences':[1]}
df = pd.DataFrame(d)
print(df)
for key, value in dic.items():
    print(key)
    print(value)
    toAdd = {'Entity': key, 'Occurences': value}
    df = df.append(toAdd, ignore_index=True)
export_csv = df.to_csv ('sentiment2013_dataframe.csv', index = None, header=True) 