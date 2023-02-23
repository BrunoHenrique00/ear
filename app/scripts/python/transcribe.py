import whisper

model = whisper.load_model("base")
result = model.transcribe("teste.wav")
print(result["text"])