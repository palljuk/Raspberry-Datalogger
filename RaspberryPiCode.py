from sense_hat import SenseHat
from datetime import datetime
import requests
import json
import sys

sense = SenseHat()

def get_sense_data():
    sense_data = []
    sense_data.append('{"temperature":'+str(sense.get_temperature())+',')
    sense_data.append('"pressure:"'+str(sense.get_pressure())+',')
    sense_data.append('"humidity:"'+str(sense.get_humidity())+'}')
      

    return sense_data
    

jsonPayload = json.dumps({"temperature":sense.get_temperature()-10,"pressure":sense.get_pressure(),"humidity":sense.get_humidity()},sort_keys=True)
print("Payload: "+jsonPayload)
headers = {'Content-Type': 'application/json'}

res = requests.post('YOUR Raspberry Pi IP ADDRESS HERE', data=jsonPayload, headers=headers)

sys.exit()