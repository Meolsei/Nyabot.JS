import discord
from discord.ext import commands
from cogs import EXTENSIONS
import os
from dotenv import load_dotenv
load_dotenv()

intents = discord.Intents.default()
client = discord.Client(intents = intents)

@client.event
async def on_ready():
    print(f'Ready!\nThe bot is up and running; {client.user.name}')

    for extension in EXTENSIONS:
        await client.load_extension(extension)
        print(f"{extension} loaded.")

client.run(os.getenv("TOKEN"))