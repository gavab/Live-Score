import http.client

conn=http.client.HTTPSConnection("v3.football.api-sports.io")

headers={
    'x-rapidapi-host': "v3.football.api-sports.io",
    'x-apisports-key': ""
}

conn.request("GET","/leagues",headers=headers)

res=conn.getresponse()
data=res.read()

print(data.decode("utf-8"))