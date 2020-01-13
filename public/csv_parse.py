import requests
import pandas as pd

def helper_function(temp_tweet):
  return requests.post("https://language.googleapis.com/v1/documents:analyzeSentiment?key=<API KEY HIDDEN>",
                            json = {"document":{"type":"PLAIN_TEXT","content": temp_tweet},"encodingType": "UTF8"})

def parse_df(data, num):
    i = 0
    sentiment_list = []

    data['score'] = 0
    data.drop(['conversation_id', 'created_at', 'timezone', 'near', 'geo', 'source', 'user_rt_id', 'user_rt', 'retweet_id'], axis = 1, inplace = True)

    while i < data.id.count():
        try:
            response = helper_function(data.tweet[i])
            obj = response.json()
            sentiment = float(obj['documentSentiment']['score'])

            data.loc[i, 'score'] = sentiment

            sentiment_list.append(sentiment)
            print(len(sentiment_list))
        except:
            data.loc[i, 'score'] = 0

        i += 1

    data.to_csv('C:\\side_code\\cuHacking\\sentiments\\analysis{}.csv'.format(num), index = False)

    print(sentiment_list)

for i in range(12):
    print(i, "th turn")
    df = pd.read_excel("C:\\side_code\\cuHacking\\RBC_Data_By_YEAR.xlsx", i)
    parse_df(df, i)
