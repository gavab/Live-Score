import http.client

conn=http.client.HTTPSConnection("v3.football.api-sports.io")

headers={
    'x-rapidapi-host': "v3.football.api-sports.io",
    'x-apisports-key': "e867d6bae65940063bb5037d1cd95063"
}

conn.request("GET","/fixtures",headers=headers)

res=conn.getresponse()
data=res.read()

print(data.decode("utf-8"))