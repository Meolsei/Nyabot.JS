import discord
from discord.ext import commands
import os
from dotenv import load_dotenv
load_dotenv()



intents = discord.Intents.default()

client = discord.Client(intents = intents)

@client.event
async def on_ready():
    print(f'Ready!\nThe bot is up and running; {client.user}')

client.run(os.getenv("TOKEN"))