import requests
import pprint
import json
import pandas as pd
import csv
from pandas import DataFrame



def helper_function(temp_tweet):
  return requests.post("https://language.googleapis.com/v1/documents:analyzeEntitySentiment?key=AIzaSyDYMU95w5n-nUujbjLq8JGD4iaO17lg9AU",
                            json = {"document":{"type":"PLAIN_TEXT","content": temp_tweet},"encodingType": "UTF8"})

data = pd.read_csv('analysis0.csv')

print(data)

data['score'] = 0

scores = []

for i in range (25):
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

df = DataFrame(scores, columns= ['Sentiment'])
export_csv = df.to_csv ('sentiment2020_dataframe.csv', index = None, header=True) 
'''
        data.loc[i,'score'] = str(obj['documentSentiment']['score'])
        print(str(obj['documentSentiment']['score']))
    i+=1

new_column = pd.DataFrame({'score': data['score']})
data.merge(new_column, left_index = True, right_index = True)
data.to_csv('analysis5.csv', index = False)

print(data)
'''