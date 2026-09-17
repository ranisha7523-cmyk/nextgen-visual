
Set SAPI = CreateObject("SAPI.SpVoice")
Set stream = CreateObject("SAPI.SpFileStream")
stream.Open "c:\\Users\\ISHA  RANI\\Downloads\\nextgen website\\public\\nextgen_promo_voiceover.wav", 3, False
Set SAPI.AudioOutputStream = stream
SAPI.Speak "Want to elevate your brand online? Welcome to NextGen Visual! We build modern high converting custom websites, create engaging AI powered promo videos, and edit high impact reels for your business. Visit nextgen visual dot in to calculate your price instantly, or contact us on WhatsApp today!"
stream.Close
