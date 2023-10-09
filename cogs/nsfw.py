import discord
from discord.ext import commands

class nsfw(commands.Cog):
    def __init__(self, bot: commands.Bot) -> None:
        self.bot = bot

    @commands.command()
    async def ping(self, ctx):
        await ctx.send(f"Bot ping is {round(self.bot.latency * 1000)}ms.")

async def setup(bot):
    await bot.add_cog(nsfw(bot))